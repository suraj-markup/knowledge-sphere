import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { subjects } from "@/lib/site-data";

export function SubjectsSection() {
  return (
    <div className="mt-16 bg-[var(--ks-surface-low)] py-16 sm:mt-20 sm:py-20">
      <SectionContainer>
        <SectionHeading
          title="Subjects"
          subtitle="Comprehensive and beautifully structured course materials for core high-impact subjects."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {subjects.map((subject, idx) => (
            <article
              key={subject.slug}
              className="group rounded-3xl bg-[var(--ks-surface)] p-4 shadow-[var(--ks-shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--ks-shadow-float)]"
            >
              <div
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-sm font-extrabold text-white"
                style={{ background: idx % 2 === 0 ? "var(--ks-gradient)" : "var(--ks-primary)" }}
              >
                {subject.label[0]}
              </div>
              <h3 className="mt-4 [font-family:var(--font-heading),Avenir_Next,sans-serif] text-xl font-semibold text-[var(--ks-dark)]">
                {subject.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ks-text-muted)]">
                {subject.shortDescription}
              </p>
              <Link
                href={`/courses/ib-myp-1/${subject.slug}`}
                className="mt-5 inline-flex rounded-full border border-[color:color-mix(in_srgb,var(--ks-tertiary)_30%,white)] px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[var(--ks-tertiary)] transition hover:bg-[var(--ks-tertiary)] hover:text-white"
              >
                Explore
              </Link>
            </article>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
