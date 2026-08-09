import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { createStage } from './stage.js';
import { OIL_PRODUCTS, METAL_PRODUCTS } from './content.js';

gsap.registerPlugin(ScrollTrigger);

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
};
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── logo mark ──────────────────────────────────────────────────
   A diamond lattice of dots — dense and bright at the core, thinning
   toward the points. Drawn from code so both nav and footer marks stay
   identical without shipping an asset. */
function paintMark(svgGroup) {
  const rows = 9;
  const step = 12;
  const cx = 60;
  const cy = 60;
  let out = '';
  let maxD = 0;
  const cells = [];

  for (let r = 0; r < rows; r++) {
    const half = (rows - 1) / 2 - Math.abs(r - (rows - 1) / 2);
    for (let c = -half; c <= half; c++) {
      const x = cx + c * step;
      const y = cy + (r - (rows - 1) / 2) * step;
      const d = Math.hypot(x - cx, y - cy);
      maxD = Math.max(maxD, d);
      cells.push({ x, y, d });
    }
  }

  for (const { x, y, d } of cells) {
    const rad = (1.15 + (1 - d / maxD) * 1.85).toFixed(2);
    const op = (0.42 + (1 - d / maxD) * 0.58).toFixed(2);
    out += `<circle cx="${x}" cy="${y}" r="${rad}" opacity="${op}"/>`;
  }
  svgGroup.innerHTML = out;
}
document.querySelectorAll('.mark-dots').forEach(paintMark);

/* ── text splitting ─────────────────────────────────────────────
   Words wrap as units, characters animate individually. Spaces stay
   outside .char so the line can still break naturally. */
function splitText(el) {
  const source = el.textContent.trim();
  const words = source.split(/\s+/);
  el.textContent = '';
  const chars = [];

  words.forEach((word, wi) => {
    const w = document.createElement('span');
    w.className = 'word';
    for (const ch of word) {
      const c = document.createElement('span');
      c.className = 'char';
      c.textContent = ch;
      w.appendChild(c);
      chars.push(c);
    }
    el.appendChild(w);
    if (wi < words.length - 1) el.appendChild(document.createTextNode(' '));
  });

  el.setAttribute('aria-label', source);
  return chars;
}

document.querySelectorAll('[data-split]').forEach((el) => {
  el._chars = splitText(el);
});

/* ── product panels ─────────────────────────────────────────────*/
function buildPanels(stackId, products) {
  const stack = document.getElementById(stackId);
  const panels = products.map((p, i) => {
    const el = document.createElement('article');
    el.className = 'product-panel';
    el.innerHTML = `
      <span class="panel-index">${String(i + 1).padStart(2, '0')} / ${String(products.length).padStart(2, '0')}</span>
      <h3></h3>
      <p></p>`;
    el.querySelector('h3').textContent = p.name;
    el.querySelector('p').textContent = p.body;
    stack.appendChild(el);
    return el;
  });
  return panels;
}

function buildTicks(id, count) {
  const rail = document.getElementById(id);
  const ticks = [];
  for (let i = 0; i < count; i++) {
    const t = document.createElement('span');
    t.className = 'tick';
    rail.appendChild(t);
    ticks.push(t);
  }
  return ticks;
}

const oilPanels = buildPanels('oil-stack', OIL_PRODUCTS);
const metalPanels = buildPanels('metals-stack', METAL_PRODUCTS);
const oilTicks = buildTicks('oil-progress', OIL_PRODUCTS.length);
const metalTicks = buildTicks('metals-progress', METAL_PRODUCTS.length);

/* Section heights scale with the number of products so every product gets a
   comparable amount of scroll travel. */
function sizeProductSection(sectionId, count) {
  const el = document.getElementById(sectionId);
  el.style.height = `${100 + count * 85}vh`;
}
sizeProductSection('oil', OIL_PRODUCTS.length);
sizeProductSection('metals', METAL_PRODUCTS.length);

/**
 * Crossfades a stack of panels as a function of raw section progress.
 * The lead-in reserves the first slice of the section for the title so the
 * heading has settled before the first product arrives.
 */
