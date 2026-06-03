"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import { Kicker } from "@/components/ui/Kicker";

export function SectionHeader({
  kicker,
  headline,
  intro,
  align = "left",
  className,
}: {
  kicker?: string;
  headline: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h2 className="max-w-3xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {headline}
      </h2>
      {intro ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {intro}
        </p>
      ) : null}
    </motion.div>
  );
}
