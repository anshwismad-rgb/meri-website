import type { Metadata } from "next";
import { PortfolioGrid } from "../components/Filters";
import { CTABand, Container, PageHero, Section, StatsRow } from "../components/UI";

export const metadata: Metadata = {
  title: "Portfolio — Custom Websites, Apps & Campaigns",
  description: "Custom website designs as unique as our clients, plus apps, online stores and marketing campaigns that deliver measurable results.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Portfolio" }]}
        eyebrow="Our work"
        title="Custom work as unique as our clients."
        lead="Websites, online stores, mobile apps and campaigns we've built for businesses across five countries — each one shaped around real goals and measured by real results."
        actions={false}
      />
      <Section className="!pt-14">
        <Container>
          <PortfolioGrid />
        </Container>
      </Section>
      <Section>
        <Container>
          <StatsRow />
        </Container>
      </Section>
      <CTABand title="Want results like these?" body="Tell us about your project and we'll share relevant examples and a fixed quote." />
    </>
  );
}
