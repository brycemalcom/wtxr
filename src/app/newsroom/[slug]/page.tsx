import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NewsCard } from "@/components/ui/NewsCard";
import { news, getNewsItem } from "@/lib/news";
import { forwardLookingShort } from "@/lib/site-content";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) notFound();

  const related = news.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <>
      {/* Article */}
      <article className="relative overflow-hidden pb-20 pt-[calc(var(--header-height)+4rem)]">
        <div className="pointer-events-none absolute -right-[10%] top-[-8%] -z-10 h-[30rem] w-[30rem] rounded-full bg-brand-red/10 blur-[140px]" />
        <div
          className="absolute inset-0 -z-10 reservoir-grid opacity-[0.04]"
          style={{
            maskImage:
              "radial-gradient(70% 50% at 50% 0%, black 0%, transparent 80%)",
          }}
        />

        <div className="shell container-px">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/newsroom"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Newsroom
            </Link>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-border-warm bg-surface-warm/40 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-brand-amber">
                {item.displayCategory}
              </span>
              <p className="flex items-center gap-2 font-mono text-xs text-text-muted">
                {item.date}
                <span className="h-1 w-1 rounded-full bg-text-muted/60" />
                {item.source}
              </p>
            </div>

            <h1 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {item.title}
            </h1>

            <div className="mt-10 space-y-6 border-t border-border-subtle pt-10">
              {item.body.map((block, i) => {
                if (typeof block === "string") {
                  return (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-lg leading-relaxed text-text-primary"
                          : "text-base leading-relaxed text-text-secondary"
                      }
                    >
                      {block}
                    </p>
                  );
                }
                if ("heading" in block) {
                  return (
                    <h2
                      key={i}
                      className="flex items-center gap-3 pt-6 font-display text-xl font-semibold tracking-tight text-text-primary sm:text-2xl"
                    >
                      <span className="h-1 w-6 shrink-0 rounded-full bg-gradient-energy" />
                      {block.heading}
                    </h2>
                  );
                }
                return (
                  <ul key={i} className="space-y-3 pl-1">
                    {block.list.map((entry) => (
                      <li
                        key={entry}
                        className="flex items-start gap-3 text-base leading-relaxed text-text-secondary"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                        {entry}
                      </li>
                    ))}
                  </ul>
                );
              })}
            </div>

            {/* Official source */}
            {item.sourceUrl ? (
              <div className="mt-12 flex flex-wrap items-center gap-5 rounded-2xl border border-border-subtle bg-surface/50 p-6">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-text-primary">
                    Official release
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    Read the full announcement at {item.source}, the official
                    source of record.
                  </p>
                </div>
                <Button href={item.sourceUrl} variant="secondary">
                  Read full release
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            ) : null}

            <p className="mt-10 text-xs leading-relaxed text-text-muted">
              {forwardLookingShort}
            </p>
          </div>
        </div>
      </article>

      {/* More updates */}
      <section className="border-t border-border-subtle bg-surface-warm/20 py-20">
        <div className="shell container-px">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              More Updates
            </h2>
            <Link
              href="/newsroom"
              className="text-sm font-medium text-brand-orange transition-colors hover:text-brand-amber"
            >
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
