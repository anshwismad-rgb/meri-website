"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { categories, services, type Category } from "@/lib/services";
import { site } from "@/lib/site";
import Icon from "./Icon";
import Logo from "./Logo";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about-us", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

const cats = Object.keys(categories) as Category[];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [mobileSvc, setMobileSvc] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes (state reset during render, per React docs).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMega(false);
    setDrawer(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(false);
        setDrawer(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
  }, [drawer]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMegaSoon = () => {
    closeTimer.current = setTimeout(() => setMega(false), 140);
  };

  const isServicePage = services.some((s) => pathname === `/${s.slug}`);
  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-bold">
        Skip to content
      </a>
      <header className="sticky top-3 z-50 mx-auto mt-3 max-w-[1260px] px-3 sm:px-6">
        <nav
          aria-label="Main"
          className="relative flex items-center gap-4 rounded-full py-2.5 pl-4 pr-2.5 transition-all duration-500"
          style={{
            background: scrolled ? "rgba(255,255,255,.82)" : "rgba(255,255,255,.62)",
            backdropFilter: "blur(20px) saturate(170%)",
            WebkitBackdropFilter: "blur(20px) saturate(170%)",
            border: "1px solid rgba(255,255,255,.9)",
            boxShadow: scrolled ? "0 12px 40px rgba(30,64,175,.16)" : "0 8px 32px rgba(30,64,175,.1)",
          }}
        >
          <Link href="/" aria-label="WISMAD home" className="shrink-0">
            <Logo />
          </Link>

          <ul className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
            <li onMouseEnter={openMega} onMouseLeave={closeMegaSoon}>
              <button
                type="button"
                aria-expanded={mega}
                aria-controls="mega-menu"
                onClick={() => setMega((v) => !v)}
                className={`flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2 text-[14px] font-semibold transition-colors ${
                  mega || isServicePage ? "bg-brand/10 text-brand" : "text-ink-2 hover:bg-brand/8 hover:text-brand"
                }`}
              >
                Services
                <ChevronDown size={15} className={`transition-transform duration-300 ${mega ? "rotate-180" : ""}`} aria-hidden />
              </button>
            </li>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active(l.href) ? "page" : undefined}
                  className={`block rounded-full px-3.5 py-2 text-[14px] font-semibold transition-colors ${
                    active(l.href) ? "bg-brand/10 text-brand" : "text-ink-2 hover:bg-brand/8 hover:text-brand"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <a href={site.phoneIN.href} className="hidden items-center gap-2 rounded-full px-3 py-2 text-[14px] font-bold text-ink xl:flex hover:text-brand">
              <Phone size={15} aria-hidden /> {site.phoneIN.display}
            </a>
            <Link href="/contact-us" data-magnetic className="btn btn-primary hidden !min-h-0 !px-5 !py-2.5 !text-[14px] sm:inline-flex">
              Get a quote <ArrowRight size={16} className="arrow" aria-hidden />
            </Link>
            <button
              type="button"
              onClick={() => setDrawer(true)}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-ink text-white lg:hidden"
              aria-label="Open menu"
              aria-expanded={drawer}
            >
              <Menu size={20} aria-hidden />
            </button>
          </div>

          {/* Mega menu */}
          <div
            id="mega-menu"
            onMouseEnter={openMega}
            onMouseLeave={closeMegaSoon}
            className={`absolute left-0 right-0 top-[calc(100%+12px)] hidden origin-top lg:block ${
              mega ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <div
              className="glass-strong grid grid-cols-[1fr_1fr_1fr_280px] gap-2 rounded-[28px] p-3 transition-all duration-300"
              style={{
                opacity: mega ? 1 : 0,
                transform: mega ? "none" : "translateY(-8px) scale(.98)",
                background: "rgba(255,255,255,.97)",
                boxShadow: "0 30px 80px rgba(30,64,175,.2)",
              }}
            >
              {cats.map((c) => (
                <div key={c} className="p-3">
                  <p className="mb-2 px-2 text-[12px] font-extrabold uppercase tracking-[.08em] text-muted-2">{categories[c].label}</p>
                  <ul className="grid gap-0.5">
                    {services
                      .filter((s) => s.category === c)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/${s.slug}`}
                            tabIndex={mega ? 0 : -1}
                            className="group flex items-center gap-3 rounded-2xl px-2 py-2 transition-colors hover:bg-brand-50"
                          >
                            <span
                              className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                              style={{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})` }}
                            >
                              <Icon name={s.icon} size={16} />
                            </span>
                            <span className="text-[14px] font-semibold text-ink-2 group-hover:text-brand">{s.title}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
              <Link
                href="/contact-us"
                tabIndex={mega ? 0 : -1}
                className="group relative flex flex-col justify-end overflow-hidden rounded-[22px] p-5 text-white"
                style={{ background: "var(--grad-wide)" }}
              >
                <span className="anim-blob absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/15" aria-hidden />
                <span className="relative text-[12px] font-extrabold uppercase tracking-[.08em] text-white/80">Free for new clients</span>
                <span className="relative mt-2 text-[22px] font-extrabold leading-tight tracking-tight">Get a free website & SEO audit</span>
                <span className="relative mt-4 inline-flex items-center gap-2 text-[14px] font-bold">
                  Book your audit <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${drawer ? "" : "pointer-events-none"}`}
        aria-hidden={!drawer}
        inert={!drawer}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300"
          style={{ opacity: drawer ? 1 : 0 }}
          onClick={() => setDrawer(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="absolute inset-y-0 right-0 flex w-full max-w-[420px] flex-col overflow-y-auto bg-bg p-5 transition-transform duration-500"
          style={{ transform: drawer ? "none" : "translateX(100%)", transitionTimingFunction: "var(--ease-out)" }}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button type="button" onClick={() => setDrawer(false)} className="grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white shadow" aria-label="Close menu">
              <X size={20} aria-hidden />
            </button>
          </div>
          <ul className="mt-8 grid gap-1">
            <li>
              <button
                type="button"
                onClick={() => setMobileSvc((v) => !v)}
                aria-expanded={mobileSvc}
                className="flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3.5 text-left text-[20px] font-extrabold"
              >
                Services <ChevronDown size={20} className={`transition-transform ${mobileSvc ? "rotate-180" : ""}`} aria-hidden />
              </button>
              <div className="acc-panel" data-open={mobileSvc}>
                <div>
                  {cats.map((c) => (
                    <div key={c} className="px-4 pb-3">
                      <p className="py-2 text-[12px] font-extrabold uppercase tracking-[.08em] text-muted-2">{categories[c].label}</p>
                      <ul className="grid gap-0.5">
                        {services
                          .filter((s) => s.category === c)
                          .map((s) => (
                            <li key={s.slug}>
                              <Link href={`/${s.slug}`} className="flex items-center gap-3 rounded-xl py-2 text-[15px] font-semibold text-ink-2">
                                <Icon name={s.icon} size={16} className="text-brand" /> {s.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            {links.map((l, i) => (
              <li
                key={l.href}
                style={{
                  transition: "opacity .5s, transform .5s var(--ease-out)",
                  transitionDelay: drawer ? `${120 + i * 50}ms` : "0ms",
                  opacity: drawer ? 1 : 0,
                  transform: drawer ? "none" : "translateX(24px)",
                }}
              >
                <Link href={l.href} className="block rounded-2xl px-4 py-3.5 text-[20px] font-extrabold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-3 pt-8">
            <a href={site.phoneIN.href} className="btn btn-glass w-full">
              <Phone size={16} aria-hidden /> {site.phoneIN.display}
            </a>
            <Link href="/contact-us" className="btn btn-primary w-full">
              Get a free quote <ArrowRight size={16} className="arrow" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
