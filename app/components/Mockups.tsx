import Image from "next/image";
import { ArrowUp, Bell, Check, Heart, Lock, MessageCircle, Search, Send, ShoppingBag, Star, TrendingUp } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import type { Service } from "@/lib/services";

/* ── Primitives ─────────────────────────────────────────────────────────── */

export function BrowserFrame({ url, children, className = "", style }: { url: string; children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`overflow-hidden rounded-[20px] border border-white/90 bg-white ${className}`} style={{ boxShadow: "0 40px 80px rgba(30,64,175,.25)", ...style }}>
      <div className="flex items-center gap-[7px] border-b border-[#e6ebf3] bg-[#f1f5fb]/95 px-3.5 py-[11px]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2.5 flex flex-1 items-center gap-1.5 rounded-full bg-white px-3 py-[5px] text-[11.5px] font-medium text-muted">
          <Lock size={11} className="text-success" aria-hidden />
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`rounded-[30px] bg-ink p-[7px] ${className}`} style={{ boxShadow: "0 30px 60px rgba(11,21,48,.35)", ...style }}>
      <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-white">
        <span className="absolute left-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-ink" />
        {children}
      </div>
    </div>
  );
}

export function FloatChip({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`glass-strong absolute z-10 flex items-center gap-3 rounded-[18px] px-4 py-3 ${className}`} style={{ boxShadow: "0 20px 40px rgba(30,64,175,.18)", ...style }}>
      {children}
    </div>
  );
}

export function ScoreRing({ value, color = "#22c55e", size = 44, label }: { value: number; color?: string; size?: number; label?: string }) {
  return (
    <span className="grid shrink-0 place-items-center rounded-full" style={{ width: size, height: size, background: `conic-gradient(${color} 0 ${value}%, #e6ebf3 0)` }} aria-label={label}>
      <span className="grid place-items-center rounded-full bg-white text-[12px] font-extrabold" style={{ width: size - 10, height: size - 10, color }}>
        {value}
      </span>
    </span>
  );
}

const Bar = ({ w, c = "#e6ebf3", h = 8 }: { w: string; c?: string; h?: number }) => <span className="block rounded-full" style={{ width: w, height: h, background: c }} />;

function Sparkline({ color = "#3b82f6", id }: { color?: string; id: string }) {
  return (
    <svg viewBox="0 0 260 70" className="mt-1 block h-[60px] w-full" aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity=".35" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 62 L30 58 L60 60 L90 50 L120 46 L150 38 L180 30 L210 20 L240 12 L260 6 L260 70 L0 70Z" fill={`url(#${id})`} />
      <path d="M0 62 L30 58 L60 60 L90 50 L120 46 L150 38 L180 30 L210 20 L240 12 L260 6" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" className="anim-draw" style={{ ["--len" as string]: 300 }} />
    </svg>
  );
}

/* ── Home hero showcase (ported from the Claude Design file) ───────────── */

