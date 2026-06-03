"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { assetFocus } from "@/lib/site-content";
import { stagger, fadeUpItem } from "@/lib/motion";

const SPANS = [
  "sm:col-span-2 lg:col-span-4", // Producing Wells — wide feature
  "lg:col-span-2", // Shut-In Wells
  "lg:col-span-2", // Workover Candidates
  "lg:col-span-2", // Recompletion Candidates
  "lg:col-span-2", // Legacy Infrastructure
  "sm:col-span-2 lg:col-span-6", // Field Expansion — full-width feature
];

export function AssetFocus() {
  return (
    <Section id="assets" tone="warm">
      <SectionHeader
        kicker={assetFocus.kicker}
        headline={assetFocus.headline}
        intro={assetFocus.intro}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
      >
        {assetFocus.cards.map((card, i) => {
          const wide = i === 0;
          const banner = i === 5;
          const feature = wide || banner;

          return (
            <motion.div
              key={card.title}
              variants={fadeUpItem}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface/50 p-6 transition-all duration-500 hover:border-brand-orange/40 hover:bg-surface-warm/30",
                feature && "sm:p-8",
                SPANS[i]
              )}
            >
              {feature && (
                <>
                  <div className="absolute inset-0 -z-10 reservoir-grid opacity-[0.05]" />
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-orange/12 blur-3xl transition-opacity duration-500 group-hover:bg-brand-orange/20" />
                </>
              )}

              {banner ? (
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-12">
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon name={card.icon} className="h-7 w-7 text-brand-amber" />
                      <span className="rounded-full border border-border-warm px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-brand-amber">
                        Growth
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-text-primary">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-text-secondary md:max-w-xl">
                    {card.description}
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <Icon
                      name={card.icon}
                      className={cn(
                        "text-brand-amber",
                        wide ? "h-7 w-7" : "h-5 w-5"
                      )}
                    />
                    {wide && (
                      <span className="rounded-full border border-border-warm px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-brand-amber">
                        Near-term
                      </span>
                    )}
                  </div>
                  <h3
                    className={cn(
                      "mt-4 font-display font-semibold tracking-tight text-text-primary",
                      wide ? "text-2xl" : "text-lg"
                    )}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 leading-relaxed text-text-secondary",
                      wide ? "max-w-md text-base" : "text-sm"
                    )}
                  >
                    {card.description}
                  </p>
                </>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
