/* ------------------------------------------------------------------
   Newsroom content — real West Texas Resources, Inc. (OTC: WTXR)
   press releases. Each item has an on-site summary page and links
   to the official source (PR Newswire / EIN Presswire) as the
   system of record.

   To add a release: prepend a new entry (newest first), set a real
   date, category, factual excerpt, summary body paragraphs, and the
   official sourceUrl.
------------------------------------------------------------------- */

export type NewsCategory =
  | "Press Releases"
  | "Operations"
  | "Investor Relations"
  | "Corporate Updates"
  | "Media";

/** A body block: plain paragraph, section heading, or bullet list. */
export type NewsBlock = string | { heading: string } | { list: string[] };

export type NewsItem = {
  slug: string;
  title: string;
  category: NewsCategory;
  displayCategory: string;
  date: string;
  excerpt: string;
  /** On-site article content. The official release remains the system of record. */
  body: NewsBlock[];
  source: string;
  /** External source of record. Omit when the site itself is the publication point. */
  sourceUrl?: string;
  featured?: boolean;
};

export const news: NewsItem[] = [
  {
    slug: "nine-producing-wells-acquisition",
    title:
      "West Texas Resources Announces Acquisition of Nine Producing Texas Oil and Gas Wells Expected to Generate Approximately $775,000 in Monthly Gross Revenue",
    category: "Operations",
    displayCategory: "Company Update",
    date: "July 14, 2026",
    source: "ACCESS Newswire",
    sourceUrl:
      "https://www.accessnewswire.com/newsroom/en/oil-gas-and-energy/west-texas-resources-announces-acquisition-of-nine-producing-texas-oil-and-gas-w-1190921",
    excerpt:
      "WTXR acquired eight producing wells in Jackson County and one producing gas well in Fort Bend County, Texas, with current estimates indicating combined potential gross production revenue of approximately $775,000 per month before customary deductions.",
    body: [
      "BRENHAM, Texas – July 14, 2026 – West Texas Resources, Inc. (OTCID: WTXR) announced the acquisition of a package of producing oil and gas assets consisting of eight producing wells in Jackson County, Texas, and one producing gas well in Fort Bend County, Texas.",
      "The acquired properties are expected to significantly expand the Company's production profile and strengthen its long-term cash flow generation as WTXR continues building a diversified portfolio of producing energy assets.",
      { heading: "Estimated Production and Revenue" },
      "According to current engineering and operational estimates, the eight Jackson County wells are expected to produce a combined average of approximately 300 barrels of oil per day together with approximately 1.5 million cubic feet of natural gas per day. The Fort Bend County well is expected to produce approximately 300 MCF of natural gas per day, together with associated condensate production.",
      "Based on commodity-price assumptions of approximately $70 per barrel of oil and $3.20 per MCF of natural gas, management estimates the acquired properties have the potential to generate:",
      {
        list: [
          "Approximately $630,000 per month in gross oil revenue",
          "Approximately $145,000 per month in gross natural gas revenue",
          "Approximately $775,000 per month in combined gross production revenue before royalties, operating expenses, taxes, and other customary deductions",
        ],
      },
      { heading: "Operational Transition" },
      "The Company estimates that approximately $1.5 million will be invested in hook-ups, facility upgrades, and minor repairs needed to optimize production and assume full operational control. Management believes that investment could potentially be recovered in approximately two months based on current projections, although actual results may vary.",
      "Operations on the properties will be conducted through Texas Coastal Energy, the Company's wholly owned operating subsidiary. Following the transition, Texas Coastal Energy intends to conduct updated deliverability testing and operational reviews designed to maximize long-term production and recovery.",
      "The Company expects to provide additional operational updates as the transition progresses and the initial evaluation and optimization program is completed.",
    ],
    featured: true,
  },
  {
    slug: "chairman-letter-spring-2026",
    title:
      "West Texas Resources Issues Spring 2026 Chairman's Letter as Company Advances Toward OTCQB, Expands Operating Capability, and Evaluates High-Impact Gulf Coast Acquisition",
    category: "Investor Relations",
    displayCategory: "Investor Relations",
    date: "June 10, 2026",
    source: "West Texas Resources, Inc.",
    excerpt:
      "WTXR's Spring 2026 Chairman's Letter outlines completed OTC Markets reporting for year-end 2025 and Q1 2026, a planned operational transition to a licensed in-house operator, audit engagement bids from PCAOB-qualified firms in support of an OTCQB uplisting, and the evaluation of a Gulf Coast acquisition with approximately $185,000 per month in current net operating oil revenues.",
    body: [
      "BRENHAM, Texas – June 10, 2026 – West Texas Resources, Inc. (OTC: WTXR) today released its Spring 2026 Chairman's Letter to Shareholders, outlining the Company's continued progress in regulatory compliance, operational capability, financial reporting, and strategic growth initiatives. The letter highlights WTXR's strengthened market position, operational transition through its subsidiary Texas Coastal Energy Corp., and the evaluation of a significant Gulf Coast acquisition opportunity.",
      { heading: "Spring 2026 Chairman's Letter to Shareholders" },
      "Fellow Shareholders,",
      "West Texas Resources, Inc. is entering a pivotal phase of advancement across regulatory compliance, operational execution, and strategic expansion. Our focus remains on strengthening the Company's foundation, enhancing market standing, and positioning WTXR for the next stage of growth. This letter provides a direct update on recent developments and the Company's direction as we move further into 2026.",
      { heading: "Regulatory Compliance and Market Status" },
      "WTXR has completed all required OTC Markets updates, including its Company Profile and financial reports for year-end 2025 and Q1 2026. With these submissions finalized, the Company has strengthened its market standing and continues advancing toward an OTCQB uplisting, with a longer-term objective of pursuing a senior exchange such as Nasdaq or the Texas Stock Exchange.",
      "During May 2026, WTXR observed increased open-market trading activity and a notable rise in share price. While market performance is influenced by external factors, management believes this reflects renewed attention and growing shareholder engagement as the Company demonstrates visible progress.",
      { heading: "Operational Progress Through Texas Coastal Energy Corp." },
      "Texas Coastal Energy Corp., WTXR's wholly owned operating subsidiary, has filed to become a licensed oil and gas operator in the State of Texas and will be filing for a name change to West Texas Operating Co., Inc. Upon approval, the subsidiary expects to assume operational management of all WTXR oil and gas assets beginning July 2026.",
      "This transition marks a major operational milestone. By bringing operational control in-house, WTXR intends to consolidate oversight, improve field-level execution, enhance production consistency, and strengthen long-term stewardship of its asset base.",
      { heading: "Audit Engagement and Pathway to Higher Reporting Standards" },
      "WTXR is currently taking bids from nationally recognized, PCAOB-qualified audit firms to conduct a full audit of the Company's financial statements. This engagement will support future SEC filings and establish the framework for timely quarterly and annual reporting.",
      "Completion of audited financials will be a major corporate milestone and is expected to support the Company's planned OTCQB uplisting. This initiative reflects WTXR's commitment to transparency, stronger governance, and a more institutional reporting profile.",
      { heading: "Evaluation of Gulf Coast Acquisition Opportunity" },
      "WTXR's technical team is evaluating a potential acquisition of multiple producing oil wells along the Gulf Coast. The package includes:",
      {
        list: [
          "Approximately $185,000 per month in current net operating oil revenues",
          "A newly refurbished Skytop double-stack workover rig",
          "A full suite of ancillary tools and equipment",
          "Operating assets that could materially expand internal operating capability",
        ],
      },
      "If completed, this acquisition could significantly enhance WTXR's production base and allow West Texas Operating to perform in-house maintenance, repairs, and workovers — improving flexibility, response times, and operational control. There is no assurance the transaction will be completed; updates will be provided as appropriate.",
      { heading: "Outlook" },
      "WTXR remains focused on building a stronger company from the ground up. Recent steps have improved regulatory standing, strengthened the operating platform, and expanded the asset base — including nine additional wells with significant production potential.",
      "The Board and management team remain committed to disciplined execution, responsible development, and clear communication as the Company advances into its next phase. WTXR believes it is gaining meaningful momentum and is working to convert that momentum into a stronger operating business, stronger reporting profile, and stronger long-term market position.",
      "Respectfully,",
      "H.E. Donald H. Gorée, KGC — Chairman & President, West Texas Resources, Inc.",
      { heading: "About West Texas Resources, Inc." },
      "West Texas Resources, Inc. (OTC: WTXR) is the public parent of Texas Coastal Energy Corp., focused on the acquisition, reactivation, and development of oil and gas assets in Texas. The Company's capital-efficient model emphasizes operational execution, regulatory compliance, and scalable growth.",
      { heading: "Forward-Looking Statements" },
      "This release contains forward-looking statements within the meaning of federal securities laws. These statements include, but are not limited to, expectations regarding audited filings, uplisting plans, operational transitions, acquisition evaluations, future production, revenues, cash flow, and market position. Forward-looking statements are based on current assumptions and are subject to risks and uncertainties that may cause actual results to differ materially. The Company undertakes no obligation to update forward-looking statements except as required by law.",
    ],
  },
  {
    slug: "reactivation-plan-59-wells",
    title:
      "West Texas Resources Outlines Reactivation Plan for 59 Wells Following Successful Well Test",
    category: "Operations",
    displayCategory: "Operations",
    date: "October 1, 2025",
    source: "PR Newswire",
    sourceUrl:
      "https://www.prnewswire.com/news-releases/west-texas-resources-outlines-reactivation-plan-for-59-wells-following-successful-well-test-302573113.html",
    excerpt:
      "Following a successful well test, WTXR detailed Phase One of its reactivation strategy: 59 shut-in legacy wells across South and Southeast Texas, most requiring only basic compliance work, with a near-term cash-flow base targeted at $7–8 million in annualized gross revenue.",
    body: [
      "Following a successful well test, West Texas Resources detailed Phase One of its reactivation strategy: a portfolio of 59 shut-in legacy wells across South and Southeast Texas.",
      "According to the release, most of the wells require only basic compliance work — rather than major capital projects — before they can be returned to service. The company identified the portfolio as the basis for a near-term cash-flow target of $7–8 million in annualized gross revenue.",
      "The plan reflects the company's core operating model: prioritizing low-cost reactivation of proven wellbores with existing infrastructure over speculative drilling.",
    ],
  },
  {
    slug: "successful-compliance-test",
    title:
      "West Texas Resources Reports Successful Compliance Test; Highlights High-Value Condensate",
    category: "Operations",
    displayCategory: "Press Release",
    date: "September 30, 2025",
    source: "PR Newswire",
    sourceUrl:
      "https://www.prnewswire.com/news-releases/west-texas-resources-reports-successful-compliance-test-highlights-high-value-condensate-and-targets-initial-set-of-ten-similar-wells-302570732.html",
    excerpt:
      "A Texas Railroad Commission compliance test on one of WTXR's natural gas wells confirmed approximately 4,000 PSI at the wellhead and a high-value ~60 API condensate stream, with at least ten similar gas-condensate wells in inventory requiring only compliance work before restart.",
    body: [
      "West Texas Resources reported a successful Texas Railroad Commission compliance test on one of its natural gas wells, recording approximately 4,000 PSI at the wellhead and confirming a high-value condensate stream of roughly 60 API gravity.",
      "The company stated that its inventory includes at least ten similar gas-condensate wells that require only compliance work before they can be restarted.",
      "The results support the company's thesis that significant productive capacity remains in place across its legacy well inventory, accessible through disciplined, lower-cost compliance and remediation work.",
    ],
  },
  {
    slug: "tcec-change-of-control",
    title:
      "Texas Coastal Energy Corp Assumes Control of West Texas Resources, Inc.",
    category: "Corporate Updates",
    displayCategory: "Corporate Update",
    date: "September 17, 2025",
    source: "EIN Presswire",
    sourceUrl:
      "https://www.einpresswire.com/article/849755933/texas-coastal-energy-corp-assumes-control-of-west-texas-resources-inc-expands-strategic-holdings",
    excerpt:
      "Texas Coastal Energy Corp announced the formal change of control and operational stewardship of West Texas Resources, Inc., effective September 16, 2025 — advancing a strategy focused on revitalizing legacy Texas oil fields through modern recovery technologies and disciplined growth.",
    body: [
      "Texas Coastal Energy Corp announced the formal change of control and operational stewardship of West Texas Resources, Inc., effective September 16, 2025.",
      "The transaction established the leadership and operating platform behind the company's current strategy: revitalizing legacy Texas oil and gas fields through modern recovery technologies, regulatory compliance, and disciplined growth.",
      "Under the new stewardship, West Texas Resources has focused on restoring its public-company standing, assembling its reactivation portfolio, and positioning the business for long-term asset value creation.",
    ],
  },
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}
