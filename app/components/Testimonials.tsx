import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "The team scoped our project realistically and stuck to the timeline. No mid-project surprises on cost.",
    name: "Kenneth McDonald",
    role: "Founder, Anadigi Corp.",
  },
  {
    quote:
      "Communication was direct — we talked to the developers, not just an account manager. That made revisions fast.",
    name: "Rebecca Duff",
    role: "Marketing Lead, Litan Design Co.",
  },
  {
    quote:
      "Our organic traffic doubled in four months after the SEO work. The monthly reports actually explain what changed.",
    name: "Thomas Blake",
    role: "Operations, Bream Computers Ltd.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-border bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Client feedback
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            What clients say after working with us
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-6"
            >
              <div className="flex gap-0.5 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                  aria-hidden="true"
                >
                  {initials(t.name)}
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