export function HeroShowcase() {
  return (
    <div className="relative h-[clamp(460px,48vw,580px)]">
      <div className="absolute inset-[8%_4%_4%_10%] rotate-[-4deg] rounded-[40px] opacity-90 blur-[2px]" style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6 60%,#38bdf8)" }} aria-hidden />
      <BrowserFrame url="bloomskin.in" className="absolute left-[4%] right-[6%] top-[6%]">
        <div className="h-[clamp(300px,31vw,380px)] overflow-hidden">
          <div className="anim-autoscroll">
            <div className="flex items-center justify-between px-5 py-3.5">
              <span className="text-[15px] font-extrabold tracking-tight text-[#be185d]">bloomskin</span>
              <div className="flex gap-3.5 text-[11px] font-semibold text-muted">
                <span>Shop</span>
                <span>Rituals</span>
                <span>About</span>
                <span className="text-[#be185d]">Cart (2)</span>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-3.5 px-5 pb-4 pt-1.5">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-[.08em] text-[#be185d]">NEW COLLECTION</span>
                <span className="text-[22px] font-extrabold leading-[1.1] tracking-[-.03em]">Glow naturally, every day.</span>
                <span className="text-[11px] leading-normal text-muted-2">Clean skincare made with Ayurvedic botanicals.</span>
                <span className="self-start rounded-full bg-[#be185d] px-3 py-1.5 text-[10px] font-bold text-white">Shop now</span>
              </div>
              <Image src="/images/shop-hero.jpg" alt="" width={260} height={260} className="aspect-square w-full rounded-[14px] object-cover" preload />
            </div>
            <div className="px-5 pb-2 pt-1 text-[12px] font-extrabold">Bestsellers</div>
            <div className="grid grid-cols-3 gap-2.5 px-5 pb-4">
              {[
                ["/images/product-serum.jpg", "Rose Serum", "₹899"],
                ["/images/product-cream.jpg", "Day Cream", "₹649"],
                ["/images/product-oil.jpg", "Face Oil", "₹1,099"],
              ].map(([src, n, p]) => (
                <div key={n} className="flex flex-col gap-1">
                  <Image src={src} alt="" width={120} height={120} className="aspect-square w-full rounded-[10px] bg-[#fce7f3] object-cover" />
                  <span className="text-[10px] font-bold">{n}</span>
                  <span className="text-[10px] font-bold text-[#be185d]">{p}</span>
                </div>
              ))}
            </div>
            <div className="mx-5 mb-4 flex items-center gap-3 rounded-[14px] bg-[#fdf2f8] p-4">
              <Image src="/images/avatar-priya.jpg" alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
              <span className="text-[11px] leading-normal text-muted">“My skin has never felt this good. Ordering again!” — Priya</span>
            </div>
            <div className="flex justify-between bg-[#fafafa] px-5 pb-8 pt-3.5 text-[10px] text-muted-2">
              <span className="font-extrabold text-[#be185d]">bloomskin</span>
              <span>Free shipping over ₹999</span>
            </div>
          </div>
        </div>
      </BrowserFrame>

      <div className="glass-strong anim-float absolute bottom-0 left-[-2%] w-[min(270px,58%)] rounded-[22px] p-[18px]" style={{ boxShadow: "0 24px 50px rgba(30,64,175,.18)" }}>
        <div className="flex items-center justify-between">
          <span className="text-[12.5px] font-semibold text-muted">Organic traffic</span>
          <span className="flex items-center gap-0.5 rounded-full bg-[#dcfce7] px-2 py-0.5 text-[11.5px] font-extrabold text-success">
            <ArrowUp size={11} aria-hidden /> 180%
          </span>
        </div>
        <div className="mt-1 text-[28px] font-extrabold tracking-[-.03em]" data-count="48210">
          48,210
        </div>
        <Sparkline id="hero-spark" />
      </div>

      <FloatChip className="anim-float right-0 top-0" style={{ animationDuration: "6s", animationDelay: "-2s" }}>
        <Image src="/images/avatar-4.jpg" alt="" width={40} height={40} className="h-10 w-10 rounded-xl object-cover" />
        <div className="flex flex-col">
          <span className="text-[13.5px] font-extrabold">New lead received</span>
          <span className="text-[12px] text-muted-2">Rahul · Website enquiry</span>
        </div>
        <span className="anim-pulse h-[9px] w-[9px] rounded-full bg-[#22c55e]" />
      </FloatChip>

      <PhoneFrame className="anim-floatx absolute bottom-[8%] right-[-1%] h-[250px] w-[132px]">
        <Image src="/images/food-hero.jpg" alt="" width={132} height={90} className="h-[90px] w-full object-cover" />
        <div className="flex flex-col gap-1.5 p-2.5">
          <span className="text-[10.5px] font-extrabold">Spice Route</span>
          <span className="text-[9px] text-muted-2">Delivery in 25 min</span>
          <div className="flex gap-1">
            <span className="rounded-md bg-[#fef3c7] px-1.5 py-0.5 text-[8px] font-bold text-[#92400e]">★ 4.8</span>
            <span className="rounded-md bg-brand-50 px-1.5 py-0.5 text-[8px] font-bold text-brand-600">Free delivery</span>
          </div>
          <div className="mt-0.5 flex gap-1">
            <Image src="/images/food-1.jpg" alt="" width={56} height={38} className="h-[38px] min-w-0 flex-1 rounded-[7px] object-cover" />
            <Image src="/images/food-2.jpg" alt="" width={56} height={38} className="h-[38px] min-w-0 flex-1 rounded-[7px] object-cover" />
          </div>
          <span className="mt-0.5 rounded-lg bg-brand p-1.5 text-center text-[9px] font-bold text-white">Order now</span>
        </div>
      </PhoneFrame>

      <FloatChip className="anim-float left-[36%] top-[-3%] !rounded-full !py-2 !pl-2 !pr-3.5" style={{ animationDuration: "8s", animationDelay: "-4s" }}>
        <span className="grid h-7 w-7 place-items-center rounded-full text-white" style={{ background: "linear-gradient(135deg,#fbbf24,#f59e0b)" }}>
          <Star size={13} fill="currentColor" aria-hidden />
        </span>
        <span className="text-[12.5px] font-extrabold">#1 on Google</span>
      </FloatChip>
    </div>
  );
}

/* ── Service visuals ────────────────────────────────────────────────────── */

