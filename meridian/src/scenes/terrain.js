import * as THREE from 'three';
import { NOISE_GLSL } from '../noise.glsl.js';

/**
 * Hero mountain range. A single high-density plane displaced in the vertex
 * shader by ridged fBm, lit analytically so the upper ridgelines catch a warm
 * rim while everything below drowns in cobalt haze.
 */
export function createTerrain() {
  const group = new THREE.Group();

  const uniforms = {
    uTime: { value: 0 },
    uOpacity: { value: 1 },
    uAmp: { value: 30.0 },
    uFogColor: { value: new THREE.Color('#050a16') },
    uDeep: { value: new THREE.Color('#071c46') },
    uMid: { value: new THREE.Color('#1a5cb4') },
    uRock: { value: new THREE.Color('#0a1428') },
    uPeak: { value: new THREE.Color('#f2c8a0') },
  };

  const vertex = /* glsl */ `
    ${NOISE_GLSL}

    uniform float uTime;
    uniform float uAmp;

    varying float vHeight;
    varying vec3 vNormalW;
    varying vec3 vWorld;

    float terrainHeight(vec2 p){
      // Two overlaid ridged fields: a coarse one carving the primary massif and
      // a finer, faster one adding the scree detail that reads at close range.
      // The base frequency is deliberately low — higher values shatter the
      // range into a field of identical spikes instead of a few big massifs.
      float h = ridged(p * 0.0125, 5);
      h += ridged(p * 0.05 + 41.3, 3) * 0.20;
      // Flatten the far foreground into a valley floor so the peaks read as
      // a distinct range rather than a uniform field of noise.
      float valley = smoothstep(0.0, 55.0, abs(p.y + 40.0));
      return h * uAmp * mix(0.18, 1.0, valley);
    }

    void main(){
      vec3 pos = position;
      vec2 p = vec2(pos.x, pos.y);

      float h = terrainHeight(p);
      pos.z = h;

      // Central differences give us normals without a second geometry pass.
      float e = 1.2;
      float hx = terrainHeight(p + vec2(e, 0.0));
      float hy = terrainHeight(p + vec2(0.0, e));
      vec3 tanX = normalize(vec3(e, 0.0, hx - h));
      vec3 tanY = normalize(vec3(0.0, e, hy - h));
      vec3 n = normalize(cross(tanX, tanY));

      vHeight = h;
      vec4 world = modelMatrix * vec4(pos, 1.0);
      vWorld = world.xyz;
      vNormalW = normalize(mat3(modelMatrix) * n);

      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `;

  const fragment = /* glsl */ `
    uniform vec3 uFogColor;
    uniform vec3 uDeep;
    uniform vec3 uMid;
    uniform vec3 uRock;
    uniform vec3 uPeak;
    uniform float uAmp;
    uniform float uOpacity;

    varying float vHeight;
    varying vec3 vNormalW;
    varying vec3 vWorld;

    void main(){
      vec3 n = normalize(vNormalW);

      // Low sun raking in from the upper right — the only warm light in the scene.
      vec3 sunDir = normalize(vec3(0.55, 0.30, 0.78));
      float sun = max(dot(n, sunDir), 0.0);

      // Sky fill from straight above, tinted the same blue as the atmosphere.
      float sky = max(dot(n, vec3(0.0, 1.0, 0.0)), 0.0);

      float alt = clamp(vHeight / (uAmp * 0.72), 0.0, 1.0);

      vec3 col = mix(uDeep, uRock, smoothstep(0.02, 0.4, alt));
      col = mix(col, uMid * 0.55, sky * 0.5);

      // Warm light is rationed hard: only the highest, most sun-facing faces
      // get it, which is what keeps the range reading blue overall.
      float rim = smoothstep(0.62, 0.99, alt) * smoothstep(0.42, 0.92, sun);
      col = mix(col, uPeak, rim * 0.82);

      // A cold blue bounce keeps the shadow sides from going flat black.
      col += uMid * pow(1.0 - sun, 2.0) * 0.20;

      // Exponential-squared depth haze dissolves the far ranges into the sky.
      float dist = length(vWorld - cameraPosition);
      float fogAmt = 1.0 - exp(-pow(dist * 0.0088, 2.0));
      // Valleys hold more mist than ridges.
      fogAmt = clamp(fogAmt + (1.0 - alt) * 0.26, 0.0, 1.0);
      vec3 haze = mix(uFogColor, uMid * 0.62, 0.6);
      col = mix(col, haze, fogAmt);

      gl_FragColor = vec4(col, uOpacity);
    }
  `;

  const geo = new THREE.PlaneGeometry(700, 520, 300, 230);
  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = -14;
  group.add(mesh);

  // Glow band sitting just above the horizon, behind the peaks.
  const glowGeo = new THREE.PlaneGeometry(900, 320);
  const glowMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uColor: { value: new THREE.Color('#2f7fd8') },
      uOpacity: { value: 1 },
    },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      uniform vec3 uColor; uniform float uOpacity; varying vec2 vUv;
      void main(){
        float v = smoothstep(0.0, 0.55, vUv.y) * (1.0 - smoothstep(0.35, 1.0, vUv.y));
        float h = smoothstep(0.0, 0.3, vUv.x) * (1.0 - smoothstep(0.7, 1.0, vUv.x));
        gl_FragColor = vec4(uColor, v * h * 0.8 * uOpacity);
      }
    `,
  });
  const glow = new THREE.Mesh(glowGeo, glowMat);
  glow.position.set(0, 30, -240);
  group.add(glow);

  return {
    group,
    uniforms,
    setOpacity(v) {
      uniforms.uOpacity.value = v;
      glowMat.uniforms.uOpacity.value = v;
    },
    update(t) {
      uniforms.uTime.value = t;
    },
  };
}
