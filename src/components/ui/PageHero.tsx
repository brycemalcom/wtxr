"use client";

import { motion } from "motion/react";
import { Kicker } from "@/components/ui/Kicker";
import { EASE } from "@/lib/motion";

export function PageHero({
  kicker,
  headline,
  copy,
  ticker,
  children,
}: {
  kicker: string;
  headline: string;
  copy: string;
  ticker?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle">
      <div className="absolute inset-0 -z-10 radial-warm" />
      <div className="absolute inset-0 -z-10 reservoir-grid opacity-[0.04]" />
      <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-brand-red/10 blur-[130px]" />

      <div className="shell container-px pb-20 pt-[calc(var(--header-height)+5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Kicker>{kicker}</Kicker>
        </motion.div>

        <motion.h1
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
        >
          <span className="text-gradient">{headline}</span>
        </motion.h1>

        <motion.p
          className="mt-7 max-w-2xl text-lg leading-relaxed text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.16 }}
        >
          {copy}
        </motion.p>

        {ticker ? (
          <motion.div
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-border-warm bg-surface-warm/40 px-5 py-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.24 }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-orange" />
            <span className="font-mono text-sm tracking-widest text-text-primary">
              {ticker}
            </span>
          </motion.div>
        ) : null}

        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
            className="mt-9"
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
