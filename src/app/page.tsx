import { Hero } from "@/components/sections/Hero";
import { TickerBand } from "@/components/ui/StockWidget";
import { CompanySnapshot } from "@/components/sections/CompanySnapshot";
import { OperatingModel } from "@/components/sections/OperatingModel";
import { ReserveOpportunity } from "@/components/sections/ReserveOpportunity";
import { TechnologyGrid } from "@/components/sections/TechnologyGrid";
import { OperationsTimeline } from "@/components/sections/OperationsTimeline";
import { AssetFocus } from "@/components/sections/AssetFocus";
import { InvestorSnapshot } from "@/components/sections/InvestorSnapshot";
import { Mission } from "@/components/sections/Mission";
import { NewsroomPreview } from "@/components/sections/NewsroomPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TickerBand />
      <CompanySnapshot />
      <OperatingModel />
      <ReserveOpportunity />
      <TechnologyGrid />
      <OperationsTimeline />
      <AssetFocus />
      <InvestorSnapshot />
      <Mission />
      <NewsroomPreview />
      <FinalCTA />
    </>
  );
}
