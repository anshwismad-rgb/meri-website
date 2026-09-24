import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail } from "lucide-react";
import ServiceTemplate from "../components/ServiceTemplate";
import Prose from "../components/Prose";
import { Container, PageHero } from "../components/UI";
import { serviceBySlug, services } from "@/lib/services";
import { legalBySlug, legalPages } from "@/lib/legal";
import { formatDate } from "@/lib/blog";
import { legalLinks, site } from "@/lib/site";

// Service pages and legal pages share the top-level URL space so the old
// wismad.com slugs (e.g. /website-development.html) keep working via redirects.
export const dynamicParams = false;

export function generateStaticParams() {
  return [...services.map((s) => ({ slug: s.slug })), ...legalPages.map((l) => ({ slug: l.slug }))];
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (s) return { title: s.metaTitle, description: s.metaDescription, alternates: { canonical: `/${s.slug}` } };
  const l = legalBySlug(slug);
  if (l) return { title: l.title, description: l.intro, alternates: { canonical: `/${l.slug}` } };
  return {};
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (s) return <ServiceTemplate s={s} />;
  const l = legalBySlug(slug);
  if (!l) notFound();

  return (
    <>
      <PageHero crumbs={[{ href: "/", label: "Home" }, { label: l.title }]} eyebrow="Legal" title={l.title} lead={l.intro} actions={false} />
      <Container className="grid gap-10 pt-14 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-[130px] lg:self-start" data-reveal>
          <nav aria-label="Legal pages" className="glass flex flex-col gap-1 rounded-[22px] p-3">
            {legalLinks.map((x) => (
              <Link
                key={x.href}
                href={x.href}
                aria-current={x.href === `/${l.slug}` ? "page" : undefined}
                className={`rounded-xl px-3.5 py-2.5 text-[14.5px] font-bold transition-colors ${x.href === `/${l.slug}` ? "bg-brand text-white" : "text-ink-2 hover:bg-brand-50"}`}
              >
                {x.label}
              </Link>
            ))}
          </nav>
        </aside>
        <article className="glass-strong rounded-[28px] p-[clamp(24px,4vw,48px)]" data-reveal data-delay="100">
          <p className="m-0 mb-2 text-[13.5px] font-bold text-muted-2">Last updated {formatDate(l.updated)}</p>
          <Prose blocks={l.body} />
          <a href={`mailto:${site.email}`} className="btn btn-glass mt-4">
            <Mail size={16} aria-hidden /> Questions? {site.email}
          </a>
        </article>
      </Container>
    </>
  );
}
