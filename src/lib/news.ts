/* ------------------------------------------------------------------
   Newsroom content — real West Texas Resources, Inc. (OTC: WTXR)
   press releases. Each item links out to the official source
   (PR Newswire / EIN Presswire) as the system of record.

   To add a release: prepend a new entry (newest first), set a real
   date, category, factual excerpt, and the official sourceUrl.
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
  },
];
