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
  kicker: "OTC: WTXR | West Texas Resources, Inc.",
  headline: "Legacy Fields. Modern Recovery.",
  subheadline:
    "West Texas Resources, Inc. acquires, remediates, and redevelops mature oil and gas fields using modern recovery technology, disciplined field operations, and decades of technical experience.",
  body: "WTXR targets legacy oil and gas assets with proven production history, existing infrastructure, and meaningful redevelopment potential — converting overlooked fields into productive long-term energy assets.",
  primaryCta: { label: "Explore the Strategy", href: "#model" },
  secondaryCta: { label: "Investor Relations", href: "/investors" },
  stats: [
    { value: "40+ Years", label: "Technical & field experience" },
    { value: "Legacy Assets", label: "Mature oil and gas fields" },
    { value: "Modern Recovery", label: "Stimulation, lift, EOR & optimization" },
    { value: "Public Company", label: "Ticker: WTXR" },
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
  flow: [
    {
      label: "Acquire",
      caption: "Secure mature fields with proven production history.",
    },
    {
      label: "Remediate",
      caption: "Restore wells and surface equipment to compliant, working order.",
    },
    {
      label: "Reactivate",
      caption: "Return production using modern recovery methods.",
    },
    {
      label: "Redevelop",
      caption: "Optimize performance and scale field value over time.",
    },
  ],
} as const;

export const operatingModel = {
  kicker: "Operating Model",
  headline: "A Disciplined Approach to Legacy Field Redevelopment",
  intro:
    "WTXR focuses on assets where hydrocarbons have already been discovered and where historical production data, existing infrastructure, and modern recovery methods may create a lower-risk redevelopment opportunity than traditional exploration.",
  cards: [
    {
      title: "Acquire Proven Assets",
      description:
        "Target mature oil and gas fields with production history, existing wells, and redevelopment potential.",
    },
    {
      title: "Evaluate Remaining Value",
      description:
        "Analyze historical production, reservoir characteristics, infrastructure condition, regulatory requirements, and recovery potential.",
    },
    {
      title: "Restore Field Productivity",
      description:
        "Use workovers, compliance work, recompletions, artificial lift, stimulation, and surface upgrades to restore or improve production.",
    },
    {
      title: "Scale Across a Portfolio",
      description:
        "Apply the same disciplined redevelopment framework across additional legacy fields and underutilized assets.",
    },
  ],
} as const;

export const reserveOpportunity = {
  kicker: "Legacy Reserve Potential",
  headline: "Recovering Hydrocarbons Earlier Operators Left Behind",
  paragraphs: [
    "Many mature oil and gas fields were developed using the best technology available at the time, but those methods often recovered only a portion of the hydrocarbons originally in place.",
    "WTXR’s opportunity is built around applying modern reservoir analysis, recovery technology, and field optimization to proven assets where prior operators may have left significant recoverable resources behind.",
  ],
  pullQuote:
    "Legacy fields are not failed fields. In many cases, they are proven assets waiting for modern redevelopment.",
} as const;

export const technologyPreview = {
  kicker: "Modern Recovery Platform",
  headline: "Applying Today’s Technology to Yesterday’s Discoveries",
  intro:
    "WTXR combines experienced oil-field operations with modern petroleum technologies designed to restore production, improve flow, increase recovery, and extend the life of mature assets.",
  cta: { label: "View Recovery Methods", href: "/technology" },
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
    "WTXR’s operational strategy focuses on mature oil and gas fields where existing infrastructure and historical production records can support a disciplined path to renewed production.",
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
  cta: { label: "Explore Operations", href: "/operations" },
} as const;

