import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { CourseRoadmapGrid } from "@/components/sections/shared/course-roadmap-grid";
import { ResourcePillarsGrid } from "@/components/sections/shared/resource-pillars-grid";
import { CtaLink } from "@/components/ui/cta-link";
import { PageHero } from "@/components/ui/page-hero";
import { ProgramPills } from "@/components/ui/program-pills";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { programs, sampleCourseUnits, subjects } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export default function CoursesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Course Catalogue"
        title="Structured learning tracks for every major board"
        description="Choose your board, open your subject pathway, and move through concept depth with a clear learn-practice-revise sequence."
        actions={
          <>
            <CtaLink href="/free-resources">Explore Free Resources</CtaLink>
            <CtaLink href="/pricing" variant="outline">
              See Membership Plans
            </CtaLink>
          </>
        }
        media={
          <div className="relative h-[260px] overflow-hidden rounded-[1.4rem] sm:h-[300px]">
            <Image
              src={stockImages.studentLaptop}
              alt="Student planning study goals"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      <SectionContainer className="pt-8">
        <ProgramPills compact />
      </SectionContainer>

      <SectionContainer className="pt-14 sm:pt-16">
        <SectionHeading
          title="Subjects"
          subtitle="Pick a subject to enter its dedicated revision pathway."
          align="left"
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, idx) => (
            <SurfaceCard key={subject.slug} interactive>
              <div
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-sm font-extrabold text-white"
                style={{ background: idx % 2 === 0 ? "var(--ks-gradient)" : "var(--ks-primary)" }}
              >
                {subject.label[0]}
              </div>
              <h3 className="mt-4 [font-family:var(--font-heading),Avenir_Next,sans-serif] text-2xl font-semibold text-[var(--ks-dark)]">
                {subject.label}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--ks-text-muted)]">{subject.shortDescription}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {programs.slice(0, 3).map((program) => (
                  <Link
                    key={`${program.slug}-${subject.slug}`}
                    href={`/courses/${program.slug}/${subject.slug}`}
                    className="rounded-full bg-[var(--ks-surface-high)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--ks-primary)] transition hover:bg-[var(--ks-primary)] hover:text-white"
                  >
                    {program.label}
                  </Link>
                ))}
              </div>
            </SurfaceCard>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-14 sm:pt-16">
        <SectionHeading
          title="Course Framework"
          subtitle="Each track follows a deliberate sequence so students build confidence before timed exam pressure."
          align="left"
        />
        <div className="mt-6">
          <CourseRoadmapGrid
            items={sampleCourseUnits.map((unit, idx) => ({
              title: unit,
              meta: `Step ${idx + 1}`,
            }))}
          />
        </div>
      </SectionContainer>

      <SectionContainer className="pt-14 pb-4 sm:pt-16">
        <SectionHeading
          title="Resource Pillars"
          subtitle="Everything learners need from concept clarity to exam simulation."
          align="left"
        />
        <div className="mt-6">
          <ResourcePillarsGrid />
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
