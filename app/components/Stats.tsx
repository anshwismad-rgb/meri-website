"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { value: 150, decimals: 0, suffix: "+", label: "Projects delivered" },
  { value: 8, decimals: 0, suffix: "+", label: "Years in business" },
  { value: 60, decimals: 0, suffix: "+", label: "Active clients" },
  { value: 4.8, decimals: 1, suffix: "/5", label: "Average client rating" },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const numberEls = gsap.utils.toArray<HTMLElement>(
      el.querySelectorAll("[data-count-to]"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      numberEls.forEach((n) => {
        n.textContent = Number(n.dataset.countTo).toFixed(Number(n.dataset.decimals));
      });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          numberEls.forEach((n) => {
            const to = Number(n.dataset.countTo);
            const decimals = Number(n.dataset.decimals);
            const counter = { val: 0 };
            gsap.to(counter, {
              val: to,
              duration: 1.4,
              ease: "power2.out",
              onUpdate: () => {
                n.textContent = counter.val.toFixed(decimals);
              },
            });
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative px-4 sm:px-6">
      <div className="glass mx-auto grid max-w-5xl grid-cols-2 gap-8 rounded-3xl px-6 py-10 sm:-mt-6 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-bold sm:text-4xl">
              <span data-count-to={stat.value} data-decimals={stat.decimals}>
                0
              </span>
              {stat.suffix}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
