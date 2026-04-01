import { SurfaceCard } from "@/components/ui/surface-card";
import { resourcePillars } from "@/lib/site-data";

export function ResourcePillarsGrid({
  className = "",
  columns = "lg:grid-cols-3",
}: {
  className?: string;
  columns?: string;
}) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${columns} ${className}`.trim()}>
      {resourcePillars.map((pillar) => (
        <SurfaceCard key={pillar.title} className="overflow-hidden p-0" interactive>
          <div className="h-1.5 w-full" style={{ backgroundColor: pillar.color }} />
          <div className="p-6">
            <h3
              className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-2xl font-semibold"
              style={{ color: pillar.color }}
            >
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--ks-text-muted)]">{pillar.description}</p>
          </div>
        </SurfaceCard>
      ))}
    </div>
  );
}
