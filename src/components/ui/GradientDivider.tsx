import { cn } from "@/lib/utils";

export function GradientDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent",
        className
      )}
    />
  );
}
