// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "About",        id: "intro" },
  { label: "Membership",   id: "membership" },
  { label: "Opportunities",id: "grows" },
  { label: "Community",    id: "community" },
  { label: "Journal",      id: "journal" },
  { label: "Newsletter",   id: "newsletter" },
  { label: "Contact",      id: "footer" },
] as const;

// ─── Features ─────────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    eyebrow: "Deal Flow",
    title: "Curated opportunities",
    body: "Access a hand-picked selection of private placements, co-investments, and early-stage rounds — each vetted by a network that has deployed over $2B across four decades.",
  },
  {
    eyebrow: "Education",
    title: "Investor-grade insight",
    body: "Deep dives, annotated memos, and monthly roundtables led by practitioners — not pundits. Learn how considered investors actually think through risk, structure, and time horizon.",
  },
  {
    eyebrow: "Network",
    title: "Built around long-term thinking",
    body: "A curated circle of family offices, founders, and allocators who share a preference for patience, ownership mindset, and compounding over noise.",
  },
  {
    eyebrow: "Process",
    title: "How deals reach you",
    body: "Every opportunity is sourced, stress-tested, and presented with full context — including dissenting views. We believe investors deserve the whole picture, not a pitch deck.",
  },
];

// ─── Membership tiers ─────────────────────────────────────────────────────────
export const MEMBERSHIP_TIERS = [
  {
    name: "Associate",
    price: "By invitation",
    description: "Entry into the Circle. Full access to the journal, community forums, and member events.",
    features: [
      "Journal & research library",
      "Community forums",
      "Monthly member briefing",
      "Annual member summit (virtual)",
    ],
    highlight: false,
  },
  {
    name: "Fellow",
    price: "By selection",
    description: "Active dealflow access, sourcing rights, and priority access to co-investment rounds.",
    features: [
      "Everything in Associate",
      "Curated deal memos",
      "Co-investment allocation",
      "Quarterly roundtables",
      "Direct member introductions",
    ],
    highlight: true,
  },
  {
    name: "Founding Circle",
    price: "By mutual agreement",
    description: "Our deepest tier — reserved for anchor members who help shape the network's direction.",
    features: [
      "Everything in Fellow",
      "Advisory board access",
      "Priority sourcing rights",
      "Annual off-site retreat",
      "White-glove placement support",
    ],
    highlight: false,
  },
];

// ─── How it works steps ───────────────────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Apply or be introduced",
    body: "Applications are reviewed on a rolling basis. A warm introduction from a current member moves your file to the front of the queue.",
  },
  {
    number: "02",
    title: "A conversation, not a pitch",
    body: "We arrange a 30-minute call — no deck required. We're listening for alignment: time horizon, risk posture, and what you hope to build.",
  },
  {
    number: "03",
    title: "Welcome to the Circle",
    body: "Accepted members receive onboarding materials, an introduction to their cohort, and immediate access to the member portal and deal pipeline.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote: "The quality of the deal memos alone would justify the membership. The network is a bonus that turns out to be priceless.",
    name: "M.A.",
    role: "Family office principal, London",
  },
  {
    quote: "I've been in three co-investments through Northroot in 18 months. The diligence is thorough, the terms are fair, and the founders they source are exceptional.",
    name: "T.O.",
    role: "Founder & angel investor, Lagos",
  },
  {
    quote: "This is what investing networks should look like — patient, principled, and genuinely useful.",
    name: "S.K.",
    role: "Portfolio manager, Singapore",
  },
];

// ─── Journal articles ─────────────────────────────────────────────────────────
export const JOURNAL_ARTICLES = [
  {
    category: "Dealmaking",
    title: "The Anatomy of a Good Term Sheet",
    summary: "What experienced allocators look for — and what they ignore — when a new deal crosses their desk.",
    readTime: "9 min",
    date: "May 2025",
  },
  {
    category: "Mental Models",
    title: "Patience as Edge",
    summary: "In markets crowded with quarterly thinking, a long time horizon is one of the last true structural advantages.",
    readTime: "6 min",
    date: "Apr 2025",
  },
  {
    category: "Portfolio",
    title: "Concentration vs. Diversification: A Field Guide",
    summary: "The conventional wisdom on portfolio construction often masks the assumptions underneath. Here's what the evidence actually shows.",
    readTime: "12 min",
    date: "Mar 2025",
  },
  {
    category: "Community",
    title: "What We Learned from 200 Member Conversations",
    summary: "After two years of onboarding calls, three themes keep emerging about what considered investors actually want from a network.",
    readTime: "7 min",
    date: "Feb 2025",
  },
  {
    category: "Macro",
    title: "Navigating Rate Cycles as a Private Investor",
    summary: "Central bank policy dominates headlines but rarely dictates the best moves at the deal level. A practitioner's perspective.",
    readTime: "10 min",
    date: "Jan 2025",
  },
  {
    category: "Operator Lens",
    title: "The Founder Qualities That Survive the Cycle",
    summary: "After evaluating hundreds of early-stage companies, Northroot's sourcing team identifies the signals that actually predict resilience.",
    readTime: "8 min",
    date: "Dec 2024",
  },
];

// ─── Application form fields ──────────────────────────────────────────────────
export const APPLICATION_STEPS = [
  {
    title: "Tell us about yourself",
    fields: [
      { id: "name",     label: "Full name",         type: "text",  required: true  },
      { id: "email",    label: "Email",              type: "email", required: true  },
      { id: "location", label: "City / Country",     type: "text",  required: false },
      { id: "role",     label: "Current role or firm", type: "text", required: false },
    ],
  },
  {
    title: "Your investing profile",
    fields: [
      { id: "experience", label: "Years investing privately",  type: "text",     required: true },
      { id: "focus",      label: "Asset classes / sectors",    type: "text",     required: false },
      { id: "intro",      label: "Were you introduced by a member?", type: "text", required: false },
      { id: "why",        label: "What draws you to Northroot Circle?", type: "textarea", required: true },
    ],
  },
];
