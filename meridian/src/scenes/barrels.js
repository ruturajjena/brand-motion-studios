import * as THREE from 'three';

const LINE_COLOR = new THREE.Color('#3d9bff');

/**
 * A single oil drum drawn purely as glowing wireframe: stacked hoops down the
 * body, longitudinal ribs, and radial spokes across each end cap. Built by
 * hand rather than via WireframeGeometry so the line pattern stays a clean
 * lat/long cage instead of triangulated diagonals.
 */
function makeDrum({ radius = 1, height = 2.6, hoops = 13, ribs = 40, spokes = 24 }) {
  const pts = [];
  const half = height / 2;

  const ringPoint = (a, y, r = radius) => [Math.cos(a) * r, y, Math.sin(a) * r];

  // Body hoops. The two hoops flanking each third are pushed out slightly to
  // read as the rolled reinforcing bands on a real drum.
  for (let h = 0; h < hoops; h++) {
    const t = h / (hoops - 1);
    const y = -half + t * height;
    const band = Math.abs(t - 0.3) < 0.035 || Math.abs(t - 0.7) < 0.035;
    const r = radius * (band ? 1.045 : 1.0);
    for (let s = 0; s < ribs; s++) {
      const a0 = (s / ribs) * Math.PI * 2;
      const a1 = ((s + 1) / ribs) * Math.PI * 2;
      pts.push(...ringPoint(a0, y, r), ...ringPoint(a1, y, r));
    }
  }

  // Longitudinal ribs.
  for (let s = 0; s < ribs; s++) {
    const a = (s / ribs) * Math.PI * 2;
    pts.push(...ringPoint(a, -half), ...ringPoint(a, half));
  }

  // End-cap spokes and a small inner hoop on each face.
  for (const y of [-half, half]) {
    for (let s = 0; s < spokes; s++) {
      const a = (s / spokes) * Math.PI * 2;
      pts.push(0, y, 0, ...ringPoint(a, y));
    }
    for (let s = 0; s < ribs; s++) {
      const a0 = (s / ribs) * Math.PI * 2;
      const a1 = ((s + 1) / ribs) * Math.PI * 2;
      pts.push(...ringPoint(a0, y, radius * 0.42), ...ringPoint(a1, y, radius * 0.42));
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));

  const mat = new THREE.LineBasicMaterial({
    color: LINE_COLOR,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  return new THREE.LineSegments(geo, mat);
}

/** Soft radial bloom pinned to a drum's end cap, mimicking the core glow. */
function makeCoreGlow() {
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uColor: { value: new THREE.Color('#63c0ff') }, uOpacity: { value: 1 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      uniform vec3 uColor; uniform float uOpacity; varying vec2 vUv;
      void main(){
        float d = length(vUv - 0.5) * 2.0;
        float a = pow(max(1.0 - d, 0.0), 3.2);
        gl_FragColor = vec4(uColor, a * uOpacity);
      }
    `,
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 3.2), mat);
  m.userData.mat = mat;
  return m;
}

export function createBarrels() {
  const group = new THREE.Group();

  // Hand-placed so the cluster reads as a deliberate composition at every
  // scroll position rather than a random scatter. The x-rotations sit near
  // ±PI/2 on purpose: that swings each drum's axis toward the camera so the
  // spoked end cap stays visible, which is what makes them read as cylinders
  // rather than flat grids.
  const layout = [
    { pos: [-10.0, -4.0, 4.0], rot: [1.28, 0.35, 0.62], scale: 2.6, spin: 0.07 },
    { pos: [-3.5, 2.6, -1.0], rot: [-1.05, 0.9, 0.30], scale: 1.8, spin: -0.10 },
    { pos: [4.2, -1.6, -8.0], rot: [1.42, -0.4, 1.05], scale: 1.4, spin: 0.13 },
    { pos: [-9.0, 6.2, -14.0], rot: [0.95, 1.3, -0.45], scale: 1.15, spin: -0.07 },
    { pos: [7.5, 5.0, -20.0], rot: [-1.3, 0.25, 1.35], scale: 0.95, spin: 0.09 },
  ];

  const drums = layout.map((cfg) => {
    const holder = new THREE.Group();
    holder.position.set(...cfg.pos);
    holder.rotation.set(...cfg.rot);
    holder.scale.setScalar(cfg.scale);

    const drum = makeDrum({});
    holder.add(drum);

    const glow = makeCoreGlow();
    glow.position.set(0, -1.3, 0);
    glow.rotation.x = -Math.PI / 2;
    holder.add(glow);

    group.add(holder);
    return { holder, drum, glow, cfg };
  });

  return {
    group,
    setOpacity(v) {
      drums.forEach(({ drum, glow }) => {
        drum.material.opacity = 0.85 * v;
        glow.userData.mat.uniforms.uOpacity.value = v;
      });
    },
    /**
     * @param {number} t   elapsed seconds — idle drift
     * @param {number} p   section scroll progress 0..1 — the actual choreography
     */
    update(t, p) {
      drums.forEach(({ holder, cfg }, i) => {
        // Kept deliberately gentle — a full tumble would swing drums edge-on
        // and lose the cylinder read at some scroll positions.
        holder.rotation.y = cfg.rot[1] + t * cfg.spin * 0.3 + p * Math.PI * 0.55 * (i % 2 ? -1 : 1);
        holder.rotation.x = cfg.rot[0] + Math.sin(t * 0.3 + i) * 0.07 + p * 0.22;
        holder.rotation.z = cfg.rot[2] + Math.sin(t * 0.22 + i * 2.1) * 0.05;
        holder.position.y = cfg.pos[1] + Math.sin(t * 0.5 + i * 1.7) * 0.3 - p * 2.2 * (0.4 + i * 0.15);
        holder.position.z = cfg.pos[2] + p * 7.0 * (0.5 + (i % 3) * 0.3);
      });
      group.position.x = -p * 1.6;
    },
  };
}
