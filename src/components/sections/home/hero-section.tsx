import { CtaLink } from "@/components/ui/cta-link";
import { ProgramPills } from "@/components/ui/program-pills";
import { SectionContainer } from "@/components/ui/section-container";

export function HeroSection() {
  return (
    <SectionContainer className="pt-10 sm:pt-14">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative rounded-3xl bg-[var(--ks-surface)] p-7 shadow-[var(--ks-shadow-soft)] sm:p-10">
          <div className="absolute inset-y-8 left-0 w-1 rounded-full bg-[var(--ks-primary)]/35" />
          <span className="inline-flex rounded-full bg-[var(--ks-surface-high)] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[var(--ks-primary)]">
            Improve Your Grades by 2X
          </span>
          <h1 className="mt-5 [font-family:var(--font-heading),Avenir_Next,sans-serif] text-4xl font-semibold leading-tight text-[var(--ks-dark)] sm:text-5xl">
            Test smarter. Revise better. Score higher.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--ks-text-muted)]">
            Knowledge Sphere helps students learn with structure and practice with
            intent. Every module follows a clear flow: learn, apply, revise, and
            perform.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CtaLink href="/signup">Sign Up Now</CtaLink>
            <CtaLink href="/pricing" variant="outline">
              View Membership
            </CtaLink>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-3xl bg-[var(--ks-surface-low)] p-7 shadow-[var(--ks-shadow-soft)] sm:p-8"
          style={{ background: "linear-gradient(155deg, #f6f7f9 0%, #f1f2f5 55%, #eceff4 100%)" }}
        >
          <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[var(--ks-primary)]/8 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-8 h-52 w-52 rounded-full bg-[var(--ks-secondary)]/8 blur-3xl" />
          <div className="relative">
            <h2 className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-2xl font-semibold text-[var(--ks-dark)]">
              Explore your board instantly
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--ks-text-muted)]">
              Jump directly into your preferred program and start with curated
              resources built for exam outcomes.
            </p>
            <ProgramPills className="mt-6" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--ks-surface)] p-4 shadow-[0_12px_26px_rgba(26,28,28,0.05)]">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--ks-primary)]">
                  Learn
                </p>
                <p className="mt-2 text-sm text-[var(--ks-text-muted)]">
                  Concept-first notes and guided examples.
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--ks-surface)] p-4 shadow-[0_12px_26px_rgba(26,28,28,0.05)]">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--ks-primary)]">
                  Revise
                </p>
                <p className="mt-2 text-sm text-[var(--ks-text-muted)]">
                  Timed quizzes, past papers, and mocks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
