import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { freeResourceTracks } from "@/lib/site-data";

export function FreeResourcesSection() {
  return (
    <div className="mt-16 bg-[var(--ks-surface-low)] py-16 sm:mt-20 sm:py-20">
      <SectionContainer>
        <SectionHeading
          title="Free Course"
          subtitle="Check out curated free tracks designed to help students start fast and revise effectively."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {freeResourceTracks.map((track, idx) => (
            <article
              key={track}
              className="group relative overflow-hidden rounded-full px-5 py-4 shadow-[var(--ks-shadow-soft)]"
              style={{
                background:
                  idx % 2 === 0
                    ? "linear-gradient(135deg, #264e98 0%, #4267b2 100%)"
                    : "linear-gradient(135deg, #3159a4 0%, #5477bf 100%)",
              }}
            >
              <p className="text-center text-sm font-bold uppercase tracking-[0.08em] text-white">
                {track}
              </p>
              <div className="pointer-events-none absolute inset-0 translate-y-full bg-black/30 transition duration-300 group-hover:translate-y-0" />
              <Link
                href="/free-resources"
                className="absolute inset-0 flex items-center justify-center text-xs font-bold uppercase tracking-[0.08em] text-white opacity-0 transition duration-300 group-hover:opacity-100"
              >
                Get Started
              </Link>
            </article>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
