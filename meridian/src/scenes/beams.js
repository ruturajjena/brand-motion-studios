import * as THREE from 'three';

const LINE_COLOR = new THREE.Color('#2f8fff');

/**
 * I-beam cross-section as a closed polyline. Built explicitly rather than via
 * Shape/ExtrudeGeometry + EdgesGeometry: the extruded route triangulates the
 * caps and the resulting edge set is unpredictable, whereas emitting the
 * profile by hand guarantees a clean, evenly ribbed wireframe.
 */
function iBeamProfile(w = 2.6, h = 4.2, flange = 0.55, web = 0.62) {
  const hw = w / 2;
  const hh = h / 2;
  const hb = web / 2;
  return [
    [-hw, -hh], [hw, -hh],
    [hw, -hh + flange], [hb, -hh + flange],
    [hb, hh - flange], [hw, hh - flange],
    [hw, hh], [-hw, hh],
    [-hw, hh - flange], [-hb, hh - flange],
    [-hb, -hh + flange], [-hw, -hh + flange],
  ];
}

/**
 * Structural steel corridor for the METALS section: long girders drawn as
 * ribbed wireframe, rushing past the camera as the section scrubs. The
 * regularly spaced profile rings are what let the eye read the speed.
 */
function makeGirder(length, ribs = 6) {
  const profile = iBeamProfile();
  const n = profile.length;
  const pts = [];

  // Profile rings along the span.
  for (let r = 0; r <= ribs; r++) {
    const z = (r / ribs) * length;
    for (let i = 0; i < n; i++) {
      const a = profile[i];
      const b = profile[(i + 1) % n];
      pts.push(a[0], a[1], z, b[0], b[1], z);
    }
  }

  // Longitudinal stringers joining every profile corner end to end.
  for (let i = 0; i < n; i++) {
    const a = profile[i];
    pts.push(a[0], a[1], 0, a[0], a[1], length);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));

  const mat = new THREE.LineBasicMaterial({
    color: LINE_COLOR,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  return new THREE.LineSegments(geo, mat);
}

export function createBeams() {
  const group = new THREE.Group();

  // Girders are yawed 20–30° off the view axis. Dead-on alignment collapses a
  // girder into its end profile — a small "I" glyph — so the yaw is what makes
  // the length visible as a long bar raking across the frame while still
  // receding to a shared vanishing point.
  //
  // Starts are staggered deep down the z-axis so that as near girders fly past
  // the camera there are always fresh ones arriving — no recycling, which
  // would pop a 200-unit-long object in and out of view.
  // Travel is deliberately shorter than the depth spread: the corridor has to
  // stay populated at every scroll position, so girders drift forward roughly
  // one slot rather than sweeping past the camera all at once.
  // Lengths are kept near 12:1 against the section depth. A realistic 80:1
  // girder is visually a hairline at any distance; this ratio keeps the I
  // profile legible while still reading as a long span.
  const layout = [
    { pos: [-26.0, -14.0, -25], rot: [0.10, 0.42, 0.35], scale: 2.4, len: 40 },
    { pos: [10.0, -20.0, -60], rot: [-0.09, -0.36, 1.15], scale: 2.6, len: 45 },
    { pos: [-20.0, 12.0, -95], rot: [0.12, 0.48, -0.45], scale: 2.2, len: 42 },
    { pos: [24.0, 6.0, -135], rot: [-0.10, -0.40, 0.85], scale: 2.5, len: 48 },
    { pos: [-9.0, 22.0, -175], rot: [0.08, 0.33, 0.15], scale: 2.1, len: 45 },
    { pos: [16.0, -9.0, -220], rot: [-0.06, -0.30, 1.35], scale: 2.3, len: 50 },
    { pos: [-24.0, -4.0, -265], rot: [0.07, 0.38, -0.20], scale: 2.4, len: 52 },
  ];

  const girders = layout.map((cfg) => {
    const holder = new THREE.Group();
    holder.position.set(...cfg.pos);
    holder.rotation.set(...cfg.rot);
    holder.scale.setScalar(cfg.scale);
    const g = makeGirder(cfg.len);
    holder.add(g);
    group.add(holder);
    return { holder, mesh: g, cfg };
  });

  return {
    group,
    setOpacity(v) {
      girders.forEach(({ mesh }) => {
        mesh.material.opacity = 0.95 * v;
      });
    },
    update(t, p) {
      girders.forEach(({ holder, cfg }, i) => {
        // Push the whole corridor toward the camera as the section scrubs, so
        // scrolling feels like flying down the length of the steel.
        holder.position.z = cfg.pos[2] + p * (90 + i * 6);
        holder.position.y = cfg.pos[1] + Math.sin(t * 0.35 + i * 1.3) * 0.5;
        holder.rotation.z = cfg.rot[2] + p * 0.4 * (i % 2 ? -1 : 1);
        holder.rotation.y = cfg.rot[1] + Math.sin(t * 0.2 + i) * 0.03;
      });
      group.rotation.z = p * 0.1;
    },
  };
}
