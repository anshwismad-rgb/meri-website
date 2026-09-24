import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { companyLinks, legalLinks, site } from "@/lib/site";
import { services } from "@/lib/services";
import Logo from "./Logo";
import { FacebookIcon, WhatsAppIcon } from "./BrandIcons";

export default function Footer() {
  const dev = services.filter((s) => s.category === "development");
  const mkt = services.filter((s) => s.category !== "development");
  return (
    <footer className="relative z-[1] mt-10 overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand/40 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-violet/30 blur-[120px]" aria-hidden />

      {/* Giant marquee */}
      <div className="relative border-b border-white/10 py-8" aria-hidden>
        <div className="marquee" style={{ ["--dur" as string]: "38s" }}>
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0 items-center gap-10 pr-10 text-[clamp(44px,7vw,96px)] font-extrabold tracking-[-.04em]">
              <span>Let&apos;s build something great</span>
              <span className="grad-text">✦</span>
              <span className="text-white/25">Websites · Apps · SEO · Marketing</span>
              <span className="grad-text">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1220px] gap-10 px-5 pb-10 pt-14 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Logo light />
          <p className="max-w-[34ch] text-[14.5px] leading-relaxed text-white/70">
            Web development and digital marketing company in Lucknow, serving clients across India, the UK, USA, Canada and Australia.
          </p>
          <ul className="grid gap-3 text-[14.5px]">
            <li>
              <a href={site.phoneIN.href} className="flex items-center gap-3 text-white/85 hover:text-white">
                <Phone size={16} className="text-brand-400" aria-hidden /> {site.phoneIN.display} <span className="text-white/40">(IN)</span>
              </a>
            </li>
            <li>
              <a href={site.phoneUK.href} className="flex items-center gap-3 text-white/85 hover:text-white">
                <Phone size={16} className="text-brand-400" aria-hidden /> {site.phoneUK.display} <span className="text-white/40">(UK)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white/85 hover:text-white">
                <Mail size={16} className="text-brand-400" aria-hidden /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/70">
              <MapPin size={16} className="mt-1 shrink-0 text-brand-400" aria-hidden /> {site.address}
            </li>
          </ul>
          <div className="flex gap-2">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="WISMAD on Facebook" className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 transition hover:-translate-y-1 hover:bg-brand">
              <FacebookIcon />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 transition hover:-translate-y-1 hover:bg-[#25d366]">
              <WhatsAppIcon />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email WISMAD" className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 transition hover:-translate-y-1 hover:bg-brand">
              <Mail size={18} aria-hidden />
            </a>
          </div>
        </div>

        <FooterCol title="Development" links={dev.map((s) => ({ href: `/${s.slug}`, label: s.title }))} />
        <FooterCol title="Marketing & design" links={mkt.map((s) => ({ href: `/${s.slug}`, label: s.title }))} />
        <FooterCol title="Company" links={companyLinks} />
      </div>

      <div className="relative mx-auto flex max-w-[1220px] flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-6 text-[13.5px] text-white/55 sm:px-10">
        <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {legalLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-[13px] font-extrabold uppercase tracking-[.08em] text-white/50">{title}</p>
      <ul className="grid gap-2.5 text-[14.5px]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="group inline-flex items-center gap-1 text-white/80 transition-colors hover:text-white">
              {l.label}
              <ArrowUpRight size={14} className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
