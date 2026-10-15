import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { socials } from "@/content/site";

const icons = { github: FaGithub, linkedin: FaLinkedin, x: FaXTwitter };

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-1" aria-label="Social media">
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
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-card hover:text-foreground"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
