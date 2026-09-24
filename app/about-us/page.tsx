import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Handshake, HeartHandshake, Lightbulb, MapPin, Rocket, Target } from "lucide-react";
import { ProcessStepper } from "../components/Interactive";
import { CTABand, Container, PageHero, Section, SectionHead, SplitWords, StatsRow, TechMarquee, TestimonialsMarquee } from "../components/UI";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — A Leading Web Design & Development Company",
  description: "WISMAD is a web development and digital marketing company in Lucknow with 10+ years of experience and clients in India, the UK, USA, Canada and Australia.",
  alternates: { canonical: "/about-us" },
};

const values = [
  { icon: HeartHandshake, t: "Clients are family", b: "Every client is part of the WISMAD family — honest advice, regular updates and long-term relationships." },
  { icon: Lightbulb, t: "Craft over templates", b: "Custom solutions shaped around each business, never a one-size-fits-all package." },
  { icon: Handshake, t: "Transparency always", b: "Fixed quotes, clear timelines and reports you can actually understand." },
  { icon: Rocket, t: "Results that matter", b: "We measure success in leads, sales and growth — not vanity metrics." },
];

const pins = [
  { c: "Canada", x: 20, y: 28 },
  { c: "USA", x: 22, y: 40 },
  { c: "United Kingdom", x: 47, y: 27 },
  { c: "India", x: 68, y: 50 },
  { c: "Australia", x: 84, y: 76 },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "About us" }]}
        eyebrow="About WISMAD"
        title="A decade of building digital success stories."
        lead="WISMAD is a digital marketing and web development company in Lucknow offering web design, app development, graphic design, animation, SEO, social media, content and e-commerce services to clients across the globe."
        visual={
          <div className="relative h-[clamp(400px,42vw,500px)]">
            <Image src="/images/team-work.jpg" alt="The WISMAD team collaborating" width={900} height={600} className="absolute right-0 top-0 h-[74%] w-[82%] rounded-[28px] object-cover" style={{ boxShadow: "var(--shadow-lg)" }} preload />
            <Image src="/images/client-meeting.jpg" alt="WISMAD meeting with a client" width={600} height={400} className="absolute bottom-0 left-0 h-[48%] w-[54%] rounded-3xl border-[6px] border-white/80 object-cover" style={{ boxShadow: "var(--shadow-lg)" }} />
            <div className="glass-strong anim-float absolute bottom-[10%] right-[4%] flex items-center gap-3 rounded-[22px] px-5 py-4">
              <span className="text-[38px] font-extrabold leading-none tracking-[-.05em] text-brand" data-count="500" data-suffix="+">
                500+
              </span>
              <span className="text-[13px] font-bold leading-snug">
                Projects
                <br />
                delivered
              </span>
            </div>
          </div>
        }
      />

      <Section className="!pt-16">
        <Container>
          <StatsRow />
        </Container>
      </Section>

      {/* Mission & vision */}
      <Section>
        <Container className="grid gap-5 md:grid-cols-2" >
          {[
            { icon: Target, t: "Our mission", b: "To help businesses of every size grow online with websites, apps and marketing that are built properly, priced fairly and supported for the long run.", g: "#3b82f6,#1a5fdb" },
            { icon: Eye, t: "Our vision", b: "To be the most trusted digital partner for growing businesses — known for quality work, honest advice and being there whenever our clients need us.", g: "#8b5cf6,#6d28d9" },
          ].map((m, i) => (
            <div key={m.t} data-reveal={i ? "right" : "left"} className="glass spot relative overflow-hidden rounded-[32px] p-[clamp(28px,4vw,48px)]">
              <span className="grid h-14 w-14 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg,${m.g})` }}>
                <m.icon size={26} aria-hidden />
              </span>
              <h2 className="m-0 mt-6 text-[30px] font-extrabold tracking-[-.03em]">{m.t}</h2>
              <p className="lead m-0 mt-3">{m.b}</p>
            </div>
          ))}
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <SectionHead eyebrow="What we believe" title="The values behind every project." center />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {values.map((v) => (
              <div key={v.t} className="glass spot card-hover group flex flex-col gap-4 rounded-[26px] p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-brand group-hover:text-white">
                  <v.icon size={22} aria-hidden />
                </span>
                <h3 className="m-0 text-[19px] font-extrabold">{v.t}</h3>
                <p className="m-0 text-[14.5px] leading-relaxed text-muted">{v.b}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Global presence */}
      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="eyebrow" data-reveal>
              Global presence
            </span>
            <h2 className="h-section m-0" data-reveal="split">
              <SplitWords text="Based in Lucknow. Working worldwide." />
            </h2>
            <p className="lead m-0" data-reveal data-delay="150">
              Our reliable team supports offshore clients 24×7 and is always available for video calls — even after usual working hours.
            </p>
            <ul className="m-0 mt-2 flex list-none flex-wrap gap-2 p-0" data-stagger="60">
              {site.countries.map((c) => (
                <li key={c} className="glass flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-bold" style={{ boxShadow: "none" }}>
                  <MapPin size={14} className="text-brand" aria-hidden /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal="zoom" className="glass relative aspect-[16/10] overflow-hidden rounded-[32px]">
            <svg viewBox="0 0 100 62" className="absolute inset-0 h-full w-full" aria-hidden>
              <defs>
                <pattern id="dots" width="1.6" height="1.6" patternUnits="userSpaceOnUse">
                  <circle cx=".8" cy=".8" r=".35" fill="#1a5fdb" opacity=".18" />
                </pattern>
              </defs>
              <rect width="100" height="62" fill="url(#dots)" />
              {pins.slice(0, -1).map((p) => {
                const hub = pins[3];
                if (p === hub) return null;
                return (
                  <path
                    key={p.c}
                    d={`M${hub.x} ${hub.y * 0.62} Q ${(hub.x + p.x) / 2} ${Math.min(hub.y, p.y) * 0.62 - 12} ${p.x} ${p.y * 0.62}`}
                    fill="none"
                    stroke="url(#arc)"
                    strokeWidth=".45"
                    strokeDasharray="1.4 1"
                  />
                );
              })}
              <path d={`M${pins[3].x} ${pins[3].y * 0.62} Q 80 30 ${pins[4].x} ${pins[4].y * 0.62}`} fill="none" stroke="url(#arc)" strokeWidth=".45" strokeDasharray="1.4 1" />
              <linearGradient id="arc" x1="0" x2="1">
                <stop offset="0" stopColor="#1a5fdb" />
                <stop offset="1" stopColor="#8b5cf6" />
              </linearGradient>
            </svg>
            {pins.map((p, i) => (
              <div key={p.c} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                <span className="relative block h-3.5 w-3.5 rounded-full border-[3px] border-white" style={{ background: i === 3 ? "#1a5fdb" : "#8b5cf6", boxShadow: "0 4px 10px rgba(26,95,219,.4)" }}>
                  <span className="absolute inset-0 rounded-full" style={{ background: "inherit", animation: `ping-dot 2.4s ease-out ${i * 0.4}s infinite` }} />
                </span>
                <span className="glass-strong absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[11.5px] font-extrabold">
                  {p.c}
                  {i === 3 && " · HQ"}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="process">
        <Container>
          <div data-reveal>
            <ProcessStepper />
          </div>
        </Container>
      </Section>

      <TechMarquee />

      <Section className="overflow-hidden">
        <Container>
          <SectionHead eyebrow="Testimonials" title="What our clients say." />
        </Container>
        <TestimonialsMarquee />
      </Section>

      <CTABand />
    </>
  );
}
