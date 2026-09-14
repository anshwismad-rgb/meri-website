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
    <section className="border-y border-border py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-2">
            Why work with us
          </h2>
          <p className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What clients notice after the first project
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title} className="glass rounded-3xl p-6">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 25%, transparent), color-mix(in srgb, var(--color-accent-2) 25%, transparent))",
                }}
              >
                <reason.icon className="h-5 w-5 text-accent-2" aria-hidden="true" />
              </div>
              <h3 className="font-display mt-5 text-base font-bold">{reason.title}</h3>
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
