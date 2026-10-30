import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,var(--backdrop),transparent_70%)]"
      />
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-code shadow-2xl shadow-black/30">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-xs text-white/50">terminal</span>
          </div>
          <pre className="px-5 py-5 font-mono text-[13px] leading-7 text-[#e2e8f0]">
            <span className="text-[#5eead4]">$</span> open this-page{"\n"}
            <span className="text-[#f07178]">Error 404:</span> page not found{"\n"}
            <span className="text-[#5eead4]">$</span> <span className="text-white/50">suggest --next-step</span>
            {"\n"}
            <span className="text-[#c3e88d]">→ head back home</span>
          </pre>
        </div>
        <h1 className="mt-8 text-3xl font-extrabold tracking-tight">This page doesn&apos;t exist.</h1>
        <p className="mt-2 text-muted">The link may be broken, or the page may have moved.</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-primary-ink transition hover:brightness-110"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}
