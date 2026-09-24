import type { Metadata } from "next";
import { Accordion } from "../components/Interactive";
import { CTABand, Container, PageHero, Section } from "../components/UI";
import { generalFaqs } from "@/lib/site";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about WISMAD's website development, app development, SEO, digital marketing, pricing and support.",
  alternates: { canonical: "/faq" },
};

const pick = (slugs: string[]) => slugs.flatMap((s) => services.find((x) => x.slug === s)?.faqs ?? []);

const groups = [
  { id: "general", t: "General", items: [...generalFaqs, { q: "Where is WISMAD located?", a: "Our office is at Vipul Plaza, Vipul Khand 3, Gomti Nagar, Lucknow. We work with clients remotely worldwide." }] },
  { id: "websites", t: "Websites & apps", items: pick(["design-development", "website-development", "android-ios-app"]) },
  { id: "marketing", t: "SEO & marketing", items: pick(["search-engine-optimization", "digital-marketing", "pay-per-click"]) },
  { id: "hosting", t: "Hosting & support", items: pick(["web-hosting"]) },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) => g.items).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "FAQ" }]}
        eyebrow="Help centre"
        title="Frequently asked questions."
        lead="Everything you need to know about working with WISMAD. Can't find your answer? Our team is one call away."
        actions={false}
      />
      <Section className="!pt-14">
        <Container className="grid items-start gap-10 lg:grid-cols-[240px_1fr]">
          <nav aria-label="FAQ topics" className="glass flex gap-1 overflow-x-auto rounded-[22px] p-3 lg:sticky lg:top-[130px] lg:flex-col" data-reveal>
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="whitespace-nowrap rounded-xl px-3.5 py-2.5 text-[14.5px] font-bold text-ink-2 transition-colors hover:bg-brand-50 hover:text-brand">
                {g.t}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-14">
            {groups.map((g) => (
              <section key={g.id} id={g.id} data-reveal>
                <h2 className="m-0 mb-5 text-[28px] font-extrabold tracking-[-.03em]">{g.t}</h2>
                <Accordion items={g.items} searchable={g.id === "general"} />
              </section>
            ))}
          </div>
        </Container>
      </Section>
      <CTABand title="Still have questions?" body="Talk to our team — we reply within one working hour." cta={{ href: "/contact-us", label: "Ask us directly" }} />
    </>
  );
}
