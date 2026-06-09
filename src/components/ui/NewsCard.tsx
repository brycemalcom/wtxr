"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { fadeUpItem } from "@/lib/motion";
import type { NewsItem } from "@/lib/news";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <motion.article
      variants={fadeUpItem}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface/60 transition-all duration-500 hover:border-brand-orange/40 hover:bg-surface-warm/30"
    >
      <div className="relative h-40 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 reservoir-grid opacity-[0.07]" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className="rounded-full border border-border-warm bg-black/40 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-brand-amber backdrop-blur">
            {item.displayCategory}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 font-mono text-xs text-text-muted">
          {item.date}
          <span className="h-1 w-1 rounded-full bg-text-muted/60" />
          {item.source}
        </p>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-text-primary">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
          {item.excerpt}
        </p>
        <Link
          href={`/newsroom/${item.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange transition-colors hover:text-brand-amber"
        >
          Read update
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
