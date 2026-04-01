import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { CtaLink } from "@/components/ui/cta-link";
import { FaqList } from "@/components/ui/faq-list";
import { PageHero } from "@/components/ui/page-hero";
import { ProgramPills } from "@/components/ui/program-pills";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { faqs, plans } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export default function PricingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Membership"
        title="Plans built for serious outcomes"
        description="Start free, then scale into structured membership when you need deeper practice, progress tracking, and mentor support."
        actions={
          <>
            <CtaLink href="/signup">Get Started</CtaLink>
            <CtaLink href="/free-resources" variant="outline">
              Try Free Resources
            </CtaLink>
          </>
        }
        media={
          <div className="relative h-[260px] overflow-hidden rounded-[1.4rem] sm:h-[300px]">
            <Image
              src={stockImages.parentCounselling}
              alt="Parent and mentor discussing progress"
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
          title="Plans & Pricing"
          subtitle="Pick a plan that matches your current stage. Upgrade anytime as your goals intensify."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {plans.map((plan, idx) => (
            <SurfaceCard key={plan.name} className="relative" interactive>
              <div className="absolute right-5 top-5 rounded-full bg-[var(--ks-surface-high)] px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.08em] text-[var(--ks-text-muted)]">
                {idx === 0 ? "Starter" : "Most Popular"}
              </div>
              <h2 className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-3xl font-semibold text-[var(--ks-primary)]">
                {plan.name}
              </h2>
              <p className="mt-2 text-[var(--ks-text-muted)]">{plan.tagline}</p>
              <div className="mt-4 inline-flex rounded-full bg-[var(--ks-surface-high)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ks-text-muted)]">
                {plan.price}
              </div>
              <div className="mt-5">
                <CtaLink href="/signup" variant={idx === 0 ? "outline" : "primary"}>
                  {plan.cta}
                </CtaLink>
              </div>
              <ul className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-7 text-[var(--ks-text-muted)]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ks-primary)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </SurfaceCard>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-14 pb-4 sm:pt-16">
        <SectionHeading title="Pricing FAQ" align="left" />
        <div className="mt-6">
          <FaqList items={faqs.slice(0, 4)} />
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