export const assetFocus = {
  kicker: "Asset Focus",
  headline: "A Portfolio Strategy Built Around Existing Oil-Field Value",
  intro:
    "WTXR looks for mature oil and gas assets where prior investment already created infrastructure, access, wellbores, and production history. These characteristics can provide a more efficient foundation for redevelopment compared to starting from scratch.",
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
  headline: "A Public Energy Platform Focused on Legacy Asset Recovery",
  paragraphs: [
    "West Texas Resources, Inc. gives investors exposure to a differentiated energy redevelopment strategy focused on mature oil and gas assets, proven production history, existing infrastructure, and modern recovery potential.",
    "The company is focused on building long-term value through disciplined acquisition, responsible field remediation, production reactivation, and portfolio growth.",
  ],
  primaryCta: { label: "Visit Investor Relations", href: "/investors" },
  secondaryCta: { label: "View Newsroom", href: "/newsroom" },
  cards: [
    {
      icon: "market",
      title: "Public Market Access",
      description: "WTXR trades publicly under the ticker symbol WTXR.",
    },
    {
      icon: "proven",
      title: "Proven Asset Focus",
      description:
        "The company targets assets with historical production and existing field infrastructure.",
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
    "Follow the latest updates from West Texas Resources, including operational milestones, investor communications, field activity, corporate announcements, and public-company news.",
  cta: { label: "Visit Newsroom", href: "/newsroom" },
} as const;

export const finalCta = {
  headline: "Modern Recovery for Proven Energy Assets",
  body: "West Texas Resources is building a focused public energy company around legacy field remediation, modern recovery technology, and disciplined redevelopment of mature oil and gas assets.",
  primaryCta: { label: "Contact WTXR", href: "/contact" },
  secondaryCta: { label: "Investor Relations", href: "/investors" },
} as const;

/* ------------------------------- About ------------------------------- */

export const aboutPage = {
  hero: {
    kicker: "About West Texas Resources",
    headline:
      "Experienced Energy Operators Focused on Legacy Field Redevelopment",
    copy: "West Texas Resources, Inc. is a specialized energy company focused on acquiring, remediating, reactivating, and redeveloping mature oil and gas fields. The company’s strategy is built around proven production history, existing infrastructure, technical experience, and modern recovery methods.",
  },
  whoWeAre: {
    headline: "A Company Built for Modern Recovery",
    paragraphs: [
      "WTXR was created to pursue value in legacy oil and gas assets that may be overlooked by larger operators or undercapitalized by previous owners. These assets often have known production history, existing wells, field infrastructure, and remaining redevelopment potential.",
      "The company applies a disciplined technical and operational process to determine where modern recovery methods can restore production and improve long-term field performance.",
    ],
  },
  different: {
    kicker: "What Makes WTXR Different",
    headline: "Built Around Proven Fields and Practical Execution",
    cards: [
      {
        icon: "proven",
        title: "Proven Fields, Not Guesswork",
        description:
          "WTXR focuses on fields with production history and existing data rather than relying solely on speculative exploration.",
      },
      {
        icon: "infrastructure",
        title: "Existing Infrastructure",
        description:
          "Many target assets include wellbores, tanks, roads, lines, and surface systems that may reduce redevelopment cost and timeline.",
      },
      {
        icon: "team",
        title: "Experienced Technical Team",
        description:
          "WTXR’s management, geologists, petroleum engineers, and field operators bring decades of practical industry experience.",
      },
      {
        icon: "stimulation",
        title: "Modern Recovery Methods",
        description:
          "The company applies updated recovery tools and operational practices that were unavailable to many original operators.",
      },
    ],
  },
  mission: {
    kicker: "Our Mission",
    headline: "Reclaim. Restore. Recover.",
    copy: "Our mission is to reclaim legacy oil and gas fields, restore productive capacity, and responsibly recover energy resources from proven assets.",
  },
  values: {
    kicker: "Our Values",
    headline: "Principles That Guide Every Asset Decision",
    cards: [
      {
        title: "Operational Discipline",
        description:
          "Every asset must be evaluated through technical, regulatory, infrastructure, and economic filters.",
      },
      {
        title: "Responsible Redevelopment",
        description:
          "WTXR seeks to improve legacy fields through remediation, compliance, maintenance, and modern operating standards.",
      },
      {
        title: "Shareholder Alignment",
        description:
          "As a public company, WTXR is focused on transparent communication and long-term value creation.",
      },
      {
        title: "Technical Excellence",
        description:
          "The company relies on geology, engineering, field experience, and production analysis to guide decisions.",
      },
    ],
  },
} as const;

/* ----------------------------- Operations ----------------------------- */

export const operationsPage = {
  hero: {
    kicker: "Operations",
    headline: "Legacy Field Reactivation Through Disciplined Execution",
    copy: "WTXR’s operations focus on restoring value from mature oil and gas fields through practical field assessment, compliance work, workovers, stimulation, artificial lift, recompletion, and ongoing optimization.",
  },
  strategy: {
    kicker: "Operating Strategy",
    headline: "From Dormant Infrastructure to Productive Assets",
    copy: "Many mature oil and gas assets already contain the foundation for renewed production: wells, roads, tanks, lines, lease access, surface equipment, and historical production records. WTXR evaluates these assets to determine where targeted remediation and modern recovery methods can create renewed production potential.",
  },
  workflow: {
    kicker: "Operating Workflow",
    headline: "A Repeatable, Disciplined Field Process",
    steps: [
      {
        title: "Field Screening",
        description:
          "Identify mature fields, low-producing wells, shut-in wells, and underutilized assets with known production history.",
      },
      {
        title: "Technical Review",
        description:
          "Analyze reservoir data, historical production, well files, lease status, equipment, field access, and redevelopment requirements.",
      },
      {
        title: "Acquisition",
        description:
          "Acquire or secure interests in assets that meet WTXR’s technical, operational, and economic criteria.",
      },
      {
        title: "Remediation & Compliance",
        description:
          "Address regulatory, mechanical, surface, and operational requirements needed to return wells to service.",
      },
      {
        title: "Reactivation",
        description:
          "Use workovers, lift systems, stimulation, recompletion, or facility upgrades to restore production.",
      },
      {
        title: "Optimization",
        description:
          "Monitor production, reduce downtime, improve field performance, and evaluate additional recovery opportunities.",
      },
    ],
  },
  priorities: {
    kicker: "Operating Priorities",
    headline: "Where WTXR Focuses Field Capital",
    cards: [
      {
        icon: "shield",
        title: "Compliance First",
        description:
          "Bring wells and field operations into proper regulatory and operating status.",
      },
      {
        icon: "gauge",
        title: "Capital Efficiency",
        description:
          "Prioritize lower-cost reactivation opportunities where existing infrastructure supports redevelopment.",
      },
      {
        icon: "well",
        title: "Production Restoration",
        description:
          "Focus on practical steps that can return wells to production or improve existing output.",
      },
      {
        icon: "scale",
        title: "Long-Term Field Management",
        description:
          "Treat each field as a long-term asset rather than a short-term transaction.",
      },
    ],
  },
} as const;

/* ----------------------------- Technology ----------------------------- */

export const technologyPage = {
  hero: {
    kicker: "Technology",
    headline: "Modern Tools for Mature Reservoirs",
    copy: "WTXR applies modern petroleum engineering, field technology, and recovery methods to assets originally developed before many of today’s tools were available.",
  },
  sections: [
    {
      icon: "layers",
      title: "Reservoir Analysis",
      description:
        "Historical production records, geology, well logs, pressure data, reservoir behavior, and field history are used to evaluate remaining potential and prioritize redevelopment plans.",
    },
    {
      icon: "workover",
      title: "Workovers",
      description:
        "Mechanical repairs, cleanouts, tubing or pump replacement, and wellbore maintenance may restore wells that were previously shut in or underperforming.",
    },
    {
      icon: "lift",
      title: "Artificial Lift",
      description:
        "Updated lift systems can help produce wells that no longer flow naturally, improving production consistency and extending the productive life of mature assets.",
    },
    {
      icon: "stimulation",
      title: "Stimulation",
      description:
        "Modern stimulation techniques can improve flow from tight, damaged, or underperforming zones.",
    },
    {
      icon: "recompletion",
      title: "Recompletion",
      description:
        "Existing wellbores may provide access to additional productive intervals that were not fully developed by prior operators.",
    },
    {
      icon: "eor",
      title: "Enhanced Oil Recovery",
      description:
        "EOR methods may improve recovery in mature reservoirs where primary production has left significant hydrocarbons behind.",
    },
    {
      icon: "surface",
      title: "Surface Optimization",
      description:
        "Field infrastructure, tanks, lines, meters, and production systems can be upgraded or optimized to improve safety, uptime, and efficiency.",
    },
  ],
} as const;

/* ----------------------------- Investors ----------------------------- */

export const investorsPage = {
  hero: {
    kicker: "Investor Relations",
    headline: "A Public Energy Company Focused on Legacy Asset Recovery",
    copy: "West Texas Resources, Inc. is building a public energy platform around the remediation, reactivation, and redevelopment of mature oil and gas assets. The company’s strategy combines proven production history, existing infrastructure, modern recovery methods, and experienced field leadership.",
    primaryCta: { label: "View Newsroom", href: "/newsroom" },
    secondaryCta: { label: "Contact Investor Relations", href: "#investor-contact" },
  },
  thesis: {
    kicker: "Investment Thesis",
    headline: "Why WTXR",
    copy: "WTXR’s strategy is designed around a simple but powerful thesis: many legacy oil and gas fields still hold meaningful recoverable resources, but they require modern recovery methods, operational discipline, and focused capital to restore value.",
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
    note: "Specific stock exchange, market tier, transfer agent, share structure, and financial data are shown as placeholders until verified and approved by company leadership.",
    rows: [
      { label: "Company", value: "West Texas Resources, Inc." },
      { label: "Ticker", value: "WTXR" },
      { label: "Market", value: "OTC" },
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
    copy: "Follow the latest company announcements, operational updates, investor communications, and public-company news from West Texas Resources, Inc.",
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
