import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUs } from "@/lib/site-data";
import { CtaLink } from "@/components/ui/cta-link";

export function WhySection() {
  return (
    <SectionContainer className="pt-16 sm:pt-20">
      <SectionHeading title="Why Choose Us" />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {whyChooseUs.map((bucket, idx) => (
          <article
            key={bucket.title}
            className="rounded-3xl bg-[var(--ks-surface)] p-6 shadow-[var(--ks-shadow-soft)] sm:p-7"
          >
            <h3 className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-2xl font-semibold text-[var(--ks-dark)]">
              {bucket.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {bucket.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-7 text-[var(--ks-text-muted)]"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ks-primary)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CtaLink href={idx === 0 ? "/pricing" : "/free-resources"} variant={idx === 0 ? "primary" : "outline"}>
                {idx === 0 ? "Score High" : "Explore Now"}
              </CtaLink>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
