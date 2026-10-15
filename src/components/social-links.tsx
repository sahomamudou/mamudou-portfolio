import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { socials } from "@/content/site";
import { cn } from "@/lib/utils";

const icons = { github: FaGithub, linkedin: FaLinkedin, x: FaXTwitter };

/** Social icon links. `tone="dark"` styles them for the dark panels. */
export function SocialLinks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <ul className="flex items-center gap-2" aria-label="Social media">
      {socials.map(({ label, href, icon }) => {
        const Icon = icons[icon];
        return (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${label} (opens in a new tab)`}
              title={label}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
                tone === "dark"
                  ? "border-white/15 text-white/80 hover:border-lime hover:bg-lime hover:text-lime-ink"
                  : "border-border text-muted hover:bg-foreground hover:text-background",
              )}
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
