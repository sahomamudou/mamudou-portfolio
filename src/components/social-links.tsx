import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { socials } from "@/content/site";

const icons = { github: FaGithub, linkedin: FaLinkedin, x: FaXTwitter };

export function SocialLinks() {
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
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
