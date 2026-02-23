"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Container } from "@/components/ui/container";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-primary-50 py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
            Stay Updated
          </h2>
          <p className="mt-3 text-text-secondary">
            Subscribe to our newsletter and get the latest updates on our
            programs, health tips, and stories of impact.
          </p>

          {submitted ? (
            <div className="mt-6 rounded-lg bg-primary-100 p-4 text-primary-700">
              Thank you for subscribing! We&apos;ll keep you updated.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex gap-3 sm:mx-auto sm:max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-lg border border-border bg-surface px-4 py-3 text-sm placeholder:text-text-muted focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
