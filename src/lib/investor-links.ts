/* ------------------------------------------------------------------
   Investor materials & resource links.
   Replace `href` and `status` as real materials become available.
------------------------------------------------------------------- */

export type InvestorMaterial = {
  icon: "file" | "presentation" | "news" | "disclosure";
  title: string;
  description: string;
  cta: string;
  href: string;
  disabled?: boolean;
};

export const investorMaterials: InvestorMaterial[] = [
  {
    icon: "file",
    title: "Company Overview",
    description: "Download or view the latest WTXR company overview.",
    cta: "View Overview",
    href: "#",
  },
  {
    icon: "presentation",
    title: "Investor Presentation",
    description: "Access the latest investor presentation when available.",
    cta: "Coming Soon",
    href: "#",
    disabled: true,
  },
  {
    icon: "news",
    title: "Press Releases",
    description: "Read the latest company news and operational updates.",
    cta: "View Newsroom",
    href: "/newsroom",
  },
  {
    icon: "disclosure",
    title: "Public Disclosures",
    description: "Access public filings and disclosure resources.",
    cta: "View Disclosures",
    href: "#",
  },
];

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Operations", href: "/operations" },
    { label: "Technology", href: "/technology" },
    { label: "Contact", href: "/contact" },
  ],
  investors: [
    { label: "Investor Relations", href: "/investors" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Public Disclosures", href: "/investors" },
    { label: "Investor Contact", href: "/investors#investor-contact" },
  ],
  legal: [
    { label: "Forward-Looking Statements", href: "/investors#disclaimer" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
} as const;
