import Link from "next/link";
import { programs } from "@/lib/site-data";

export function ProgramPills({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {programs.map((program) => (
        <Link
          key={program.slug}
          href={`/courses/${program.slug}/physics`}
          className={`rounded-full border border-[color:color-mix(in_srgb,var(--ks-primary)_16%,white)] bg-white text-[var(--ks-primary)] transition hover:border-[var(--ks-primary)] hover:bg-[var(--ks-primary)] hover:text-white ${
            compact
              ? "px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.08em]"
              : "px-4 py-2 text-[0.74rem] font-bold uppercase tracking-[0.08em]"
          }`}
        >
          {program.label}
        </Link>
      ))}
    </div>
  );
}
