# Meridian Trading

A scroll-controlled WebGL site for a **fictional** global commodity trading brand.
Every visual is generated in the browser — there are no image assets.

## Run it

**Double-click `index.html`.** That's the whole thing.

The built bundle is committed and the page loads no external resources — no CDN,
no fonts, no images, no network calls at all — so it runs straight off the disk
over `file://` in any modern browser. You need nothing installed.

If you'd rather serve it (identical result, and what you'd want before
deploying):

```bash
cd meridian-trading
python3 -m http.server 8099    # then open http://localhost:8099
```

Only come back to `npm install` if you want to **change** the source in `src/` —
see [Develop](#develop) below.

The whole page is one continuous 3D journey: a single WebGL canvas sits behind
the document, and scroll position drives the camera, the active scene, and the
copy reveals. Nothing animates on a timer; scrub back up and the whole thing
runs in reverse.

## The five acts

| Section | Scene | What scroll does |
| --- | --- | --- |
| Hero | Procedural mountain range | Camera flies in over the ridgeline; the range hands over to the dot lattice |
| Statement | Dot lattice | Headline resolves character by character out of blur; stat counters run |
| Oil | Wireframe drums | Drums rotate and drift while seven products crossfade through the panel stack |
| Metals | Wireframe I-beam corridor | Girders rush the camera while three products crossfade |
| Closing | Dot lattice | Final headline resolves; back to top |

## How it is put together

- **`src/scenes/terrain.js`** — the hero range. One plane displaced in the
  vertex shader by ridged multifractal noise, with normals from central
  differences and analytic lighting. Ridged (rather than plain) fBm is what
  gives the knife-edge alpine silhouette.
- **`src/scenes/dotfield.js`** — floor and ceiling planes of additive points
  with a travelling swell, fading at both depth extremes so the lattice has no
  visible edge.
- **`src/scenes/barrels.js`** — oil drums built as explicit lat/long line cages
  (hoops, ribs, end-cap spokes) rather than triangulated wireframe, so they read
  as cylinders instead of grids.
- **`src/scenes/beams.js`** — I-beam profiles emitted as closed polylines and
  ribbed along their span. Yawed ~25° off the view axis: dead-on alignment
  collapses a girder into a small "I" glyph.
- **`src/stage.js`** — one renderer, one camera, four scene groups. Scene
  weights and camera pose are pure functions of scroll progress, lerped
  frame-rate independently so section handovers crossfade rather than cut.
- **`src/app.js`** — scroll wiring. Raw ScrollTrigger progress feeds the 3D so
  it tracks the scrollbar exactly; the DOM timelines use `scrub` for a softer
  feel.

## Develop

Only needed to change the source. `assets/bundle.js` is what the page actually
loads, so edits to `src/` do nothing until you rebuild.

```bash
npm install
npm run build      # bundle src/ -> assets/bundle.js
npm run watch      # same, rebuilding on every save
npm run serve      # http://localhost:8099
```

`shoot.mjs` drives the page to a set of scroll positions and screenshots each
one, which is how the scrubbed timelines were checked. It needs a server
already running on 8099, and Playwright's browser (`npx playwright install
chromium`).

### Where to change what

| You want to change | File |
| --- | --- |
| Brand name, nav, headlines | `index.html` |
| Product names and copy | `src/content.js` |
| Colours, type, layout | `assets/styles.css` |
| Camera path, scene handovers | `src/stage.js` |
| Scroll wiring, text reveals | `src/app.js` |
| A specific 3D scene | `src/scenes/*.js` |

Section lengths come from the product count — `sizeProductSection()` in
`src/app.js` allocates 85vh of scroll per product, so adding an entry to
`src/content.js` lengthens the section and the panel crossfades redistribute
automatically.

## A note on the brand

Meridian Trading is invented. The layout and motion language are a study of the
commodity-trading site genre; the name, copy, figures and mark are not
associated with any real company.
