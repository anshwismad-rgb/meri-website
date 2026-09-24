import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Check, Clock, Globe, Headphones, Mail, Phone, Play, ShoppingCart, Star, Users } from "lucide-react";
import { ContactForm, Accordion, ProcessStepper, WordRotator } from "./components/Interactive";
import { HeroShowcase, PhoneFrame, ScoreRing } from "./components/Mockups";
import { Container, Section, SectionHead, SplitWords, StatsRow, TechMarquee, TestimonialsMarquee } from "./components/UI";
import { IconTile } from "./components/Icon";
import { generalFaqs, site } from "@/lib/site";
import { services } from "@/lib/services";
import { cases } from "@/lib/portfolio";
import CaseCard from "./components/CaseCard";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Section className="!pt-14">
        <Container>
          <StatsRow />
        </Container>
      </Section>
      <About />
      <ServicesBento />
      <WhyUs />
      <Section id="process">
        <Container>
          <div data-reveal>
            <ProcessStepper />
          </div>
        </Container>
      </Section>
      <Work />
      <Section className="overflow-hidden">
        <Container>
          <SectionHead eyebrow="Testimonials" title="What our clients say." action={<Link href="/reviews" className="btn btn-glass">Read all reviews <ArrowRight size={16} className="arrow" aria-hidden /></Link>} />
        </Container>
        <TestimonialsMarquee />
      </Section>
      <Faq />
      <Contact />
    </>
  );
}

function Hero() {
  const avatars = ["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg", "/images/avatar-4.jpg"];
  return (
    <section className="relative">
      <Container className="grid items-center gap-12 pb-10 pt-[clamp(48px,7vw,96px)] lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span data-reveal className="glass flex items-center gap-2.5 self-start rounded-full py-1.5 pl-1.5 pr-4 text-[13.5px] font-semibold text-ink-2" style={{ boxShadow: "var(--shadow-sm)" }}>
            <span className="shrink-0 whitespace-nowrap rounded-full bg-brand px-2.5 py-0.5 text-[12px] font-extrabold text-white">10+ yrs</span>
            Web development &amp; digital marketing · Lucknow
          </span>
          <h1 className="h-display m-0" data-reveal="split">
            <SplitWords text="We build" className="block" start={80} />
            <WordRotator words={["websites", "mobile apps", "SEO campaigns", "online stores", "brands"]} />
            <SplitWords text="that grow your business." className="block" start={260} />
          </h1>
          <p data-reveal data-delay="380" className="m-0 max-w-[48ch] text-[18px] leading-[1.65] text-muted">
            Websites, mobile apps, SEO and digital marketing from one team in Lucknow — trusted by businesses in India, the UK, USA, Canada and Australia.
          </p>
          <div data-reveal data-delay="480" className="flex flex-wrap gap-3">
            <Link href="/contact-us" data-magnetic className="btn btn-primary !px-7 !py-4 !text-[16px]">
              Start your project <ArrowRight size={18} className="arrow" aria-hidden />
            </Link>
            <Link href="/portfolio" className="btn btn-glass !py-2.5 !pl-2.5 !pr-6">
              <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-ink text-white">
                <Play size={14} fill="currentColor" aria-hidden />
              </span>
              See our work
            </Link>
          </div>
          <div data-reveal data-delay="580" className="flex flex-wrap items-center gap-3.5">
            <div className="flex">
              {avatars.map((a, i) => (
                <Image key={a} src={a} alt="" width={40} height={40} className="h-10 w-10 rounded-full border-[3px] border-white object-cover" style={{ marginLeft: i ? -12 : 0 }} />
              ))}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="flex gap-0.5 text-warn" aria-label="Rated 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" aria-hidden />
                ))}
              </span>
              <span className="text-[13px] font-semibold text-muted">500+ projects delivered worldwide</span>
            </div>
          </div>
        </div>
        <div data-reveal="zoom" data-delay="150">
          <HeroShowcase />
        </div>
      </Container>
    </section>
  );
}

