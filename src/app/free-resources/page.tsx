import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { CtaLink } from "@/components/ui/cta-link";
import { PageHero } from "@/components/ui/page-hero";
import { ProgramPills } from "@/components/ui/program-pills";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { freeResourceCatalog, subjects } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export default function FreeResourcesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Free Course"
        title="Open resources curated for smart revision starts"
        description="Explore no-cost study material across boards and subjects before moving into full membership plans."
        actions={
          <>
            <CtaLink href="/signup">Get Started</CtaLink>
            <CtaLink href="/courses" variant="outline">
              Browse Courses
            </CtaLink>
          </>
        }
        media={
          <div className="relative h-[260px] overflow-hidden rounded-[1.4rem] sm:h-[300px]">
            <Image
              src={stockImages.libraryStudy}
              alt="Learner reviewing free resources"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      <SectionContainer className="pt-8">
        <SectionHeading title="Free Tracks" align="left" />
        <div className="mt-5">
          <ProgramPills compact tone="elevated" />
        </div>
      </SectionContainer>

      <SectionContainer className="pt-14 sm:pt-16">
        <SectionHeading
          title="What You Get For Free"
          subtitle="High-value starter resources designed for confidence and momentum."
          align="left"
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {freeResourceCatalog.map((item) => (
            <SurfaceCard key={item.title} interactive>
              <h3 className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-xl font-semibold text-[var(--ks-dark)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ks-text-muted)]">{item.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-14 pb-4 sm:pt-16">
        <SectionHeading title="Subject Entry Points" align="left" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {subjects.map((subject) => (
            <SurfaceCard key={subject.slug} className="p-5" interactive>
              <h3 className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-lg font-semibold text-[var(--ks-dark)]">
                {subject.label}
              </h3>
              <p className="mt-2 text-sm text-[var(--ks-text-muted)]">Free starter packs available.</p>
              <Link
                href={`/courses/ib-myp-1/${subject.slug}`}
                className="mt-4 inline-flex rounded-full bg-[var(--ks-surface-high)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--ks-primary)] transition hover:bg-[var(--ks-primary)] hover:text-white"
              >
                Explore
              </Link>
            </SurfaceCard>
          ))}
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
