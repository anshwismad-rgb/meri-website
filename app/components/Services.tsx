import {
  Code2,
  ShoppingCart,
  Smartphone,
  Search,
  Megaphone,
  MousePointerClick,
} from "lucide-react";

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites built with modern, maintainable code — fast to load and easy for you to update.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Online stores with secure checkout, inventory management, and a product catalog that's easy to browse.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Android and iOS apps built to a single design system, so your brand feels consistent everywhere.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Technical SEO and content strategy focused on rankings that convert, not just traffic.",
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click Advertising",
    description:
      "Google and social ad campaigns managed for return on spend, with transparent monthly reporting.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Social media, email and content marketing that build an audience — not just a posting schedule.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            What we do
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            One team, every part of your online presence
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            From the first line of code to the campaign that brings people to your
            site — we handle it as one connected project, not six separate vendors.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                <service.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-primary">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
