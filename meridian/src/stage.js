import * as THREE from 'three';
import { createTerrain } from './scenes/terrain.js';
import { createDotField } from './scenes/dotfield.js';
import { createBarrels } from './scenes/barrels.js';
import { createBeams } from './scenes/beams.js';

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
};

/**
 * One WebGL surface, one camera, four swappable scene groups. Everything is a
 * function of the `progress` values the scroll controller writes each frame,
 * plus a little idle drift, so the visuals stay locked to the scrollbar.
 */
export function createStage(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: window.devicePixelRatio < 2,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(0x050a16, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 900);

  const terrain = createTerrain();
  const dots = createDotField();
  const barrels = createBarrels();
  const beams = createBeams();

  scene.add(terrain.group, dots.group, barrels.group, beams.group);

  const vis = { terrain: 1, dots: 0, barrels: 0, beams: 0 };
  const target = { terrain: 1, dots: 0, barrels: 0, beams: 0 };

  const progress = { hero: 0, statement: 0, oil: 0, metals: 0 };
  let section = 'hero';

  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener('pointermove', (e) => {
    pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    // Cap DPR: the terrain shader is fragment-heavy and 3x retina buys nothing.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  // Scratch vectors — allocating inside the frame loop would churn the GC.
  const wantPos = new THREE.Vector3(0, 30, 150);
  const wantLook = new THREE.Vector3(0, 6, -120);
  const lookAt = new THREE.Vector3(0, 6, -120);
  camera.position.copy(wantPos);

  /** Where the camera wants to be for the section currently on screen. */
  function aimCamera() {
    const px = pointer.x;
    const py = pointer.y;

    if (section === 'hero') {
      const p = progress.hero;
      // Fly in over the range and drop toward the ridgeline as the hero exits.
      wantPos.set(px * 3.0, lerp(24, 2, p) + py * -1.6, lerp(140, 34, p));
      wantLook.set(0, lerp(2, 14, p), -140);
      terrain.uniforms.uAmp.value = lerp(40, 44, p);
      return;
    }

    if (section === 'oil') {
      const p = progress.oil;
      wantPos.set(px * 2.2 + 1.2, py * -1.8 + lerp(1.6, -1.4, p), lerp(30, 21, p));
      wantLook.set(-0.8, 0, 0);
      return;
    }

    if (section === 'metals') {
      const p = progress.metals;
      wantPos.set(px * 1.8, py * -1.4 + lerp(1.0, -0.6, p), 28);
      wantLook.set(0, 0, -60);
      return;
    }

    // Statement + closing: a calm, slowly settling view of the lattice.
    const p = section === 'statement' ? progress.statement : 1;
    wantPos.set(px * 2.2, py * -1.8 + lerp(2.0, 0.0, p), lerp(34, 26, p));
    wantLook.set(0, 0, 0);
  }

  const clock = new THREE.Clock();
  let last = 0;

  function frame() {
    const t = clock.getElapsedTime();
    const dt = Math.min(Math.max(t - last, 0.001), 0.1);
    last = t;
    const k = 1 - Math.pow(0.001, dt); // frame-rate independent smoothing base

    pointer.x = lerp(pointer.x, pointer.tx, k * 0.35);
    pointer.y = lerp(pointer.y, pointer.ty, k * 0.35);

    // ── scene weights ────────────────────────────────────────────
    // The terrain hands over to the dot lattice purely as a function of hero
    // scroll, so the transition is scrubbable in both directions.
    target.terrain = 1 - smoothstep(0.25, 0.85, progress.hero);
    target.dots = Math.max(smoothstep(0.35, 0.9, progress.hero), section === 'hero' ? 0 : 1);
    target.barrels = section === 'oil' ? 1 : 0;
    target.beams = section === 'metals' ? 1 : 0;

    for (const key of Object.keys(vis)) {
      vis[key] = lerp(vis[key], target[key], k * 2.4);
    }

    terrain.group.visible = vis.terrain > 0.004;
    dots.group.visible = vis.dots > 0.004;
    barrels.group.visible = vis.barrels > 0.004;
    beams.group.visible = vis.beams > 0.004;

    terrain.setOpacity(vis.terrain);
    terrain.update(t);
    dots.update(t);
    dots.setOpacity(vis.dots);
    barrels.update(t, progress.oil);
    barrels.setOpacity(vis.barrels);
    beams.update(t, progress.metals);
    beams.setOpacity(vis.beams);

    aimCamera();
    camera.position.lerp(wantPos, k * 1.8);
    lookAt.lerp(wantLook, k * 1.8);
    camera.lookAt(lookAt);

    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  return {
    progress,
    setSection(name) { section = name; },
  };
}
