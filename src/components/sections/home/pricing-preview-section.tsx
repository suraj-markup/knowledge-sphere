import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { plans } from "@/lib/site-data";
import { CtaLink } from "@/components/ui/cta-link";

export function PricingPreviewSection() {
  return (
    <SectionContainer className="pt-16 sm:pt-20">
      <SectionHeading
        title="Plans & Pricing"
        subtitle="You do not need to break the bank. Pick a plan that matches your learning pace."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {plans.map((plan, idx) => (
          <article
            key={plan.name}
            className="rounded-3xl bg-[var(--ks-surface)] p-7 shadow-[var(--ks-shadow-soft)]"
          >
            <h3 className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-3xl font-semibold text-[var(--ks-primary)]">
              {plan.name}
            </h3>
            <p className="mt-2 text-base text-[var(--ks-text-muted)]">{plan.tagline}</p>
            <div className="mt-5 inline-flex rounded-full bg-[var(--ks-surface-high)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ks-text-muted)]">
              {plan.price}
            </div>
            <div className="mt-5">
              <CtaLink href="/pricing" variant={idx === 0 ? "outline" : "primary"}>
                {plan.cta}
              </CtaLink>
            </div>
            <ul className="mt-5 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm leading-7 text-[var(--ks-text-muted)]"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ks-primary)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
