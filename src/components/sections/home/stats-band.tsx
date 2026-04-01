import { trackStats } from "@/lib/site-data";
import { SectionContainer } from "@/components/ui/section-container";

const ringColors = ["#28A8BF", "#58489D", "#F16B25", "#D31C88", "#EDB83C"];

export function StatsBand() {
  return (
    <SectionContainer className="pt-12 sm:pt-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {trackStats.map((item, index) => (
          <article
            key={item.title}
            className="rounded-3xl bg-[var(--ks-surface)] p-5 text-center shadow-[var(--ks-shadow-soft)]"
          >
            <div
              className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full border-4 text-lg font-extrabold"
              style={{ borderColor: ringColors[index % ringColors.length], color: ringColors[index % ringColors.length] }}
            >
              {item.value.split("")[0]}
            </div>
            <p className="text-xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.06em] text-[var(--ks-text-muted)]">
              {item.title}
            </p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
