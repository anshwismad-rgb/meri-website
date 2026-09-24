export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="grid h-9 w-9 place-items-center rounded-[11px] text-[18px] font-extrabold text-white"
        style={{ background: "var(--grad)", boxShadow: "0 6px 16px rgba(26,95,219,.4)" }}
        aria-hidden
      >
        W
      </span>
      <span className={`text-[19px] font-extrabold tracking-[.05em] ${light ? "text-white" : "text-ink"}`}>WISMAD</span>
    </span>
  );
}
