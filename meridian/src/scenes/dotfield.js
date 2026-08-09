import * as THREE from 'three';

/**
 * The perspective dot lattice that carries every dark section. Two planes —
 * floor and ceiling — of additively blended points, with a slow travelling
 * swell so the field never reads as static wallpaper.
 */
export function createDotField({ cols = 130, rows = 130, spacing = 3.4 } = {}) {
  const group = new THREE.Group();

  const build = (flip) => {
    const count = cols * rows;
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);

    let i = 0;
    for (let z = 0; z < rows; z++) {
      for (let x = 0; x < cols; x++) {
        positions[i * 3] = (x - cols / 2) * spacing;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = (z - rows / 2) * spacing;
        seeds[i] = Math.random();
        i++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#7fb4ff') },
        uOpacity: { value: 1 },
        uFlip: { value: flip },
      },
      vertexShader: /* glsl */ `
        attribute float aSeed;
        uniform float uTime;
        uniform float uFlip;
        varying float vFade;
        varying float vTwinkle;

        void main(){
          vec3 p = position;
          // Travelling swell across the lattice.
          float wave = sin(p.x * 0.055 + uTime * 0.45) * cos(p.z * 0.05 - uTime * 0.32);
          p.y += wave * 1.6 * uFlip;

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          float dist = -mv.z;

          // Fade the lattice out at both extremes so it has no visible edge.
          vFade = smoothstep(230.0, 70.0, dist) * smoothstep(1.0, 14.0, dist);
          vTwinkle = 0.6 + 0.4 * sin(uTime * 1.6 + aSeed * 40.0);

          gl_PointSize = (190.0 / max(dist, 1.0)) * (0.7 + aSeed * 0.8);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vFade;
        varying float vTwinkle;

        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.06, d);
          gl_FragColor = vec4(uColor, a * vFade * vTwinkle * uOpacity);
        }
      `,
    });

    const pts = new THREE.Points(geo, mat);
    return { pts, mat };
  };

  const floor = build(1);
  floor.pts.position.y = -18;
  group.add(floor.pts);

  const ceiling = build(-1);
  ceiling.pts.position.y = 26;
  group.add(ceiling.pts);

  return {
    group,
    setOpacity(v) {
      floor.mat.uniforms.uOpacity.value = v;
      ceiling.mat.uniforms.uOpacity.value = v * 0.7;
    },
    update(t) {
      floor.mat.uniforms.uTime.value = t;
      ceiling.mat.uniforms.uTime.value = t * 0.8;
    },
  };
}
