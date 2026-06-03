import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CardGrid } from "@/components/ui/CardGrid";
import { Timeline } from "@/components/ui/Timeline";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { operationsPage } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Operations",
  description:
    "WTXR's operations focus on restoring value from mature oil and gas fields through disciplined field assessment, compliance, workovers, lift, and optimization.",
};

export default function OperationsPage() {
  return (
    <>
      <PageHero
        kicker={operationsPage.hero.kicker}
        headline={operationsPage.hero.headline}
        copy={operationsPage.hero.copy}
      />

      {/* Operating Strategy */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <AnimatedSection>
            <Kicker>{operationsPage.strategy.kicker}</Kicker>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl">
              {operationsPage.strategy.headline}
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              {operationsPage.strategy.copy}
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Operating Workflow */}
      <Section tone="warm">
        <SectionHeader
          kicker={operationsPage.workflow.kicker}
          headline={operationsPage.workflow.headline}
        />
        <div className="mt-14">
          <Timeline steps={operationsPage.workflow.steps} />
        </div>
      </Section>

      {/* Operating Priorities */}
      <Section>
        <SectionHeader
          kicker={operationsPage.priorities.kicker}
          headline={operationsPage.priorities.headline}
        />
        <CardGrid
          cards={operationsPage.priorities.cards}
          columns={4}
          className="mt-14"
        />
        <div className="mt-14 flex flex-wrap gap-4">
          <Button href="/technology">View Recovery Methods</Button>
          <Button href="/contact" variant="secondary">
            Contact WTXR
          </Button>
        </div>
      </Section>
    </>
  );
}
