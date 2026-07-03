/* ============================================================
   Brand Motion Studios — particles.js
   Ambient cosmic background tuned to the gold/silver identity:
   a drifting starfield across the whole page plus a slowly
   spinning particle orb behind the hero that fades on scroll.
   Self-contained, canvas-based, and respects reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  var canvas = document.getElementById('fx');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* brand palette: bright gold, gold, warm bronze, silver, white */
  var PALETTE = [
    [240, 212, 136],
    [212, 175, 55],
    [184, 137, 59],
    [205, 209, 216],
    [247, 245, 238]
  ];

  var TAU = Math.PI * 2;
  var GA = Math.PI * (3 - Math.sqrt(5)); // golden angle
  function fract(x) { return x - Math.floor(x); }
  function clamp01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function smooth(x) { x = clamp01(x); return x * x * (3 - 2 * x); }

  /* pre-baked radial glow sprite per color → cheap additive blending */
  function makeSprite(rgb) {
    var s = document.createElement('canvas');
    s.width = s.height = 64;
    var g = s.getContext('2d');
    var grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,0.95)');
    grad.addColorStop(0.22, 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',0.85)');
    grad.addColorStop(0.55, 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',0.20)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    return s;
  }
  var sprites = PALETTE.map(makeSprite);

  var w = 0, h = 0, dpr = 1, raf = 0;
  var orb = [], stars = [];
  var T0 = performance.now(), lastNow = T0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var N = (w < 768 ? 900 : 1600) * (reduced ? 0.6 : 1) | 0;
    orb = [];
    for (var i = 0; i < N; i++) {
      var u = (i + 0.5) / N;
      var rnd = fract(Math.sin(i * 127.1 + 311.7) * 43758.5453);
      var rnd2 = fract(Math.sin(i * 269.5 + 183.3) * 28001.8384);
      // color leans gold at the core, silver/white toward the rim (via u)
      var c = u < 0.55 ? (rnd2 < 0.7 ? (rnd2 < 0.3 ? 0 : 1) : 2) : (rnd2 < 0.6 ? 3 : 4);
      orb.push({ i: i, u: u, rnd: rnd, rnd2: rnd2, c: c, size: 0.8 + rnd * 1.7 });
    }

    var SN = w < 768 ? 120 : 220;
    stars = [];
    for (var s = 0; s < SN; s++) {
      stars.push({
        x: Math.random() * w, y: Math.random() * h,
        r: 0.4 + Math.random() * 1.0,
        p: Math.random() * TAU,
        f: 0.3 + Math.random() * 1.1,
        c: Math.random() < 0.5 ? 4 : (Math.random() < 0.6 ? 0 : 3)
      });
    }
  }

  function frame(now) {
    var T = ((now - T0) / 1000) * (reduced ? 0.25 : 1);
    var dt = Math.min(0.25, Math.max(0.001, (now - lastNow) / 1000));
    lastNow = now;

    ctx.clearRect(0, 0, w, h);

    /* orb fades out as the hero scrolls away */
    var fade = clamp01(1 - window.scrollY / (h * 0.85));

    /* faint warm nebula wash */
    var neb = ctx.createRadialGradient(w * 0.5, h * 0.42, 0, w * 0.5, h * 0.42, Math.max(w, h) * 0.55);
    neb.addColorStop(0, 'rgba(212,175,55,' + (0.05 * fade + 0.015) + ')');
    neb.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = neb;
    ctx.fillRect(0, 0, w, h);

    /* drifting, twinkling starfield across the whole page */
    ctx.globalCompositeOperation = 'lighter';
    for (var s = 0; s < stars.length; s++) {
      var st = stars[s];
      st.x += 0.5 * st.f * dt;
      if (st.x > w + 2) st.x = -2;
      var tw = 0.25 + 0.75 * Math.pow(Math.sin(T * st.f + st.p), 2);
      var d = st.r * 2.4;
      ctx.globalAlpha = tw * 0.55;
      ctx.drawImage(sprites[st.c], st.x - d, st.y - d, d * 2, d * 2);
    }

    /* the hero particle orb — a slowly spinning fibonacci sphere */
    if (fade > 0.01) {
      var cx = w / 2;
      var cy = h * (w < 768 ? 0.46 : 0.44);
      var S = Math.min(w, h) * (w < 768 ? 0.42 : 0.36);
      var rotY = T * 0.18;
      var cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      var tilt = -0.14, cosX = Math.cos(tilt), sinX = Math.sin(tilt);
      var persF = 3.4;

      for (var i = 0; i < orb.length; i++) {
        var p = orb[i];
        var th = Math.acos(1 - 2 * p.u);
        var ph = p.i * GA + T * 0.22;
        var wob = 1 + 0.06 * Math.sin(th * 5 + T * 1.2 + p.rnd * TAU);
        var stth = Math.sin(th);
        var x = wob * stth * Math.cos(ph);
        var y = wob * Math.cos(th) * 1.02;
        var z = wob * stth * Math.sin(ph);

        var x1 = x * cosY - z * sinY;
        var z1 = x * sinY + z * cosY;
        var y1 = y * cosX - z1 * sinX;
        var z2 = y * sinX + z1 * cosX;

        var per = persF / (persF + z2);
        if (per <= 0) continue;
        var sx = cx + x1 * S * per;
        var sy = cy + y1 * S * per;
        var dd = p.size * per * 2.2;
        ctx.globalAlpha = clamp01(0.7 * per - 0.12) * (0.7 + 0.3 * Math.sin(T * 2 + p.i)) * fade;
        ctx.drawImage(sprites[p.c], sx - dd * 2, sy - dd * 2, dd * 4, dd * 4);
      }

      /* luminous gold core behind the orb */
      var core = ctx.createRadialGradient(cx, cy, 0, cx, cy, S * 0.6);
      core.addColorStop(0, 'rgba(240,212,136,0.35)');
      core.addColorStop(0.5, 'rgba(212,175,55,0.10)');
      core.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.globalAlpha = fade * 0.7;
      ctx.fillStyle = core;
      ctx.fillRect(cx - S, cy - S, S * 2, S * 2);
    }

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    raf = requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  raf = requestAnimationFrame(frame);
})();
