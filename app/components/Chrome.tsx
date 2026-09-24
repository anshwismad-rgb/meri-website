"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./BrandIcons";

/** Thin gradient bar at the very top that tracks scroll position. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]" aria-hidden>
      <div ref={ref} className="h-full origin-left" style={{ background: "var(--grad-text)", transform: "scaleX(0)" }} />
    </div>
  );
}

/** WhatsApp shortcut + back-to-top, bottom-right. */
export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        tabIndex={show ? 0 : -1}
        className="glass-strong grid h-12 w-12 cursor-pointer place-items-center rounded-full text-ink transition-all duration-500 hover:-translate-y-1"
        style={{ opacity: show ? 1 : 0, transform: show ? "none" : "translateY(16px)", pointerEvents: show ? "auto" : "none" }}
      >
        <ArrowUp size={18} aria-hidden />
      </button>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WISMAD on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgba(37,211,102,.45)] transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-[#25d366]" style={{ animation: "ping-dot 2.4s ease-out infinite" }} aria-hidden />
        <span className="relative">
          <WhatsAppIcon size={26} />
        </span>
        <span className="pointer-events-none absolute right-[calc(100%+12px)] whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[13px] font-bold opacity-0 transition-opacity group-hover:opacity-100">
          Chat with us
        </span>
      </a>
    </div>
  );
}

/** Slow-moving colour blobs behind every page. */
export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="anim-blob absolute -left-40 -top-32 h-[620px] w-[620px] rounded-full" style={{ background: "radial-gradient(circle, rgba(59,130,246,.35), transparent 65%)", animationDuration: "22s" }} />
      <div className="anim-blob absolute -right-36 top-[12%] h-[560px] w-[560px] rounded-full" style={{ background: "radial-gradient(circle, rgba(56,189,248,.3), transparent 65%)", animationDuration: "26s", animationDelay: "-8s" }} />
      <div className="anim-blob absolute -bottom-52 left-[30%] h-[520px] w-[520px] rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,.22), transparent 65%)", animationDuration: "30s", animationDelay: "-14s" }} />
    </div>
  );
}