function About() {
  const points = ["Experienced team", "Customised solutions", "On-time delivery", "Ongoing support"];
  return (
    <Section id="about">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div data-reveal="left" className="relative h-[clamp(420px,42vw,520px)]">
          <Image src="/images/team-work.jpg" alt="The WISMAD team at work" width={900} height={600} className="absolute left-0 top-0 h-[78%] w-[78%] rounded-[28px] object-cover" style={{ boxShadow: "var(--shadow-lg)" }} />
          <Image src="/images/client-meeting.jpg" alt="A WISMAD client meeting" width={600} height={400} className="absolute bottom-0 right-0 h-1/2 w-[52%] rounded-3xl border-[6px] border-white/80 object-cover" style={{ boxShadow: "var(--shadow-lg)" }} />
          <div className="glass-strong anim-float absolute bottom-[6%] left-[6%] flex items-center gap-3.5 rounded-[22px] px-5 py-4">
            <span className="text-[40px] font-extrabold leading-none tracking-[-.05em] text-brand" data-count="10" data-suffix="+">
              10+
            </span>
            <span className="text-[13px] font-bold leading-snug">
              Years of
              <br />
              experience
            </span>
          </div>
          <div className="glass-strong absolute right-[4%] top-[6%] grid h-24 w-24 place-items-center rounded-full">
            <svg viewBox="0 0 100 100" className="anim-spin absolute inset-0 h-full w-full" aria-hidden>
              <defs>
                <path id="about-circle" d="M50 50 m-36 0 a36 36 0 1 1 72 0 a36 36 0 1 1 -72 0" />
              </defs>
              <text className="fill-brand text-[10.5px] font-bold tracking-[2.4px]">
                <textPath href="#about-circle">TRUSTED · SINCE A DECADE · </textPath>
              </text>
            </svg>
            <Award size={24} className="text-brand" aria-hidden />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="eyebrow" data-reveal>
            About WISMAD
          </span>
          <h2 className="h-section m-0" data-reveal="split">
            <SplitWords text="Your partner in digital success." />
          </h2>
          <p className="lead m-0 max-w-[54ch]" data-reveal data-delay="150">
            WISMAD is a web development and digital marketing company based in Lucknow. We treat every client as part of the WISMAD family, with regular updates, video calls across time zones and support beyond office hours.
          </p>
          <div className="mt-1.5 grid gap-3 sm:grid-cols-2" data-stagger>
            {points.map((p) => (
              <div key={p} className="glass flex items-center gap-3 rounded-[18px] px-4 py-3.5" style={{ boxShadow: "none" }}>
                <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[10px] text-white" style={{ background: "var(--grad)" }}>
                  <Check size={16} aria-hidden />
                </span>
                <span className="text-[14.5px] font-bold">{p}</span>
              </div>
            ))}
          </div>
          <div data-reveal data-delay="200">
            <Link href="/about-us" className="btn btn-dark mt-2">
              Know more about us <ArrowRight size={16} className="arrow" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ServicesBento() {
  const extras = services.filter((s) => !["design-development", "search-engine-optimization", "pay-per-click", "social-media-marketing", "android-ios-app", "ecommerce-development"].includes(s.slug));
  const card = "glass spot card-hover group relative overflow-hidden rounded-[28px] p-7";
  return (
    <Section id="services">
      <Container>
        <SectionHead
          eyebrow="Our services"
          title="Solutions for your digital growth."
          body="From stunning websites to high-performing campaigns, everything is planned, built and measured by one team."
        />
        <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-3" data-stagger>
          {/* Website */}
          <Link href="/design-development" className={`${card} grid items-center gap-6 lg:col-span-2 lg:grid-cols-2`}>
            <div className="flex flex-col gap-3">
              <IconTile name="LayoutTemplate" gradient={["#3b82f6", "#1a5fdb"]} />
              <h3 className="m-0 mt-1.5 text-[26px] font-extrabold leading-tight tracking-[-.025em]">Website development</h3>
              <p className="m-0 text-[15px] leading-relaxed text-muted">Custom, responsive websites in WordPress, PHP or modern frameworks that turn visitors into customers.</p>
              <div className="flex flex-wrap gap-1.5">
                {["WordPress", "PHP", "React", "Laravel"].map((t) => (
                  <span key={t} className="rounded-full bg-brand-50 px-2.5 py-1 text-[12px] font-bold text-brand-600">
                    {t}
                  </span>
                ))}
              </div>
              <Arrow />
            </div>
            <div className="relative h-[250px]">
              <Image src="/images/web-dev.jpg" alt="" fill sizes="400px" className="rounded-[20px] object-cover transition-transform duration-700 group-hover:scale-[1.04]" style={{ left: 20, bottom: 30, width: "calc(100% - 20px)", height: "calc(100% - 30px)" }} />
              <div className="glass-strong absolute bottom-0 left-0 flex items-center gap-3 rounded-2xl px-4 py-3">
                <ScoreRing value={98} />
                <span className="flex flex-col">
                  <span className="text-[13px] font-extrabold">PageSpeed score</span>
                  <span className="text-[11.5px] text-muted-2">Mobile &amp; desktop</span>
                </span>
              </div>
            </div>
          </Link>

          {/* SEO */}
          <Link href="/search-engine-optimization" className={`${card} flex flex-col gap-5`}>
            <IconTile name="SearchCheck" gradient={["#22c55e", "#16a34a"]} />
            <div>
              <h3 className="m-0 text-[22px] font-extrabold tracking-[-.02em]">Search engine optimization</h3>
              <p className="m-0 mt-1.5 text-[14.5px] leading-normal text-muted">Rank higher and get found by quality traffic.</p>
            </div>
            <div className="mt-auto flex flex-col gap-2">
              <div className="flex items-center gap-2.5 rounded-[14px] px-3.5 py-2.5 text-white transition-transform duration-500 group-hover:-translate-y-1" style={{ background: "var(--grad)", boxShadow: "0 10px 24px rgba(26,95,219,.3)" }}>
                <b>1</b>
                <span className="flex-1 text-[13.5px] font-bold">yourbusiness.com</span>
                <span className="text-[11.5px] font-bold">▲ 14</span>
              </div>
              {["competitor-one.com", "competitor-two.in"].map((d, i) => (
                <div key={d} className="flex items-center gap-2.5 rounded-[14px] bg-white/70 px-3.5 py-2.5 text-muted">
                  <b>{i + 2}</b>
                  <span className="flex-1 text-[13.5px]">{d}</span>
                  <span className="text-[11.5px] font-bold text-red-500">▼ 1</span>
                </div>
              ))}
            </div>
          </Link>

          {/* PPC */}
          <Link href="/pay-per-click" className={`${card} flex flex-col gap-5`}>
            <IconTile name="MousePointerClick" gradient={["#f59e0b", "#ea580c"]} />
            <div>
              <h3 className="m-0 text-[22px] font-extrabold tracking-[-.02em]">Google Ads / PPC</h3>
              <p className="m-0 mt-1.5 text-[14.5px] leading-normal text-muted">Get paid with every click. ROI reported monthly.</p>
            </div>
            <div className="mt-auto flex h-[110px] items-end gap-2.5">
              {[40, 55, 68, 84, 100].map((h, i) => (
                <span key={i} className="anim-bar flex-1 rounded-t-[10px] rounded-b" style={{ height: `${h}%`, background: ["#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c"][i], animationDelay: `${-i * 0.5}s` }} />
              ))}
            </div>
          </Link>

          {/* Social */}
          <Link href="/social-media-marketing" className={`${card} flex flex-col gap-5`}>
            <IconTile name="Heart" gradient={["#ec4899", "#8b5cf6"]} />
            <div>
              <h3 className="m-0 text-[22px] font-extrabold tracking-[-.02em]">Social media marketing</h3>
              <p className="m-0 mt-1.5 text-[14.5px] leading-normal text-muted">Build your brand and grow your community.</p>
            </div>
            <div className="mt-auto flex items-center gap-2.5 rounded-[18px] bg-white/80 p-2.5" style={{ boxShadow: "var(--shadow-sm)" }}>
              <Image src="/images/social-post.jpg" alt="" width={70} height={70} className="h-[70px] w-[70px] rounded-xl object-cover" />
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="text-[13px] font-extrabold">@yourbrand</span>
                <div className="flex gap-3 text-[12px] font-extrabold text-muted">
                  <span className="text-[#ec4899]">♥ 2.4k</span>
                  <span>318 comments</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Apps */}
          <Link href="/android-ios-app" className={`${card} flex flex-col gap-5 !pb-0`}>
            <IconTile name="Smartphone" gradient={["#0ea5e9", "#0284c7"]} />
            <div>
              <h3 className="m-0 text-[22px] font-extrabold tracking-[-.02em]">Android &amp; iOS apps</h3>
              <p className="m-0 mt-1.5 text-[14.5px] leading-normal text-muted">Native and cross-platform apps your customers love.</p>
            </div>
            <PhoneFrame className="mx-auto mt-auto h-[150px] w-[130px] !rounded-b-none transition-transform duration-500 group-hover:-translate-y-2" style={{ paddingBottom: 0 }}>
              <Image src="/images/fitness-app.jpg" alt="" width={130} height={74} className="h-[74px] w-full object-cover" />
              <div className="flex flex-col gap-1.5 p-2">
                <span className="text-[10px] font-extrabold">FitPulse</span>
                <div className="h-1.5 overflow-hidden rounded-full bg-[#e6ebf3]">
                  <div className="h-full w-[72%] bg-sky" />
                </div>
                <span className="text-[8.5px] text-muted-2">7,240 steps today</span>
              </div>
            </PhoneFrame>
          </Link>

          {/* E-commerce */}
          <Link
            href="/ecommerce-development"
            className="card-hover group relative grid items-center gap-6 overflow-hidden rounded-[28px] p-7 text-white md:col-span-2 lg:col-span-3 lg:grid-cols-[1fr_1fr]"
            style={{ background: "linear-gradient(135deg,rgba(26,95,219,.94),rgba(139,92,246,.9))", boxShadow: "0 20px 50px rgba(26,95,219,.3)" }}
          >
            <div className="anim-blob absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10" aria-hidden />
            <div className="relative flex flex-col gap-3">
              <span className="glass-dark grid h-[52px] w-[52px] place-items-center rounded-2xl">
                <ShoppingCart size={22} aria-hidden />
              </span>
              <h3 className="m-0 mt-1.5 text-[28px] font-extrabold leading-tight tracking-[-.025em]">E-commerce development</h3>
              <p className="m-0 max-w-[44ch] text-[15px] leading-relaxed text-white/85">Stores with secure payments, inventory and full control over your catalogue — on Shopify, WooCommerce or fully custom.</p>
              <span className="mt-1 inline-flex items-center gap-2 text-[14px] font-extrabold">
                Explore e-commerce <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
            <div className="relative flex flex-col gap-2.5">
              {[
                ["/images/product-a.jpg", "Order #1042 · Gift set", "₹1,499", "Paid"],
                ["/images/product-b.jpg", "Order #1043 · Body mist", "₹549", "Shipped"],
              ].map(([src, t, p, st], i) => (
                <div key={t} className="glass-dark anim-float flex items-center gap-3 rounded-2xl p-2.5" style={{ marginLeft: i ? 24 : 0, animationDuration: "6s", animationDelay: `${-i * 3}s` }}>
                  <Image src={src} alt="" width={48} height={48} className="h-12 w-12 rounded-[10px] object-cover" />
                  <span className="flex flex-1 flex-col">
                    <span className="text-[13.5px] font-bold">{t}</span>
                    <span className="text-[12px] text-white/75">{p}</span>
                  </span>
                  <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-extrabold text-brand-600">{st}</span>
                </div>
              ))}
            </div>
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2.5" data-reveal>
          <span className="mr-1.5 text-[14px] font-semibold text-muted">We also do:</span>
          {extras.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="glass rounded-full px-4 py-2 text-[14px] font-bold transition-all hover:-translate-y-0.5 hover:bg-white hover:text-brand" style={{ boxShadow: "none" }}>
              {s.title}
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Arrow() {
  return (
    <span className="mt-1 inline-flex items-center gap-2 text-[14px] font-extrabold text-brand">
      Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
    </span>
  );
}

function WhyUs() {
  const items = [
    { icon: Users, title: "One team, every skill", body: "Designers, developers, SEO specialists and marketers under one roof — so your website and your marketing work together from day one.", img: "/images/team-work.jpg", g: "#3b82f6,#1a5fdb" },
    { icon: Globe, title: "Global clients, local care", body: "We work with businesses across India, the UK, USA, Canada and Australia, with video calls scheduled around your time zone.", img: "/images/client-meeting.jpg", g: "#8b5cf6,#6d28d9" },
    { icon: Clock, title: "On time, on budget", body: "Fixed quotes, clear milestones and weekly staging links. You always know what's happening and what it costs.", img: "/images/step-design.jpg", g: "#0ea5e9,#0284c7" },
    { icon: Headphones, title: "24×7 support after launch", body: "Hosting with 99.9% uptime, security monitoring and a support team that answers — even after usual office hours.", img: "/images/step-support.jpg", g: "#22c55e,#16a34a" },
  ];
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div className="lg:sticky lg:top-[130px] lg:self-start">
          <div className="flex flex-col gap-4">
            <span className="eyebrow" data-reveal>
              Why WISMAD
            </span>
            <h2 className="h-section m-0" data-reveal="split">
              <SplitWords text="Why 500+ businesses chose us." />
            </h2>
            <p className="lead m-0 max-w-[42ch]" data-reveal data-delay="150">
              More than a vendor — a long-term digital partner that cares about your results as much as you do.
            </p>
            <div data-reveal data-delay="250" className="mt-2 flex flex-wrap gap-3">
              <Link href="/about-us" className="btn btn-dark">
                Our story <ArrowRight size={16} className="arrow" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="stack-card grid overflow-hidden rounded-[28px] border border-white/90 bg-white sm:grid-cols-[1.2fr_1fr]"
              style={{ ["--i" as string]: i, boxShadow: "0 -10px 40px rgba(30,64,175,.1)" }}
              data-reveal
            >
              <div className="flex flex-col gap-3 p-7">
                <span className="text-[13px] font-extrabold text-muted-2">0{i + 1}</span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg,${it.g})` }}>
                  <it.icon size={22} aria-hidden />
                </span>
                <h3 className="m-0 text-[23px] font-extrabold tracking-[-.02em]">{it.title}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-muted">{it.body}</p>
              </div>
              <div className="relative min-h-[200px]">
                <Image src={it.img} alt="" fill sizes="(min-width:1024px) 280px, 100vw" className="object-cover" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Work() {
  return (
    <Section id="work">
      <Container>
        <SectionHead
          eyebrow="Featured projects"
          title="Work that delivers results."
          action={
            <Link href="/portfolio" className="btn btn-glass">
              View all projects <ArrowRight size={16} className="arrow" aria-hidden />
            </Link>
          }
        />
        <div className="grid gap-5 md:grid-cols-3" data-stagger>
          {cases.slice(0, 3).map((c) => (
            <CaseCard key={c.title} c={c} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Faq() {
  return (
    <Section id="faq">
      <Container className="grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <span className="eyebrow" data-reveal>
            FAQ
          </span>
          <h2 className="h-section m-0" data-reveal="split">
            <SplitWords text="Questions, answered." />
          </h2>
          <p className="lead m-0 max-w-[36ch]" data-reveal data-delay="150">
            Can&apos;t find what you need? Talk to our team directly.
          </p>
          <div data-reveal data-delay="250" className="glass mt-1.5 flex max-w-[380px] items-center gap-3.5 rounded-[22px] p-3.5">
            <Image src="/images/expert.jpg" alt="" width={52} height={52} className="h-[52px] w-[52px] rounded-2xl object-cover" />
            <div className="flex flex-1 flex-col gap-0.5">
              <span className="text-[14.5px] font-extrabold">Talk to an expert</span>
              <a href={site.phoneIN.href} className="text-[14px] font-bold text-brand">
                {site.phoneIN.display}
              </a>
            </div>
            <span className="anim-pulse h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
          </div>
          <div data-reveal data-delay="300">
            <Link href="/faq" className="inline-flex items-center gap-2 text-[15px] font-extrabold text-brand">
              See all FAQs <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
        <div data-reveal data-delay="100">
          <Accordion items={generalFaqs} />
        </div>
      </Container>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div
          data-reveal="zoom"
          className="relative grid gap-11 overflow-hidden rounded-[40px] p-[clamp(24px,5vw,60px)] text-white lg:grid-cols-2"
          style={{ background: "var(--grad-wide)", boxShadow: "0 40px 80px rgba(26,95,219,.3)" }}
        >
          <div className="anim-blob absolute -right-28 -top-40 h-[420px] w-[420px] rounded-full bg-white/15" aria-hidden />
          <div className="anim-blob absolute -bottom-36 -left-24 h-[300px] w-[300px] rounded-full bg-sky-400/35" style={{ animationDelay: "-6s" }} aria-hidden />
          <div className="relative flex flex-col gap-5">
            <span className="self-start rounded-full border border-white/35 bg-white/15 px-3.5 py-1.5 text-[12.5px] font-extrabold uppercase tracking-[.08em]">Let&apos;s work together</span>
            <h2 className="m-0 text-[clamp(34px,4.6vw,56px)] font-extrabold leading-[1.04] tracking-[-.04em]">Ready to build your digital success story?</h2>
            <p className="m-0 max-w-[42ch] text-[17px] leading-relaxed text-white/88">Get a free consultation and website audit. We reply within one working hour.</p>
            <div className="mt-1.5 flex flex-col gap-2.5">
              {[
                { href: site.phoneIN.href, icon: Phone, label: site.phoneIN.display, sub: "Call or WhatsApp" },
                { href: `mailto:${site.email}`, icon: Mail, label: site.email, sub: "Email us anytime" },
              ].map((c) => (
                <a key={c.href} href={c.href} className="glass-dark flex max-w-[360px] items-center gap-3 rounded-[18px] py-2.5 pl-2.5 pr-4 font-bold text-white transition hover:bg-white/25">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand">
                    <c.icon size={18} aria-hidden />
                  </span>
                  <span className="flex flex-col">
                    {c.label}
                    <span className="text-[12px] font-semibold text-white/75">{c.sub}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="relative rounded-[28px] bg-white/[.88] p-7 text-ink backdrop-blur-xl" style={{ boxShadow: "0 30px 60px rgba(11,21,48,.25)" }}>
            <p className="m-0 mb-4 text-[21px] font-extrabold tracking-[-.02em]">Get your free audit</p>
            <ContactForm compact />
          </div>
        </div>
      </Container>
    </Section>
  );
}
