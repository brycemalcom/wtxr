"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { fadeUpItem } from "@/lib/motion";
import { Icon } from "@/components/ui/Icon";

export function Card({
  children,
  className,
  animated = true,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  hover?: boolean;
}) {
  const classes = cn(
    "group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface/60 p-7 transition-all duration-500",
    hover && "hover:border-brand-orange/40 hover:bg-surface-warm/30",
    className
  );

  const glow = hover && (
    <span className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-orange/0 blur-2xl transition-all duration-500 group-hover:bg-brand-orange/20" />
  );

  if (!animated) {
    return (
      <div className={classes}>
        {glow}
        {children}
      </div>
    );
  }

  return (
    <motion.div variants={fadeUpItem} className={classes}>
      {glow}
      {children}
    </motion.div>
  );
}

export function FeatureCard({
  icon,
  index,
  title,
  description,
  className,
}: {
  icon?: string;
  index?: number;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Card className={className}>
      <div className="relative z-10">
        <div className="flex items-center gap-4">
          {icon ? (
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-warm bg-surface-warm/50 text-brand-amber">
              <Icon name={icon} className="h-6 w-6" />
            </span>
          ) : index !== undefined ? (
            <span className="font-display text-2xl font-bold text-energy">
              {String(index).padStart(2, "0")}
            </span>
          ) : null}
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold text-text-primary">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </Card>
  );
}
