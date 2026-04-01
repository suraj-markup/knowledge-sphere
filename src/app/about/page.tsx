import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { CtaLink } from "@/components/ui/cta-link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { conversionStats, trackStats, valuePillars, whyChooseUs } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="A learning system built for clarity, consistency, and confidence"
        description="Knowledge Sphere exists to transform scattered preparation into a guided and measurable progression."
        actions={
          <>
            <CtaLink href="/courses">Explore Courses</CtaLink>
            <CtaLink href="/pricing" variant="outline">
              Membership Plans
            </CtaLink>
          </>
        }
        media={
          <div className="relative h-[260px] overflow-hidden rounded-[1.4rem] sm:h-[300px]">
            <Image
              src={stockImages.parentCounselling}
              alt="Mentor team and parents discussing student growth"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      <SectionContainer className="pt-14 sm:pt-16">
        <SectionHeading
          title="Our Values"
          subtitle="We care less about content volume and more about outcome certainty."
          align="left"
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {valuePillars.map((pillar) => (
            <SurfaceCard key={pillar.title} interactive>
              <h3 className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-2xl font-semibold text-[var(--ks-dark)]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ks-text-muted)]">{pillar.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-14 sm:pt-16">
        <SectionHeading title="Why Students Choose Us" align="left" />
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {whyChooseUs.map((group) => (
            <SurfaceCard key={group.title} interactive>
              <h3 className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-2xl font-semibold text-[var(--ks-dark)]">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-[var(--ks-text-muted)]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ks-primary)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </SurfaceCard>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-14 pb-4 sm:pt-16">
        <SectionHeading title="Impact Snapshot" align="left" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[...conversionStats, ...trackStats.slice(0, 2)].map((item) => (
            <SurfaceCard key={item.title} className="text-center" interactive>
              <p className="text-3xl font-black text-[var(--ks-primary)]">{item.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ks-text-muted)]">
                {item.title}
              </p>
            </SurfaceCard>
          ))}
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
