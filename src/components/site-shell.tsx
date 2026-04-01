import Link from "next/link";
import { programs, subjects } from "@/lib/site-data";

const primaryLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Membership" },
  { href: "/free-resources", label: "Free Course" },
  { href: "/blog", label: "Blog" },
];

const socials = [
  { href: "https://x.com", label: "X" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.youtube.com", label: "YouTube" },
];

const headingClass = "[font-family:var(--font-heading),Avenir_Next,sans-serif]";
const navLinkClass =
  "text-[0.82rem] font-bold uppercase tracking-[0.08em] text-[var(--ks-dark)] transition hover:text-[var(--ks-secondary)]";
const topChipClass =
  "inline-flex items-center justify-center rounded-full border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white hover:bg-white hover:text-[var(--ks-dark)]";
const footerLinkClass = "text-slate-200 transition hover:text-slate-50";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--ks-bg)] text-[var(--ks-text)]">
      <div className="bg-[var(--ks-dark)] text-slate-100">
        <div className="mx-auto hidden min-h-12 w-full max-w-[1180px] items-center justify-between px-4 md:flex">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em]">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={topChipClass}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Link href="/login" className={topChipClass}>
              Login
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-white shadow-[0_16px_34px_rgba(38,78,152,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(38,78,152,0.36)]"
              style={{ background: "var(--ks-gradient)" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 shadow-[0_8px_30px_rgba(26,28,28,0.05)] backdrop-blur">
        <div className="mx-auto flex min-h-20 w-full max-w-[1180px] items-center justify-between gap-4 px-4">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white shadow-[0_12px_28px_rgba(38,78,152,0.28)]"
              style={{ background: "var(--ks-gradient)" }}
            >
              KS
            </span>
            <span className={`${headingClass} text-lg font-semibold text-[var(--ks-dark)]`}>
              Knowledge Sphere
            </span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {primaryLinks.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border-2 border-[color:color-mix(in_srgb,var(--ks-primary)_35%,white)] px-5 py-2.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-[var(--ks-primary)] transition hover:bg-[var(--ks-primary)] hover:text-white"
          >
            View Plans
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-20 bg-[var(--ks-footer)] text-white">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className={`${headingClass} text-2xl font-semibold`}>Knowledge Sphere</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">
              Structured learning journeys for focused students and ambitious
              coaching ecosystems. Learn, practice, revise, and score with confidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((item) => (
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
              Courses
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {programs.map((program) => (
                <li key={program.slug}>
                  <Link href={`/courses/${program.slug}/physics`} className={footerLinkClass}>
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
                  <Link href={`/courses/ib-myp-1/${subject.slug}`} className={footerLinkClass}>
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
              <li>
                <Link href="/about" className={footerLinkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className={footerLinkClass}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={footerLinkClass}>
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/free-resources" className={footerLinkClass}>
                  Free Course
                </Link>
              </li>
              <li>
                <Link href="/blog" className={footerLinkClass}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex min-h-16 w-full max-w-[1180px] items-center justify-between gap-3 px-4 text-xs text-slate-300">
            <p>© {new Date().getFullYear()} Knowledge Sphere</p>
            <p className="text-right">Built for teaching and coaching excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
