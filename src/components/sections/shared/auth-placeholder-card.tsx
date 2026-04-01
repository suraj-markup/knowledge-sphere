import { CtaLink } from "@/components/ui/cta-link";
import { SurfaceCard } from "@/components/ui/surface-card";

export function AuthPlaceholderCard({
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <SurfaceCard className="mx-auto max-w-xl">
      <p className="text-sm leading-7 text-[var(--ks-text-muted)]">{description}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <CtaLink href={primaryHref}>{primaryLabel}</CtaLink>
        {secondaryHref && secondaryLabel ? (
          <CtaLink href={secondaryHref} variant="ghost">
            {secondaryLabel}
          </CtaLink>
        ) : null}
      </div>
    </SurfaceCard>
  );
}
