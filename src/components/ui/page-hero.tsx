import { SectionContainer } from "@/components/ui/section-container";

function cn(...values: Array<string | undefined | false | null>) {
  return values.filter(Boolean).join(" ");
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  compact = false,
  media,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
  compact?: boolean;
  media?: React.ReactNode;
  align?: "left" | "center";
}) {
  const textAlign = align === "center" ? "text-center" : "text-left";

  return (
    <SectionContainer className={compact ? "pt-10" : "pt-12 sm:pt-16"}>
      <div className="relative overflow-hidden rounded-[2rem] bg-[var(--ks-surface)] px-6 py-8 shadow-[var(--ks-shadow-soft)] sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[color:color-mix(in_srgb,var(--ks-secondary)_14%,white)] blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[color:color-mix(in_srgb,var(--ks-primary)_14%,white)] blur-3xl" />

        <div
          className={cn(
            "relative grid items-center gap-8",
            media ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]" : "grid-cols-1"
          )}
        >
          <div className={cn(textAlign, Boolean(media) && align === "center" && "lg:text-left")}>
            {eyebrow ? (
              <span className="inline-flex rounded-full bg-[var(--ks-surface-high)] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[var(--ks-primary)]">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="mt-4 [font-family:var(--font-heading),Avenir_Next,sans-serif] text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.06] text-[var(--ks-dark)]">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-[1rem] leading-8 text-[var(--ks-text-muted)]">{description}</p>
            {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          {media ? <div className="relative">{media}</div> : null}
        </div>
      </div>
    </SectionContainer>
  );
}
