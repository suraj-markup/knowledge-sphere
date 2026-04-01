export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`${alignment} mx-auto max-w-2xl`.trim()}>
      <h2 className="[font-family:var(--font-heading),Avenir_Next,sans-serif] text-3xl font-semibold uppercase tracking-[0.02em] text-[var(--ks-primary)] sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-[var(--ks-text-muted)]">{subtitle}</p>
      ) : null}
    </div>
  );
}
