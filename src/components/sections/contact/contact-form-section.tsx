"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  HeartHandshake,
  Users,
  Newspaper,
  HelpCircle,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

const inquiryTypes = [
  { label: "General Inquiry", subject: "General Inquiry", icon: HelpCircle },
  { label: "Volunteering", subject: "Volunteering Inquiry", icon: Users },
  {
    label: "Partnership",
    subject: "Partnership Opportunity",
    icon: HeartHandshake,
  },
  { label: "Donation", subject: "Donation Inquiry", icon: Sparkles },
  { label: "Media / Press", subject: "Media & Press", icon: Newspaper },
];

const expectations = [
  {
    title: "We read every message",
    description:
      "Your message lands directly in our team's inbox — no bots, no auto-replies.",
  },
  {
    title: "Reply within 24–48 hours",
    description:
      "We aim to respond to every inquiry within two working days, often sooner.",
  },
  {
    title: "Personal, transparent response",
    description:
      "Whether it's a question, idea, or offer to help, we get back to you with clarity.",
  },
];

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          _subject: `Arogya India contact: ${data.subject}`,
          _replyto: data.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setActiveType(null);
      } else {
        const result = await response.json().catch(() => null);
        const message =
          result?.errors?.[0]?.message ||
          "Something went wrong. Please try again or email us directly.";
        setSubmitError(message);
      }
    } catch {
      setSubmitError(
        "Unable to send your message right now. Please check your connection or email us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="bg-surface-muted py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-primary-50 to-secondary-50 p-12 text-center shadow-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100"
            >
              <CheckCircle className="h-12 w-12 text-primary-600" />
            </motion.div>
            <h2 className="text-3xl font-bold text-text-primary">
              Message Sent!
            </h2>
            <p className="mx-auto mt-3 max-w-md text-text-secondary">
              Thank you for reaching out. We&apos;ll review your message and get
              back to you within 24–48 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="primary"
              className="mt-8"
            >
              Send Another Message
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-surface-muted py-20">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700">
            <Mail className="h-4 w-4" />
            Get in Touch
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
            Send Us a Message
          </h2>
          <p className="mt-3 text-text-secondary">
            Have a question, want to volunteer, or interested in partnering with
            us? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 rounded-2xl bg-surface p-6 shadow-md ring-1 ring-border sm:p-8"
            >
              {/* Inquiry type chips */}
              <div>
                <label className="mb-3 block text-sm font-medium text-text-primary">
                  What can we help you with?
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map(({ label, subject, icon: Icon }) => {
                    const active = activeType === label;
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => {
                          setActiveType(label);
                          setValue("subject", subject, {
                            shouldValidate: true,
                          });
                        }}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all",
                          active
                            ? "border-primary-600 bg-primary-600 text-white shadow-sm"
                            : "border-border bg-surface text-text-secondary hover:border-primary-300 hover:text-primary-700",
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  error={errors.name?.message}
                  {...register("name")}
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email address"
                  error={errors.email?.message}
                  {...register("email")}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number"
                  error={errors.phone?.message}
                  {...register("phone")}
                />
                <Input
                  label="Subject"
                  placeholder="How can we help?"
                  error={errors.subject?.message}
                  {...register("subject")}
                />
              </div>

              <Textarea
                label="Your Message"
                placeholder="Tell us more about your inquiry..."
                error={errors.message?.message}
                {...register("message")}
              />

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{submitError}</span>
                </motion.div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                <Send className="h-5 w-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-center text-xs text-text-muted">
                By sending, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </motion.div>

          {/* Side info panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* What to expect card */}
            <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 p-6 text-white shadow-md sm:p-8">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">What to expect</h3>
              <p className="mt-1 text-sm text-white/80">
                Here&apos;s how we handle every message that reaches us.
              </p>

              <ul className="mt-6 space-y-5">
                {expectations.map((item, idx) => (
                  <li key={item.title} className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick info card */}
            <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    Office Hours
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Direct email card */}
            <a
              href="mailto:care@arogyaindia.org"
              className="group block rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-text-primary">
                    Prefer email?
                  </p>
                  <p className="mt-1 truncate text-sm text-text-secondary">
                    care@arogyaindia.org
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-primary-600" />
              </div>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
