import Link from "next/link";

type Variant = "primary" | "outline" | "pink";

const styles: Record<Variant, string> = {
  primary:
    "text-white shadow-[0_14px_34px_rgba(38,78,152,0.28)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(38,78,152,0.34)]",
  outline:
    "border-2 border-[color:color-mix(in_srgb,var(--ks-primary)_18%,white)] bg-white text-[var(--ks-primary)] hover:bg-[var(--ks-primary)] hover:text-white",
  pink: "bg-[var(--ks-secondary)] text-white hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(199,62,134,0.28)]",
};

export function CtaLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] transition ${styles[variant]}`.trim()}
      style={variant === "primary" ? { background: "var(--ks-gradient)" } : undefined}
    >
      {children}
    </Link>
  );
}
