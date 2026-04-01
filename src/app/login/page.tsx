import { SiteShell } from "@/components/site-shell";
import { AuthPlaceholderCard } from "@/components/sections/shared/auth-placeholder-card";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";

export default function LoginPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Account"
        title="Welcome back"
        description="Sign in to continue your learning journey and track your current progress."
        compact
      />
      <SectionContainer className="pt-8 pb-4">
        <AuthPlaceholderCard
          description="Authentication screens are scaffolded and ready for backend integration."
          primaryHref="/signup"
          primaryLabel="Create New Account"
          secondaryHref="/courses"
          secondaryLabel="Browse Courses"
        />
      </SectionContainer>
    </SiteShell>
  );
}
