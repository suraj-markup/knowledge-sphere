import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { CtaLink } from "@/components/ui/cta-link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { SurfaceCard } from "@/components/ui/surface-card";
import { blogPosts } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Blog"
        title="Insights for high-performing students"
        description="Revision systems, exam tactics, and practical methods from mentors and academic specialists."
        actions={<CtaLink href="/signup">Get Weekly Study Tips</CtaLink>}
        media={
          <div className="relative h-[250px] overflow-hidden rounded-[1.4rem] sm:h-[290px]">
            <Image
              src={stockImages.studentLaptop}
              alt="Student writing revision notes"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      <SectionContainer className="pt-12 pb-4 sm:pt-14">
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <SurfaceCard key={post.slug} interactive>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--ks-primary)]">
                {post.category}
              </p>
              <h2 className="mt-3 [font-family:var(--font-heading),Avenir_Next,sans-serif] text-2xl font-semibold text-[var(--ks-dark)]">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--ks-text-muted)]">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.08em] text-[var(--ks-text-muted)]">
                <span>{post.publishedOn}</span>
                <span>{post.readTime}</span>
              </div>
              <Link
                href="/signup"
                className="mt-5 inline-flex rounded-full bg-[var(--ks-surface-high)] px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[var(--ks-primary)] transition hover:bg-[var(--ks-primary)] hover:text-white"
              >
                Read Article
              </Link>
            </SurfaceCard>
          ))}
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
