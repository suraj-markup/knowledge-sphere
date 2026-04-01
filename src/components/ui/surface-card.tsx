function cn(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

const toneStyles = {
  surface: "bg-[var(--ks-surface)] text-[var(--ks-text)]",
  muted: "bg-[var(--ks-surface-low)] text-[var(--ks-text)]",
  inverse: "bg-[var(--ks-dark)] text-white",
};

export function SurfaceCard({
  children,
  className,
  interactive = false,
  tone = "surface",
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  tone?: keyof typeof toneStyles;
}) {
  return (
    <article
      className={cn(
        "rounded-[1.6rem] p-6 shadow-[var(--ks-shadow-soft)] transition",
        toneStyles[tone],
        interactive && "hover:-translate-y-1 hover:shadow-[var(--ks-shadow-float)]",
        className
      )}
    >
      {children}
    </article>
  );
}
