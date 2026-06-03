"use client";

import { motion } from "motion/react";
import { Kicker } from "@/components/ui/Kicker";
import { mission } from "@/lib/site-content";
import { fadeUp } from "@/lib/motion";

export function Mission() {
  return (
    <section
      id="mission"
      className="relative scroll-mt-24 overflow-hidden border-t border-border-subtle py-28 sm:py-36"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-dark" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/10 blur-[150px]" />

      <div className="shell container-px text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center"
        >
          <Kicker>{mission.kicker}</Kicker>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-energy">{mission.headline}</span>
          </h2>
          <div className="mt-8 max-w-2xl space-y-5">
            {mission.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-text-secondary sm:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
