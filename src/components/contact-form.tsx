"use client";

import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";
import { contact, profile } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/40 transition-colors focus:border-lime focus:outline-none";

/** Contact form on the dark contact panel, submitted to Formspree. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

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
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
            Name
          </label>
          <input id="name" name="name" autoComplete="name" placeholder="Your name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
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
        <label htmlFor="topic" className="mb-2 block text-sm font-medium text-white/80">
          I&apos;m interested in
        </label>
        <div className="relative">
        <select id="topic" name="topic" className={`${fieldClass} appearance-none pr-11`} defaultValue="A website or web app">
          <option className="text-black">A website or web app</option>
          <option className="text-black">Private coding classes</option>
          <option className="text-black">A job opportunity</option>
          <option className="text-black">Something else</option>
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-white/60" aria-hidden="true" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me a bit about it…"
          required
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 font-semibold text-lime-ink transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      <p role="status" className="min-h-6 text-center text-sm text-white/80">
        {status === "success" && "Thanks! Your message was sent. I'll get back to you soon."}
        {status === "error" && (
          <>
            Something went wrong. Please email me at{" "}
            <a href={`mailto:${profile.email}`} className="text-lime underline underline-offset-4">
              {profile.email}
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
