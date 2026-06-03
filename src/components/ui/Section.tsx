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
        "relative scroll-mt-24 py-24 sm:py-28",
        tone === "warm" && "bg-surface-warm/20",
        tone === "elevated" && "bg-surface/40",
        divider && "border-t border-border-subtle",
        className
      )}
    >
      <div className="shell container-px">{children}</div>
    </section>
  );
}
