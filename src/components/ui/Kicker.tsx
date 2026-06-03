import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("kicker flex items-center gap-3", className)}>
      <span className="inline-block h-px w-6 bg-gradient-energy" />
      {children}
    </p>
  );
}
