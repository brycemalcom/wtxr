/* ------------------------------------------------------------------
   West Texas Resources, Inc. (WTXR)
   Centralized site content. Edit copy here — components read from this.
------------------------------------------------------------------- */

export const company = {
  name: "West Texas Resources, Inc.",
  shortName: "West Texas Resources",
  ticker: "WTXR",
  market: "OTC",
  headquarters: "Brenham, Texas",
  leadership: "Donald H. Goree, Chairman & CEO",
  affiliate: "Texas Coastal Energy Corp.",
  tagline: "Legacy Fields. Modern Recovery.",
  missionTheme: "Reclaim. Restore. Recover.",
  shortDescription:
    "West Texas Resources, Inc. acquires, remediates, and redevelops mature oil and gas fields using modern recovery technology, disciplined field operations, and decades of technical experience.",
  boilerplate:
    "West Texas Resources, Inc. (WTXR) is an energy production and development company focused on the acquisition, remediation, reactivation, and redevelopment of legacy oil and gas assets. The company targets mature fields with proven production history, existing infrastructure, and redevelopment potential, applying modern recovery methods and experienced field operations to restore production and create long-term asset value.",
  footerDescription:
    "West Texas Resources, Inc. is an energy production and development company focused on the acquisition, remediation, reactivation, and redevelopment of mature oil and gas assets.",
  copyrightYear: 2026,
  contact: {
    investors: "dg@TexasCoastalEnegy.com",
    business: "dg@TexasCoastalEnegy.com",
    media: "dg@TexasCoastalEnegy.com",
    website: "www.west-texas.com",
  },
} as const;

