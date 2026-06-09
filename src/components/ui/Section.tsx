import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  tone = "default",
  divider = true,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "warm" | "elevated";
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-24 sm:py-32",
        tone === "warm" && "bg-surface-warm/30",
        tone === "elevated" && "bg-surface/40",
        divider && "border-t border-border-subtle",
        className
      )}
    >
      {/* Warm sections get a faint energy hairline so breaks read clearly */}
      {divider && tone !== "default" ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-energy opacity-25"
        />
      ) : null}
      <div className="shell container-px">{children}</div>
    </section>
  );
}
