import { SiteShell } from "@/components/site-shell";
import { AuthPlaceholderCard } from "@/components/sections/shared/auth-placeholder-card";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";

export default function SignupPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Get Started"
        title="Create your Knowledge Sphere account"
        description="Start with free resources now and upgrade when you want full exam support."
        compact
      />
      <SectionContainer className="pt-8 pb-4">
        <AuthPlaceholderCard
          description="Registration flow is scaffolded and ready for API/database integration."
          primaryHref="/courses"
          primaryLabel="Browse Courses"
          secondaryHref="/pricing"
          secondaryLabel="View Plans"
        />
      </SectionContainer>
    </SiteShell>
  );
}
