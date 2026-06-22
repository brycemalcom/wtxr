"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { hero } from "@/lib/site-content";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Hero() {
  /* Always scroll to the target section — even if the URL hash already
     matches (a plain anchor click is a no-op in that case). */
  const handleStatClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    e.preventDefault();
    // Absolute target position, minus the fixed header + sticky ticker band.
    const top =
      target.getBoundingClientRect().top + window.scrollY - 132;
    if (window.__lenis) {
      window.__lenis.scrollTo(top);
    } else {
      window.scrollTo({ top, behavior: "smooth" });
    }
    history.replaceState(null, "", href);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-47px)] items-center overflow-hidden"
    >
      {/* Looping background video — brightened to reveal the sunset scene */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover brightness-[1.2] contrast-[1.03] saturate-[1.12]"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/wtxr-hero-poster.jpg"
      >
        <source src="/wtxr-hero.mp4" type="video/mp4" />
      </video>

      {/* Legibility + brand overlays (lighter so the scene reads) */}
      <div className="absolute inset-0 -z-10 bg-[#070707]/18" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/35 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/35" />
      {/* Warm sun glow — screen-blended light bleeding through the horizon */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen"
        style={{
          background:
            "radial-gradient(42% 52% at 66% 44%, rgba(255,178,84,0.4), rgba(255,138,46,0.15) 42%, transparent 72%)",
        }}
      />
      <div className="pointer-events-none absolute -right-[8%] top-[-6%] -z-10 h-[40rem] w-[40rem] rounded-full bg-brand-red/12 blur-[150px]" />

      <div className="shell container-px w-full pt-[var(--header-height)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {/* Clickable ticker line — never wraps; company name hidden on small screens */}
          <Link
            href="/investors#stock"
            className="group inline-flex items-center gap-3 whitespace-nowrap"
            aria-label="View WTXR stock information"
          >
            <span className="inline-block h-px w-6 bg-gradient-energy" />
            <span className="kicker">
              {hero.kickerTicker}
              <span className="hidden sm:inline">
                {" "}
                | {hero.kickerCompany}
              </span>
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-brand-amber/70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-amber" />
          </Link>
        </motion.div>

        <motion.h1
          className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.0] tracking-tight text-balance drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)] sm:text-7xl lg:text-[5.5rem]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
        >
          <span className="text-gradient">Legacy Fields.</span>
          <br />
          <span className="text-energy">Modern Recovery.</span>
        </motion.h1>

        <motion.p
          className="mt-7 max-w-2xl text-lg leading-relaxed text-text-secondary drop-shadow-[0_1px_12px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.16 }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
        >
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>

        {/* Stat row — clickable jumps to the relevant section, no cards */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
        >
          {hero.stats.map((stat, i) => (
            <Link
              key={stat.label}
              href={stat.href}
              onClick={(e) => handleStatClick(e, stat.href)}
              className={cn(
                "group block transition-colors lg:pl-8",
                i > 0 && "lg:border-l lg:border-border-subtle/50"
              )}
            >
              <p className="flex items-center gap-1.5 font-display text-2xl font-bold text-energy drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)] sm:text-3xl">
                {stat.value}
                <ArrowUpRight className="h-4 w-4 text-brand-amber/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-amber" />
              </p>
              <p className="mt-2 max-w-[12rem] text-xs leading-relaxed text-text-secondary drop-shadow-[0_1px_10px_rgba(0,0,0,0.75)] transition-colors group-hover:text-text-primary">
                {stat.label}
              </p>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
