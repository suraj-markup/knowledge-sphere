import { ImpactHero } from "@/components/sections/home/impact-hero";
import { OutcomesStrip } from "@/components/sections/home/outcomes-strip";
import { PathwaySection } from "@/components/sections/home/pathway-section";
import { SocialProofSection } from "@/components/sections/home/social-proof-section";
import { FinalCtaSection } from "@/components/sections/home/final-cta-section";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <ImpactHero />
      <OutcomesStrip />
      <PathwaySection />
      <SocialProofSection />
      <FinalCtaSection />
    </SiteShell>
  );
}
