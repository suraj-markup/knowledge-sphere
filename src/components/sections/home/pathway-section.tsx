import Image from "next/image";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { pathwaySteps } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export function PathwaySection() {
  return (
    <SectionContainer className="py-16 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.08fr]">
        <div className="relative h-[460px] overflow-hidden rounded-[1.9rem] shadow-[var(--ks-shadow-float)]">
          <Image
            src={stockImages.classroomMentor}
            alt="Mentor guiding students in class"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(170deg,rgba(16,42,82,0.22)_0%,rgba(16,42,82,0.48)_100%)]" />
          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/25 bg-white/14 px-4 py-3 text-white backdrop-blur-md">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.08em]">Weekly Mentor Audit</p>
            <p className="mt-1 text-sm">Action plan refreshed every 7 days</p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Method"
            title="One focused pathway for every student profile"
            subtitle="No random content overload. We direct effort into the exact sequence that improves marks fastest."
            align="left"
          />

          <ol className="mt-8 space-y-5">
            {pathwaySteps.map((step, idx) => (
              <li key={step.title} className="grid gap-3 rounded-2xl bg-[var(--ks-surface)] p-4 shadow-[var(--ks-shadow-soft)] sm:grid-cols-[auto_1fr]">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ks-surface-high)] text-sm font-black text-[var(--ks-primary)]">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-xl font-semibold text-[var(--ks-dark)]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-[var(--ks-text-muted)]">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-7">
            <CtaLink href="/courses">See Full Course Catalogue</CtaLink>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
