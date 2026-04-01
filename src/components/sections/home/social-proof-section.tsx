import Image from "next/image";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionContainer } from "@/components/ui/section-container";
import { conversionStats, studentStories } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export function SocialProofSection() {
  return (
    <section className="bg-[var(--ks-surface-low)] py-16 sm:py-20">
      <SectionContainer>
        <div className="grid gap-9 lg:grid-cols-[1fr_1.15fr]">
          <div className="relative h-[430px] overflow-hidden rounded-[1.8rem] shadow-[var(--ks-shadow-float)]">
            <Image
              src={stockImages.teamLearning}
              alt="Group of students learning together"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.11em] text-[var(--ks-primary)]">
              Trusted by students and parents
            </p>
            <h2 className="mt-3 [font-family:var(--font-heading),Avenir_Next,sans-serif] text-[clamp(1.95rem,3vw,3rem)] font-semibold leading-[1.07] text-[var(--ks-dark)]">
              Real progress, not motivational noise.
            </h2>
            <p className="mt-4 max-w-xl text-[1rem] leading-8 text-[var(--ks-text-muted)]">
              Our system focuses on measurable progression: fewer blind spots,
              better timed accuracy, and stronger exam-day confidence.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {conversionStats.map((stat) => (
                <div key={stat.title} className="rounded-2xl bg-[var(--ks-surface)] p-4 shadow-[var(--ks-shadow-soft)]">
                  <p className="text-2xl font-black text-[var(--ks-primary)]">{stat.value}</p>
                  <p className="mt-1 text-[0.66rem] font-bold uppercase tracking-[0.09em] text-[var(--ks-text-muted)]">
                    {stat.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {studentStories.map((story) => (
                <blockquote key={story.name} className="rounded-2xl bg-[var(--ks-surface)] p-4 shadow-[var(--ks-shadow-soft)]">
                  <p className="text-sm leading-7 text-[var(--ks-text-muted)]">“{story.line}”</p>
                  <footer className="mt-2 flex items-center justify-between gap-3">
                    <span className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[var(--ks-primary)]">
                      {story.name}
                    </span>
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[var(--ks-secondary)]">
                      {story.outcome}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-7">
              <CtaLink href="/about" variant="outline">
                Read More Success Stories
              </CtaLink>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
