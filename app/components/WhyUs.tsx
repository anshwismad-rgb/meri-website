import { ShieldCheck, Clock, Headphones, Wallet } from "lucide-react";

const REASONS = [
  {
    icon: Clock,
    title: "Fixed timelines",
    description: "You get a delivery date at kickoff, and we hold to it.",
  },
  {
    icon: Wallet,
    title: "Transparent pricing",
    description: "One quote, no surprise line items added mid-project.",
  },
  {
    icon: ShieldCheck,
    title: "Security-first builds",
    description: "Regular audits and patched dependencies on every project.",
  },
  {
    icon: Headphones,
    title: "Support after launch",
    description: "30 days of free fixes, then a support plan if you want one.",
  },
];

export default function WhyUs() {
  return (
    <section className="border-y border-border bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Why work with us
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            What clients notice after the first project
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                <reason.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-base font-bold text-primary">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
