"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
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

        {/* Transformation pipeline — section centerpiece */}
        <Pipeline />
      </div>
    </section>
  );
}

function Pipeline() {
  const node: Variants = {
    hidden: { scale: 0.4, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: EASE },
    },
  };
  const text: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
  const line: Variants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.1, ease: EASE } },
  };
  const lineV: Variants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 1, ease: EASE } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.16, delayChildren: 0.1 }}
      className="mt-24 border-t border-border-subtle pt-14"
    >
      <p className="kicker mb-12">The path back to production</p>

      {/* Desktop — horizontal stepper */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="absolute left-[12.5%] right-[12.5%] top-[11px] h-px bg-border-subtle" />
          <motion.div
            variants={line}
            style={{ right: "12.5%" }}
            className="absolute left-[12.5%] top-[11px] h-px origin-left bg-gradient-energy"
          />
          <div className="flex">
            {companySnapshot.flow.map((step) => (
              <div
                key={step.label}
                className="group flex flex-1 flex-col items-center px-4 text-center"
              >
                <motion.span
                  variants={node}
                  className="relative z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-background"
                >
                  <span className="h-3 w-3 rounded-full bg-gradient-energy" />
                  <span className="absolute inset-0 -z-10 rounded-full bg-brand-orange/40 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.span>
                <motion.h3
                  variants={text}
                  className="mt-7 font-display text-xl font-semibold tracking-tight text-text-primary lg:text-2xl"
                >
                  {step.label}
                </motion.h3>
                <motion.p
                  variants={text}
                  className="mt-3 max-w-[15rem] text-sm leading-relaxed text-text-muted"
                >
                  {step.caption}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile — vertical stepper */}
      <div className="relative pl-10 md:hidden">
        <div className="absolute bottom-2 left-[10px] top-2 w-px bg-border-subtle" />
        <motion.div
          variants={lineV}
          className="absolute left-[10px] top-2 w-px origin-top bg-gradient-energy"
          style={{ bottom: "0.5rem" }}
        />
        <div className="space-y-9">
          {companySnapshot.flow.map((step) => (
            <div key={step.label} className="relative">
              <motion.span
                variants={node}
                className="absolute -left-10 top-1 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-background"
              >
                <span className="h-3 w-3 rounded-full bg-gradient-energy" />
              </motion.span>
              <motion.h3
                variants={text}
                className="font-display text-xl font-semibold tracking-tight text-text-primary"
              >
                {step.label}
              </motion.h3>
              <motion.p
                variants={text}
                className="mt-2 text-sm leading-relaxed text-text-muted"
              >
                {step.caption}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
