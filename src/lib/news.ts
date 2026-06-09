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

export type NewsItem = {
  slug: string;
  title: string;
  category: NewsCategory;
  displayCategory: string;
  date: string;
  excerpt: string;
  /** On-site summary paragraphs. The official release remains the system of record. */
  body: string[];
  source: string;
  sourceUrl: string;
  featured?: boolean;
};

export const news: NewsItem[] = [
  {
    slug: "chairman-letter-spring-2026",
    title: "Chairman's Spring 2026 Letter to Shareholders",
    category: "Investor Relations",
    displayCategory: "Investor Relations",
    date: "May 28, 2026",
    source: "EIN Presswire",
    sourceUrl:
      "https://www.einpresswire.com/article/915565050/west-texas-resources-inc-wxtr-announces-chairman-s-spring-2026-letter-to-shareholders",
    excerpt:
      "West Texas Resources outlines a period of disciplined advancement across regulatory compliance, operational capability, and strategic growth — including completed OTC Markets updates for year-end 2025 and Q1 2026, reinstatement to OTC.ID and OTC.BB, and engagement of an auditor in support of an OTCQB uplisting.",
    body: [
      "West Texas Resources, Inc. published its Chairman's Spring 2026 letter to shareholders, describing a period of disciplined advancement across three fronts: regulatory compliance, operational capability, and strategic growth.",
      "On the compliance front, the company completed its OTC Markets disclosure updates for year-end 2025 and the first quarter of 2026, and was reinstated to OTC.ID and OTC.BB status. The company also engaged an auditor in support of a planned uplisting to the OTCQB market tier.",
      "The letter frames these steps as the foundation for the company's broader strategy — returning legacy Texas oil and gas assets to production under transparent, public-company standards.",
    ],
    featured: true,
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
