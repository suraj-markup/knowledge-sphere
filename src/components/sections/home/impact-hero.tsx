import Image from "next/image";
import { CtaLink } from "@/components/ui/cta-link";
import { ProgramPills } from "@/components/ui/program-pills";
import { conversionStats } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export function ImpactHero() {
  return (
    <section className="relative min-h-[84svh] overflow-hidden">
      <Image
        src={stockImages.heroStudents}
        alt="Students collaborating with a mentor"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(10,20,38,0.82)_0%,rgba(10,20,38,0.66)_43%,rgba(10,20,38,0.36)_100%)]" />

      <div className="relative mx-auto grid min-h-[84svh] w-full max-w-[1180px] items-end gap-8 px-4 py-16 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white backdrop-blur">
            Coaching That Converts Effort Into Results
          </p>
          <h1 className="mt-5 [font-family:var(--font-heading),Avenir_Next,sans-serif] text-[clamp(2.3rem,5vw,4.8rem)] font-semibold leading-[1.01] text-white">
            Build rank-level confidence, not last-minute panic.
          </h1>
          <p className="mt-5 max-w-xl text-[1.03rem] leading-8 text-slate-100/95">
            High-impact concept clarity, deliberate practice, and exam-simulation
            systems designed for students who want measurable score jumps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/signup" size="lg">
              Start Free Today
            </CtaLink>
            <CtaLink href="/courses" variant="outline" size="lg">
              Explore Learning Paths
            </CtaLink>
          </div>
          <div className="mt-8">
            <ProgramPills compact tone="elevated" />
          </div>
        </div>

        <div className="hidden rounded-[1.8rem] border border-white/18 bg-white/10 p-6 text-white shadow-[0_24px_54px_rgba(10,20,38,0.28)] backdrop-blur-xl lg:block">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-slate-100">
            Conversion Snapshot
          </p>
          <div className="mt-4 space-y-4">
            {conversionStats.map((stat) => (
              <div key={stat.title} className="rounded-2xl bg-white/10 p-4">
                <p className="text-3xl font-black tracking-tight">{stat.value}</p>
                <p className="mt-1 text-[0.74rem] font-bold uppercase tracking-[0.08em] text-slate-100/95">
                  {stat.title}
                </p>
                <p className="mt-1 text-xs leading-6 text-slate-200">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
