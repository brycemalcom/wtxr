import {
  Activity,
  BarChart3,
  Building2,
  Cog,
  Droplets,
  FileText,
  Flame,
  Gauge,
  Layers,
  Map,
  Megaphone,
  Newspaper,
  Presentation,
  Shield,
  TrendingUp,
  Users,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  // technology / operations
  stimulation: Waves,
  lift: TrendingUp,
  eor: Droplets,
  recompletion: Layers,
  optimization: Gauge,
  surface: Building2,
  workover: Wrench,
  layers: Layers,
  gauge: Gauge,
  // assets
  well: Droplets,
  shutin: Activity,
  infrastructure: Building2,
  expansion: Map,
  // investor
  market: BarChart3,
  proven: Flame,
  shield: Shield,
  team: Users,
  scale: TrendingUp,
  news: Newspaper,
  // materials
  file: FileText,
  presentation: Presentation,
  disclosure: Shield,
  // misc
  flame: Flame,
  cog: Cog,
  media: Megaphone,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name] ?? Flame;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
