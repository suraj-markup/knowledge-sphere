import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { CtaLink } from "@/components/ui/cta-link";
import { FaqList } from "@/components/ui/faq-list";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { faqs } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export default function FaqPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything students and parents usually ask before choosing the right learning plan."
        actions={<CtaLink href="/pricing">View Membership</CtaLink>}
        media={
          <div className="relative h-[250px] overflow-hidden rounded-[1.4rem] sm:h-[290px]">
            <Image
              src={stockImages.mentorshipSession}
              alt="Mentor addressing student questions"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      <SectionContainer className="pt-12 pb-4 sm:pt-14">
        <FaqList items={faqs} />
      </SectionContainer>
    </SiteShell>
  );
}
