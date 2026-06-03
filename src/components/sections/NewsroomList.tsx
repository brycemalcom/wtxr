"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { stagger } from "@/lib/motion";
import { NewsCard } from "@/components/ui/NewsCard";
import { news as allNews } from "@/lib/news";

export function NewsroomList({
  categories,
}: {
  categories: readonly string[];
}) {
  const [active, setActive] = useState("All");

  const featured = allNews.find((n) => n.featured) ?? allNews[0];

  const filtered = useMemo(() => {
    if (active === "All") return allNews;
    return allNews.filter((n) => n.category === active);
  }, [active]);

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-all duration-300",
              active === cat
                ? "border-brand-orange/60 bg-surface-warm/50 text-text-primary"
                : "border-border-subtle text-text-secondary hover:border-brand-orange/40 hover:text-text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured update */}
      {active === "All" && featured ? (
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group mt-10 grid overflow-hidden rounded-3xl border border-border-subtle bg-surface/60 transition-all duration-500 hover:border-brand-orange/40 lg:grid-cols-2"
        >
          <div className="relative min-h-[16rem] overflow-hidden bg-gradient-dark">
            <div className="absolute inset-0 reservoir-grid opacity-[0.08]" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-orange/20 blur-3xl" />
            <span className="absolute left-6 top-6 rounded-full border border-border-warm bg-black/40 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-brand-amber backdrop-blur">
              Featured · {featured.displayCategory}
            </span>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="font-mono text-xs text-text-muted">{featured.date}</p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-text-primary sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {featured.excerpt}
            </p>
            <a
              href={featured.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand-orange transition-colors hover:text-brand-amber"
            >
              Read release ↗
            </a>
          </div>
        </motion.article>
      ) : null}

      {/* News grid */}
      <motion.div
        key={active}
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((item) => (
          <NewsCard key={item.slug} item={item} />
        ))}
      </motion.div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-text-muted">
          No updates in this category yet. Check back soon.
        </p>
      ) : null}
    </div>
  );
}
