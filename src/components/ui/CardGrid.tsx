"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { stagger } from "@/lib/motion";
import { FeatureCard } from "@/components/ui/Card";

type CardItem = {
  title: string;
  description: string;
  icon?: string;
};

export function CardGrid({
  cards,
  columns = 3,
  numbered = false,
  className,
}: {
  cards: readonly CardItem[];
  columns?: 2 | 3 | 4;
  numbered?: boolean;
  className?: string;
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn("grid gap-5", cols, className)}
    >
      {cards.map((card, i) => (
        <FeatureCard
          key={card.title}
          icon={numbered ? undefined : card.icon}
          index={numbered ? i + 1 : undefined}
          title={card.title}
          description={card.description}
        />
      ))}
    </motion.div>
  );
}
