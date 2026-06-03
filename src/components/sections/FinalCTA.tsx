"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { finalCta } from "@/lib/site-content";
import { fadeUp } from "@/lib/motion";

export function FinalCTA() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden border-t border-border-subtle py-28">
      <div className="absolute inset-0 -z-10 radial-warm" />
      <div className="absolute inset-0 -z-10 reservoir-grid opacity-[0.04]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-orange/15 blur-[140px]" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="shell container-px text-center"
      >
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          <span className="text-gradient">{finalCta.headline}</span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {finalCta.body}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href={finalCta.primaryCta.href}>
            {finalCta.primaryCta.label}
          </Button>
          <Button href={finalCta.secondaryCta.href} variant="secondary">
            {finalCta.secondaryCta.label}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
