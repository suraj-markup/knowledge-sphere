import Link from "next/link";

type Variant = "primary" | "outline" | "pink" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "text-white shadow-[0_14px_34px_rgba(38,78,152,0.28)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(38,78,152,0.35)]",
  outline:
    "bg-[var(--ks-surface)] text-[var(--ks-primary)] shadow-[0_10px_28px_rgba(26,28,28,0.06)] hover:bg-[var(--ks-primary)] hover:text-white",
  pink:
    "bg-[var(--ks-secondary)] text-white shadow-[0_14px_34px_rgba(199,62,134,0.28)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(199,62,134,0.34)]",
  ghost:
    "bg-transparent text-[var(--ks-primary)] hover:bg-[var(--ks-surface-high)]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.68rem]",
  md: "px-6 py-3 text-[0.72rem]",
  lg: "px-7 py-3.5 text-[0.76rem]",
};

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function CtaLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-bold uppercase tracking-[0.08em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_srgb,var(--ks-primary)_40%,white)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ks-bg)]",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      style={variant === "primary" ? { background: "var(--ks-gradient)" } : undefined}
    >
      {children}
    </Link>
  );
}
