import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CardGrid } from "@/components/ui/CardGrid";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { aboutPage } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "West Texas Resources, Inc. (WTXR) is a specialized energy company focused on acquiring, remediating, reactivating, and redeveloping mature oil and gas fields.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker={aboutPage.hero.kicker}
        headline={aboutPage.hero.headline}
        copy={aboutPage.hero.copy}
      />

      {/* Who We Are */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <AnimatedSection>
            <Kicker>Who We Are</Kicker>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl">
              {aboutPage.whoWeAre.headline}
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="space-y-5">
              {aboutPage.whoWeAre.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-text-secondary sm:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* What Makes WTXR Different */}
      <Section tone="warm">
        <SectionHeader
          kicker={aboutPage.different.kicker}
          headline={aboutPage.different.headline}
        />
        <CardGrid cards={aboutPage.different.cards} columns={2} className="mt-14" />
      </Section>

      {/* Mission */}
      <section className="relative scroll-mt-24 overflow-hidden border-t border-border-subtle py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-dark" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/10 blur-[140px]" />
        <AnimatedSection className="shell container-px text-center">
          <div className="flex flex-col items-center">
            <Kicker>{aboutPage.mission.kicker}</Kicker>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="text-energy">{aboutPage.mission.headline}</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              {aboutPage.mission.copy}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Values */}
      <Section>
        <SectionHeader
          kicker={aboutPage.values.kicker}
          headline={aboutPage.values.headline}
        />
        <CardGrid
          cards={aboutPage.values.cards}
          columns={4}
          numbered
          className="mt-14"
        />
        <div className="mt-14 flex flex-wrap gap-4">
          <Button href="/operations">Explore Operations</Button>
          <Button href="/investors" variant="secondary">
            Investor Relations
          </Button>
        </div>
      </Section>
    </>
  );
}
