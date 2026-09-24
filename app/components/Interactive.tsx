"use client";

import Image from "next/image";
import { ArrowRight, Check, LoaderCircle, Plus, Search } from "lucide-react";
import { useEffect, useId, useState, type FormEvent } from "react";
import { processSteps } from "@/lib/site";

export function WordRotator({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);
  return (
    <span className="block min-h-[1.06em]" aria-live="polite">
      <span
        key={i}
        className="grad-text inline-block pb-[.06em]"
        style={{ animation: "word-in .6s var(--ease-out) both" }}
      >
        {words[i]}
      </span>
    </span>
  );
}

/** Five-step process with autoplay, progress bar and cross-fading photos. */
export function ProcessStepper() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const s = processSteps[step];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setStep((v) => (v + 1) % processSteps.length), 5000);
    return () => clearTimeout(t);
  }, [step, paused]);

  return (
    <div
      className="glass grid items-center gap-10 rounded-[36px] p-[clamp(20px,4vw,48px)] lg:grid-cols-2"
      style={{ background: "rgba(255,255,255,.5)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[clamp(340px,36vw,460px)] overflow-hidden rounded-[28px]">
        {processSteps.map((p, i) => (
          <Image
            key={p.img}
            src={p.img}
            alt=""
            fill
            sizes="(min-width:1024px) 560px, 100vw"
            className="object-cover transition-all duration-[900ms]"
            style={{ opacity: i === step ? 1 : 0, transform: i === step ? "scale(1)" : "scale(1.08)" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-ink/60" />
        <div className="glass-dark absolute inset-x-4 bottom-4 flex flex-col gap-2 rounded-[22px] px-5 py-5 text-white" style={{ background: "rgba(255,255,255,.22)" }}>
          <span className="text-[12.5px] font-extrabold uppercase tracking-[.08em] opacity-90">
            Step {String(step + 1).padStart(2, "0")} of 05
          </span>
          <span key={step} className="text-[22px] font-extrabold tracking-tight" style={{ animation: "word-in .5s var(--ease-out) both" }}>
            {s.title}
          </span>
          <span className="text-[14.5px] leading-relaxed opacity-95">{s.body}</span>
          <div className="mt-1 h-[5px] overflow-hidden rounded-full bg-white/30">
            <div className="h-full rounded-full bg-white transition-[width] duration-500" style={{ width: `${((step + 1) / 5) * 100}%` }} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="eyebrow">Our process</span>
        <h2 className="h-section m-0 !text-[clamp(30px,3.8vw,46px)]">From ideas to impact in 5 simple steps.</h2>
        <div className="mt-2 flex flex-col gap-1.5" role="tablist" aria-label="Process steps">
          {processSteps.map((p, i) => {
            const on = i === step;
            return (
              <button
                key={p.title}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setStep(i)}
                className="relative flex cursor-pointer items-center gap-4 overflow-hidden rounded-[18px] border px-3.5 py-3 text-left transition-all duration-300 hover:bg-white/80"
                style={{
                  borderColor: on ? "rgba(255,255,255,.95)" : "transparent",
                  background: on ? "rgba(255,255,255,.88)" : "transparent",
                  boxShadow: on ? "0 10px 30px rgba(30,64,175,.12)" : "none",
                }}
              >
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] text-[14px] font-extrabold transition-all duration-300"
                  style={{ background: i <= step ? "var(--grad)" : "rgba(26,95,219,.08)", color: i <= step ? "#fff" : "var(--brand)" }}
                >
                  {i < step ? <Check size={18} aria-hidden /> : String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-[16.5px] font-extrabold text-ink">{p.title}</span>
                  <span className="text-[13.5px] text-muted">{p.short}</span>
                </span>
                {on && !paused && (
                  <span
                    key={`bar-${step}`}
                    className="absolute bottom-0 left-0 h-[3px] w-full origin-left"
                    style={{ background: "var(--grad)", animation: "grow-x 5s linear both" }}
                    aria-hidden
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items, defaultOpen = 0, searchable = false }: { items: { q: string; a: string }[]; defaultOpen?: number; searchable?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const [query, setQuery] = useState("");
  const id = useId();
  const q = query.trim().toLowerCase();
  const list = q ? items.filter((f) => (f.q + " " + f.a).toLowerCase().includes(q)) : items;
  return (
    <div className="flex flex-col gap-2.5">
      {searchable && (
        <label className="glass-strong mb-3 flex items-center gap-3 rounded-2xl px-5 py-1">
          <Search size={18} className="text-muted-2" aria-hidden />
          <span className="sr-only">Search questions</span>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(0);
            }}
            placeholder="Search questions…"
            className="h-12 flex-1 bg-transparent text-[16px] outline-none"
          />
        </label>
      )}
      {list.length === 0 && <p className="glass rounded-2xl p-6 text-center text-muted">No questions match “{query}”. Try another word, or ask us directly.</p>}
      {list.map((f, i) => {
        const on = open === i;
        return (
          <div key={f.q} className="glass overflow-hidden rounded-[20px]" style={{ boxShadow: on ? "var(--shadow-md)" : "var(--shadow-sm)" }}>
            <h3 className="m-0">
              <button
                type="button"
                id={`${id}-b${i}`}
                aria-expanded={on}
                aria-controls={`${id}-p${i}`}
                onClick={() => setOpen(on ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-[16.5px] font-extrabold text-ink"
              >
                <span>{f.q}</span>
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300"
                  style={{ background: on ? "var(--grad)" : "rgba(26,95,219,.08)", color: on ? "#fff" : "var(--brand)", transform: on ? "rotate(45deg)" : "none" }}
                  aria-hidden
                >
                  <Plus size={16} />
                </span>
              </button>
            </h3>
            <div id={`${id}-p${i}`} role="region" aria-labelledby={`${id}-b${i}`} className="acc-panel" data-open={on}>
              <div>
                <p className="m-0 px-6 pb-6 text-[15.5px] leading-[1.65] text-muted">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const interests = ["Website", "E-commerce", "Mobile app", "SEO", "Google Ads", "Social media", "Branding"];

/**
 * Enquiry form with inline validation. There is no backend yet: wire `submit`
 * to your email service / CRM (e.g. a Next.js route handler) before launch.
 */
export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [picks, setPicks] = useState<string[]>(["Website"]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const next: Record<string, string> = {};
    if (name.length < 2) next.name = "Please enter your name.";
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const isPhone = /^[+\d][\d\s-]{7,}$/.test(contact);
    if (!isEmail && !isPhone) next.contact = "Enter a valid phone number or email address.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = e.currentTarget.querySelector<HTMLInputElement>(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }
    setState("sending");
    setTimeout(() => setState("sent"), 900);
  };

  if (state === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 px-3 py-14 text-center" role="status">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-[#dcfce7] text-success" style={{ animation: "word-in .6s var(--ease-spring) both" }}>
          <Check size={30} aria-hidden />
        </span>
        <span className="text-[22px] font-extrabold">Thanks! We&apos;ll call you shortly.</span>
        <span className="text-[15px] text-muted">Usually within one working hour.</span>
      </div>
    );
  }

  const field = "w-full rounded-[14px] border bg-white px-4 py-[14px] text-[15px] outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15";

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-4">
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-[13.5px] font-bold text-ink-2">
            Your name
          </label>
          <input id="cf-name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} className={`${field} ${errors.name ? "border-red-400" : "border-line"}`} />
          {errors.name && <span id="cf-name-err" className="text-[13px] font-semibold text-red-600">{errors.name}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-contact" className="text-[13.5px] font-bold text-ink-2">
            Phone or email
          </label>
          <input id="cf-contact" name="contact" autoComplete="email" aria-invalid={!!errors.contact} aria-describedby={errors.contact ? "cf-contact-err" : undefined} className={`${field} ${errors.contact ? "border-red-400" : "border-line"}`} />
          {errors.contact && <span id="cf-contact-err" className="text-[13px] font-semibold text-red-600">{errors.contact}</span>}
        </div>
      </div>
      <fieldset className="m-0 border-0 p-0">
        <legend className="mb-2 text-[13.5px] font-bold text-ink-2">I&apos;m interested in</legend>
        <div className="flex flex-wrap gap-2">
          {interests.map((l) => {
            const on = picks.includes(l);
            return (
              <button
                key={l}
                type="button"
                aria-pressed={on}
                onClick={() => setPicks((p) => (on ? p.filter((x) => x !== l) : [...p, l]))}
                className="flex cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13.5px] font-bold transition-all duration-200 active:scale-95"
                style={{ borderColor: on ? "#1a5fdb" : "#dce3ee", background: on ? "#e6eeff" : "#fff", color: on ? "#1449b0" : "#313a48" }}
              >
                {on && <Check size={14} aria-hidden />}
                {l}
              </button>
            );
          })}
        </div>
      </fieldset>
      {!compact && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-msg" className="text-[13.5px] font-bold text-ink-2">
            Tell us about your project <span className="font-medium text-muted-2">(optional)</span>
          </label>
          <textarea id="cf-msg" name="message" rows={4} className={`${field} resize-y border-line`} />
        </div>
      )}
      <button type="submit" disabled={state === "sending"} className="btn btn-primary mt-1 w-full !rounded-[14px] !text-[16px] disabled:opacity-70">
        {state === "sending" ? (
          <>
            <LoaderCircle size={18} className="animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            Request free audit <ArrowRight size={18} className="arrow" aria-hidden />
          </>
        )}
      </button>
      <p className="m-0 text-center text-[12.5px] text-muted-2">We never share your details. No spam, ever.</p>
    </form>
  );
}
