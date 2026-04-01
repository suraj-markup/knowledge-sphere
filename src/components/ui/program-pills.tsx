import Link from "next/link";
import { programs } from "@/lib/site-data";

const sizeStyles = {
  regular: "px-4 py-2 text-[0.74rem]",
  compact: "px-3 py-1.5 text-[0.68rem]",
};

const toneStyles = {
  surface:
    "bg-[var(--ks-surface)] text-[var(--ks-primary)] shadow-[0_8px_20px_rgba(26,28,28,0.06)] hover:bg-[var(--ks-primary)] hover:text-white",
  elevated:
    "text-white shadow-[0_14px_34px_rgba(38,78,152,0.26)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(38,78,152,0.34)]",
};

export function ProgramPills({
  className = "",
  compact = false,
  tone = "surface",
}: {
  className?: string;
  compact?: boolean;
  tone?: keyof typeof toneStyles;
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {programs.map((program, idx) => (
        <Link
          key={program.slug}
          href={`/courses/${program.slug}/physics`}
          className={`rounded-full font-bold uppercase tracking-[0.08em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_srgb,var(--ks-primary)_40%,white)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ks-bg)] ${sizeStyles[compact ? "compact" : "regular"]} ${toneStyles[tone]}`}
          style={
            tone === "elevated"
              ? {
                  background:
                    idx % 2 === 0
                      ? "linear-gradient(135deg, #264e98 0%, #4267b2 100%)"
                      : "linear-gradient(135deg, #3159a4 0%, #5477bf 100%)",
                }
              : undefined
          }
        >
          {program.label}
        </Link>
      ))}
    </div>
  );
}
