import { profile, socials } from "../data/portfolio";

const Footer = () => (
  <footer className="border-t border-line px-4 py-10 sm:px-6">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
      <a href="#top" className="font-display text-lg font-bold text-fg">
        Mamudou<span className="text-accent">.</span>
      </a>

      <ul className="flex gap-3">
        {socials.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>

      <p className="text-sm text-subtle">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
