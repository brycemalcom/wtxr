"use client";

import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { FieldStateSchematic } from "@/components/ui/FieldStateSchematic";
import { cn } from "@/lib/utils";
import { operationsPreview } from "@/lib/site-content";
import { EASE } from "@/lib/motion";

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function OperationsTimeline() {
  const { transformation, sequence } = operationsPreview;

  return (
    <Section id="operations">
      {/* Header + operating lens */}
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-7"
        >
          <Kicker>{operationsPreview.kicker}</Kicker>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {operationsPreview.headline}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {operationsPreview.intro}
          </p>
        </motion.div>

        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5 lg:border-l lg:border-border-subtle lg:pl-10"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
            {operationsPreview.lens}
          </p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-5 flex flex-wrap gap-2.5"
          >
            {operationsPreview.criteria.map((c) => (
              <motion.span
                key={c}
                variants={item}
                className="rounded-full border border-border-subtle bg-surface/50 px-3.5 py-1.5 text-sm text-text-secondary transition-colors duration-300 hover:border-brand-orange/40 hover:text-text-primary"
              >
                {c}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Dormant -> Productive transformation diptych */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-16 grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]"
      >
        <StatePanel
          tone="dormant"
          label={transformation.from.label}
          caption={transformation.from.caption}
          tags={transformation.from.tags}
        />

        <motion.div variants={item} className="flex items-center justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border-warm bg-surface-warm/40">
            <ArrowRight className="h-5 w-5 rotate-90 text-brand-orange md:rotate-0" />
          </span>
        </motion.div>

        <StatePanel
          tone="productive"
          label={transformation.to.label}
          caption={transformation.to.caption}
          tags={transformation.to.tags}
        />
      </motion.div>

      {/* Reactivation sequence — number-free textual flow */}
      <div className="mt-16">
        <p className="kicker mb-5">Reactivation sequence</p>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-x-3 gap-y-2"
        >
          {sequence.map((step, i) => (
            <motion.span
              key={step}
              variants={item}
              className="inline-flex items-center gap-3"
            >
              <span className="font-display text-lg font-semibold tracking-tight text-text-secondary transition-colors duration-300 hover:text-text-primary sm:text-xl">
                {step}
              </span>
              {i < sequence.length - 1 && (
                <ArrowRight className="h-4 w-4 text-brand-orange/70" />
              )}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="mt-12">
        <Button href={operationsPreview.cta.href} variant="secondary">
          {operationsPreview.cta.label}
        </Button>
      </div>
    </Section>
  );
}

function StatePanel({
  tone,
  label,
  caption,
  tags,
}: {
  tone: "dormant" | "productive";
  label: string;
  caption: string;
  tags: readonly string[];
}) {
  const dormant = tone === "dormant";
  return (
    <motion.div
      variants={fade}
      className={cn(
        "relative overflow-hidden rounded-3xl border bg-surface/40",
        dormant ? "border-border-subtle" : "border-border-warm"
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <FieldStateSchematic active={!dormant} />
        <span
          className={cn(
            "absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur",
            dormant
              ? "border-border-subtle text-text-secondary"
              : "border-border-warm text-brand-amber"
          )}
        >
          {!dormant && (
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-orange" />
          )}
          {label}
        </span>
      </div>

      <div className="border-t border-border-subtle p-6">
        <p className="text-sm leading-relaxed text-text-secondary">{caption}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className={cn(
                "rounded-md border px-2.5 py-1 font-mono text-[0.7rem] tracking-wide",
                dormant
                  ? "border-border-subtle text-text-muted"
                  : "border-border-warm text-brand-amber"
              )}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
