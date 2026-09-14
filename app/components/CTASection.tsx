import { Phone, Mail, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import RevealGroup from "./RevealGroup";

const CHANNELS = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 98355 07468",
    href: "tel:+919835507468",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "support@wismad.com",
    href: "mailto:support@wismad.com",
  },
  {
    icon: MessageCircle,
    label: "Chat with us",
    value: "Reply within one business day",
    href: "#contact",
  },
];

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, var(--color-accent-glow), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to start your project?
          </p>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Tell us what you need — we&apos;ll reply with a scoped estimate, not a
            sales call you have to schedule first.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-3">
          {CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              className="glass flex cursor-pointer flex-col items-center gap-3 rounded-3xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <channel.icon className="h-6 w-6 text-accent-2" aria-hidden="true" />
              <span className="text-sm font-semibold">{channel.label}</span>
              <span className="text-sm text-muted-foreground">{channel.value}</span>
            </a>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
