import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ChevronRight, Headphones, Phone, Quote, Rocket, ShieldCheck, Star } from "lucide-react";
import type { ReactNode } from "react";
import { reviews, site, stats, techStack } from "@/lib/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1220px] px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

export function Section({ children, id, className = "" }: { children: ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`relative pt-[clamp(80px,9vw,120px)] ${className}`}>
      {children}
    </section>
  );
}

/** Splits a headline into words that rise in one after another. */
export function SplitWords({ text, className = "", step = 70, start = 0 }: { text: string; className?: string; step?: number; start?: number }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i, arr) => (
        <span key={i} className="split-word" style={{ ["--d" as string]: `${start + i * step}ms` }}>
          {w}
          {i < arr.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  center = false,
  action,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  center?: boolean;
  action?: ReactNode;
}) {
  return (
    <div
      className={`mb-10 flex flex-wrap gap-6 ${center ? "flex-col items-center text-center" : "items-end justify-between"}`}
    >
      <div className={`flex flex-col gap-4 ${center ? "items-center" : ""}`}>
        <span className="eyebrow" data-reveal>
          {eyebrow}
        </span>
        <h2 className="h-section m-0 max-w-[18ch]" data-reveal="split">
          <SplitWords text={title} />
        </h2>
      </div>
      {body && (
        <p className="lead m-0 max-w-[46ch]" data-reveal data-delay="150">
          {body}
        </p>
      )}
      {action && (
        <div data-reveal data-delay="150">
          {action}
        </div>
      )}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13.5px] font-semibold text-muted-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {it.href ? (
              <Link href={it.href} className="hover:text-brand">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {it.label}
              </span>
            )}
            {i < items.length - 1 && <ChevronRight size={14} aria-hidden />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Hero used by all inner pages: breadcrumb, headline, lead, CTAs + a visual. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  visual,
  actions = true,
  children,
}: {
  crumbs: { href?: string; label: string }[];
  eyebrow: ReactNode;
  title: string;
  lead: string;
  visual?: ReactNode;
  actions?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-[clamp(40px,6vw,72px)]">
      <Container className={`grid items-center gap-12 ${visual ? "lg:grid-cols-[1.05fr_1fr]" : ""}`}>
        <div className={`flex flex-col gap-6 ${visual ? "" : "items-center text-center"}`}>
          <div data-reveal>
            <Breadcrumbs items={crumbs} />
          </div>
          <span className="eyebrow" data-reveal data-delay="60" style={visual ? undefined : { alignSelf: "center" }}>
            {eyebrow}
          </span>
          <h1 className={`m-0 text-[clamp(36px,4.6vw,60px)] font-extrabold leading-[1.05] tracking-[-.04em] [word-spacing:.05em] ${visual ? "max-w-[18ch]" : "max-w-[20ch]"}`} data-reveal="split">
            <SplitWords text={title} start={100} />
          </h1>
          <p className={`m-0 text-[18px] leading-[1.7] text-muted ${visual ? "max-w-[52ch]" : "max-w-[60ch]"}`} data-reveal data-delay="300">
            {lead}
          </p>
          {actions && (
            <div className={`flex flex-wrap gap-3 ${visual ? "" : "justify-center"}`} data-reveal data-delay="400">
              <Link href="/contact-us" data-magnetic className="btn btn-primary">
                Get a free quote <ArrowRight size={18} className="arrow" aria-hidden />
              </Link>
              <a href={site.phoneIN.href} className="btn btn-glass">
                <Phone size={17} aria-hidden /> {site.phoneIN.display}
              </a>
            </div>
          )}
          {children}
        </div>
        {visual && (
          <div data-reveal="zoom" data-delay="200" className="relative">
            {visual}
          </div>
        )}
      </Container>
    </section>
  );
}

