import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Briefcase, Check, Clock, Download, GraduationCap, Users } from "lucide-react";
import { Accordion } from "../components/Interactive";
import { IconTile } from "../components/Icon";
import { CTABand, Container, PageHero, Section, SectionHead, SplitWords } from "../components/UI";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Courses & Internship — Digital Marketing, Web Development, Design",
  description: "Industry-focused courses in digital marketing, web development, app development and graphic design, with internships on real client projects at WISMAD, Lucknow.",
  alternates: { canonical: "/courses" },
};

// Durations and modules are a starting point — adjust to your current batches.
const courses = [
  { t: "Digital Marketing", icon: "Megaphone", g: ["#8b5cf6", "#6d28d9"] as [string, string], dur: "3 months", lvl: "Beginner → Pro", mods: ["SEO & Search Console", "Google Ads & PPC", "Social media marketing", "Content & email marketing", "Analytics & reporting"] },
  { t: "Web Development", icon: "CodeXml", g: ["#3b82f6", "#1a5fdb"] as [string, string], dur: "4 months", lvl: "Beginner friendly", mods: ["HTML, CSS & JavaScript", "PHP & MySQL", "WordPress development", "React basics", "Deploying live projects"] },
  { t: "App Development", icon: "Smartphone", g: ["#0ea5e9", "#0284c7"] as [string, string], dur: "4 months", lvl: "Some coding helpful", mods: ["Dart & Flutter", "UI building blocks", "APIs & Firebase", "State management", "Publishing to stores"] },
  { t: "SEO Specialist", icon: "SearchCheck", g: ["#22c55e", "#16a34a"] as [string, string], dur: "2 months", lvl: "Beginner friendly", mods: ["Keyword research", "On-page & technical SEO", "Link building", "Local SEO", "Reporting to clients"] },
  { t: "Graphic Design", icon: "Brush", g: ["#ec4899", "#f59e0b"] as [string, string], dur: "3 months", lvl: "Beginner friendly", mods: ["Design fundamentals", "Photoshop & Illustrator", "Social media creatives", "Logo & branding", "Portfolio building"] },
  { t: "UI/UX Design", icon: "Palette", g: ["#6366f1", "#8b5cf6"] as [string, string], dur: "3 months", lvl: "Beginner friendly", mods: ["UX research basics", "Wireframing", "Figma prototyping", "Design systems", "Usability testing"] },
];

const faqs = [
  { q: "Do I need prior experience?", a: "Most courses are beginner friendly. We'll recommend the right starting point after a short counselling call." },
  { q: "Is there an internship?", a: "Yes. Eligible students work on live client projects with our team as part of the internship." },
  { q: "Will I get a certificate?", a: "Yes, you receive a WISMAD course completion certificate, plus an internship letter where applicable." },
  { q: "Are classes online or offline?", a: "Classes are held at our Lucknow office. Ask us about current online batch options." },
];

export default function CoursesPage() {
  const enquire = (c: string) => `mailto:${site.email}?subject=${encodeURIComponent(`Course enquiry: ${c}`)}`;
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Courses & internship" }]}
        eyebrow={
          <>
            <GraduationCap size={15} aria-hidden /> Learn from practitioners
          </>
        }
        title="Learn digital skills from a working agency."
        lead="WISMAD has been in the digital industry for over a decade. Our courses teach what we use every day on real client projects — and the best students get an internship with our team."
        actions={false}
      >
        <div className="flex flex-wrap justify-center gap-3" data-reveal data-delay="400">
          <a href="#courses" className="btn btn-primary">
            Explore courses <ArrowRight size={18} className="arrow" aria-hidden />
          </a>
          <a href={`mailto:${site.email}?subject=${encodeURIComponent("Course brochure request")}`} className="btn btn-glass">
            <Download size={17} aria-hidden /> Request brochure
          </a>
        </div>
      </PageHero>

      <Section className="!pt-14">
        <Container>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {[
              { icon: Users, t: "Small batches", b: "Personal attention" },
              { icon: Briefcase, t: "Live projects", b: "Real client work" },
              { icon: Award, t: "Certificate", b: "On completion" },
              { icon: GraduationCap, t: "Internship", b: "For top students" },
            ].map((f) => (
              <div key={f.t} className="glass spot flex items-center gap-4 rounded-3xl px-6 py-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white" style={{ background: "var(--grad)" }}>
                  <f.icon size={22} aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-[17px] font-extrabold">{f.t}</span>
                  <span className="text-[13.5px] text-muted">{f.b}</span>
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="courses">
        <Container>
          <SectionHead eyebrow="Our courses" title="Pick your path." body="Every course mixes theory, hands-on assignments and a final project for your portfolio." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-stagger>
            {courses.map((c) => (
              <article key={c.t} className="glass spot card-hover group flex flex-col gap-5 rounded-[28px] p-7">
                <div className="flex items-start justify-between">
                  <span className="transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <IconTile name={c.icon} gradient={c.g} />
                  </span>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-[12px] font-extrabold text-brand-600">{c.lvl}</span>
                </div>
                <div>
                  <h3 className="m-0 text-[23px] font-extrabold tracking-[-.02em]">{c.t}</h3>
                  <span className="mt-1 flex items-center gap-1.5 text-[13.5px] font-semibold text-muted-2">
                    <Clock size={14} aria-hidden /> {c.dur} · Internship available
                  </span>
                </div>
                <ul className="m-0 grid list-none gap-2 p-0">
                  {c.mods.map((m) => (
                    <li key={m} className="flex items-center gap-2.5 text-[14.5px] font-semibold text-ink-2">
                      <Check size={15} className="shrink-0" style={{ color: c.g[1] }} aria-hidden /> {m}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-2">
                  <a href={enquire(c.t)} className="btn btn-dark flex-1 !px-4">
                    Enroll now
                  </a>
                  <a href={enquire(`${c.t} — brochure`)} className="btn btn-glass !px-4" aria-label={`Request the ${c.t} brochure`}>
                    <Download size={17} aria-hidden />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <span className="eyebrow" data-reveal>
              Course FAQ
            </span>
            <h2 className="h-section m-0" data-reveal="split">
              <SplitWords text="Before you enroll." />
            </h2>
            <p className="lead m-0" data-reveal data-delay="150">
              Want to talk it through? Call <a href={site.phoneIN.href} className="font-bold text-brand">{site.phoneIN.display}</a> or <Link href="/contact-us" className="font-bold text-brand">send us a message</Link>.
            </p>
          </div>
          <div data-reveal data-delay="100">
            <Accordion items={faqs} />
          </div>
        </Container>
      </Section>

      <CTABand title="Start your digital career with WISMAD." body="Book a free counselling call and find the course that fits your goals." cta={{ href: "/contact-us", label: "Book a free call" }} />
    </>
  );
}
