import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { PostCard } from "../../components/Filters";
import Prose from "../../components/Prose";
import { Breadcrumbs, CTABand, Container, Section, SectionHead, SplitWords } from "../../components/UI";
import { formatDate, postBySlug, posts } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const p = postBySlug((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.excerpt, images: [p.image] },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const p = postBySlug((await params).slug);
  if (!p) notFound();
  const related = posts.filter((x) => x.slug !== p.slug && x.category === p.category).concat(posts.filter((x) => x.slug !== p.slug && x.category !== p.category)).slice(0, 3);

  return (
    <>
      <article>
        <header className="pt-[clamp(40px,6vw,72px)]">
          <Container className="flex max-w-[900px] flex-col items-center gap-5 text-center">
            <div data-reveal>
              <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }, { label: p.category }]} />
            </div>
            <span className="eyebrow !self-center" data-reveal data-delay="60">
              {p.category}
            </span>
            <h1 className="m-0 max-w-[22ch] text-[clamp(34px,4.6vw,58px)] font-extrabold leading-[1.06] tracking-[-.04em]" data-reveal="split">
              <SplitWords text={p.title} start={100} step={50} />
            </h1>
            <p className="m-0 flex items-center gap-2 text-[14px] font-semibold text-muted-2" data-reveal data-delay="300">
              By WISMAD team · {formatDate(p.date)} · <Clock size={14} aria-hidden /> {p.read} min read
            </p>
          </Container>
        </header>
        <Container className="max-w-[1000px] pt-10">
          <div data-reveal="zoom" data-delay="200" className="relative aspect-[16/8] overflow-hidden rounded-[32px]" style={{ boxShadow: "var(--shadow-lg)" }}>
            <Image src={p.image} alt="" fill sizes="1000px" className="object-cover" preload />
          </div>
        </Container>
        <Container className="max-w-[760px] pt-12">
          <p className="m-0 mb-8 text-[20px] font-semibold leading-relaxed text-ink" data-reveal>
            {p.excerpt}
          </p>
          <div data-reveal>
            <Prose blocks={p.body} />
          </div>
          <div className="mt-10 border-t border-line pt-8">
            <Link href="/blog" className="btn btn-glass">
              <ArrowLeft size={16} aria-hidden /> All articles
            </Link>
          </div>
        </Container>
      </article>
      <Section>
        <Container>
          <SectionHead eyebrow="Keep reading" title="Related articles." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
            {related.map((r) => (
              <PostCard key={r.slug} p={r} />
            ))}
          </div>
        </Container>
      </Section>
      <CTABand />
    </>
  );
}
