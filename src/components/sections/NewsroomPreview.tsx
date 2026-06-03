"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { NewsCard } from "@/components/ui/NewsCard";
import { newsroomPreview } from "@/lib/site-content";
import { stagger } from "@/lib/motion";
import { news } from "@/lib/news";

export function NewsroomPreview() {
  return (
    <Section id="newsroom" tone="warm">
      <SectionHeader
        kicker={newsroomPreview.kicker}
        headline={newsroomPreview.headline}
        intro={newsroomPreview.intro}
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {news.slice(0, 3).map((item) => (
          <NewsCard key={item.slug} item={item} />
        ))}
      </motion.div>
      <div className="mt-12">
        <Button href={newsroomPreview.cta.href} variant="secondary">
          {newsroomPreview.cta.label}
        </Button>
      </div>
    </Section>
  );
}
