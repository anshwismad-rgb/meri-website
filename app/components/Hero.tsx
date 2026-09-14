"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-hero-item]", el);
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={containerRef} className="relative overflow-hidden">
      <div
        className="animate-float-blob pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-glow) 0%, var(--color-accent-2-glow) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-20 text-center sm:px-6 sm:pt-32 sm:pb-28">
        <span
          data-hero-item
          className="glass inline-block rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground"
        >
          Web Development &amp; Digital Marketing
        </span>

        <h1
          data-hero-item
          className="font-display mx-auto mt-8 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
        >
          Websites that <span className="text-gradient">load fast</span> and turn
          visitors into customers
        </h1>

        <p data-hero-item className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          We design, build and market websites and apps for small and mid-size
          businesses — from the first line of code to the campaigns that bring
          people to it.
        </p>

        <div
          data-hero-item
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            style={{
              background:
                "linear-gradient(90deg, var(--color-accent-glow), var(--color-accent-2-glow))",
            }}
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#work"
            className="glass inline-flex cursor-pointer items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