/* Right-side bar links — the three standalone pages. */
export const primaryNav = [
  { label: "Investors", href: "/investors" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Contact", href: "/contact" },
] as const;

/* Full-screen overlay menu — homepage story sections (anchors). */
export const sectionNav = [
  { label: "Company", href: "/#company", index: "01" },
  { label: "How We Work", href: "/#model", index: "02" },
  { label: "Legacy Reserve", href: "/#reserve", index: "03" },
  { label: "Operations", href: "/#operations", index: "04" },
  { label: "Technology", href: "/#technology", index: "05" },
  { label: "Mission", href: "/#mission", index: "06" },
] as const;

export const forwardLookingDisclaimer =
  "This website may contain forward-looking statements regarding West Texas Resources, Inc., its business strategy, operations, asset development plans, production potential, financial outlook, and future expectations. Forward-looking statements are based on current assumptions and are subject to risks, uncertainties, market conditions, commodity prices, regulatory requirements, operating results, and other factors that could cause actual results to differ materially. Nothing on this website should be interpreted as investment advice, an offer to sell securities, or a solicitation to buy securities. Investors should conduct their own due diligence and consult appropriate professional advisors before making investment decisions.";

export const forwardLookingShort =
  "This website may contain forward-looking statements. Actual results may differ materially due to risks, uncertainties, commodity prices, regulatory requirements, operating conditions, and other factors. Nothing on this website should be considered investment advice or a solicitation to buy or sell securities.";

/* ----------------------------- Homepage ----------------------------- */

export const hero = {
  kickerTicker: "OTC: WTXR",
  kickerCompany: "West Texas Resources Inc",
  headline: "Legacy Fields. Modern Recovery.",
  subheadline:
    "A public energy company focused on returning mature Texas oil and gas fields to production — with modern recovery technology and four decades of field experience.",
  primaryCta: { label: "Explore the Strategy", href: "#model" },
  secondaryCta: { label: "Investor Relations", href: "/investors" },
  stats: [
    { value: "40+ Years", label: "Technical & field experience" },
    { value: "Legacy Assets", label: "Mature oil and gas fields" },
    { value: "Modern Recovery", label: "Stimulation, lift, EOR & optimization" },
    { value: "Public Company", label: "OTC: WTXR" },
  ],
} as const;

export const companySnapshot = {
  kicker: "Company Overview",
  headline: "Proven fields.",
  headlineAccent: "Not speculation.",
  lead: "West Texas Resources is a specialized energy company focused on the acquisition, remediation, reactivation, and redevelopment of mature oil and gas fields.",
  paragraphs: [
    "These assets were discovered, drilled, and produced decades ago — often before today’s recovery technology existed. Many still hold existing wellbores, surface facilities, and detailed production records.",
    "We apply modern engineering and operational discipline to proven fields that were overlooked, undercapitalized, or shut in by previous operators — a more capital-efficient path back to production than starting from scratch.",
  ],
} as const;

export const operatingModel = {
  kicker: "Operating Model",
  headline: "A Disciplined Approach to Legacy Field Redevelopment",
  intro:
    "Every asset moves through the same four-step framework — a repeatable discipline for returning known fields to production.",
  cards: [
    {
      title: "Acquire",
      description:
        "Target mature fields with proven production history, existing wellbores, and infrastructure — then verify remaining value through reservoir and production analysis before committing capital.",
    },
    {
      title: "Remediate",
      description:
        "Restore wells, surface equipment, and regulatory compliance to working order — the lowest-cost path back to operational status.",
    },
    {
      title: "Reactivate",
      description:
        "Return wells to production using workovers, artificial lift, stimulation, and recompletions.",
    },
    {
      title: "Redevelop",
      description:
        "Optimize output, evaluate additional recovery opportunities, and repeat the framework across the portfolio.",
    },
  ],
} as const;

export const reserveOpportunity = {
  kicker: "Legacy Reserve Potential",
  headline: "Recovering Hydrocarbons Earlier Operators Left Behind",
  paragraphs: [
    "Many mature oil and gas fields were developed using the best technology available at the time, but those methods often recovered only a portion of the hydrocarbons originally in place.",
    "WTXR uses modern reservoir analysis to locate where that remaining resource is concentrated — and applies the recovery methods best suited to reach it.",
  ],
  pullQuote:
    "Legacy fields are not failed fields. In many cases, they are proven assets waiting for modern redevelopment.",
} as const;

export const technologyPreview = {
  kicker: "Modern Recovery Platform",
  headline: "Applying Today’s Technology to Yesterday’s Discoveries",
  intro:
    "Experienced field operations, paired with modern petroleum technologies — restoring production, improving flow, and extending the life of mature assets.",
  cards: [
    {
      icon: "stimulation",
      title: "Reservoir Stimulation",
      description:
        "Modern stimulation techniques can improve flow from underperforming or bypassed zones.",
    },
    {
      icon: "lift",
      title: "Artificial Lift",
      description:
        "Updated lift systems can restore production from wells that are no longer naturally flowing.",
    },
    {
      icon: "eor",
      title: "Enhanced Oil Recovery",
      description:
        "EOR methods may increase recovery from reservoirs that still hold meaningful hydrocarbons.",
    },
    {
      icon: "recompletion",
      title: "Recompletion",
      description:
        "Existing wellbores may be cleaned out, re-entered, or recompleted in productive intervals.",
    },
    {
      icon: "optimization",
      title: "Field Optimization",
      description:
        "Production monitoring, engineering review, and field-level adjustments help improve efficiency and uptime.",
    },
    {
      icon: "surface",
      title: "Surface Infrastructure",
      description:
        "WTXR evaluates tanks, lines, equipment, and field systems to support safer and more efficient operations.",
    },
  ],
} as const;

export const operationsPreview = {
  kicker: "Operations",
  headline: "Turning Dormant Fields Into Productive Assets",
  intro:
    "This is where the strategy meets the field — assessment, compliance work, workovers, and optimization that move wells from shut-in back into service.",
  lens: "Every asset evaluated through a practical operating lens",
  criteria: [
    "Well condition",
    "Regulatory status",
    "Surface equipment",
    "Reservoir characteristics",
    "Workover requirements",
    "Production potential",
    "Field economics",
  ],
  transformation: {
    from: {
      label: "Dormant",
      caption:
        "Shut-in or underproducing wells, idle infrastructure, and overlooked reserves.",
      tags: [
        "Shut-in wells",
        "Idle infrastructure",
        "Deferred maintenance",
        "Unverified potential",
      ],
    },
    to: {
      label: "Reactivated",
      caption:
        "Restored production, modern recovery, and optimized long-term field performance.",
      tags: [
        "Restored output",
        "Active flowlines",
        "Modern recovery",
        "Ongoing optimization",
      ],
    },
  },
  sequence: [
    "Identify",
    "Evaluate",
    "Acquire",
    "Remediate",
    "Reactivate",
    "Optimize",
  ],
} as const;

export const assetFocus = {
  kicker: "Asset Focus",
  headline: "A Portfolio Strategy Built Around Existing Oil-Field Value",
  intro:
    "The portfolio spans six asset types, each selected for value already in place — wellbores, surface infrastructure, lease access, and production records.",
  cards: [
    {
      icon: "well",
      title: "Producing Wells",
      description:
        "Existing production that can contribute to near-term operating activity and field-level cash flow.",
    },
    {
      icon: "shutin",
      title: "Shut-In Wells",
      description:
        "Previously producing wells that may be candidates for compliance work, repairs, lift systems, or workovers.",
    },
    {
      icon: "workover",
      title: "Workover Candidates",
      description:
        "Wells that may benefit from mechanical repair, cleanout, stimulation, or equipment replacement.",
    },
    {
      icon: "recompletion",
      title: "Recompletion Candidates",
      description:
        "Existing wells that may be recompleted into productive zones or intervals.",
    },
    {
      icon: "infrastructure",
      title: "Legacy Infrastructure",
      description:
        "Surface equipment, tanks, roads, lines, and field facilities that may support lower-cost redevelopment.",
    },
    {
      icon: "expansion",
      title: "Field Expansion Opportunities",
      description:
        "Additional reservoir zones, sidetrack opportunities, or directional drilling targets identified through technical review.",
    },
  ],
} as const;

export const investorSnapshot = {
  kicker: "Investor Relations",
  headline: "Built for Public Markets. Focused on the Field.",
  paragraphs: [
    "Exposure to a focused redevelopment strategy — proven Texas fields, disciplined operations, and progress reported in the open as a public company.",
  ],
  primaryCta: { label: "Visit Investor Relations", href: "/investors" },
  secondaryCta: { label: "View Newsroom", href: "/newsroom" },
  cards: [
    {
      icon: "market",
      title: "Public Market Access",
      description:
        "Common shares trade on the OTC Markets under the symbol WTXR.",
    },
    {
      icon: "proven",
      title: "Proven Asset Focus",
      description:
        "Phase One of the company's reactivation plan covers 59 shut-in legacy wells across South and Southeast Texas — most requiring only basic compliance work before returning to service.",
    },
    {
      icon: "shield",
      title: "Lower Exploration Exposure",
      description:
        "WTXR emphasizes redevelopment of known fields rather than speculative wildcat exploration.",
    },
    {
      icon: "team",
      title: "Technical Experience",
      description:
        "The team brings decades of geology, petroleum engineering, and field operations experience.",
    },
    {
      icon: "scale",
      title: "Scalable Strategy",
      description:
        "The legacy field redevelopment model can be applied across multiple mature oil and gas regions.",
    },
    {
      icon: "news",
      title: "News & Updates",
      description:
        "Investors can follow company updates, press releases, and public disclosures through the investor section.",
    },
  ],
} as const;

export const mission = {
  kicker: "Our Mission",
  headline: "Reclaim. Restore. Recover.",
  paragraphs: [
    "WTXR’s mission is to reclaim legacy oil and gas fields, restore productive capacity, and responsibly recover proven energy resources that remain in place beneath mature assets.",
    "By combining deep industry experience with modern recovery methods, West Texas Resources seeks to create long-term value for shareholders, partners, and the communities where it operates.",
  ],
} as const;

export const newsroomPreview = {
  kicker: "Newsroom",
  headline: "Company Updates, Press Releases & Investor News",
  intro:
    "Official releases, summarized on site and linked to the source of record.",
  cta: { label: "Visit Newsroom", href: "/newsroom" },
} as const;

export const finalCta = {
  headline: "Modern Recovery for Proven Energy Assets",
  body: "The approach is set: proven fields, disciplined reactivation, transparent reporting. Connect with the team to discuss assets, partnerships, or investor questions — or follow our progress in the newsroom.",
  primaryCta: { label: "Contact WTXR", href: "/contact" },
  secondaryCta: { label: "Investor Relations", href: "/investors" },
} as const;

/* ----------------------------- Investors ----------------------------- */

export const investorsPage = {
  hero: {
    kicker: "Investor Relations",
    headline: "A Public Energy Company Focused on Legacy Asset Recovery",
    copy: "West Texas Resources is building an energy platform around the reactivation and redevelopment of mature oil and gas assets — with the reporting and disclosure standards of a public company.",
    primaryCta: { label: "View Newsroom", href: "/newsroom" },
    secondaryCta: { label: "Contact Investor Relations", href: "#investor-contact" },
  },
  thesis: {
    kicker: "Investment Thesis",
    headline: "Why WTXR",
    copy: "A simple thesis: many legacy oil and gas fields still hold meaningful recoverable resources. Restoring that value takes modern recovery methods, operational discipline, and focused capital.",
    cards: [
      {
        icon: "proven",
        title: "Proven Production History",
        description:
          "WTXR targets assets where oil and gas have already been discovered and produced.",
      },
      {
        icon: "infrastructure",
        title: "Existing Infrastructure",
        description:
          "Wells, surface equipment, field access, and historical data may create a more efficient redevelopment foundation.",
      },
      {
        icon: "stimulation",
        title: "Modern Recovery Upside",
        description:
          "Newer petroleum technologies can improve recovery from fields developed decades ago.",
      },
      {
        icon: "shield",
        title: "Lower Exploration Exposure",
        description:
          "The focus is redevelopment of known fields rather than high-risk frontier exploration.",
      },
      {
        icon: "team",
        title: "Experienced Operators",
        description:
          "The company benefits from decades of hands-on geology, engineering, and field operations experience.",
      },
      {
        icon: "scale",
        title: "Portfolio Scalability",
        description:
          "The model can be repeated across additional legacy fields and mature producing regions.",
      },
    ],
  },
  snapshot: {
    kicker: "Corporate Snapshot",
    headline: "Company at a Glance",
    rows: [
      { label: "Company", value: "West Texas Resources, Inc." },
      { label: "Ticker", value: "WTXR" },
      { label: "Market", value: "OTC Markets" },
      { label: "Headquarters", value: "Brenham, Texas" },
      { label: "Leadership", value: "Donald H. Goree, Chairman & CEO" },
      { label: "Operating Subsidiary", value: "Texas Coastal Energy" },
      { label: "Sector", value: "Energy" },
      {
        label: "Focus",
        value:
          "Legacy oil and gas field remediation, reactivation, and redevelopment",
      },
      {
        label: "Strategy",
        value:
          "Acquire mature assets, restore production, optimize recovery, scale portfolio",
      },
      { label: "Website", value: "www.west-texas.com" },
      { label: "Investor Contact", value: "dg@TexasCoastalEnegy.com" },
    ],
  },
  faq: {
    kicker: "Investor FAQ",
    headline: "Common Questions",
    items: [
      {
        question: "What does West Texas Resources do?",
        answer:
          "West Texas Resources, Inc. is an energy production and development company focused on acquiring, remediating, reactivating, and redeveloping mature oil and gas assets.",
      },
      {
        question: "What is WTXR’s operating strategy?",
        answer:
          "WTXR targets legacy fields with production history and existing infrastructure, then applies modern recovery methods and operational discipline to restore or improve production.",
      },
      {
        question: "Why focus on legacy oil and gas fields?",
        answer:
          "Legacy fields may contain remaining recoverable hydrocarbons and often include existing wellbores, surface equipment, and historical production data that can support a more efficient redevelopment process.",
      },
      {
        question: "Is WTXR an exploration company?",
        answer:
          "WTXR is primarily focused on redevelopment and reactivation of known assets rather than speculative exploration.",
      },
      {
        question: "Where can investors find company updates?",
        answer:
          "Investors can follow company updates through the Newsroom, public disclosure resources, and future investor materials posted on this website.",
      },
    ],
  },
  contact: {
    headline: "Investor Relations Contact",
    copy: "For investor inquiries, shareholder questions, or media requests, please contact West Texas Resources through the form below.",
  },
} as const;

/* ----------------------------- Newsroom ----------------------------- */

export const newsroomPage = {
  hero: {
    kicker: "Newsroom",
    headline: "WTXR News, Updates & Investor Communications",
    copy: "Every official release from West Texas Resources — summarized on site, with a link to the original announcement as the source of record.",
  },
  categories: [
    "All",
    "Press Releases",
    "Operations",
    "Investor Relations",
    "Corporate Updates",
    "Media",
  ],
} as const;

/* ------------------------------ Contact ------------------------------ */

export const contactPage = {
  hero: {
    kicker: "Contact",
    headline: "Connect With West Texas Resources",
    copy: "For business inquiries, investor relations, media requests, or partnership opportunities, contact West Texas Resources, Inc.",
  },
  inquiryTypes: [
    "Investor Relations",
    "Business Development",
    "Operations",
    "Media",
    "General",
  ],
  cards: [
    {
      title: "Investor Relations",
      description: "For shareholder, investor, or market-related inquiries.",
      email: "dg@TexasCoastalEnegy.com",
    },
    {
      title: "Business Development",
      description:
        "For asset opportunities, partnerships, or operational inquiries.",
      email: "dg@TexasCoastalEnegy.com",
    },
    {
      title: "Media",
      description: "For press, newsroom, or communication requests.",
      email: "dg@TexasCoastalEnegy.com",
    },
  ],
} as const;
