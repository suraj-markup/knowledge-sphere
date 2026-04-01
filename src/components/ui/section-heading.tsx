function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "left" ? "text-left" : "text-center";

  return (
    <div className={cn(alignment, "mx-auto max-w-3xl")}>
      {eyebrow ? (
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.11em] text-[var(--ks-primary)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 [font-family:var(--font-heading),Avenir_Next,sans-serif] text-[clamp(1.75rem,2.6vw,2.7rem)] font-semibold uppercase leading-[1.08] tracking-[0.01em] text-[var(--ks-dark)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-[1rem] leading-8 text-[var(--ks-text-muted)]">{subtitle}</p>
      ) : null}
    </div>
  );
}
