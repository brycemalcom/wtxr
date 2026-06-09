"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { investorSnapshot } from "@/lib/site-content";
import { fadeUp, stagger, fadeUpItem } from "@/lib/motion";

export function InvestorSnapshot() {
  return (
    <Section id="investors">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-3xl"
      >
        <Kicker>{investorSnapshot.kicker}</Kicker>
        <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {investorSnapshot.headline}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
          {investorSnapshot.paragraphs[0]}
        </p>
      </motion.div>

      {/* Why WTXR — editorial thesis list */}
      <div className="mt-16">
        <p className="kicker mb-2">Why WTXR</p>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="border-t border-border-subtle"
        >
          {investorSnapshot.cards.map((point) => (
            <motion.div
              key={point.title}
              variants={fadeUpItem}
              className="group grid gap-2 border-b border-border-subtle py-7 md:grid-cols-[0.85fr_1.15fr] md:gap-12"
            >
              <h3 className="flex items-start gap-4 font-display text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
                <span className="mt-3 h-1.5 w-6 shrink-0 rounded-full bg-gradient-energy transition-all duration-300 group-hover:w-9" />
                {point.title}
              </h3>
              <p className="text-base leading-relaxed text-text-secondary md:pt-1.5">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button href={investorSnapshot.primaryCta.href}>
          {investorSnapshot.primaryCta.label}
        </Button>
        <Button href={investorSnapshot.secondaryCta.href} variant="secondary">
          {investorSnapshot.secondaryCta.label}
        </Button>
      </div>
    </Section>
  );
}
