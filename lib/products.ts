export type Item = "prompt" | "source";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Prices in USD cents per purchasable item. Omit an item to hide its button. */
  prices: { prompt?: number; source?: number };
  /** Live demo built from this product — legacy pages served from /public. */
  previewUrl?: string;
  tags: string[];
  includes: string[];
  featured?: boolean;
};

/** All-Access plans — unlock every prompt & source pack. Prices in USD cents. */
export type PlanId = "monthly" | "yearly" | "lifetime";

export type Plan = {
  id: PlanId;
  name: string;
  price: number;
  cadence: string;
  blurb: string;
  perks: string[];
  highlight?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: 1900,
    cadence: "/month",
    blurb: "Full access while you're subscribed. Cancel anytime.",
    perks: [
      "Every prompt pack unlocked",
      "Every source download unlocked",
      "New drops included automatically",
      "Cancel anytime",
    ],
  },
  {
    id: "yearly",
    name: "Yearly",
    price: 14900,
    cadence: "/year",
    blurb: "Two months free versus monthly. Best for regular builders.",
    perks: [
      "Everything in Monthly",
      "≈ $12.4/mo — 2 months free",
      "Priority email support",
      "Lock today's price forever",
    ],
    highlight: true,
  },
  {
    id: "lifetime",
    name: "Lifetime",
    price: 29900,
    cadence: "one-time",
    blurb: "Pay once, own access to everything we ever release.",
    perks: [
      "Everything in Yearly",
      "One payment, no renewals",
      "All future drops forever",
      "Founding-member badge",
    ],
  },
];

export const getPlan = (id: string) => PLANS.find((p) => p.id === id);

export const ITEM_LABELS: Record<Item, string> = {
  prompt: "Copy prompt",
  source: "Source code",
};

