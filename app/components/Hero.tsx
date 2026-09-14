import { ArrowRight, CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "8+ years building for clients",
  "150+ projects delivered",
  "24/7 support included",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(3,105,161,0.55), transparent 45%), radial-gradient(circle at 85% 0%, rgba(51,65,85,0.6), transparent 40%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium">
            Web Development &amp; Digital Marketing
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Websites that load fast, rank well, and turn visitors into customers
          </h1>

          <p className="mt-5 max-w-xl text-lg text-slate-300">
            We design, build and market websites and apps for small and mid-size
            businesses — from the first line of code to the campaigns that bring
            people to it.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#work"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 text-base font-semibold transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See Our Work
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
