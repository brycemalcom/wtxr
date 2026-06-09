import Link from "next/link";
import { company, forwardLookingShort } from "@/lib/site-content";
import { footerLinks } from "@/lib/investor-links";
import { GradientDivider } from "@/components/ui/GradientDivider";

const COLUMNS = [
  { title: "Company", links: footerLinks.company },
  { title: "Investors", links: footerLinks.investors },
  { title: "Legal", links: footerLinks.legal },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-surface/40">
      <div className="absolute inset-x-0 top-0">
        <GradientDivider />
      </div>

      <div className="shell container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-energy font-display text-sm font-bold text-black">
                W
              </span>
              <span className="font-display text-base font-bold tracking-tight">
                {company.name}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-text-secondary">
              {company.footerDescription}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-warm bg-surface-warm/40 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              <span className="font-mono text-xs tracking-widest text-text-primary">
                {company.market}: {company.ticker}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-text-primary">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-text-secondary transition-colors hover:text-brand-orange"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-text-secondary transition-colors hover:text-brand-orange"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-border-subtle pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-text-muted">
            {forwardLookingShort}
          </p>
          <div className="mt-6 flex flex-col gap-3 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {company.copyrightYear} {company.name} All rights reserved.
            </p>
            <p className="font-mono tracking-wider">
              {company.market}:{" "}
              <span className="text-brand-amber">{company.ticker}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
