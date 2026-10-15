import Image from "next/image";
import { SiNextdotjs, SiReact, SiStrapi, SiTailwindcss, SiTypescript } from "react-icons/si";
import { profile, stats } from "@/content/site";

const expTools = [
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Strapi", icon: SiStrapi },
];

export function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-[2rem] bg-ink text-white lg:min-h-[680px]">
        {/* Soft lime glow behind the portrait */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 right-[12%] -z-10 h-[420px] w-[420px] rounded-full bg-lime/15 blur-[110px]"
        />

        {/* Portrait: a transparent cut-out, faded into the panel at the edges */}
        <Image
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={433}
          height={577}
          preload
          sizes="(min-width: 1024px) 480px, 80vw"
          className="pointer-events-none order-2 mx-auto mt-6 h-[340px] w-auto max-w-none object-contain [mask-image:linear-gradient(to_bottom,black_60%,transparent_98%)] sm:h-[420px] lg:absolute lg:right-[10%] lg:bottom-0 lg:mt-0 lg:h-[94%] lg:[mask-image:linear-gradient(to_bottom,black_55%,transparent_96%),linear-gradient(to_right,transparent_0%,black_22%)] lg:[mask-composite:intersect]"
        />

        {/* Tools card, top right */}
        <div className="absolute top-8 right-8 hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md lg:block">
          <p className="mb-3 text-center text-sm text-white/70">EXP in:</p>
          <ul className="grid grid-cols-3 gap-2">
            {expTools.map(({ label, icon: Icon }, i) => (
              <li
                key={label}
                title={label}
                className={
                  i === 0
                    ? "flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink"
                    : "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80"
                }
              >
                <Icon className="h-[18px] w-[18px]" aria-label={label} />
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 order-1 px-6 pt-12 sm:px-10 lg:max-w-xl lg:px-12 lg:pt-36">
          <p className="text-lg font-medium text-lime">
            Hey <span aria-hidden="true">👋</span> I&apos;m {profile.firstName}
          </p>
          <h1 className="mt-4 text-5xl leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Developer &amp;
            <br />
            Instructor
          </h1>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-lime px-7 py-3.5 font-semibold text-lime-ink transition-transform hover:scale-105 motion-reduce:transition-none"
          >
            Hire Me
          </a>
        </div>

        {/* Bottom row: short bio + stats */}
        <div className="relative z-10 order-3 mt-auto grid gap-8 px-6 pt-8 pb-10 sm:px-10 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:px-12 lg:pb-12">
          <p className="max-w-xs text-white/70">{profile.shortBio}</p>
          <dl className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col-reverse border-b border-white/25 pb-3">
                <dt className="mt-1 text-sm text-white/70">{label}</dt>
                <dd className="text-3xl font-semibold sm:text-4xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
