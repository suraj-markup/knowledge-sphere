import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { CourseRoadmapGrid } from "@/components/sections/shared/course-roadmap-grid";
import { ResourcePillarsGrid } from "@/components/sections/shared/resource-pillars-grid";
import { CtaLink } from "@/components/ui/cta-link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fromSlug, programs, sampleCourseUnits, subjects, toCourseSlug } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export function generateStaticParams() {
  return programs.flatMap((program) =>
    subjects.map((subject) => ({ program: program.slug, subject: subject.slug }))
  );
}

export default async function CourseSubjectPage({
  params,
}: {
  params: Promise<{ program: string; subject: string }>;
}) {
  const { program, subject } = await params;

  const programName = programs.find((p) => p.slug === program)?.label ?? fromSlug(program);
  const subjectData = subjects.find((s) => s.slug === subject);
  const subjectName = subjectData?.label ?? fromSlug(subject);

  return (
    <SiteShell>
      <PageHero
        eyebrow={programName}
        title={`${subjectName} pathway`}
        description={`${subjectData?.shortDescription ?? ""} Follow a guided progression from core concepts to exam-accurate mock preparation.`}
        actions={
          <>
            <CtaLink href="/pricing">Unlock Full Access</CtaLink>
            <CtaLink href="/free-resources" variant="outline">
              Try Free Material
            </CtaLink>
          </>
        }
        media={
          <div className="relative h-[250px] overflow-hidden rounded-[1.4rem] sm:h-[290px]">
            <Image
              src={stockImages.libraryStudy}
              alt="Student using subject-specific material"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      <SectionContainer className="pt-12 sm:pt-14">
        <SectionHeading title="Course Roadmap" align="left" />
        <div className="mt-6">
          <CourseRoadmapGrid
            items={sampleCourseUnits.map((unit, idx) => ({
              title: unit,
              meta: `Module ${idx + 1}`,
              href: `/courses/${program}/${subject}/${toCourseSlug(unit)}`,
              ctaLabel: "Open Module",
            }))}
          />
        </div>
      </SectionContainer>

      <SectionContainer className="pt-14 pb-4 sm:pt-16">
        <SectionHeading title="Included Resources" align="left" />
        <div className="mt-6">
          <ResourcePillarsGrid />
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
