import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { CourseRoadmapGrid } from "@/components/sections/shared/course-roadmap-grid";
import { CtaLink } from "@/components/ui/cta-link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  fromSlug,
  lessonSections,
  programs,
  sampleCourseUnits,
  subjects,
  toCourseSlug,
} from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export function generateStaticParams() {
  return programs.flatMap((program) =>
    subjects.flatMap((subject) =>
      sampleCourseUnits.map((unit) => ({
        program: program.slug,
        subject: subject.slug,
        slug: toCourseSlug(unit),
      }))
    )
  );
}

export default async function CourseUnitPage({
  params,
}: {
  params: Promise<{ program: string; subject: string; slug: string }>;
}) {
  const { program, subject, slug } = await params;

  const programName = programs.find((p) => p.slug === program)?.label ?? fromSlug(program);
  const subjectName = subjects.find((s) => s.slug === subject)?.label ?? fromSlug(subject);
  const lessonTitle = fromSlug(slug);

  return (
    <SiteShell>
      <PageHero
        eyebrow={`${programName} · ${subjectName}`}
        title={lessonTitle}
        description="This module is structured for depth first and speed second: understand clearly, practice deliberately, and revise under timed pressure."
        actions={
          <>
            <CtaLink href="/pricing">Unlock Full Learning</CtaLink>
            <CtaLink href={`/courses/${program}/${subject}`} variant="outline">
              Back to Subject
            </CtaLink>
          </>
        }
        media={
          <div className="relative h-[240px] overflow-hidden rounded-[1.4rem] sm:h-[280px]">
            <Image
              src={stockImages.mentorshipSession}
              alt="Mentor reviewing a module plan"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      <SectionContainer className="pt-12 pb-4 sm:pt-14">
        <SectionHeading
          title="Module Structure"
          subtitle="Every section has one outcome so students can revise with intent and finish with exam-ready momentum."
          align="left"
        />
        <div className="mt-6">
          <CourseRoadmapGrid
            columns="lg:grid-cols-5"
            items={lessonSections.map((item, idx) => ({
              title: item,
              meta: `Part ${idx + 1}`,
              description: "Focused activity block to strengthen exam readiness.",
            }))}
          />
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
