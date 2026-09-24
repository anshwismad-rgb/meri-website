import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Case } from "@/lib/portfolio";

export default function CaseCard({ c }: { c: Case }) {
  return (
    <Link href={`/${c.service}`} data-tilt className="glass group flex flex-col gap-4 rounded-[28px] p-3 will-change-transform">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
        <Image src={c.img} alt={c.title} fill sizes="(min-width:768px) 380px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
        <div className="glass-strong absolute bottom-3 left-3 flex items-baseline gap-2 rounded-[14px] px-3.5 py-2.5">
          <span className="text-[24px] font-extrabold tracking-[-.03em] text-brand">{c.metric}</span>
          <span className="text-[12px] font-bold text-ink-2">{c.metricLabel}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2.5 pb-3">
        <span className="self-start rounded-full px-2.5 py-1 text-[12px] font-extrabold" style={{ background: c.tag[1], color: c.tag[2] }}>
          {c.tag[0]}
        </span>
        <h3 className="m-0 text-[19px] font-extrabold leading-snug tracking-[-.015em]">{c.title}</h3>
        <p className="m-0 text-[14.5px] leading-normal text-muted">{c.body}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-[14px] font-extrabold text-brand">
          See how we did it <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
