import type { Metadata } from "next";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { CTABand, Container, PageHero, ReviewCard, Section, StatsRow } from "../components/UI";
import { reviews } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials",
  description: "Read what our clients say about WISMAD's website development, e-commerce, SEO and digital marketing services.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const [hero, ...rest] = reviews;
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Reviews" }]}
        eyebrow={
          <>
            <Star size={14} fill="currentColor" aria-hidden /> Client reviews
          </>
        }
        title="Don't just take our word for it."
        lead="Businesses in India, the UK, USA, Canada and Australia trust WISMAD with their websites and marketing. Here's what some of them say."
        actions={false}
      />

      <Section className="!pt-14">
        <Container>
          <figure data-reveal="zoom" className="relative m-0 overflow-hidden rounded-[36px] p-[clamp(28px,5vw,64px)] text-white" style={{ background: "var(--grad-wide)", boxShadow: "0 40px 80px rgba(26,95,219,.3)" }}>
            <div className="anim-blob absolute -right-24 -top-32 h-96 w-96 rounded-full bg-white/10" aria-hidden />
            <Quote size={64} className="relative text-white/30" aria-hidden />
            <blockquote className="relative m-0 mt-4 max-w-[30ch] text-[clamp(24px,3.2vw,38px)] font-extrabold leading-[1.25] tracking-[-.02em]">“{hero.q}”</blockquote>
            <figcaption className="relative mt-8 flex items-center gap-4">
              <Image src={hero.img} alt="" width={60} height={60} className="h-[60px] w-[60px] rounded-full border-[3px] border-white/70 object-cover" />
              <span className="flex flex-col">
                <span className="text-[17px] font-extrabold">{hero.n}</span>
                <span className="text-[14px] text-white/80">{hero.role}</span>
              </span>
              <span className="ml-auto hidden gap-1 sm:flex" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} fill="#fbbf24" className="text-[#fbbf24]" aria-hidden />
                ))}
              </span>
            </figcaption>
          </figure>
        </Container>
      </Section>

      <Section className="!pt-10">
        <Container>
          <div className="columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid" data-stagger>
            {rest.map((r, i) => (
              <div key={i} className="[&>figure]:w-full">
                <ReviewCard r={r} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="!pt-10">
        <Container>
          <StatsRow />
        </Container>
      </Section>

      <CTABand title="Become our next success story." />
    </>
  );
}
