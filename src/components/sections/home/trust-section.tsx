import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaLink } from "@/components/ui/cta-link";

export function TrustSection() {
  return (
    <div className="mt-16 bg-[var(--ks-surface-low)] py-16 sm:mt-20 sm:py-20">
      <SectionContainer>
        <SectionHeading title="Trusted by Students" />
        <div className="mx-auto mt-6 max-w-xl rounded-3xl bg-[var(--ks-surface)] p-8 text-center shadow-[var(--ks-shadow-soft)]">
          <p className="text-base font-semibold uppercase tracking-[0.08em] text-[var(--ks-text-muted)]">
            Excellent
          </p>
          <p className="mt-3 text-3xl font-black text-[var(--ks-primary)]">4.9 / 5.0</p>
          <p className="mt-3 text-sm leading-7 text-[var(--ks-text-muted)]">
            Learners report stronger revision confidence, better time management,
            and measurable score improvements.
          </p>
          <div className="mt-6">
            <CtaLink href="/about" variant="outline">
              Read Student Stories
            </CtaLink>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
