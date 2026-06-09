import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CardGrid } from "@/components/ui/CardGrid";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { Faq } from "@/components/ui/Faq";
import { ContactForm } from "@/components/ui/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Icon } from "@/components/ui/Icon";
import { NewsCard } from "@/components/ui/NewsCard";
import { StockQuoteHeader, StockChart } from "@/components/ui/StockWidget";
import { investorsPage, company, forwardLookingDisclaimer } from "@/lib/site-content";
import { investorMaterials } from "@/lib/investor-links";
import { news } from "@/lib/news";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "West Texas Resources, Inc. (WTXR) investor relations — investment thesis, corporate snapshot, materials, and disclosures.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        kicker={investorsPage.hero.kicker}
        headline={investorsPage.hero.headline}
        copy={investorsPage.hero.copy}
        ticker={`${company.market}: ${company.ticker}`}
      >
        <div className="flex flex-wrap gap-4">
          <Button href={investorsPage.hero.primaryCta.href} variant="secondary">
            {investorsPage.hero.primaryCta.label}
          </Button>
          <Button href={investorsPage.hero.secondaryCta.href}>
            {investorsPage.hero.secondaryCta.label}
          </Button>
        </div>
      </PageHero>

      {/* Stock Information */}
      <Section id="stock" tone="warm">
        <SectionHeader
          kicker="Stock Information"
          headline="OTC: WTXR"
          intro="West Texas Resources, Inc. trades on the OTC Markets under the symbol WTXR."
        />
        <AnimatedSection className="mt-10">
          <StockQuoteHeader />
          <div className="mt-6">
            <StockChart />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs leading-relaxed text-text-muted">
              Market data provided by TradingView. OTC quotes may be delayed.
            </p>
            <a
              href="https://www.otcmarkets.com/stock/WTXR/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-orange transition-colors hover:text-brand-amber"
            >
              View WTXR on OTCMarkets.com →
            </a>
          </div>
        </AnimatedSection>
      </Section>

      {/* Investment Thesis */}
      <Section id="thesis">
        <SectionHeader
          kicker={investorsPage.thesis.kicker}
          headline={investorsPage.thesis.headline}
          intro={investorsPage.thesis.copy}
        />
        <CardGrid cards={investorsPage.thesis.cards} columns={3} className="mt-14" />
      </Section>

      {/* Corporate Snapshot */}
      <Section id="snapshot" tone="warm">
        <SectionHeader
          kicker={investorsPage.snapshot.kicker}
          headline={investorsPage.snapshot.headline}
        />
        <AnimatedSection className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border-subtle">
            <dl className="grid sm:grid-cols-2">
              {investorsPage.snapshot.rows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col gap-1 border-border-subtle bg-surface/50 p-6 ${
                    i % 2 === 0 ? "sm:border-r" : ""
                  } border-t first:border-t-0 sm:[&:nth-child(2)]:border-t-0`}
                >
                  <dt className="text-xs font-medium uppercase tracking-wider text-text-muted">
                    {row.label}
                  </dt>
                  <dd className="text-base font-medium text-text-primary">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimatedSection>
      </Section>

      {/* Investor Materials */}
      <Section id="materials">
        <SectionHeader kicker="Investor Materials" headline="Resources & Disclosures" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {investorMaterials.map((mat) => (
            <div
              key={mat.title}
              className="flex flex-col rounded-2xl border border-border-subtle bg-surface/60 p-6 transition-all duration-500 hover:border-brand-orange/40 hover:bg-surface-warm/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-warm bg-surface-warm/50 text-brand-amber">
                <Icon name={mat.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-text-primary">
                {mat.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                {mat.description}
              </p>
              {mat.disabled ? (
                <span className="mt-5 inline-block text-sm font-medium text-text-muted">
                  {mat.cta}
                </span>
              ) : (
                <Link
                  href={mat.href}
                  className="mt-5 inline-block text-sm font-medium text-brand-orange transition-colors hover:text-brand-amber"
                >
                  {mat.cta} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Latest Updates */}
      <Section id="updates" tone="warm">
        <SectionHeader
          kicker="Latest Updates"
          headline="News & Investor Communications"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
        <div className="mt-10">
          <Button href="/newsroom" variant="secondary">
            Visit Newsroom
          </Button>
        </div>
      </Section>

      {/* Investor FAQ */}
      <Section id="faq">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            kicker={investorsPage.faq.kicker}
            headline={investorsPage.faq.headline}
          />
          <AnimatedSection>
            <Faq items={investorsPage.faq.items} />
          </AnimatedSection>
        </div>
      </Section>

      {/* Investor Contact */}
      <Section id="investor-contact" tone="warm">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker>Investor Relations</Kicker>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl">
              {investorsPage.contact.headline}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary">
              {investorsPage.contact.copy}
            </p>
            <p className="mt-6 font-mono text-sm tracking-widest text-brand-amber">
              {company.market}: {company.ticker}
            </p>
          </div>
          <ContactForm
            fields={[
              { name: "name", label: "Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "company", label: "Company" },
            ]}
            inquiryTypes={["Investor", "Media", "General"]}
            inquiryLabel="Investor / Media / General"
          />
        </div>
      </Section>

      {/* Forward-Looking Disclaimer */}
      <section
        id="disclaimer"
        className="scroll-mt-24 border-t border-border-subtle py-16"
      >
        <div className="shell container-px">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
            Forward-Looking Statement Disclaimer
          </h3>
          <p className="mt-4 max-w-4xl text-xs leading-relaxed text-text-muted">
            {forwardLookingDisclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
