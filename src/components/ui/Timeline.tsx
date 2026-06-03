"use client";

import { motion } from "motion/react";
import { stagger, fadeUpItem } from "@/lib/motion";

type Step = { title: string; description: string };

export function Timeline({ steps }: { steps: readonly Step[] }) {
  return (
    <motion.ol
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle md:grid-cols-2 lg:grid-cols-3"
    >
      {steps.map((step, i) => (
        <motion.li
          key={step.title}
          variants={fadeUpItem}
          className="group relative bg-surface/80 p-8 transition-colors duration-500 hover:bg-surface-warm/40"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-brand-amber">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-brand-orange/40 to-transparent" />
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold text-text-primary">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {step.description}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
