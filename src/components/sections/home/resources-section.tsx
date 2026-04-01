import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { resourcePillars } from "@/lib/site-data";
import { CtaLink } from "@/components/ui/cta-link";

export function ResourcesSection() {
  return (
    <SectionContainer className="pt-16 sm:pt-20">
      <SectionHeading title="Course Content" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resourcePillars.map((pillar) => (
          <article
            key={pillar.title}
            className="overflow-hidden rounded-3xl bg-[var(--ks-surface)] shadow-[var(--ks-shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--ks-shadow-float)]"
          >
            <div className="h-1.5 w-full" style={{ backgroundColor: pillar.color }} />
            <div className="p-5">
              <h3
                className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-2xl font-semibold"
                style={{ color: pillar.color }}
              >
              {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ks-text-muted)]">
                {pillar.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <CtaLink href="/signup">Join our community for exclusive content</CtaLink>
      </div>
    </SectionContainer>
  );
}
