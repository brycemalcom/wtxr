"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { operatingModel } from "@/lib/site-content";
import { EASE } from "@/lib/motion";

export function OperatingModel() {
  const trackRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.65", "end 0.55"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.5,
  });

  return (
    <Section id="model" tone="warm">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Kicker>{operatingModel.kicker}</Kicker>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {operatingModel.headline}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary">
              {operatingModel.intro}
            </p>
          </motion.div>
        </div>

        {/* Animated process track */}
        <ol ref={trackRef} className="relative pl-16 sm:pl-20">
          {/* Spine */}
          <div className="absolute bottom-2 left-[1.6rem] top-2 w-px bg-border-subtle sm:left-[1.85rem]" />
          <motion.div
            className="absolute left-[1.6rem] top-2 w-px origin-top bg-gradient-to-b from-brand-red via-brand-orange to-brand-amber sm:left-[1.85rem]"
            style={{ scaleY: lineScale, bottom: "0.5rem" }}
          />

          {operatingModel.cards.map((step, i) => (
            <motion.li
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: EASE },
                },
              }}
              className="group relative pb-14 last:pb-0"
            >
              {/* Node */}
              <motion.span
                className="absolute -left-16 top-0 flex h-14 w-14 items-center justify-center rounded-full border border-border-warm bg-surface text-sm font-semibold text-brand-amber sm:-left-20 sm:h-[3.4rem] sm:w-[3.4rem]"
                variants={{
                  hidden: { scale: 0.6, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.5, ease: EASE, delay: 0.1 },
                  },
                }}
              >
                <span className="font-mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="absolute inset-0 -z-10 rounded-full bg-brand-orange/0 blur-md transition-all duration-500 group-hover:bg-brand-orange/30" />
              </motion.span>

              <h3 className="relative font-display text-xl font-semibold text-text-primary sm:text-2xl">
                {step.title}
              </h3>
              <p className="relative mt-3 max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