export function TechMarquee({ items = techStack.map((t) => t.n), label = "Technologies & platforms we work with" }: { items?: string[]; label?: string }) {
  const colors = Object.fromEntries(techStack.map((t) => [t.n, t.c]));
  const list = [...items, ...items, ...items].slice(0, Math.max(items.length * 2, 16));
  return (
    <section className="relative overflow-hidden pb-3 pt-10" data-reveal>
      <p className="mb-5 text-center text-[13px] font-bold uppercase tracking-[.1em] text-muted-2">{label}</p>
      <div className="marquee-wrap marquee-mask">
        <div className="marquee gap-3.5" style={{ ["--dur" as string]: "36s" }}>
          {[...list, ...list].map((n, i) => (
            <span key={i} className="glass flex items-center gap-2.5 whitespace-nowrap rounded-full px-5 py-3 text-[15px] font-bold text-ink-2" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: colors[n] ?? "#1a5fdb" }} aria-hidden />
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsRow() {
  const tones = ["#3b82f6,#1a5fdb", "#8b5cf6,#6d28d9", "#22c55e,#16a34a", "#0ea5e9,#0284c7"];
  const icons = [Rocket, Award, ShieldCheck, Headphones];
  return (
    <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
      {stats.map((s, i) => {
        const I = icons[i];
        return (
        <div key={s.label} className="glass spot card-hover flex items-center gap-4 rounded-3xl px-7 py-6">
          <span className="grid shrink-0 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg,${tones[i]})`, width: 52, height: 52 }} aria-hidden>
            <I size={22} />
          </span>
          <span className="flex flex-col gap-1">
            <span
              className="text-[34px] font-extrabold leading-none tracking-[-.04em]"
              data-count={s.value}
              data-suffix={s.suffix}
              data-decimals={s.decimals ?? 0}
            >
              {s.value}
              {s.suffix}
            </span>
            <span className="text-[13.5px] font-semibold text-muted">{s.label}</span>
          </span>
        </div>
        );
      })}
    </div>
  );
}

export function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <figure className="glass m-0 flex w-[min(360px,82vw)] shrink-0 flex-col gap-4 rounded-[26px] p-6 text-ink">
      <div className="flex items-center justify-between">
        <span className="flex gap-0.5 text-warn" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" aria-hidden />
          ))}
        </span>
        <Quote size={30} className="text-[#b9d0ff]" aria-hidden />
      </div>
      <blockquote className="m-0 text-[15.5px] font-medium leading-[1.65] text-ink-2">{r.q}</blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <Image src={r.img} alt="" width={46} height={46} className="h-[46px] w-[46px] rounded-full border-2 border-white object-cover" />
        <span className="flex flex-col">
          <span className="text-[15px] font-extrabold">{r.n}</span>
          <span className="text-[12.5px] text-muted-2">{r.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialsMarquee() {
  return (
    <div className="marquee-wrap marquee-mask" data-reveal>
      <div className="marquee gap-[18px] py-4" style={{ ["--dur" as string]: "60s" }}>
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={i} r={r} />
        ))}
      </div>
    </div>
  );
}

export function CTABand({
  title = "Ready to build your digital success story?",
  body = "Get a free consultation and website audit. We reply within one working hour.",
  cta = { href: "/contact-us", label: "Start your project" },
}: {
  title?: string;
  body?: string;
  cta?: { href: string; label: string };
}) {
  return (
    <Section>
      <Container>
        <div
          data-reveal="zoom"
          className="relative overflow-hidden rounded-[40px] px-[clamp(24px,5vw,64px)] py-[clamp(40px,6vw,72px)] text-white"
          style={{ background: "var(--grad-wide)", boxShadow: "0 40px 80px rgba(26,95,219,.3)" }}
        >
          <div className="anim-blob absolute -right-28 -top-40 h-[420px] w-[420px] rounded-full bg-white/15" aria-hidden />
          <div className="anim-blob absolute -bottom-36 -left-24 h-[300px] w-[300px] rounded-full bg-sky-400/35" style={{ animationDelay: "-6s" }} aria-hidden />
          <svg className="absolute inset-0 h-full w-full opacity-[.12]" aria-hidden>
            <defs>
              <pattern id="cta-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                <path d="M36 0H0v36" fill="none" stroke="#fff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
          <div className="relative flex flex-wrap items-end justify-between gap-8">
            <div className="flex max-w-[640px] flex-col gap-4">
              <span className="self-start rounded-full border border-white/35 bg-white/15 px-3.5 py-1.5 text-[12.5px] font-extrabold uppercase tracking-[.08em]">
                Let&apos;s work together
              </span>
              <h2 className="m-0 text-[clamp(32px,4.4vw,54px)] font-extrabold leading-[1.05] tracking-[-.04em]">{title}</h2>
              <p className="m-0 text-[17px] leading-relaxed text-white/85">{body}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={cta.href} data-magnetic className="btn btn-white">
                {cta.label} <ArrowRight size={18} className="arrow" aria-hidden />
              </Link>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn glass-dark text-white hover:bg-white/25">
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
