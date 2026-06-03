"use client";

import { cn } from "@/lib/utils";

export function MenuButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onClick}
      className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border-subtle transition-colors duration-300 hover:border-brand-orange/60"
    >
      {/* Gradient fill on hover */}
      <span className="absolute inset-0 rounded-full bg-gradient-energy opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative block h-[13px] w-[22px]">
        {/* Top bar — full width */}
        <span
          className={cn(
            "absolute left-0 h-[1.5px] w-full rounded-full bg-text-primary transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-black",
            open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
          )}
        />
        {/* Bottom bar — asymmetric (short, right-aligned) until hover/open */}
        <span
          className={cn(
            "absolute right-0 h-[1.5px] rounded-full bg-brand-orange transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-black",
            open
              ? "bottom-1/2 w-full translate-y-1/2 -rotate-45 bg-text-primary"
              : "bottom-0 w-[60%] group-hover:w-full"
          )}
        />
      </span>
    </button>
  );
}
