"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Kicker } from "@/components/ui/Kicker";
import { reserveOpportunity } from "@/lib/site-content";
import { EASE } from "@/lib/motion";

/* Geological strata — each band parallaxes at a different rate. */
const STRATA = [
  { top: "0%", height: "26%", color: "#13110f", depth: 40 },
  { top: "24%", height: "20%", color: "#181210", depth: 70 },
  { top: "42%", height: "18%", color: "#1d1411", depth: 100 },
  { top: "58%", height: "20%", color: "#21150f", depth: 140 },
  { top: "76%", height: "26%", color: "#170f0c", depth: 180 },
];

/* Hydrocarbon pockets that prior operators may have left behind. */
const POCKETS = [
  { left: "18%", top: "52%", size: 90, delay: 0 },
  { left: "68%", top: "64%", size: 120, delay: 0.6 },
  { left: "44%", top: "78%", size: 70, delay: 1.2 },
  { left: "82%", top: "46%", size: 60, delay: 0.3 },
];

function KineticQuote({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <motion.blockquote
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.045 }}
      className="relative max-w-4xl font-display text-2xl font-semibold leading-[1.25] tracking-tight text-balance sm:text-4xl lg:text-5xl"
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.6, ease: EASE },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.blockquote>
  );
}

export function ReserveOpportunity() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Recovery line descends as you scroll through the section.
  const lineHeight = useSpring(
    useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]),
    { stiffness: 120, damping: 30, mass: 0.6 }
  );

  return (
    <section
      ref={sectionRef}
      id="reserve"
      className="relative scroll-mt-24 overflow-hidden border-t border-border-subtle bg-[#0a0705]"
    >
      {/* Parallax strata */}
      <div className="absolute inset-0 -z-10">
        {STRATA.map((band, i) => (
          <Stratum key={i} band={band} progress={scrollYProgress} />
        ))}
        <div className="absolute inset-0 reservoir-grid opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Hydrocarbon pockets */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {POCKETS.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-brand-orange/20 blur-2xl"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{ opacity: [0.25, 0.6, 0.25], scale: [1, 1.15, 1] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Descending recovery line (right side, desktop) */}
      <div className="absolute right-[8%] top-0 hidden h-full w-px bg-border-subtle lg:block">
        <motion.div
          className="w-px origin-top bg-gradient-to-b from-brand-amber via-brand-orange to-transparent"
          style={{ height: lineHeight }}
        />
        <motion.span
          className="absolute -left-[3px] h-2 w-2 rounded-full bg-brand-amber shadow-[0_0_12px_2px_rgba(242,160,27,0.6)]"
          style={{ top: lineHeight }}
        />
      </div>

      <div className="shell container-px py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl"
        >
          <Kicker>{reserveOpportunity.kicker}</Kicker>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {reserveOpportunity.headline}
          </h2>
          <div className="mt-7 space-y-5">
            {reserveOpportunity.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-text-secondary"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <figure className="mt-20 border-l-2 border-brand-orange/70 pl-6 sm:mt-28 sm:pl-10">
          <KineticQuote text={`“${reserveOpportunity.pullQuote}”`} />
          <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-text-muted">
            The WTXR thesis
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Stratum({
  band,
  progress,
}: {
  band: (typeof STRATA)[number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(progress, [0, 1], [band.depth, -band.depth]);
  return (
    <motion.div
      className="absolute inset-x-0 border-t border-[color:var(--border-warm)]"
      style={{
        top: band.top,
        height: band.height,
        backgroundColor: band.color,
        y,
      }}
    />
  );
}
