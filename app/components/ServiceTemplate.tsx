import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { categories, services, type Service } from "@/lib/services";
import { engagementModels, generalFaqs } from "@/lib/site";
import { Accordion } from "./Interactive";
import Icon, { IconTile } from "./Icon";
import { ServiceVisual } from "./Mockups";
import { CTABand, Container, PageHero, Section, SectionHead, SplitWords, TechMarquee, TestimonialsMarquee } from "./UI";

const steps = [
  { t: "Discover", b: "A short call to understand your goals, audience and competitors." },
  { t: "Plan", b: "A clear proposal with scope, timeline and a fixed quote." },
  { t: "Build & launch", b: "Weekly progress updates, testing and a smooth launch." },
  { t: "Grow", b: "Support, reporting and continuous improvement." },
];

export default function ServiceTemplate({ s }: { s: Service }) {
  const related = services.filter((x) => x.category === s.category && x.slug !== s.slug).slice(0, 3);
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: categories[s.category].label }, { label: s.title }]}
        eyebrow={
          <>
            <Icon name={s.icon} size={15} /> {s.title}
          </>
        }
        title={s.headline}
        lead={s.intro}
        visual={<ServiceVisual s={s} />}
      >
        <dl className="mt-2 grid max-w-[520px] grid-cols-3 gap-3" data-stagger>
          {s.highlights.map((h) => (
            <div key={h.l} className="glass flex flex-col-reverse rounded-2xl px-4 py-3" style={{ boxShadow: "var(--shadow-sm)" }}>
              <dt className="text-[12px] font-semibold text-muted">{h.l}</dt>
              <dd className="m-0 text-[20px] font-extrabold tracking-tight" style={{ color: s.gradient[1] }}>
                {h.v}
              </dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <TechMarquee items={s.tools} label="Tools & platforms we use" />

      {/* Features */}
      <Section>
        <Container>
          <SectionHead eyebrow="What you get" title={`Everything you need, done properly.`} body={`Our ${s.title.toLowerCase()} service covers strategy, execution and support — so you can focus on running your business.`} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-stagger="80">
            {s.features.map((f, i) => (
              <div key={f.title} className="glass spot card-hover group flex flex-col gap-4 rounded-[26px] p-7">
                <div className="flex items-center justify-between">
                  <span className="transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <IconTile name={f.icon} gradient={s.gradient} size={50} />
                  </span>
                  <span className="text-[13px] font-extrabold text-muted-2/60">0{i + 1}</span>
                </div>
                <h3 className="m-0 text-[20px] font-extrabold tracking-[-.02em]">{f.title}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why us split */}
      <Section>
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div data-reveal="left" className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[32px]" style={{ boxShadow: "var(--shadow-lg)" }}>
              <Image src={s.image} alt="" fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, transparent 40%, ${s.gradient[1]}cc)` }} />
            </div>
            <div className="glass-strong anim-float absolute -bottom-6 right-4 flex items-center gap-3 rounded-[22px] px-5 py-4 sm:right-8">
              <span className="text-[34px] font-extrabold leading-none tracking-[-.05em] text-brand" data-count="500" data-suffix="+">
                500+
              </span>
              <span className="text-[13px] font-bold leading-snug">
                Projects
                <br />
                delivered
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="eyebrow" data-reveal>
              Why WISMAD
            </span>
            <h2 className="h-section m-0" data-reveal="split">
              <SplitWords text={`Why businesses choose us for ${s.title.toLowerCase()}.`} />
            </h2>
            <ul className="m-0 grid list-none gap-3 p-0" data-stagger>
              {s.why.map((w) => (
                <li key={w} className="glass flex items-center gap-3.5 rounded-[18px] px-4 py-3.5" style={{ boxShadow: "none" }}>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] text-white" style={{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})` }}>
                    <Check size={16} aria-hidden />
                  </span>
                  <span className="text-[15.5px] font-bold">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Process timeline */}
      <Section>
        <Container>
          <SectionHead eyebrow="How it works" title="A simple, transparent process." center />
          <ol className="relative m-0 grid list-none gap-5 p-0 md:grid-cols-4" data-stagger="140">
            {steps.map((st, i) => (
              <li key={st.t} className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-[18px] font-extrabold text-white" style={{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})`, boxShadow: `0 12px 24px ${s.gradient[1]}40` }}>
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && <span className="hidden h-[2px] flex-1 origin-left rounded-full md:block" style={{ background: `linear-gradient(90deg, ${s.gradient[1]}, transparent)` }} />}
                </div>
                <h3 className="m-0 text-[19px] font-extrabold">{st.t}</h3>
                <p className="m-0 text-[14.5px] leading-relaxed text-muted">{st.b}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Engagement models */}
      <Section>
        <Container>
          <SectionHead eyebrow="Engagement models" title="Flexible ways to work with us." body="Pick the model that suits your project and budget. You can switch as your needs change." />
          <div className="grid gap-5 md:grid-cols-3" data-stagger>
            {engagementModels.map((m) => (
              <div
                key={m.name}
                className={`spot card-hover relative flex flex-col gap-4 overflow-hidden rounded-[28px] p-8 ${m.featured ? "text-white" : "glass"}`}
                style={m.featured ? { background: "var(--grad-wide)", boxShadow: "0 30px 60px rgba(26,95,219,.3)" } : undefined}
              >
                {m.featured && <span className="absolute right-5 top-5 rounded-full bg-white/20 px-3 py-1 text-[11.5px] font-extrabold uppercase tracking-wider">Most popular</span>}
                <span className={`text-[14px] font-extrabold uppercase tracking-[.08em] ${m.featured ? "text-white/80" : "text-muted-2"}`}>{m.name}</span>
                <span className="flex items-baseline gap-1.5">
                  <span className="text-[44px] font-extrabold leading-none tracking-[-.04em]">{m.price}</span>
                  <span className={`text-[14px] font-semibold ${m.featured ? "text-white/75" : "text-muted"}`}>{m.unit}</span>
                </span>
                <p className={`m-0 text-[15px] leading-relaxed ${m.featured ? "text-white/85" : "text-muted"}`}>{m.body}</p>
                <ul className="m-0 grid list-none gap-2.5 p-0">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[14.5px] font-semibold">
                      <Check size={16} className={m.featured ? "text-white" : "text-brand"} aria-hidden /> {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact-us" className={`btn mt-auto ${m.featured ? "btn-white" : "btn-dark"}`}>
                  Get started <ArrowRight size={16} className="arrow" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="overflow-hidden">
        <Container>
          <SectionHead eyebrow="Client love" title="Trusted by growing businesses." />
        </Container>
        <TestimonialsMarquee />
      </Section>

      {/* FAQ */}
      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <span className="eyebrow" data-reveal>
              FAQ
            </span>
            <h2 className="h-section m-0" data-reveal="split">
              <SplitWords text={`${s.title} questions.`} />
            </h2>
            <p className="lead m-0" data-reveal data-delay="150">
              Still curious? <Link href="/contact-us" className="font-bold text-brand underline underline-offset-4">Ask us anything</Link>.
            </p>
          </div>
          <div data-reveal data-delay="100">
            <Accordion items={[...s.faqs, generalFaqs[3]]} />
          </div>
        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section>
          <Container>
            <SectionHead eyebrow="Related services" title="You might also need." />
            <div className="grid gap-4 md:grid-cols-3" data-stagger>
              {related.map((r) => (
                <Link key={r.slug} href={`/${r.slug}`} className="glass spot card-hover group flex items-center gap-4 rounded-[24px] p-5">
                  <IconTile name={r.icon} gradient={r.gradient} size={52} />
                  <span className="flex flex-1 flex-col">
                    <span className="text-[17px] font-extrabold">{r.title}</span>
                    <span className="text-[13.5px] text-muted">{categories[r.category].label}</span>
                  </span>
                  <ArrowRight size={18} className="text-brand transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTABand title={`Let's talk about your ${s.title.toLowerCase()} project.`} />
    </>
  );
}
