import {
  Code2,
  ShoppingCart,
  Smartphone,
  Search,
  Megaphone,
  MousePointerClick,
} from "lucide-react";
import Reveal from "./Reveal";
import RevealGroup from "./RevealGroup";

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites built with modern, maintainable code — fast to load and easy for you to update.",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Online stores with secure checkout and inventory management.",
    span: "lg:col-span-2",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Android and iOS apps on one consistent design system.",
    span: "",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Technical SEO and content strategy that convert.",
    span: "",
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click Advertising",
    description: "Google and social ad campaigns managed for return on spend.",
    span: "lg:col-span-2",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Social, email and content marketing that build an audience.",
    span: "lg:col-span-2",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-2">
            What we do
          </h2>
          <p className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            One team, every part of your online presence
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${service.span}`}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--color-accent-glow) 18%, transparent), color-mix(in srgb, var(--color-accent-2-glow) 18%, transparent))",
                }}
              >
                <service.icon className="h-5 w-5 text-accent-2" aria-hidden="true" />
              </div>
              <h3 className="font-display mt-5 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