export const PRODUCTS: Product[] = [
  {
    slug: "taj-mahal-keynote",
    name: "Taj Mahal Keynote Site",
    tagline: "Apple-keynote storytelling for a monument brand",
    description:
      "Cinematic scroll storytelling in Apple's keynote language — section-by-section art direction plus an asset generation pack for imagery. Buy the prompt to build it yourself, or grab the complete source.",
    prices: { prompt: 2900, source: 4900 },
    previewUrl: "/taj-mahal.html",
    tags: ["landing page", "storytelling", "html/css/js"],
    includes: [
      "Master website prompt (structure, copy voice, motion spec)",
      "Asset generation pack — image prompts for every section",
      "Color, type and layout tokens",
      "Live reference build to compare against",
    ],
    featured: true,
  },
  {
    slug: "br-velluto-cafe",
    name: "BR Velluto Italian Café",
    tagline: "A luxury café site with menu & reservation flows",
    description:
      "A velvet-dark Italian café website — hero, storia, menu cards, reservation CTA. The prompt pack includes the exact art-direction language that gets consistent, elegant output.",
    prices: { prompt: 2400, source: 4400 },
    previewUrl: "/cafe.html",
    tags: ["restaurant", "landing page", "html/css/js"],
    includes: [
      "Master website prompt with full section map",
      "Menu & typography treatment spec",
      "Image generation prompts for food & interior shots",
      "Live reference build",
    ],
    featured: true,
  },
  {
    slug: "irctc-apple-redesign",
    name: "IRCTC × Apple Redesign",
    tagline: "Reimagining India's rail booking in Apple's design language",
    description:
      "A legacy government booking flow redesigned with Apple-grade restraint — clean IA, generous whitespace, focused booking card. A masterclass in redesign prompting.",
    prices: { prompt: 1900, source: 3900 },
    previewUrl: "/irctc-apple-design.html",
    tags: ["redesign", "booking flow", "html/css/js"],
    includes: [
      "Redesign prompt with before/after framing",
      "Booking-flow UX spec",
      "Component inventory & design tokens",
      "Live reference build",
    ],
  },
  {
    slug: "maison-solea-perfume",
    name: "Maison Soléa Perfume",
    tagline: "Fragrance e-commerce with editorial luxury",
    description:
      "A high-fashion perfume house site — editorial hero, notes pyramid, product storytelling. Tuned for brands that need to smell expensive on screen.",
    prices: { prompt: 2400, source: 4400 },
    previewUrl: "/pefume-wesbite.html",
    tags: ["e-commerce", "editorial", "html/css/js"],
    includes: [
      "Master website prompt",
      "Editorial art-direction & photography prompt pack",
      "Scent-notes section spec",
      "Live reference build",
    ],
  },
  {
    slug: "sneaker-microsite",
    name: "Interactive Sneaker Microsite",
    tagline: "A product-drop page with motion and attitude",
    description:
      "A sneaker drop microsite — bold type, 3D-feel product showcase, colorway switcher, hype-drop countdown energy.",
    prices: { prompt: 2400, source: 4400 },
    previewUrl: "/sneaker-prompt.html",
    tags: ["product drop", "interactive", "html/css/js"],
    includes: [
      "Master microsite prompt",
      "Colorway/interaction spec",
      "Product-shot generation prompts",
      "Live reference build",
    ],
  },
  {
    slug: "violet-car-landing",
    name: "Violet Hypercar Landing",
    tagline: "Futuristic automotive landing page",
    description:
      "A dark, neon-violet automotive experience — cinematic video hero, spec table, gallery. Built around five cinematic clips with liquid-glass UI.",
    prices: { prompt: 2900, source: 4900 },
    previewUrl: "/violet-car.html",
    tags: ["automotive", "video-driven", "react + three.js"],
    includes: [
      "Full build prompt (Awwwards-grade motion spec)",
      "Five-clip video structure & shot list",
      "Complete source on the source tier",
      "Live reference build",
    ],
    featured: true,
  },
  {
    slug: "rajmahal-palace",
    name: "Rajmahal Palace Hotel",
    tagline: "Heritage-luxury hotel site",
    description:
      "A palace-hotel website with royal art direction — rooms, dining, heritage timeline. Reskin it for any luxury hospitality brand.",
    prices: { prompt: 2400, source: 4900 },
    previewUrl: "/rajmahal-prompt.html",
    tags: ["hospitality", "landing page", "html/css/js"],
    includes: [
      "Master website prompt",
      "Reskin guide (tokens & imagery swap)",
      "Complete source on the source tier",
      "Live reference build",
    ],
  },
  {
    slug: "apex-motors-hypercar",
    name: "APEX Motors Hypercar Website",
    tagline: "A cinematic hypercar reveal, directed by your scroll",
    description:
      "An ultra-premium single-page hypercar site in the language of Bugatti, Koenigsegg and Apple — scroll-driven storytelling built around two cinematic commercial videos. Includes the website prompt plus the two-part Gemini video prompt used to generate the footage.",
    prices: { prompt: 2900, source: 4900 },
    tags: ["automotive", "video-driven", "react + three.js"],
    includes: [
      "Website prompt + two-part Gemini video commercial prompt (two-in-one pack)",
      "Hero, macro-detail and orbit shot direction",
      "Complete source on the source tier",
      "Preview video of the full scroll experience",
    ],
  },
  {
    slug: "7star-luxury-hotel",
    name: "7-Star Luxury Hotel Website",
    tagline: "A cinematic architectural journey for ultra-luxury hospitality",
    description:
      "An Awwwards/FWA-quality hotel site built around three cinematic videos — frame-perfect scroll sync, advanced motion design, minimal UI and 3D overlays. Compares to Apple, Aman, Bulgari, Lexus.",
    prices: { prompt: 2900, source: 4900 },
    tags: ["hospitality", "video-driven", "react + three.js"],
    includes: [
      "Full build prompt (frame-perfect video-sync motion spec)",
      "Three-video shot list & section mapping",
      "Complete source on the source tier",
      "Preview video of the full scroll experience",
    ],
  },
  {
    slug: "luxury-watch-website",
    name: "Luxury Watch Portfolio Film",
    tagline: "A scroll-driven watch disassembly & reassembly story",
    description:
      "An Awwwards-winning personal-brand portfolio — 12 cinematic videos of a watch coming apart and returning home, GSAP/ScrollTrigger animation, 3D transforms. Includes both the website brief and the video storyboard prompt.",
    prices: { prompt: 2900, source: 4900 },
    tags: ["portfolio", "video-driven", "html/css/js"],
    includes: [
      "Website prompt + video storyboard prompt (two-in-one pack)",
      "12-clip shot list mapped to scroll sections",
      "Complete source on the source tier",
      "Preview video of the full scroll experience",
    ],
  },
  {
    slug: "br-constructions-mall",
    name: "BR Constructions — Ground to Grandeur",
    tagline: "Scroll builds the mall, frame by frame",
    description:
      "A construction-journey site where nothing plays on its own — the scrollbar becomes the timeline. Every pixel scrolled advances an empty plot toward a finished luxury mall, and scrolling back tears it down again. Includes the full interaction brief plus the video prompts that generated the four cinematic phases.",
    prices: { prompt: 2900, source: 5400 },
    previewUrl: "/real-estate.html",
    tags: ["real estate", "video-driven", "next.js + gsap"],
    includes: [
      "Website brief + four-phase video prompt pack (two-in-one)",
      "Frame-to-scroll scrub spec (no autoplay, fully reversible)",
      "Phase boundaries, story beats and loading-sequence direction",
      "Complete source on the source tier",
    ],
    featured: true,
  },
  {
    slug: "nucleus-ai-theme",
    name: "Nucleus — AI Startup Theme",
    tagline: "A resellable landing-page theme built around a WebGL orb",
    description:
      "A premium theme for AI and LLM startups, anchored by a 12,000-point GLSL particle orb that reacts to the cursor and shrinks as you scroll. Eleven sections — bento showcase, live token counter, pricing toggle, FAQ — with every colour, metric and shader parameter kept in one config file so a founder can rebrand it in an afternoon.",
    prices: { prompt: 2900, source: 5900 },
    previewUrl: "/nucleus-design.html",
    tags: ["ai startup", "landing page", "react + three.js"],
    includes: [
      "Full build prompt — 11 sections, design system, shader spec",
      "GLSL vertex/fragment direction for the nucleus orb and bloom pass",
      "Single-file rebrand config so the theme resells cleanly",
      "Complete source on the source tier",
    ],
  },
];

export const getProduct = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);

export const formatPrice = (cents: number) => `$${(cents / 100).toFixed(0)}`;
