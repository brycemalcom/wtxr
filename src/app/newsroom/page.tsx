import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NewsroomList } from "@/components/sections/NewsroomList";
import { newsroomPage } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Company announcements, operational updates, and investor communications from West Texas Resources, Inc. (WTXR).",
};

export default function NewsroomPage() {
  return (
    <>
      <PageHero
        kicker={newsroomPage.hero.kicker}
        headline={newsroomPage.hero.headline}
        copy={newsroomPage.hero.copy}
      />

      <Section divider={false}>
        <NewsroomList categories={newsroomPage.categories} />
      </Section>

      <Section tone="warm">
        <SectionHeader
          align="center"
          kicker="Investor Relations"
          headline="Follow WTXR's Progress"
          intro="Stay informed on operational milestones, investor communications, and public-company news as West Texas Resources advances its legacy field redevelopment strategy."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/investors">Investor Relations</Button>
          <Button href="/contact" variant="secondary">
            Contact WTXR
          </Button>
        </div>
      </Section>
    </>
  );
}
