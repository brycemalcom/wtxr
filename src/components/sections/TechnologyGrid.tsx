"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { FieldCrossSection } from "@/components/ui/FieldCrossSection";
import { FieldReadout } from "@/components/ui/FieldReadout";
import { cn } from "@/lib/utils";
import { technologyPreview } from "@/lib/site-content";
import { EASE } from "@/lib/motion";

export function TechnologyGrid() {
  const methods = technologyPreview.cards;
  const [active, setActive] = useState(0);
  const current = methods[active];

  return (
    <Section id="technology" tone="warm">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="max-w-3xl"
      >
        <Kicker>{technologyPreview.kicker}</Kicker>
        <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {technologyPreview.headline}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
          {technologyPreview.intro}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16"
      >
        {/* Method list */}
        <div className="order-2 lg:order-1">
          {methods.map((m, i) => {
            const isActive = i === active;
            return (
              <button
                key={m.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative block w-full border-b border-border-subtle py-6 pl-6 text-left first:border-t lg:first:border-t-0"
              >
                {isActive && (
                  <motion.span
                    layoutId="tech-active-bar"
                    className="absolute left-0 top-1/2 h-9 w-[2px] -translate-y-1/2 rounded-full bg-gradient-energy"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "mt-0.5 shrink-0 transition-colors duration-300",
                      isActive
                        ? "text-brand-amber"
                        : "text-text-muted group-hover:text-text-secondary"
                    )}
                  >
                    <Icon name={m.icon} className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3
                        className={cn(
                          "font-display text-xl font-semibold tracking-tight transition-colors duration-300 sm:text-2xl",
                          isActive
                            ? "text-text-primary"
                            : "text-text-secondary group-hover:text-text-primary"
                        )}
                      >
                        {m.title}
                      </h3>
                      <ArrowRight
                        className={cn(
                          "hidden h-5 w-5 shrink-0 text-brand-orange transition-all duration-300 lg:block",
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-2 opacity-0"
                        )}
                      />
                    </div>
                    {/* Mobile: description inline as a highlight */}
                    <p className="mt-2 text-sm leading-relaxed text-text-muted lg:hidden">
                      {m.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Master field cross-section */}
        <div className="order-1 lg:order-2">
          <div className="sticky top-28 overflow-hidden rounded-3xl border border-border-subtle bg-surface/50">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 reservoir-grid opacity-[0.05]" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-orange/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-brand-red/10 blur-3xl" />
              <span className="absolute left-5 top-4 z-10 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-text-muted">
                Field Cross-Section
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-5 top-4 z-10 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-brand-amber"
                >
                  {current.title}
                </motion.span>
              </AnimatePresence>
              <div className="absolute inset-0 p-5 pb-14">
                <FieldCrossSection active={current.icon} />
              </div>
              <FieldReadout active={current.icon} />
            </div>
            <div className="hidden border-t border-border-subtle p-8 lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <h3 className="font-display text-2xl font-bold tracking-tight text-text-primary">
                    {current.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-12">
        <Button href={technologyPreview.cta.href} variant="secondary">
          {technologyPreview.cta.label}
        </Button>
      </div>
    </Section>
  );
}
