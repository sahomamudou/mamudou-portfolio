import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { SiReact, SiStrapi } from "react-icons/si";
import { profile } from "../data/portfolio";

const badges = [
  {
    label: "React & Next.js",
    icon: SiReact,
    iconClass: "text-sky-500",
    position: "top-[8%] -left-4 sm:-left-10",
    delay: 0,
  },
  {
    label: "Strapi · SQL",
    icon: SiStrapi,
    iconClass: "text-violet-500",
    position: "top-[46%] -right-4 sm:-right-12",
    delay: 1.5,
  },
  {
    label: "Instructor at JCC",
    icon: FiAward,
    iconClass: "text-amber-500",
    position: "bottom-[6%] -left-2 sm:-left-8",
    delay: 3,
  },
];

// The photo is a transparent cut-out, rendered twice: once clipped to the
// circle, once clipped to the area above the circle's centre so the head
// "pops out" of the top edge.
const Portrait = ({ className, ...props }) => (
  <img
    src={profile.photo}
    alt=""
    width="433"
    height="577"
    className={`absolute bottom-0 left-[-24%] w-[115%] max-w-none select-none ${className ?? ""}`}
    draggable="false"
    {...props}
  />
);

const HeroPortrait = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="relative mx-auto mt-10 aspect-square w-64 sm:w-80 md:mt-0 lg:w-[25rem]"
    role="img"
    aria-label={`Portrait of ${profile.name}`}
  >
    {/* Rotating dashed ring */}
    <div
      aria-hidden="true"
      className="absolute -inset-5 animate-spin-slow rounded-full border-2 border-dashed border-accent/50 motion-reduce:animate-none"
    />
    {/* Glow */}
    <div
      aria-hidden="true"
      className="absolute inset-2 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 opacity-60 blur-3xl"
    />
    {/* Colored disc */}
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400"
    >
      <div className="absolute -top-1/4 -left-1/4 h-3/4 w-3/4 rounded-full bg-white/25 blur-2xl" />
      <Portrait className="drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]" />
    </div>
    {/* Head popping out above the disc */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 [clip-path:inset(-60%_22%_62%_22%)]"
    >
      <Portrait />
    </div>

    {badges.map(({ label, icon: Icon, iconClass, position, delay }) => (
      <div
        key={label}
        aria-hidden="true"
        style={{ animationDelay: `${delay}s` }}
        className={`absolute ${position} z-10 flex animate-float items-center gap-2 rounded-2xl border border-line bg-surface/90 px-3 py-2 text-xs font-semibold whitespace-nowrap text-fg shadow-xl shadow-black/10 backdrop-blur motion-reduce:animate-none sm:px-4 sm:py-2.5 sm:text-sm`}
      >
        <Icon className={`text-base sm:text-lg ${iconClass}`} />
        {label}
      </div>
    ))}
  </motion.div>
);

export default HeroPortrait;
