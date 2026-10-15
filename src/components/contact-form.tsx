"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { contact, profile } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-md border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-subtle transition-colors focus:border-accent focus:outline-none";

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
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Name
          </label>
          <input id="name" name="name" autoComplete="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={`${fieldClass} resize-y`} />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
        <p role="status" className="text-sm">
          {status === "success" && (
            <span className="text-foreground">Thanks, your message was sent. I&apos;ll reply soon.</span>
          )}
          {status === "error" && (
            <span className="text-foreground">
              Something went wrong. Please email me at{" "}
              <a href={`mailto:${profile.email}`} className="text-accent underline underline-offset-4">
                {profile.email}
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
