import Image from "next/image";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionContainer } from "@/components/ui/section-container";
import { plans } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export function FinalCtaSection() {
  const proHighlights = plans[1]?.features.slice(0, 3) ?? [];

  return (
    <SectionContainer className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[2rem]">
        <div className="absolute inset-0">
          <Image
            src={stockImages.examPrep}
            alt="Student preparing for an exam"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(16,42,82,0.9)_0%,rgba(16,42,82,0.74)_54%,rgba(16,42,82,0.66)_100%)]" />
        </div>

        <div className="relative grid gap-8 px-7 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.11em] text-slate-200">
              Ready to start?
            </p>
            <h2 className="mt-3 max-w-2xl [font-family:var(--font-heading),Avenir_Next,sans-serif] text-[clamp(1.9rem,3.4vw,3.2rem)] font-semibold leading-[1.05] text-white">
              Turn this semester into your strongest academic phase.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-100/95">
              Begin free today and move into advanced preparation when you are ready.
              Keep your progress, keep your momentum, and upgrade only when needed.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaLink href="/signup" size="lg">
                Start Free
              </CtaLink>
              <CtaLink href="/pricing" variant="outline" size="lg">
                Compare Plans
              </CtaLink>
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-slate-100">
              Pro membership includes
            </p>
            <ul className="mt-4 space-y-2">
              {proHighlights.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-7 text-slate-100">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
