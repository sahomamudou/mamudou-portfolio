import Image from "next/image";
import { ArrowRight, GraduationCap } from "lucide-react";
import { CodeCard, CountUp, LocalTime } from "@/components/interactive";
import { profile, stats } from "@/content/site";

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative mx-auto max-w-6xl px-4 pt-14 pb-24 sm:px-6 lg:pt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[13px] font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to freelance work &amp; new students
          </p>

          <h1 className="mt-6 text-[2.75rem] leading-[1.04] font-extrabold tracking-[-0.035em] sm:text-6xl lg:text-[4rem]">
            Full-stack developer who also{" "}
            <span className="text-gradient">teaches the craft.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 font-bold text-background transition hover:opacity-90"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#book-class"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 font-bold backdrop-blur transition hover:border-accent/50"
            >
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Book a class
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-subtle">{stat.label}</dt>
                <dd className="text-3xl font-extrabold tracking-tight">
                  {"count" in stat ? <CountUp to={stat.count} suffix={stat.suffix} /> : stat.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait card with floating code editor and live clock */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-gradient-to-b from-[#2dd4bf]/25 via-[#2dd4bf]/5 to-[#6366f1]/15">
            <div
              aria-hidden="true"
              className="absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2dd4bf]/30 blur-[90px]"
            />
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={433}
              height={577}
              preload
              sizes="(min-width: 1024px) 560px, 90vw"
              className="absolute bottom-0 left-1/2 h-[104%] w-auto max-w-none -translate-x-[42%] object-contain [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
            />
          </div>

          <div className="absolute -top-4 -right-2 flex animate-float items-center gap-2 rounded-2xl border border-border bg-surface-strong/85 px-4 py-2.5 text-sm shadow-xl backdrop-blur-md sm:-right-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="text-subtle">Lamin</span>
            <span className="font-mono font-semibold">
              <LocalTime />
            </span>
          </div>

          <CodeCard className="relative -mt-24 ml-auto w-[92%] sm:absolute sm:-bottom-10 sm:-left-12 sm:mt-0 sm:ml-0 sm:w-[340px]" />
        </div>
      </div>
    </section>
  );
}
