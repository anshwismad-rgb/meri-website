import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../components/Interactive";
import { WhatsAppIcon } from "../components/BrandIcons";
import { Container, PageHero, Section } from "../components/UI";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description: "Contact WISMAD for website development, apps, SEO and digital marketing. Call +91 99355 07468 or +44 7451 236455, or email support@wismad.com.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  const cards = [
    { icon: Phone, t: "Call India", v: site.phoneIN.display, href: site.phoneIN.href, g: "#3b82f6,#1a5fdb" },
    { icon: Phone, t: "Call UK", v: site.phoneUK.display, href: site.phoneUK.href, g: "#8b5cf6,#6d28d9" },
    { icon: Mail, t: "Email us", v: site.email, href: `mailto:${site.email}`, g: "#0ea5e9,#0284c7" },
    { icon: WhatsAppIcon, t: "WhatsApp", v: "Chat instantly", href: site.whatsapp, g: "#25d366,#16a34a" },
  ];
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
        eyebrow="Contact us"
        title="Let's talk about your next project."
        lead="Get a free consultation and website audit. Tell us what you need and we'll reply within one working hour with ideas and a clear next step."
        actions={false}
      />

      <Section className="!pt-14">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {cards.map((c) => (
              <a key={c.t} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="glass spot card-hover group flex flex-col gap-4 rounded-[26px] p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" style={{ background: `linear-gradient(135deg,${c.g})` }}>
                  <c.icon size={22} aria-hidden />
                </span>
                <span className="text-[13px] font-extrabold uppercase tracking-[.08em] text-muted-2">{c.t}</span>
                <span className="break-words text-[18px] font-extrabold">{c.v}</span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="!pt-10">
        <Container className="grid items-start gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <div data-reveal="left" className="glass-strong rounded-[32px] p-[clamp(24px,4vw,44px)]">
            <h2 className="m-0 text-[28px] font-extrabold tracking-[-.03em]">Send us a message</h2>
            <p className="m-0 mb-6 mt-2 text-muted">Fill in a few details — it takes less than a minute.</p>
            <ContactForm />
          </div>
          <div data-reveal="right" className="flex flex-col gap-4">
            <div className="glass overflow-hidden rounded-[32px] p-2">
              <iframe
                title="WISMAD office location on Google Maps"
                src={site.mapsEmbed}
                className="block h-[300px] w-full rounded-[26px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="glass flex flex-col gap-4 rounded-[28px] p-6">
              <div className="flex gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand">
                  <MapPin size={20} aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-[15px] font-extrabold">Our office</span>
                  <span className="text-[14.5px] leading-relaxed text-muted">{site.address}</span>
                </span>
              </div>
              <div className="flex gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand">
                  <Clock size={20} aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-[15px] font-extrabold">Working hours</span>
                  <span className="text-[14.5px] leading-relaxed text-muted">{site.hours}</span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
