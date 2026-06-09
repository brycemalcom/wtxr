"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { Kicker } from "@/components/ui/Kicker";
import { companySnapshot } from "@/lib/site-content";
import { EASE } from "@/lib/motion";

const fade: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function CompanySnapshot() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Subtle parallax drift on the ambient glow (hero-like depth).
  const glowY = useTransform(scrollYProgress, [0, 1], [-60, 120]);

  return (
    <section
      ref={sectionRef}
      id="company"
      className="relative scroll-mt-24 overflow-hidden border-t border-border-subtle py-28 sm:py-32"
    >
      {/* Ambiance */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-[12%] top-[-10%] -z-10 h-[36rem] w-[36rem] rounded-full bg-brand-red/10 blur-[150px]"
      />
      <div
        className="absolute inset-0 -z-10 reservoir-grid opacity-[0.04]"
        style={{
          maskImage:
            "radial-gradient(80% 60% at 70% 20%, black 0%, transparent 75%)",
        }}
      />

      <div className="shell container-px">
        {/* Intro — asymmetric editorial */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5"
          >
            <Kicker>{companySnapshot.kicker}</Kicker>
            <h2 className="mt-7 font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-gradient">
                {companySnapshot.headline}
              </span>
              <span className="block text-energy">
                {companySnapshot.headlineAccent}
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7"
          >
            <p className="text-xl leading-relaxed text-text-primary sm:text-2xl">
              {companySnapshot.lead}
            </p>
            {companySnapshot.paragraphs.map((p, i) => (
              <p
                key={i}
                className="max-w-xl text-base leading-relaxed text-text-muted"
              >
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