function drivePanels(panels, ticks, progress, leadIn = 0.16) {
  const n = panels.length;
  const p = clamp((progress - leadIn) / (1 - leadIn));
  const span = 1 / n;

  panels.forEach((el, i) => {
    const local = (p - i * span) / span; // 0..1 across this panel's slot
    let o = 0;
    let y = 40;
    let blur = 8;

    if (local > -0.55 && local < 1.55) {
      // Ramp in over the first fifth of the slot, hold, ramp out over the last.
      const inA = clamp((local + 0.12) / 0.3);
      const outA = 1 - clamp((local - 0.72) / 0.3);
      o = clamp(Math.min(inA, outA));
      y = (1 - inA) * 42 - (1 - outA) * 34;
      blur = (1 - o) * 9;
    }

    el.style.opacity = o.toFixed(3);
    el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    el.style.filter = REDUCED ? 'none' : `blur(${blur.toFixed(2)}px)`;
  });

  const active = clamp(Math.floor(p * n), 0, n - 1);
  ticks.forEach((t, i) => t.classList.toggle('is-on', i === active && p > 0.001));
}

/* ── stage ──────────────────────────────────────────────────────*/
const stage = createStage(document.getElementById('gl'));

/* ── scroll wiring ──────────────────────────────────────────────
   Raw (unscrubbed) triggers feed the WebGL stage so the 3D tracks the
   scrollbar exactly; the DOM timelines below use scrub for a softer feel. */

const sections = {
  hero: document.getElementById('hero'),
  statement: document.getElementById('statement'),
  oil: document.getElementById('oil'),
  metals: document.getElementById('metals'),
  closing: document.getElementById('closing'),
};

/**
 * A trigger only reports while it is active, so a large jump — an anchor link,
 * back-to-top, or a browser-restored scroll position on reload — can leave a
 * section's progress frozen mid-range while the 3D shows the wrong scene.
 * Clamping on leave covers jumps; syncing on refresh covers loading straight
 * into the middle of the page.
 */
function trackSection(el, apply, end = 'bottom bottom') {
  ScrollTrigger.create({
    trigger: el,
    start: 'top top',
    end,
    onUpdate: (self) => apply(self.progress),
    onLeave: () => apply(1),
    onLeaveBack: () => apply(0),
    onRefresh: (self) => apply(self.progress),
  });
}

trackSection(sections.hero, (p) => { stage.progress.hero = p; }, 'bottom top');

/**
 * The section intro is a lead-in, not a peer of the product copy: it rises
 * under the title, then clears out as the first product panel arrives so two
 * paragraphs never compete for the same space over the wireframes.
 *
 * Driven by hand rather than by a GSAP tween because it has to hand over to
 * `drivePanels` at an exact progress value.
 */
function driveIntro(section, p) {
  const intro = section.querySelector('.product-intro');
  const inA = smoothstep(0.01, 0.07, p);
  const o = Math.min(inA, 1 - smoothstep(0.1, 0.2, p));

  intro.style.opacity = o.toFixed(3);
  intro.style.transform = `translate3d(0, ${((1 - inA) * 22).toFixed(2)}px, 0)`;
  intro.style.filter = REDUCED ? 'none' : `blur(${((1 - o) * 6).toFixed(2)}px)`;
}

/* A sticky pin holds its content right up to the moment the section scrolls
   away, which leaves the last frame hanging on screen during the handover.
   Dissolving the whole pinned layer over the final slice of the section hides
   the seam. */
function fadePin(section, p) {
  const pin = section.querySelector('.pin');
  pin.style.opacity = (1 - clamp((p - 0.93) / 0.07)).toFixed(3);
}

trackSection(sections.statement, (p) => {
  stage.progress.statement = p;
  fadePin(sections.statement, p);
});

trackSection(sections.oil, (p) => {
  stage.progress.oil = p;
  drivePanels(oilPanels, oilTicks, p);
  driveIntro(sections.oil, p);
  fadePin(sections.oil, p);
});

trackSection(sections.metals, (p) => {
  stage.progress.metals = p;
  drivePanels(metalPanels, metalTicks, p);
  driveIntro(sections.metals, p);
  fadePin(sections.metals, p);
});

