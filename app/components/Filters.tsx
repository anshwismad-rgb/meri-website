"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { useState } from "react";
import { caseFilters, cases } from "@/lib/portfolio";
import { formatDate, type Post } from "@/lib/blog";
import CaseCard from "./CaseCard";

function Pills<T extends string>({ items, value, onChange, counts }: { items: readonly T[]; value: T; onChange: (v: T) => void; counts: Record<string, number> }) {
  return (
    <div className="glass no-scrollbar mb-10 flex max-w-full gap-1 self-center overflow-x-auto rounded-full p-1.5" role="group" aria-label="Filter">
      {items.map((f) => {
        const on = f === value;
        return (
          <button
            key={f}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(f)}
            className="relative flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-[14.5px] font-bold transition-all duration-300"
            style={{ background: on ? "var(--grad)" : "transparent", color: on ? "#fff" : "var(--ink-2)", boxShadow: on ? "0 8px 20px rgba(26,95,219,.3)" : "none" }}
          >
            {f}
            <span className="rounded-full px-1.5 text-[11.5px]" style={{ background: on ? "rgba(255,255,255,.25)" : "rgba(26,95,219,.08)" }}>
              {counts[f]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function PortfolioGrid() {
  const [f, setF] = useState<(typeof caseFilters)[number]>("All");
  const list = f === "All" ? cases : cases.filter((c) => c.filter === f);
  const counts = Object.fromEntries(caseFilters.map((x) => [x, x === "All" ? cases.length : cases.filter((c) => c.filter === x).length]));
  return (
    <div className="flex flex-col">
      <Pills items={caseFilters} value={f} onChange={setF} counts={counts} />
      <div key={f} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c, i) => (
          <div key={c.title} style={{ animation: `page-in .6s var(--ease-out) ${i * 70}ms both` }}>
            <CaseCard c={c} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function BlogGrid({ posts }: { posts: Post[] }) {
  const cats = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [f, setF] = useState("All");
  const list = f === "All" ? posts : posts.filter((p) => p.category === f);
  const counts = Object.fromEntries(cats.map((x) => [x, x === "All" ? posts.length : posts.filter((p) => p.category === x).length]));
  return (
    <div className="flex flex-col">
      <Pills items={cats} value={f} onChange={setF} counts={counts} />
      <div key={f} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <div key={p.slug} style={{ animation: `page-in .6s var(--ease-out) ${i * 70}ms both` }}>
            <PostCard p={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PostCard({ p }: { p: Post }) {
  return (
    <Link href={`/blog/${p.slug}`} data-tilt className="glass group flex h-full flex-col gap-4 rounded-[26px] p-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[18px]">
        <Image src={p.image} alt="" fill sizes="(min-width:1024px) 380px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
        <span className="glass-strong absolute left-3 top-3 rounded-full px-3 py-1 text-[12px] font-extrabold text-brand-600">{p.category}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-2.5 pb-3">
        <span className="flex items-center gap-2 text-[12.5px] font-semibold text-muted-2">
          {formatDate(p.date)} · <Clock size={13} aria-hidden /> {p.read} min read
        </span>
        <h3 className="m-0 text-[18.5px] font-extrabold leading-snug tracking-[-.015em] transition-colors group-hover:text-brand">{p.title}</h3>
        <p className="m-0 text-[14.5px] leading-normal text-muted">{p.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[14px] font-extrabold text-brand">
          Read article <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
