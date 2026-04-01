import Link from "next/link";
import {
  primaryNavLinks,
  programs,
  quickLinks,
  socialLinks,
  subjects,
} from "@/lib/site-data";

const headingClass = "[font-family:var(--font-heading),Avenir_Next,sans-serif]";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--ks-bg)] text-[var(--ks-text)]">
      <div className="bg-[var(--ks-dark)] text-slate-100">
        <div className="mx-auto flex min-h-12 w-full max-w-[1180px] items-center justify-between gap-3 px-4 md:px-6">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-slate-200">
            Admissions open for April 2026 cohort
          </p>
          <div className="hidden items-center gap-2 md:flex">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-white/22 px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-[var(--ks-dark)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[color:color-mix(in_srgb,var(--ks-primary)_6%,white)] bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 w-full max-w-[1180px] items-center justify-between gap-4 px-4 md:px-6">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black text-white shadow-[0_14px_32px_rgba(38,78,152,0.26)]"
              style={{ background: "var(--ks-gradient)" }}
            >
              KS
            </span>
            <span className={`${headingClass} text-lg font-semibold tracking-tight text-[var(--ks-dark)]`}>
              Knowledge Sphere
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {primaryNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[var(--ks-dark)] transition hover:text-[var(--ks-secondary)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-full px-4 py-2 text-[0.74rem] font-bold uppercase tracking-[0.08em] text-[var(--ks-primary)] transition hover:bg-[var(--ks-surface-high)] sm:inline-flex"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="inline-flex rounded-full bg-[var(--ks-secondary)] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-white shadow-[0_14px_32px_rgba(199,62,134,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(199,62,134,0.36)]"
            >
              Join Free
            </Link>
          </div>
        </div>

        <div className="border-t border-[var(--ks-outline-ghost)] lg:hidden">
          <div className="mx-auto w-full max-w-[1180px] overflow-x-auto px-4 md:px-6">
            <nav className="flex min-h-11 items-center gap-5">
              {primaryNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--ks-primary)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-20 bg-[var(--ks-footer)] text-white">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className={`${headingClass} text-2xl font-semibold`}>Knowledge Sphere</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">
              Structured learning journeys for focused students and ambitious
              coaching ecosystems. Learn, practice, revise, and score with confidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide transition hover:border-white hover:bg-white hover:text-[var(--ks-footer)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className={`${headingClass} text-sm font-semibold uppercase tracking-[0.12em] text-slate-200`}>
              Programs
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {programs.slice(0, 5).map((program) => (
                <li key={program.slug}>
                  <Link href={`/courses/${program.slug}/physics`} className="text-slate-200 transition hover:text-white">
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`${headingClass} text-sm font-semibold uppercase tracking-[0.12em] text-slate-200`}>
              Subjects
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {subjects.map((subject) => (
                <li key={subject.slug}>
                  <Link href={`/courses/ib-myp-1/${subject.slug}`} className="text-slate-200 transition hover:text-white">
                    {subject.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`${headingClass} text-sm font-semibold uppercase tracking-[0.12em] text-slate-200`}>
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-200 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex min-h-16 w-full max-w-[1180px] items-center justify-between gap-3 px-4 text-xs text-slate-300 md:px-6">
            <p>© {new Date().getFullYear()} Knowledge Sphere</p>
            <p className="text-right">Built for teaching and coaching excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
