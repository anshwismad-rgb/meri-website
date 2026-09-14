import { Phone, Mail, MessageCircle } from "lucide-react";

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
    <section id="contact" className="bg-primary py-16 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Tell us what you need — we&apos;ll reply with a scoped estimate, not a
            sales call you have to schedule first.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              className="flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 text-center transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <channel.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <span className="text-sm font-semibold">{channel.label}</span>
              <span className="text-sm text-slate-300">{channel.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
