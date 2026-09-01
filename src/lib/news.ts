/* ------------------------------------------------------------------
   Newsroom content — real West Texas Resources, Inc. (OTC: WTXR)
   press releases. Each item has an on-site summary page and links
   to the official source (ACCESS Newswire / PR Newswire / EIN Presswire) as the
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
    slug: "texas-coastal-energy-operator-approval",
    title:
      "West Texas Resources Subsidiary Texas Coastal Energy Approved as Oil and Gas Operator by the Railroad Commission of Texas",
    category: "Operations",
    displayCategory: "Company Update",
    date: "September 1, 2026",
    source: "ACCESS Newswire",
    sourceUrl:
      "https://www.accessnewswire.com/newsroom/en/oil-gas-and-energy/west-texas-resources-subsidiary-texas-coastal-energy-approved-as-oil-and-gas-ope-1215034",
    excerpt:
      "Texas Coastal Energy, WTXR's wholly owned subsidiary, received Railroad Commission of Texas approval to operate oil and gas properties in the state, effective August 2026.",
    body: [
      "West Texas Resources announced that its wholly owned subsidiary, Texas Coastal Energy, has been licensed and approved by the Railroad Commission of Texas to serve as an oil and gas operator in the state, effective August 2026.",
      "The approval authorizes Texas Coastal Energy to manage and operate oil and gas leases and existing wells and, where applicable, oversee drilling and related field activity under Texas regulatory requirements.",
      "As WTXR's dedicated operating arm, the subsidiary is expected to manage field operations, coordinate technical work, oversee existing wells, and support future drilling, rehabilitation, workover, and production initiatives.",
      { heading: "$50,000 Blanket Bond" },
      "WTXR expects to post a $50,000 blanket financial-assurance bond for Texas Coastal Energy during September 2026. Under the current Railroad Commission structure described in the release, that tier applies to operators with 11 to 99 wells.",
      "The company said its current well count and the number of wells included in its broader reactivation program are being reconciled and will be reported separately once confirmed.",
      { heading: "Building an Integrated Operating Platform" },
      "Management described the approval as a key step toward operating a larger portfolio directly. WTXR continues to evaluate producing properties, development-stage assets, wells, leases, equipment, and related energy assets for potential rehabilitation, optimization, and increased production.",
      { heading: "About West Texas Resources, Inc." },
      "West Texas Resources, Inc. is an oil and gas company focused on acquiring, developing, rehabilitating, and optimizing properties with production and development potential. Through Texas Coastal Energy, the company is building an integrated platform to manage and develop oil and gas properties directly.",
      { heading: "Forward-Looking Statements" },
      "The official release includes forward-looking statements concerning planned expansion, future drilling, rehabilitation and production activity, potential acquisitions, operating capabilities, financial assurance, and the anticipated role of Texas Coastal Energy. Actual results may differ because of risks and uncertainties.",
    ],
    featured: true,
  },
  {
    slug: "audit-s1-otcqb-strategy-update",
    title:
      "West Texas Resources Inc., Reports Updates on PCAOB Audit Progression, S-1 Filing, and OTCQB Up-Listing Strategy",
    category: "Investor Relations",
    displayCategory: "Investor Relations",
    date: "August 18, 2026",
    source: "ACCESS Newswire",
    sourceUrl:
      "https://www.accessnewswire.com/newsroom/en/oil-gas-and-energy/west-texas-resources-inc.-reports-updates-on-pcaob-audit-progression-s-1-filing-1208689",
    excerpt:
      "WTXR reported progress on its independent audit and Form S-1 preparation, with both initiatives targeted for Q3 2026 as the company works toward SEC reporting and OTCQB qualification.",
    body: [
      "West Texas Resources provided an update on its audit, SEC reporting, and capital-markets initiatives as it works to strengthen its corporate infrastructure and pursue OTCQB Venture Market qualification.",
      "Management said the independent audit had advanced over the preceding several weeks and was expected to be completed during the third quarter of 2026.",
      "The company also reported that preparation of a Form S-1 registration statement was substantially complete. After the audit is finished and the required audited financial information is incorporated, WTXR intends to file the registration statement with the U.S. Securities and Exchange Commission.",
      { heading: "Broader Capital-Markets Strategy" },
      "WTXR described OTCQB qualification as a near-term objective. Over the medium term, and only after meeting applicable financial, governance, share-price, and other requirements, the company expects to evaluate a senior U.S. exchange listing, including Nasdaq, the New York Stock Exchange, or the developing Texas Stock Exchange.",
      "The company also intends to explore a secondary European listing, with Germany among its preferred markets, as part of an effort to broaden access for international investors.",
      { heading: "Expanding the Business" },
      "Alongside its reporting initiatives, WTXR said its primary operating focus remains the acquisition, development, rehabilitation, and optimization of oil and gas assets. It also plans to evaluate technologies and strategic opportunities that could complement its energy operations.",
      { heading: "About West Texas Resources, Inc." },
      "West Texas Resources, Inc. is an oil and gas company pursuing organic growth and complementary acquisitions intended to expand its operating platform and create long-term shareholder value.",
      { heading: "Forward-Looking Statements" },
      "The official release cautions that the audit, Form S-1 filing, OTCQB qualification, any secondary or senior-exchange listing, and contemplated investments or acquisitions remain subject to completion, applicable requirements, approvals, and other risks and uncertainties.",
    ],
  },
  {
    slug: "technical-capabilities-operational-platform-expansion",
    title:
      "West Texas Resources Announces Strategic Expansion of Technical Capabilities and Operational Platform",
    category: "Operations",
    displayCategory: "Company Update",
    date: "July 21, 2026",
    source: "ACCESS Newswire",
    sourceUrl:
      "https://www.accessnewswire.com/newsroom/en/oil-gas-and-energy/west-texas-resources-announces-strategic-expansion-of-technical-capabilities-and-1193820",
    excerpt:
      "WTXR announced additions in land management, petroleum engineering, and field personnel to support asset evaluation, well rehabilitation, production optimization, and future acquisitions.",
    body: [
      "West Texas Resources announced an expansion of its technical, engineering, and land-management capabilities to support both organic development and acquisition-led growth.",
      "The company said it was adding a Land Manager, a senior petroleum engineer, and additional field personnel. The expanded team is intended to support asset evaluation, workover planning, well rehabilitation, production optimization, and the integration of future acquisitions.",
      { heading: "Organic Development" },
      "Planned organic-growth work includes well testing, infrastructure upgrades, equipment installation, production restarts, and the application of modern technical practices across WTXR's asset base.",
      { heading: "Acquisition Platform" },
      "In parallel, WTXR continues to evaluate producing properties, development-stage assets, leases, wells, equipment, and complementary energy businesses. Management said the company is also improving internal planning, financial reporting, and corporate governance to support future operations, acquisitions, and financing activity.",
      { heading: "About West Texas Resources, Inc." },
      "West Texas Resources, Inc. is an emerging oil and gas company focused on acquiring, developing, rehabilitating, and optimizing energy assets through organic development, strategic acquisitions, and partnerships with experienced industry professionals.",
      { heading: "Forward-Looking Statements" },
      "The official release contains forward-looking statements regarding staffing, operational activity, acquisitions, financing, production, and growth. These plans remain subject to execution risks, market conditions, financing availability, and other uncertainties.",
    ],
  },
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
      "FOR IMMEDIATE RELEASE",
      "BRENHAM, Texas, July 14, 2026 – West Texas Resources, Inc. (OTCID: WTXR) (“WTXR” or the “Company”) today announced the acquisition of a package of producing oil and gas assets consisting of eight producing wells in Jackson County, Texas, and one producing gas well in Fort Bend County, Texas.",
      "The acquired properties are expected to significantly expand the Company’s production profile and strengthen its long-term cash flow generation as WTXR continues executing its strategy of building a diversified portfolio of producing energy assets.",
      "According to current engineering and operational estimates, the eight Jackson County wells are expected to produce a combined average of approximately 300 barrels of oil per day (BOPD) together with approximately 1.5 million cubic feet of natural gas per day (MMCFD).",
      "The producing gas well located in Fort Bend County is expected to produce approximately 300 MCF of natural gas per day, together with associated condensate production.",
      "Based on current commodity prices of approximately $70 per barrel of oil and $3.20 per MCF of natural gas, management estimates that the acquired properties have the potential to generate approximately:",
      {
        list: [
          "Approximately $630,000 per month in gross oil revenue.",
          "Approximately $145,000 per month in gross natural gas revenue.",
        ],
      },
      "This represents estimated combined gross production revenue of approximately $775,000 per month before royalties, operating expenses, taxes and other customary deductions.",
      "The Company further estimates that approximately $1.5 million will be invested for hook-ups, facility upgrades, and minor repairs necessary to optimize production and assume full operational control. Based on current production projections and commodity prices, management believes this investment could potentially be recovered in approximately two months, although actual results may differ depending on production performance, commodity prices, operating costs, and other factors.",
      "Operations on the acquired properties will be conducted through Texas Coastal Energy (TXCE), the Company’s wholly owned operating subsidiary, which will assume operational responsibility for the assets.",
      "Following completion of the transition process, TXCE intends to conduct additional production optimization activities, including updated deliverability testing and operational reviews designed to maximize long-term production and recovery.",
      "Donald H. Goree, Chief Executive Officer of West Texas Resources, stated:",
      "“This acquisition represents another important milestone in executing our strategy of acquiring high-quality producing energy assets with attractive cash flow characteristics. These properties immediately strengthen our production base while providing significant opportunities for operational improvements and future reserve development. Through Texas Coastal Energy, we intend to optimize these assets and continue building a strong operating platform capable of creating substantial long-term value for our shareholders.”",
      "The Company expects to provide additional operational updates as the transition progresses and as Texas Coastal Energy completes its initial evaluation and optimization program.",
      { heading: "About West Texas Resources, Inc." },
      "West Texas Resources, Inc. (OTCID: WTXR) is an energy company focused on the acquisition, development, and operation of producing oil and natural gas assets throughout the United States. Through its wholly owned subsidiary, Texas Coastal Energy, the Company seeks to acquire cash-flowing energy properties while implementing operational improvements designed to enhance production, reserves, and long-term shareholder value. WTXR is also expanding its strategic initiatives through the acquisition of technology assets that support innovation and efficiency across the energy sector.",
      { heading: "Forward-Looking Statements" },
      "This press release contains forward-looking statements within the meaning of the Private Securities Litigation Reform Act of 1995. These statements include, but are not limited to, statements regarding expected production volumes, estimated revenues, anticipated cash flow, reserve potential, capital expenditures, operational improvements, optimization plans, payback periods, future acquisitions, and other statements that are not historical facts. Forward-looking statements are based on management’s current expectations, estimates, and assumptions and are subject to numerous risks and uncertainties that could cause actual results to differ materially from those expressed or implied. Such risks include, among others, fluctuations in oil and natural gas prices, production performance, reserve estimates, operational risks, regulatory approvals, financing availability, market conditions, and other factors beyond the Company’s control. Readers are cautioned not to place undue reliance on these forward-looking statements, which speak only as of the date hereof. The Company undertakes no obligation to update or revise any forward-looking statements except as required by applicable law.",
    ],
  },
  {
    slug: "pcaob-audit-firm-engagement",
    title:
      "West Texas Resources Engages PCAOB Audit Firm to Advance OTCQB Uplisting Strategy",
    category: "Investor Relations",
    displayCategory: "Company Update",
    date: "July 9, 2026",
    source: "ACCESS Newswire",
    sourceUrl:
      "https://www.accessnewswire.com/newsroom/en/oil-gas-and-energy/west-texas-resources-engages-pcaob-audit-firm-to-advance-otcqb-uplisting-strateg-1189004",
    excerpt:
      "WTXR engaged a PCAOB-registered accounting firm to conduct an independent financial-statement audit in support of enhanced reporting standards and a planned OTCQB application.",
    body: [
      "West Texas Resources announced that it had engaged a Public Company Accounting Oversight Board-registered public accounting firm to conduct an independent audit of the company's financial statements.",
      "The engagement is intended to strengthen reporting standards, corporate governance, and transparency. Following completion of the audit and satisfaction of applicable OTC Markets requirements, WTXR intends to apply for quotation on the OTCQB Venture Market.",
      "The announcement followed the company's completion of current OTC Markets reporting and continued development of its Texas oil and gas assets.",
      { heading: "Operating Platform" },
      "WTXR also reported continued work to expand its operating platform through Texas Coastal Energy Corp., its wholly owned subsidiary. Management said direct operational control should improve efficiency, reduce costs, and provide greater control over future production-enhancement work.",
      { heading: "About West Texas Resources, Inc." },
      "West Texas Resources, Inc. (OTCID: WTXR) is an independent energy company focused on the acquisition, redevelopment, and operation of oil and gas assets in Texas. Its strategy centers on disciplined acquisitions, well reactivation, and operational execution.",
      { heading: "Forward-Looking Statements" },
      "The official release notes that audit completion, OTCQB qualification, financing, acquisitions, production increases, operating performance, and any future exchange listing are subject to risks, uncertainties, and regulatory approvals.",
    ],
  },
  {
    slug: "chairman-letter-spring-2026",
    title:
      "West Texas Resources Issues Spring 2026 Chairman's Letter as Company Advances Toward OTCQB, Expands Operating Capability, and Evaluates High-Impact Gulf Coast Acquisition",
    category: "Investor Relations",
    displayCategory: "Investor Relations",
    date: "June 11, 2026",
    source: "ACCESS Newswire",
    sourceUrl:
      "https://www.accessnewswire.com/newsroom/en/oil-gas-and-energy/west-texas-resources-issues-spring-2026-chairmans-letter-as-company-advances-tow-1174893",
    excerpt:
      "WTXR's Spring 2026 Chairman's Letter outlines completed OTC Markets reporting for year-end 2025 and Q1 2026, a planned operational transition to a licensed in-house operator, audit engagement bids from PCAOB-qualified firms in support of an OTCQB uplisting, and the evaluation of a Gulf Coast acquisition with approximately $185,000 per month in current net operating oil revenues.",
    body: [
      "BRENHAM, Texas – June 11, 2026 – West Texas Resources, Inc. (OTC PINK: WTXR) released its Spring 2026 Chairman's Letter to Shareholders, outlining the Company's continued progress in regulatory compliance, operational capability, financial reporting, and strategic growth initiatives. The letter highlights WTXR's strengthened market position, operational transition through its subsidiary Texas Coastal Energy Corp., and the evaluation of a significant Gulf Coast acquisition opportunity.",
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
