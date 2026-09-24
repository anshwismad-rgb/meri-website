import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Briefcase, Clock, Coffee, GraduationCap, HeartHandshake, Laptop, MapPin, TrendingUp, Users } from "lucide-react";
import { CTABand, Container, PageHero, Section, SectionHead } from "../components/UI";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers & Openings",
  description: "Join the WISMAD team in Lucknow. Explore openings in web development, design, SEO and digital marketing.",
  alternates: { canonical: "/career" },
};

// Sample openings — update this list whenever you're hiring.
const jobs = [
  { t: "WordPress / PHP Developer", team: "Development", type: "Full-time", exp: "1–3 years" },
  { t: "Flutter App Developer", team: "Development", type: "Full-time", exp: "1–3 years" },
  { t: "SEO Executive", team: "Marketing", type: "Full-time", exp: "1–2 years" },
  { t: "Social Media Manager", team: "Marketing", type: "Full-time", exp: "2+ years" },
  { t: "Graphic Designer", team: "Design", type: "Full-time", exp: "1+ years" },
  { t: "Business Development Executive", team: "Sales", type: "Full-time", exp: "1–3 years" },
];

const perks = [
  { icon: TrendingUp, t: "Grow fast", b: "Work on real projects for clients in five countries from day one." },
  { icon: GraduationCap, t: "Keep learning", b: "Mentorship, training sessions and time to learn new tools." },
  { icon: Users, t: "Friendly team", b: "A supportive, collaborative culture where ideas are welcome." },
  { icon: Laptop, t: "Modern tools", b: "The software and equipment you need to do great work." },
  { icon: Coffee, t: "Work-life balance", b: "Reasonable hours and a comfortable Gomti Nagar office." },
  { icon: HeartHandshake, t: "Recognition", b: "Performance rewards and a clear path to senior roles." },
];

export default function CareerPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Careers" }]}
        eyebrow="Careers at WISMAD"
        title="Build your career while building the web."
        lead="We're always looking for curious developers, designers and marketers who care about doing great work — and want to grow with a friendly, ambitious team."
        actions={false}
        visual={
          <div className="relative aspect-[5/4]">
            <Image src="/images/team-work.jpg" alt="WISMAD team members working together" fill sizes="(min-width:1024px) 560px, 100vw" className="rounded-[32px] object-cover" style={{ boxShadow: "var(--shadow-lg)" }} preload />
            <div className="glass-strong anim-float absolute -bottom-5 left-5 flex items-center gap-3 rounded-[20px] px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl text-white" style={{ background: "var(--grad)" }}>
                <Briefcase size={18} aria-hidden />
              </span>
              <span className="flex flex-col">
                <span className="text-[14px] font-extrabold">{jobs.length} open roles</span>
                <span className="text-[12px] text-muted-2">Lucknow · On-site</span>
              </span>
            </div>
          </div>
        }
      />

      <Section>
        <Container>
          <SectionHead eyebrow="Life at WISMAD" title="Why you'll love working here." center />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
            {perks.map((p) => (
              <div key={p.t} className="glass spot card-hover group flex gap-4 rounded-[24px] p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                  <p.icon size={22} aria-hidden />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[17px] font-extrabold">{p.t}</span>
                  <span className="text-[14.5px] leading-relaxed text-muted">{p.b}</span>
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="openings">
        <Container>
          <SectionHead eyebrow="Open positions" title="Current openings." body="Don't see the right role? Send your CV anyway — we'd love to hear from you." />
          <ul className="m-0 flex list-none flex-col gap-3 p-0" data-stagger="70">
            {jobs.map((j) => (
              <li key={j.t}>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`Application: ${j.t}`)}`}
                  className="glass spot group flex flex-wrap items-center gap-x-6 gap-y-3 rounded-[22px] px-6 py-5 transition-all duration-300 hover:bg-white"
                >
                  <span className="flex min-w-[240px] flex-1 flex-col gap-1">
                    <span className="text-[18px] font-extrabold transition-colors group-hover:text-brand">{j.t}</span>
                    <span className="text-[13.5px] font-semibold text-muted-2">{j.team}</span>
                  </span>
                  <span className="flex flex-wrap gap-2 text-[13px] font-bold text-ink-2">
                    <span className="flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5"><MapPin size={13} aria-hidden /> Lucknow</span>
                    <span className="flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5"><Clock size={13} aria-hidden /> {j.type}</span>
                    <span className="flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5"><Briefcase size={13} aria-hidden /> {j.exp}</span>
                  </span>
                  <span className="flex items-center gap-2 text-[14.5px] font-extrabold text-brand">
                    Apply <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTABand title="Looking for an internship instead?" body="Our courses include hands-on internships with real client projects." cta={{ href: "/courses", label: "Explore courses" }} />
    </>
  );
}
