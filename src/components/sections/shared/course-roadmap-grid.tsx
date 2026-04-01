import Link from "next/link";
import { SurfaceCard } from "@/components/ui/surface-card";

export type RoadmapItem = {
  title: string;
  description?: string;
  href?: string;
  ctaLabel?: string;
  meta?: string;
};

export function CourseRoadmapGrid({
  items,
  className = "",
  columns = "lg:grid-cols-5",
}: {
  items: RoadmapItem[];
  className?: string;
  columns?: string;
}) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${columns} ${className}`.trim()}>
      {items.map((item) => (
        <SurfaceCard key={item.title} className="p-5" interactive>
          {item.meta ? (
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--ks-text-muted)]">
              {item.meta}
            </span>
          ) : null}
          <h3 className="mt-2 [font-family:var(--font-heading),Avenir_Next,sans-serif] text-lg font-semibold text-[var(--ks-dark)]">
            {item.title}
          </h3>
          {item.description ? (
            <p className="mt-2 text-sm leading-7 text-[var(--ks-text-muted)]">{item.description}</p>
          ) : null}
          {item.href ? (
            <Link
              href={item.href}
              className="mt-4 inline-flex rounded-full bg-[var(--ks-surface-high)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--ks-primary)] transition hover:bg-[var(--ks-primary)] hover:text-white"
            >
              {item.ctaLabel ?? "Open"}
            </Link>
          ) : null}
        </SurfaceCard>
      ))}
    </div>
  );
}