function MockSite({ accent, img }: { accent: string; img: string }) {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-[13px] font-extrabold">
          <span className="h-5 w-5 rounded-md" style={{ background: accent }} /> brand.co
        </span>
        <div className="flex gap-3">
          <Bar w="28px" h={6} />
          <Bar w="28px" h={6} />
          <Bar w="28px" h={6} />
          <span className="rounded-full px-2.5 py-1 text-[9px] font-bold text-white" style={{ background: accent }}>
            Contact
          </span>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-[1.1fr_1fr] items-center gap-4">
        <div className="flex flex-col gap-2.5">
          <Bar w="40%" c={`${accent}33`} h={10} />
          <span className="text-[22px] font-extrabold leading-[1.1] tracking-tight">Grow faster with a site that sells.</span>
          <Bar w="90%" />
          <Bar w="70%" />
          <div className="mt-1 flex gap-2">
            <span className="rounded-full px-3 py-1.5 text-[10px] font-bold text-white" style={{ background: accent }}>
              Get started
            </span>
            <span className="rounded-full border border-line px-3 py-1.5 text-[10px] font-bold">Learn more</span>
          </div>
        </div>
        <Image src={img} alt="" width={260} height={200} className="aspect-[4/3] w-full rounded-2xl object-cover" />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-2 rounded-xl bg-[#f4f7ff] p-3">
            <span className="h-6 w-6 rounded-lg" style={{ background: `${accent}${["", "bb", "77"][i]}` }} />
            <Bar w="80%" h={6} c="#cfd8e6" />
            <Bar w="60%" h={6} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ShopMock({ accent }: { accent: string }) {
  const items: [string, string, string][] = [
    ["/images/product-serum.jpg", "Rose Serum", "₹899"],
    ["/images/product-cream.jpg", "Day Cream", "₹649"],
    ["/images/product-oil.jpg", "Face Oil", "₹1,099"],
    ["/images/product-a.jpg", "Gift Set", "₹1,499"],
    ["/images/product-b.jpg", "Body Mist", "₹549"],
    ["/images/shop-hero.jpg", "Glow Kit", "₹2,199"],
  ];
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-extrabold tracking-tight" style={{ color: accent }}>
          yourstore
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-[#f4f7ff] px-3 py-1.5 text-[10px] font-bold">
          <ShoppingBag size={12} aria-hidden /> Cart · 3
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        {["All", "Skincare", "Gifts", "New"].map((c, i) => (
          <span key={c} className="rounded-full px-2.5 py-1 text-[9.5px] font-bold" style={{ background: i === 0 ? accent : "#f4f7ff", color: i === 0 ? "#fff" : "#313a48" }}>
            {c}
          </span>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3" data-stagger="120">
        {items.map(([src, n, p]) => (
          <div key={n} className="flex flex-col gap-1">
            <Image src={src} alt="" width={140} height={140} className="aspect-square w-full rounded-xl bg-[#fce7f3] object-cover" />
            <span className="text-[10.5px] font-bold">{n}</span>
            <span className="flex items-center justify-between text-[10.5px] font-extrabold" style={{ color: accent }}>
              {p} <span className="grid h-5 w-5 place-items-center rounded-md text-white" style={{ background: accent }}>+</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeMock() {
  const lines: [number, string, string][] = [
    [0, "#c678dd", "export default function Home() {"],
    [1, "#61afef", "  const leads = useLeads();"],
    [1, "#e5c07b", "  return ("],
    [2, "#e06c75", '    <Hero title="Grow online" />'],
    [2, "#e06c75", "    <Services items={services} />"],
    [2, "#e06c75", "    <Testimonials />"],
    [2, "#e06c75", "    <ContactForm onSubmit={leads.add} />"],
    [1, "#e5c07b", "  );"],
    [0, "#c678dd", "}"],
  ];
  return (
    <div className="overflow-hidden rounded-[20px] bg-[#0f1a36]" style={{ boxShadow: "0 40px 80px rgba(11,21,48,.35)" }}>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 rounded-md bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/70">page.tsx</span>
        <span className="rounded-md px-2.5 py-1 font-mono text-[11px] text-white/40">styles.css</span>
      </div>
      <div className="flex flex-col gap-1.5 p-5 font-mono text-[12.5px] leading-relaxed" data-stagger="110">
        {lines.map(([indent, c, t], i) => (
          <div key={i} className="flex gap-4 whitespace-pre">
            <span className="w-4 text-right text-white/25">{i + 1}</span>
            <span style={{ color: c, paddingLeft: indent * 4 }}>{t.trim()}</span>
          </div>
        ))}
        <div className="flex gap-4">
          <span className="w-4 text-right text-white/25">10</span>
          <span className="inline-block h-4 w-2 bg-brand-400" style={{ animation: "blink 1s step-end infinite" }} />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 font-mono text-[11px] text-white/60">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#22c55e]" /> Build passed · deployed
        </span>
        <span>main ✓</span>
      </div>
    </div>
  );
}

function DashboardMock({ accent, title = "Overview" }: { accent: string; title?: string }) {
  const bars = [40, 62, 48, 75, 58, 88, 70, 96];
  return (
    <div className="grid grid-cols-[64px_1fr] overflow-hidden rounded-[20px] border border-white/90 bg-white" style={{ boxShadow: "0 40px 80px rgba(30,64,175,.25)" }}>
      <div className="flex flex-col items-center gap-4 bg-ink py-5">
        <span className="h-8 w-8 rounded-xl" style={{ background: "var(--grad)" }} />
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="h-8 w-8 rounded-xl" style={{ background: i === 0 ? "rgba(255,255,255,.18)" : "rgba(255,255,255,.06)" }} />
        ))}
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-extrabold">{title}</span>
          <span className="flex items-center gap-2">
            <span className="rounded-full bg-[#f4f7ff] px-2.5 py-1 text-[10px] font-bold text-muted">Last 30 days</span>
            <Bell size={14} className="text-muted-2" aria-hidden />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2.5" data-stagger>
          {[
            ["Visitors", "48.2k", "+18%"],
            ["Leads", "1,284", "+32%"],
            ["Revenue", "₹9.4L", "+24%"],
          ].map(([l, v, d]) => (
            <div key={l} className="rounded-xl bg-[#f4f7ff] p-3">
              <span className="text-[10px] font-semibold text-muted-2">{l}</span>
              <div className="text-[18px] font-extrabold tracking-tight">{v}</div>
              <span className="text-[10px] font-extrabold text-success">{d}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-[#eef2f8] p-3">
          <div className="mb-2 flex justify-between text-[10.5px] font-bold text-muted">
            <span>Growth</span>
            <span style={{ color: accent }}>▲ trending up</span>
          </div>
          <svg viewBox="0 0 300 90" className="h-[90px] w-full" aria-hidden>
            {[20, 45, 70].map((y) => (
              <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#eef2f8" />
            ))}
            <path d="M0 80 C40 70 60 72 90 58 S150 50 180 36 S250 22 300 8" fill="none" stroke={accent} strokeWidth="3.5" strokeLinecap="round" className="anim-draw" style={{ ["--len" as string]: 400 }} />
            <path d="M0 86 C40 82 70 80 100 74 S170 66 200 60 S260 52 300 44" fill="none" stroke="#c4b5fd" strokeWidth="2.5" strokeDasharray="5 6" />
          </svg>
        </div>
        <div className="flex h-[70px] items-end gap-2">
          {bars.map((h, i) => (
            <span key={i} className="anim-bar flex-1 rounded-t-md" style={{ height: `${h}%`, background: i === bars.length - 1 ? accent : `${accent}40`, animationDelay: `${-i * 0.4}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WordPressMock() {
  return (
    <div className="grid grid-cols-[120px_1fr] overflow-hidden rounded-[20px] border border-white/90 bg-white" style={{ boxShadow: "0 40px 80px rgba(30,64,175,.25)" }}>
      <div className="flex flex-col gap-1 bg-[#1d2327] p-3 text-[10.5px] font-semibold text-white/75">
        <span className="mb-2 flex items-center gap-2 text-white">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#21759b] text-[11px] font-extrabold">W</span> Dashboard
        </span>
        {["Posts", "Media", "Pages", "Products", "Appearance", "Plugins", "Settings"].map((n, i) => (
          <span key={n} className="rounded-md px-2 py-1.5" style={{ background: i === 2 ? "#2271b1" : "transparent", color: i === 2 ? "#fff" : undefined }}>
            {n}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-extrabold">Pages</span>
          <span className="rounded-md bg-[#2271b1] px-2.5 py-1 text-[10px] font-bold text-white">Add new</span>
        </div>
        <div className="flex flex-col divide-y divide-[#eef2f8] rounded-xl border border-[#eef2f8]" data-stagger>
          {["Home", "About us", "Services", "Portfolio", "Contact"].map((p, i) => (
            <div key={p} className="flex items-center justify-between px-3 py-2.5 text-[11.5px]">
              <span className="font-bold text-[#2271b1]">{p}</span>
              <span className="flex items-center gap-2 text-[10px] text-muted-2">
                <span className="rounded-full bg-[#dcfce7] px-2 py-0.5 font-bold text-success">SEO {92 - i * 3}</span> Published
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-[#f4f7ff] p-3 text-[10.5px]">
            <span className="font-semibold text-muted-2">Site health</span>
            <div className="mt-1 flex items-center gap-2 font-extrabold text-success">
              <Check size={14} aria-hidden /> Good
            </div>
          </div>
          <div className="rounded-xl bg-[#f4f7ff] p-3 text-[10.5px]">
            <span className="font-semibold text-muted-2">Plugins</span>
            <div className="mt-1 font-extrabold">All up to date</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhonesMock() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[460px]">
      <div className="absolute inset-[10%_8%] rounded-[48px] opacity-80 blur-[2px]" style={{ background: "linear-gradient(135deg,#38bdf8,#1a5fdb 60%,#8b5cf6)", transform: "rotate(-6deg)" }} aria-hidden />
      <PhoneFrame className="anim-float absolute left-[8%] top-[4%] h-[400px] w-[200px]">
        <div className="flex h-full flex-col">
          <Image src="/images/fitness-app.jpg" alt="" width={200} height={150} className="h-[150px] w-full object-cover" />
          <div className="flex flex-1 flex-col gap-3 p-4">
            <span className="text-[14px] font-extrabold">FitPulse</span>
            <div className="flex items-center gap-3">
              <ScoreRing value={72} color="#0ea5e9" size={56} />
              <div className="flex flex-col">
                <span className="text-[16px] font-extrabold">7,240</span>
                <span className="text-[10px] text-muted-2">steps today</span>
              </div>
            </div>
            <div className="flex h-12 items-end gap-1.5">
              {[40, 70, 55, 90, 65, 80, 100].map((h, i) => (
                <span key={i} className="anim-bar flex-1 rounded-t" style={{ height: `${h}%`, background: i === 6 ? "#0ea5e9" : "#bae6fd", animationDelay: `${-i * 0.3}s` }} />
              ))}
            </div>
            <span className="mt-auto rounded-xl bg-sky p-2.5 text-center text-[11px] font-bold text-white">Start workout</span>
          </div>
        </div>
      </PhoneFrame>
      <PhoneFrame className="anim-floatx absolute right-[6%] top-[14%] h-[360px] w-[180px]">
        <Image src="/images/food-hero.jpg" alt="" width={180} height={130} className="h-[130px] w-full object-cover" />
        <div className="flex flex-col gap-2 p-3.5">
          <span className="text-[13px] font-extrabold">Spice Route</span>
          <span className="text-[10px] text-muted-2">Delivery in 25 min</span>
          <div className="flex gap-1.5">
            <span className="rounded-md bg-[#fef3c7] px-1.5 py-0.5 text-[9px] font-bold text-[#92400e]">★ 4.8</span>
            <span className="rounded-md bg-brand-50 px-1.5 py-0.5 text-[9px] font-bold text-brand-600">Free delivery</span>
          </div>
          <div className="flex gap-1.5">
            <Image src="/images/food-1.jpg" alt="" width={80} height={56} className="h-14 min-w-0 flex-1 rounded-lg object-cover" />
            <Image src="/images/food-2.jpg" alt="" width={80} height={56} className="h-14 min-w-0 flex-1 rounded-lg object-cover" />
          </div>
          <span className="rounded-lg bg-brand p-2 text-center text-[10px] font-bold text-white">Order now</span>
        </div>
      </PhoneFrame>
    </div>
  );
}

function HostingMock() {
  return (
    <div className="overflow-hidden rounded-[20px] bg-[#0f1a36] p-5 text-white" style={{ boxShadow: "0 40px 80px rgba(11,21,48,.35)" }}>
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-extrabold">Server status</span>
        <span className="flex items-center gap-2 rounded-full bg-[#22c55e]/15 px-3 py-1 text-[11px] font-bold text-[#4ade80]">
          <span className="anim-pulse h-2 w-2 rounded-full bg-[#22c55e]" /> All systems operational
        </span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3" data-stagger>
        {[
          ["Uptime", "99.98%"],
          ["Response", "182ms"],
          ["SSL", "Valid"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-xl bg-white/[.06] p-3">
            <span className="text-[10.5px] text-white/55">{l}</span>
            <div className="text-[18px] font-extrabold">{v}</div>
          </div>
        ))}
      </div>
      <p className="mb-2 mt-5 text-[11px] text-white/55">Last 30 days</p>
      <div className="flex gap-[3px]">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="h-8 flex-1 rounded-sm" style={{ background: i === 17 ? "#fbbf24" : "#22c55e", opacity: 0.55 + ((i * 7) % 10) / 22 }} />
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-2 font-mono text-[11px] text-white/70">
        <span><span className="text-[#4ade80]">✓</span> Daily backup completed · 03:00 IST</span>
        <span><span className="text-[#4ade80]">✓</span> Malware scan clean · 0 threats</span>
        <span><span className="text-[#4ade80]">✓</span> SSL auto-renewed · 89 days left</span>
      </div>
    </div>
  );
}

function SerpMock() {
  const rows: [string, string, string, string][] = [
    ["1", "yourbusiness.com", "▲ 14", "#16a34a"],
    ["2", "competitor-one.com", "▼ 1", "#ef4444"],
    ["3", "competitor-two.in", "▼ 1", "#ef4444"],
    ["4", "directory-listing.com", "—", "#6b7587"],
  ];
  return (
    <div className="rounded-[20px] border border-white/90 bg-white p-5" style={{ boxShadow: "0 40px 80px rgba(30,64,175,.25)" }}>
      <div className="flex items-center gap-3 rounded-full border border-line px-4 py-2.5">
        <Search size={15} className="text-muted-2" aria-hidden />
        <span className="flex-1 overflow-hidden whitespace-nowrap text-[13px] font-semibold">
          <span className="inline-block overflow-hidden whitespace-nowrap align-bottom" style={{ animation: "typing 6s steps(28) infinite" }}>
            best web design company near me
          </span>
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-2" data-stagger="140">
        {rows.map(([n, d, ch, c], i) => (
          <div
            key={d}
            className="flex items-center gap-3 rounded-2xl px-4 py-3"
            style={i === 0 ? { background: "var(--grad)", color: "#fff", boxShadow: "0 10px 24px rgba(26,95,219,.3)" } : { background: "#f6f8fc", color: "#4b5566" }}
          >
            <span className="font-extrabold">{n}</span>
            <span className="flex flex-1 flex-col">
              <span className="text-[13.5px] font-bold">{d}</span>
              <span className="text-[11px] opacity-75">{i === 0 ? "Top-rated web design & SEO · Free audit" : "Services · Pricing · Contact"}</span>
            </span>
            <span className="text-[11.5px] font-bold" style={{ color: i === 0 ? "#fff" : c }}>
              {ch}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileSerpMock() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[440px]">
      <PhoneFrame className="anim-float absolute left-[12%] top-0 h-[430px] w-[220px]">
        <div className="flex flex-col gap-2.5 px-3 pb-3 pt-8">
          <div className="flex items-center gap-2 rounded-full bg-[#f4f7ff] px-3 py-2 text-[10px] font-semibold">
            <Search size={11} aria-hidden /> web developer near me
          </div>
          <div className="h-24 overflow-hidden rounded-xl bg-[#e6eeff]">
            <svg viewBox="0 0 200 96" className="h-full w-full" aria-hidden>
              <path d="M0 60 L60 40 L120 70 L200 30" stroke="#fff" strokeWidth="6" fill="none" />
              <path d="M40 0 L70 96 M150 0 L130 96" stroke="#fff" strokeWidth="4" />
              <circle cx="100" cy="46" r="9" fill="#1a5fdb" />
              <circle cx="100" cy="46" r="18" fill="#1a5fdb" opacity=".2" />
            </svg>
          </div>
          {["Your Business", "Competitor A", "Competitor B"].map((n, i) => (
            <div key={n} className="rounded-xl p-2.5" style={{ background: i === 0 ? "#e6eeff" : "#f6f8fc", border: i === 0 ? "1px solid #1a5fdb" : "1px solid transparent" }}>
              <div className="text-[11px] font-extrabold" style={{ color: i === 0 ? "#1449b0" : "#313a48" }}>
                {n}
              </div>
              <div className="text-[9px] text-[#f59e0b]">★★★★★ <span className="text-muted-2">{i === 0 ? "4.9 · Open now" : "4.1 · Closes 6pm"}</span></div>
            </div>
          ))}
        </div>
      </PhoneFrame>
      <FloatChip className="anim-floatx right-0 top-[18%]">
        <ScoreRing value={96} size={48} />
        <span className="flex flex-col">
          <span className="text-[13px] font-extrabold">Mobile score</span>
          <span className="text-[11.5px] text-muted-2">Core Web Vitals passed</span>
        </span>
      </FloatChip>
      <FloatChip className="anim-float bottom-[12%] right-[4%]" style={{ animationDelay: "-3s" }}>
        <span className="text-[26px] font-extrabold tracking-tight text-brand">1.4s</span>
        <span className="text-[12px] font-bold leading-tight">Largest
          <br />
          contentful paint
        </span>
      </FloatChip>
    </div>
  );
}

function SocialMock({ img }: { img: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div className="overflow-hidden rounded-[24px] border border-white/90 bg-white" style={{ boxShadow: "0 40px 80px rgba(30,64,175,.25)" }}>
        <div className="flex items-center gap-3 p-3.5">
          <span className="rounded-full p-[2px]" style={{ background: "linear-gradient(45deg,#f59e0b,#ec4899,#8b5cf6)" }}>
            <Image src="/images/avatar-3.jpg" alt="" width={34} height={34} className="h-[34px] w-[34px] rounded-full border-2 border-white object-cover" />
          </span>
          <span className="flex flex-col">
            <span className="text-[12.5px] font-extrabold">@yourbrand</span>
            <span className="text-[10px] text-muted-2">Sponsored</span>
          </span>
        </div>
        <Image src={img} alt="" width={400} height={300} className="aspect-[4/3] w-full object-cover" />
        <div className="flex items-center gap-4 p-3.5">
          <Heart size={20} className="text-[#ec4899]" fill="#ec4899" aria-hidden />
          <MessageCircle size={20} aria-hidden />
          <Send size={20} aria-hidden />
          <span className="ml-auto rounded-full bg-brand px-3 py-1 text-[10.5px] font-bold text-white">Shop now</span>
        </div>
        <div className="px-3.5 pb-4 text-[12px]">
          <b data-count="2418">2,418</b> <b>likes</b> · <span className="text-muted">New drop is live — link in bio ✨ #glowup #skincare</span>
        </div>
      </div>
      <FloatChip className="anim-float -left-6 top-[18%]">
        <span className="grid h-9 w-9 place-items-center rounded-full text-white" style={{ background: "linear-gradient(135deg,#ec4899,#8b5cf6)" }}>
          <Heart size={16} fill="currentColor" aria-hidden />
        </span>
        <span className="flex flex-col">
          <span className="text-[13px] font-extrabold">+318 followers</span>
          <span className="text-[11px] text-muted-2">this week</span>
        </span>
      </FloatChip>
      <FloatChip className="anim-floatx -right-4 bottom-[22%]">
        <TrendingUp size={18} className="text-success" aria-hidden />
        <span className="text-[13px] font-extrabold">3× engagement</span>
      </FloatChip>
    </div>
  );
}

function AdsMock() {
  const bars = [40, 55, 68, 84, 100];
  const shades = ["#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c"];
  return (
    <div className="rounded-[20px] border border-white/90 bg-white p-5" style={{ boxShadow: "0 40px 80px rgba(30,64,175,.25)" }}>
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-extrabold">Campaign performance</span>
        <span className="rounded-full bg-[#fff7ed] px-2.5 py-1 text-[10px] font-bold text-[#c2410c]">Search · Active</span>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2" data-stagger>
        {[
          ["Clicks", "12.4k"],
          ["CTR", "6.8%"],
          ["Conv.", "842"],
          ["ROAS", "4.2×"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-xl bg-[#f8fafc] p-2.5">
            <span className="text-[10px] font-semibold text-muted-2">{l}</span>
            <div className="text-[16px] font-extrabold">{v}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex h-[150px] items-end gap-3">
        {bars.map((h, i) => (
          <span key={i} className="anim-bar flex-1 rounded-t-[10px] rounded-b" style={{ height: `${h}%`, background: shades[i], animationDelay: `${-i * 0.5}s` }} />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] font-semibold text-muted-2">
        {["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5"].map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-dashed border-[#fdba74] p-3 text-[11px]">
        <span className="font-bold text-[#c2410c]">Ad · </span>
        <b className="text-brand">yourbusiness.com — Free Website Audit</b>
        <p className="m-0 mt-0.5 text-muted">Get a fast, SEO-ready website. Fixed quote in 24 hours.</p>
      </div>
    </div>
  );
}

function ContentMock() {
  return (
    <div className="rounded-[20px] border border-white/90 bg-white" style={{ boxShadow: "0 40px 80px rgba(30,64,175,.25)" }}>
      <div className="flex items-center gap-2 border-b border-[#eef2f8] px-5 py-3">
        {["B", "I", "H2", "“", "</>"].map((t) => (
          <span key={t} className="grid h-7 min-w-7 place-items-center rounded-md bg-[#f4f7ff] px-1.5 text-[11px] font-extrabold text-muted">
            {t}
          </span>
        ))}
        <span className="ml-auto rounded-full bg-[#dcfce7] px-2.5 py-1 text-[10px] font-bold text-success">Saved</span>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <span className="text-[20px] font-extrabold leading-tight tracking-tight">10 Ways a Better Website Grows Your Business</span>
        <span className="flex items-center gap-2 text-[10.5px] text-muted-2">
          <Image src="/images/avatar-2.jpg" alt="" width={20} height={20} className="h-5 w-5 rounded-full object-cover" /> WISMAD content team · 6 min read
        </span>
        <div className="flex flex-col gap-2">
          <Bar w="100%" />
          <Bar w="94%" />
          <Bar w="97%" />
          <span className="block h-2 overflow-hidden rounded-full" style={{ width: "72%" }}>
            <span className="block h-full rounded-full bg-brand/60" style={{ animation: "typing 5s steps(20) infinite" }} />
          </span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2.5">
          <div className="flex items-center gap-3 rounded-xl bg-[#f4f7ff] p-3">
            <ScoreRing value={94} size={42} />
            <span className="text-[11px] font-bold leading-tight">SEO score
              <br />
              <span className="font-semibold text-muted-2">Excellent</span>
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-[#f4f7ff] p-3">
            <ScoreRing value={88} color="#8b5cf6" size={42} />
            <span className="text-[11px] font-bold leading-tight">Readability
              <br />
              <span className="font-semibold text-muted-2">Easy</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function GraphicMock() {
  return (
    <div className="grid grid-cols-[1fr_110px] overflow-hidden rounded-[20px] border border-white/90 bg-[#f1f3f8]" style={{ boxShadow: "0 40px 80px rgba(30,64,175,.25)" }}>
      <div className="relative m-4 aspect-square overflow-hidden rounded-2xl bg-white">
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg,#fdf2f8,#ede9fe)" }} />
        <div className="anim-blob absolute left-[12%] top-[10%] h-[46%] w-[46%] rounded-full" style={{ background: "linear-gradient(135deg,#ec4899,#f59e0b)" }} />
        <div className="anim-floatx absolute bottom-[14%] right-[10%] h-[40%] w-[40%] rounded-[28%]" style={{ background: "linear-gradient(135deg,#1a5fdb,#8b5cf6)" }} />
        <div className="absolute bottom-[10%] left-[10%] flex flex-col">
          <span className="text-[30px] font-extrabold leading-none tracking-[-.04em] text-ink">SALE</span>
          <span className="text-[13px] font-bold text-[#be185d]">Up to 50% off</span>
        </div>
        <div className="absolute left-[12%] top-[10%] h-[46%] w-[46%] rounded-full border-2 border-dashed border-brand" />
        <span className="absolute left-[12%] top-[10%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-sm border-2 border-brand bg-white" />
      </div>
      <div className="flex flex-col gap-3 border-l border-white bg-white/70 p-3 text-[10px] font-semibold">
        <span className="font-extrabold text-ink">Layers</span>
        {["Headline", "Circle", "Shape", "Background"].map((l, i) => (
          <span key={l} className="rounded-md px-2 py-1.5" style={{ background: i === 1 ? "#e6eeff" : "transparent", color: i === 1 ? "#1449b0" : "#4b5566" }}>
            {l}
          </span>
        ))}
        <span className="mt-2 font-extrabold text-ink">Colours</span>
        <div className="grid grid-cols-3 gap-1.5">
          {["#ec4899", "#f59e0b", "#1a5fdb", "#8b5cf6", "#0b1530", "#fdf2f8"].map((c) => (
            <span key={c} className="aspect-square rounded-md border border-black/5" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoMock() {
  return (
    <div className="grid grid-cols-2 gap-3" data-stagger="120">
      <div className="glass-strong col-span-2 grid aspect-[2/1] place-items-center rounded-[24px]" style={{ background: "var(--grad-wide)" }}>
        <span className="flex items-center gap-3 text-white">
          <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden>
            <circle cx="22" cy="28" r="18" fill="#fff" opacity=".9" />
            <circle cx="34" cy="28" r="18" fill="#fff" opacity=".45" />
          </svg>
          <span className="text-[34px] font-extrabold tracking-[-.04em]">lumina</span>
        </span>
      </div>
      <div className="glass-strong grid aspect-square place-items-center rounded-[24px]">
        <svg width="84" height="84" viewBox="0 0 84 84" aria-hidden>
          <rect x="8" y="8" width="68" height="68" rx="20" fill="#0b1530" />
          <path d="M26 56 L42 24 L58 56" stroke="#38bdf8" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" className="anim-draw" style={{ ["--len" as string]: 90 }} />
        </svg>
      </div>
      <div className="glass-strong flex aspect-square flex-col justify-between rounded-[24px] p-4">
        <span className="text-[44px] font-extrabold leading-none tracking-[-.04em]">Aa</span>
        <div className="flex gap-1.5">
          {["#1a5fdb", "#8b5cf6", "#38bdf8", "#0b1530"].map((c) => (
            <span key={c} className="h-7 flex-1 rounded-lg" style={{ background: c }} />
          ))}
        </div>
        <span className="text-[11px] font-bold text-muted-2">Plus Jakarta Sans · 800</span>
      </div>
    </div>
  );
}

/** Picks the mockup for a service and layers two floating stat chips on top. */
export function ServiceVisual({ s }: { s: Service }) {
  const accent = s.gradient[1];
  const map: Record<Service["visual"], ReactNode> = {
    browser: (
      <BrowserFrame url="yourbrand.com">
        <MockSite accent={accent} img={s.image} />
      </BrowserFrame>
    ),
    shop: (
      <BrowserFrame url="yourstore.in">
        <ShopMock accent={accent} />
      </BrowserFrame>
    ),
    code: <CodeMock />,
    wordpress: <WordPressMock />,
    webapp: <DashboardMock accent={accent} title="Operations portal" />,
    dashboard: <DashboardMock accent={accent} />,
    phone: <PhonesMock />,
    hosting: <HostingMock />,
    serp: <SerpMock />,
    mobileSerp: <MobileSerpMock />,
    social: <SocialMock img={s.slug === "social-media-optimization" ? "/images/case-ecommerce.jpg" : "/images/shop-hero.jpg"} />,
    ads: <AdsMock />,
    content: <ContentMock />,
    graphic: <GraphicMock />,
    logo: <LogoMock />,
  };
  const selfDecorated = s.visual === "phone" || s.visual === "mobileSerp" || s.visual === "social";
  return (
    <div className="relative px-2 py-6 sm:px-6">
      {!selfDecorated && (
        <div
          className="absolute inset-[4%_2%_0_8%] rotate-[-4deg] rounded-[40px] opacity-80 blur-[2px]"
          style={{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]} 60%, #38bdf8)` }}
          aria-hidden
        />
      )}
      <div className="relative">{map[s.visual]}</div>
      {!selfDecorated && (
        <>
          <FloatChip className="anim-float -left-1 bottom-0 sm:-left-4">
            <span className="text-[24px] font-extrabold tracking-[-.03em]" style={{ color: accent }}>
              {s.highlights[0].v}
            </span>
            <span className="text-[12px] font-bold leading-tight text-ink-2">{s.highlights[0].l}</span>
          </FloatChip>
          <FloatChip className="anim-floatx -right-1 top-0 !py-2.5 sm:-right-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#dcfce7] text-success">
              <Check size={16} aria-hidden />
            </span>
            <span className="text-[13px] font-extrabold">
              {s.highlights[1].v} <span className="font-semibold text-muted-2">{s.highlights[1].l}</span>
            </span>
          </FloatChip>
        </>
      )}
    </div>
  );
}
