import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const FORM_ENDPOINT = "https://formspree.io/f/xjkneerw";

const contactItems = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: FiMapPin, label: "Location", value: profile.location },
];

const inputClass =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder-subtle transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const Contact = () => {
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative isolate px-4 py-24 sm:px-6 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -z-10 h-80 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project in mind, a role to fill or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactItems.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-xl text-accent">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-subtle">{label}</span>
                    <span className="block truncate font-medium text-fg">{value}</span>
                  </span>
                </>
              );
              const cardClass =
                "flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 shadow-sm";
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} className={`${cardClass} transition hover:border-accent`}>
                      {content}
                    </a>
                  ) : (
                    <div className={cardClass}>{content}</div>
                  )}
                </li>
              );
            })}
          </motion.ul>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me a bit about your project…"
                required
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <FiSend />
            </button>

            <div aria-live="polite">
              <AnimatePresence>
                {(status === "success" || status === "error") && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`rounded-xl border p-4 text-center text-sm font-medium ${
                      status === "success"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                        : "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300"
                    }`}
                  >
                    {status === "success"
                      ? "Thanks! Your message is on its way — I'll get back to you soon."
                      : `Something went wrong. Please try again or email me at ${profile.email}.`}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
