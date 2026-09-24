"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One small runtime that powers the site's declarative motion attributes:
 *  - [data-reveal] / [data-stagger] — fade-up on scroll (CSS does the animating)
 *  - [data-count]                  — count-up numbers when visible
 *  - .spot                         — cursor-following spotlight
 *  - [data-tilt]                   — subtle 3D tilt toward the cursor
 *  - [data-magnetic]               — buttons that lean toward the cursor
 * Re-scans on every route change. Everything is skipped under reduced motion.
 */
export default function MotionRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets: Element[] = [];

    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((parent) => {
      const step = Number(parent.dataset.stagger) || 90;
      Array.from(parent.children).forEach((child, i) => {
        const el = child as HTMLElement;
        if (!el.style.getPropertyValue("--d")) el.style.setProperty("--d", `${i * step}ms`);
        targets.push(el);
      });
    });
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.dataset.delay) el.style.setProperty("--d", `${el.dataset.delay}ms`);
      targets.push(el);
    });

    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));

    if (reduce) {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    targets.forEach((el) => !el.classList.contains("in") && io.observe(el));

    const runCount = (el: HTMLElement) => {
      const to = Number(el.dataset.count);
      const decimals = Number(el.dataset.decimals || 0);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const dur = 1800;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        const v = to * (1 - Math.pow(1 - p, 3));
        el.textContent = prefix + v.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          runCount(e.target as HTMLElement);
        });
      },
      { threshold: 0.4 },
    );
    counters.forEach((el) => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      cio.observe(el);
    });

    return () => {
      io.disconnect();
      cio.disconnect();
    };
  }, [pathname]);

  // Pointer effects — delegated once for the whole document.
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let tilted: HTMLElement | null = null;
    let magnet: HTMLElement | null = null;

    const onMove = (e: PointerEvent) => {
      const t = e.target as Element | null;
      if (!t || !t.closest) return;

      const spot = t.closest<HTMLElement>(".spot");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      const tilt = t.closest<HTMLElement>("[data-tilt]");
      if (tilted && tilted !== tilt) tilted.style.transform = "";
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transition = "transform .15s ease-out";
        tilt.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-6px)`;
      }
      tilted = tilt;

      const mag = t.closest<HTMLElement>("[data-magnetic]");
      if (magnet && magnet !== mag) magnet.style.transform = "";
      if (mag) {
        const r = mag.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        mag.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
      }
      magnet = mag;
    };
    const onLeave = () => {
      if (tilted) tilted.style.transform = "";
      if (magnet) magnet.style.transform = "";
      tilted = magnet = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return null;
}
