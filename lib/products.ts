export type Category = "prompts" | "design" | "source-code";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  /** Price in USD cents (Stripe unit_amount). */
  price: number;
  /** Live demo built from this product — legacy pages served from /public. */
  previewUrl?: string;
  includes: string[];
  featured?: boolean;
};

export const CATEGORIES: Record<Category, { label: string; blurb: string }> = {
  prompts: {
    label: "Prompts",
    blurb: "Battle-tested AI prompt packs that produce premium, ready-to-ship websites.",
  },
  design: {
    label: "Design",
    blurb: "Polished visual systems — layouts, tokens and asset packs you can lift straight into your brand.",
  },
  "source-code": {
    label: "Source Code",
    blurb: "Complete, production-ready sites. Clean HTML/CSS/JS you own outright.",
  },
};

export const PRODUCTS: Product[] = [
  {
    slug: "taj-mahal-keynote",
    name: "Taj Mahal Keynote Site",
    tagline: "Apple-keynote storytelling for a monument brand",
    description:
      "The full prompt pack behind our Taj Mahal keynote-style website — cinematic scroll storytelling, section-by-section art direction, and an asset generation pack for imagery. Paste, run, ship.",
    category: "prompts",
    price: 2900,
    previewUrl: "/taj-mahal.html",
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
    tagline: "A luxury café site prompt with menu & reservation flows",
    description:
      "Prompt pack for a velvet-dark Italian café website — hero, storia, menu cards, reservation CTA. Includes the exact art-direction language that gets consistent, elegant output.",
    category: "prompts",
    price: 2400,
    previewUrl: "/cafe.html",
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
      "The prompt pack that redesigns a legacy government booking flow with Apple-grade restraint — clean IA, generous whitespace, focused booking card. A masterclass in redesign prompting.",
    category: "prompts",
    price: 1900,
    previewUrl: "/irctc-apple-design.html",
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
      "Prompt pack for a high-fashion perfume house site — editorial hero, notes pyramid, product storytelling. Tuned for brands that need to smell expensive on screen.",
    category: "prompts",
    price: 2400,
    previewUrl: "/pefume-wesbite.html",
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
      "Prompt pack for a sneaker drop microsite — bold type, 3D-feel product showcase, colorway switcher, hype-drop countdown energy.",
    category: "prompts",
    price: 2400,
    previewUrl: "/sneaker-prompt.html",
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
      "A dark, neon-violet automotive landing page — spec table, gallery, cinematic hero. Sold as complete source: clean HTML/CSS/JS with no build step, ready to deploy anywhere.",
    category: "source-code",
    price: 4900,
    previewUrl: "/violet-car.html",
    includes: [
      "Complete HTML/CSS/JS source",
      "No build step — deploy to any static host",
      "Commercial license for one project",
      "Section-by-section code walkthrough comments",
    ],
    featured: true,
  },
  {
    slug: "rajmahal-palace",
    name: "Rajmahal Palace Hotel",
    tagline: "Heritage-luxury hotel site, full source",
    description:
      "A palace-hotel website with royal art direction — rooms, dining, heritage timeline. Complete static source you can reskin for any luxury hospitality brand.",
    category: "source-code",
    price: 4900,
    previewUrl: "/rajmahal-prompt.html",
    includes: [
      "Complete HTML/CSS/JS source",
      "Reskin guide (tokens & imagery swap)",
      "Commercial license for one project",
      "Live reference build",
    ],
  },
  {
    slug: "brandmotion-design-tokens",
    name: "Brand Motion Design System",
    tagline: "The gold-on-black visual system behind brandmotion.in",
    description:
      "Our house design system — the dark-luxury token set, gradient recipes, glass surfaces, reveal animations and grid treatments used across every Brand Motion build.",
    category: "design",
    price: 1900,
    includes: [
      "Full CSS token set (color, type, radius, shadow, easing)",
      "Gradient & glass-surface recipes",
      "Scroll-reveal animation patterns",
      "Figma-ready color & type styles",
    ],
    featured: true,
  },
];

export const getProduct = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);

export const byCategory = (category: Category) =>
  PRODUCTS.filter((p) => p.category === category);

export const formatPrice = (cents: number) =>
  `$${(cents / 100).toFixed(0)}`;