/* Scene handover. Exactly one section owns the stage at a time; the stage
   itself lerps between the scenes so the switch is a crossfade, not a cut.
   Triggers are declared in document order and the last one to activate wins,
   which is what `onEnter`/`onEnterBack` naturally gives us. */
Object.entries(sections).forEach(([name, el]) => {
  ScrollTrigger.create({
    trigger: el,
    start: 'top 55%',
    end: 'bottom 55%',
    onEnter: () => stage.setSection(name),
    onEnterBack: () => stage.setSection(name),
    onRefresh: (self) => { if (self.isActive) stage.setSection(name); },
  });
});

/* ── hero copy exit ─────────────────────────────────────────────*/
gsap.to('.hero-inner', {
  scrollTrigger: { trigger: sections.hero, start: 'top top', end: 'bottom top', scrub: 0.5 },
  y: -90,
  opacity: 0,
  filter: REDUCED ? 'none' : 'blur(12px)',
  ease: 'none',
});
gsap.to('.hero-cue', {
  scrollTrigger: { trigger: sections.hero, start: 'top top', end: '25% top', scrub: 0.5 },
  opacity: 0,
  ease: 'none',
});

/* ── character reveals ──────────────────────────────────────────*/
function revealChars(el, triggerEl, opts = {}) {
  const chars = el._chars;
  if (!chars) return;

  gsap.set(chars, { opacity: 0.06, yPercent: 60, filter: REDUCED ? 'none' : 'blur(10px)' });

  gsap.to(chars, {
    scrollTrigger: {
      trigger: triggerEl,
      start: opts.start || 'top 75%',
      end: opts.end || 'top 15%',
      scrub: opts.scrub ?? 0.7,
    },
    opacity: 1,
    yPercent: 0,
    filter: 'blur(0px)',
    ease: 'power2.out',
    stagger: { each: opts.each ?? 0.012, from: 'start' },
  });
}

revealChars(
  document.querySelector('.statement-head'),
  sections.statement,
  { start: 'top top', end: '45% top', each: 0.01 }
);

gsap.from('.statement-body', {
  scrollTrigger: { trigger: sections.statement, start: '40% top', end: '75% top', scrub: 0.7 },
  y: 46,
  opacity: 0,
  filter: REDUCED ? 'none' : 'blur(8px)',
  ease: 'none',
});

document.querySelectorAll('.product-section').forEach((section) => {
  const title = section.querySelector('.product-title');
  revealChars(title, section, { start: 'top top', end: '14% top', each: 0.035 });

  // The intro is excluded here — driveIntro owns it, and two writers fighting
  // over the same opacity would stutter.
  gsap.from(section.querySelector('.eyebrow'), {
    scrollTrigger: { trigger: section, start: 'top top', end: '16% top', scrub: 0.6 },
    y: 26,
    opacity: 0,
    filter: REDUCED ? 'none' : 'blur(6px)',
    ease: 'none',
  });
});

revealChars(document.querySelector('.closing-head'), sections.closing, {
  start: 'top 80%',
  end: 'center 55%',
  each: 0.018,
});

/* ── stat counters ──────────────────────────────────────────────*/
document.querySelectorAll('[data-count]').forEach((el) => {
  const to = Number(el.dataset.count);
  const obj = { v: 0 };
  gsap.to(obj, {
    scrollTrigger: { trigger: sections.statement, start: '45% top', end: '80% top', scrub: 0.8 },
    v: to,
    ease: 'none',
    onUpdate: () => { el.textContent = Math.round(obj.v); },
  });
});

/* ── nav + back-to-top chrome ───────────────────────────────────*/
const nav = document.getElementById('nav');
const toTop = document.getElementById('to-top');

ScrollTrigger.create({
  start: 'top -80',
  end: 99999,
  onToggle: (self) => {
    nav.classList.toggle('is-solid', self.isActive);
    toTop.classList.toggle('is-on', self.isActive);
  },
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    window.scrollTo({ top: el.offsetTop, behavior: REDUCED ? 'auto' : 'smooth' });
  });
});

/* Mobile browsers resize the viewport when the URL bar collapses; a debounced
   refresh keeps pinned sections measured correctly without thrashing. */
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 220);
});

window.addEventListener('load', () => ScrollTrigger.refresh());
document.documentElement.classList.add('is-ready');
