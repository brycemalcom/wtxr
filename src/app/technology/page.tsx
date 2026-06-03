import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Icon } from "@/components/ui/Icon";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { technologyPage } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "WTXR applies modern petroleum engineering, recovery methods, and field technology to mature reservoirs — reservoir analysis, workovers, lift, stimulation, recompletion, EOR, and surface optimization.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        kicker={technologyPage.hero.kicker}
        headline={technologyPage.hero.headline}
        copy={technologyPage.hero.copy}
      />

      <Section divider={false}>
        <div className="flex flex-col">
          {technologyPage.sections.map((section, i) => (
            <AnimatedSection key={section.title}>
              <div
                className={`grid items-center gap-8 py-12 lg:grid-cols-[0.5fr_0.5fr] lg:gap-16 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="lg:[direction:ltr]">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-brand-amber">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-12 bg-gradient-energy" />
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
                    {section.description}
                  </p>
                </div>

                <div className="lg:[direction:ltr]">
                  <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-3xl border border-border-subtle bg-surface/50">
                    <div className="absolute inset-0 reservoir-grid opacity-[0.06]" />
                    <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-orange/15 blur-3xl" />
                    <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border-warm bg-surface-warm/40 text-brand-amber">
                      <Icon name={section.icon} className="h-10 w-10" />
                    </span>
                  </div>
                </div>
              </div>
              {i < technologyPage.sections.length - 1 ? <GradientDivider /> : null}
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section tone="warm">
        <div className="rounded-3xl border border-border-warm bg-surface-warm/20 p-10 text-center sm:p-14">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            <span className="text-gradient">
              Modern recovery applied to proven reservoirs.
            </span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/operations">Explore Operations</Button>
            <Button href="/investors" variant="secondary">
              Investor Relations
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
