import { HeroSection } from "@/components/sections/home/hero-section";
import { StatsBand } from "@/components/sections/home/stats-band";
import { WhySection } from "@/components/sections/home/why-section";
import { SubjectsSection } from "@/components/sections/home/subjects-section";
import { ResourcesSection } from "@/components/sections/home/resources-section";
import { FreeResourcesSection } from "@/components/sections/home/free-resources-section";
import { PricingPreviewSection } from "@/components/sections/home/pricing-preview-section";
import { TrustSection } from "@/components/sections/home/trust-section";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <StatsBand />
      <WhySection />
      <SubjectsSection />
      <ResourcesSection />
      <FreeResourcesSection />
      <PricingPreviewSection />
      <TrustSection />
    </SiteShell>
  );
}
