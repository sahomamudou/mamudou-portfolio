"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Send } from "lucide-react";
import { contact, profile } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error";

const topics = ["A website or web app", "Private coding classes", "A job opportunity", "Something else"];
const CLASSES_TOPIC = topics[1];

const fieldClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground placeholder:text-subtle transition-colors focus:border-accent focus:outline-none";

/** Contact form submitted to Formspree. Opening #book-class preselects the classes topic. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [topic, setTopic] = useState(topics[0]);

  useEffect(() => {
    const sync = () => {
      if (window.location.hash === "#book-class") setTopic(CLASSES_TOPIC);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setTopic(topics[0]);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">
            Name
          </label>
          <input id="name" name="name" autoComplete="name" placeholder="Your name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="topic" className="mb-2 block text-sm font-semibold">
          I&apos;m interested in
        </label>
        <div className="relative">
          <select
            id="topic"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={`${fieldClass} appearance-none pr-11`}
          >
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-subtle"
            aria-hidden="true"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={
            topic === CLASSES_TOPIC
              ? "Tell me your current level and what you'd like to learn…"
              : "Tell me a bit about it…"
          }
          required
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-primary-ink transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      <p role="status" className="min-h-6 text-center text-sm text-muted">
        {status === "success" && "Thanks! Your message was sent. I'll get back to you soon."}
        {status === "error" && (
          <>
            Something went wrong. Please email me at{" "}
            <a href={`mailto:${profile.email}`} className="text-accent underline underline-offset-4">
              {profile.email}
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
