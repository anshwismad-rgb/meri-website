import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Container } from "./components/UI";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="grad-text text-[clamp(96px,18vw,200px)] font-extrabold leading-none tracking-[-.06em]">404</span>
      <h1 className="m-0 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-.03em]">This page took a wrong turn.</h1>
      <p className="lead m-0 max-w-[44ch]">The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          <Home size={17} aria-hidden /> Back to home
        </Link>
        <Link href="/contact-us" className="btn btn-glass">
          Contact us <ArrowRight size={16} className="arrow" aria-hidden />
        </Link>
      </div>
    </Container>
  );
}
