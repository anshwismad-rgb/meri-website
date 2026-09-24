import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BlogGrid } from "../components/Filters";
import { CTABand, Container, PageHero, Section } from "../components/UI";
import { formatDate, posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Website Development, Design & Digital Marketing",
  description: "Articles on website development, design, SEO and digital marketing from the WISMAD team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Blog" }]}
        eyebrow="Insights"
        title="Ideas to help your business grow online."
        lead="Practical articles on websites, SEO, social media and digital marketing — the latest news and trends in the IT world."
        actions={false}
      />
      <Section className="!pt-14">
        <Container>
          <Link href={`/blog/${featured.slug}`} data-reveal className="glass group grid overflow-hidden rounded-[32px] p-3 lg:grid-cols-[1.2fr_1fr]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] lg:aspect-auto lg:min-h-[380px]">
              <Image src={featured.image} alt="" fill sizes="(min-width:1024px) 640px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" preload />
              <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[12px] font-extrabold text-white">Featured</span>
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 lg:p-10">
              <span className="self-start rounded-full bg-brand-50 px-3 py-1 text-[12px] font-extrabold text-brand-600">{featured.category}</span>
              <h2 className="m-0 text-[clamp(26px,3vw,36px)] font-extrabold leading-tight tracking-[-.03em] transition-colors group-hover:text-brand">{featured.title}</h2>
              <p className="lead m-0">{featured.excerpt}</p>
              <span className="flex items-center gap-2 text-[13px] font-semibold text-muted-2">
                {formatDate(featured.date)} · <Clock size={13} aria-hidden /> {featured.read} min read
              </span>
              <span className="inline-flex items-center gap-2 text-[15px] font-extrabold text-brand">
                Read article <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        </Container>
      </Section>
      <Section className="!pt-16">
        <Container>
          <BlogGrid posts={rest} />
        </Container>
      </Section>
      <CTABand title="Want these results for your business?" />
    </>
  );
}
