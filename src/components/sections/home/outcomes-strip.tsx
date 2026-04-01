import { SectionContainer } from "@/components/ui/section-container";
import { homeOutcomes } from "@/lib/site-data";

export function OutcomesStrip() {
  return (
    <section className="bg-[var(--ks-surface-low)] py-14 sm:py-20">
      <SectionContainer>
        <div className="grid gap-8 md:grid-cols-3">
          {homeOutcomes.map((item) => (
            <div key={item.title} className="rounded-[1.4rem] bg-[var(--ks-surface)] p-6 shadow-[var(--ks-shadow-soft)]">
              <h2 className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-[1.5rem] font-semibold text-[var(--ks-dark)]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--ks-text-muted)]">{item.detail}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
