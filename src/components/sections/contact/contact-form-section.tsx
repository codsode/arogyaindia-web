"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/your-form-id";

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
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
      } else {
        const result = await response.json().catch(() => null);
        const message =
          result?.errors?.[0]?.message ||
          "Something went wrong. Please try again or email us directly.";
        setSubmitError(message);
      }
    } catch {
      setSubmitError(
        "Unable to send your message right now. Please check your connection or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl bg-primary-50 p-12 text-center">
            <CheckCircle className="mx-auto mb-4 h-16 w-16 text-primary-600" />
            <h2 className="text-2xl font-bold text-text-primary">
              Thank You!
            </h2>
            <p className="mt-3 text-text-secondary">
              Your message has been sent successfully. We&apos;ll get back to you
              within 24-48 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="primary"
              className="mt-6"
            >
              Send Another Message
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 bg-surface-muted">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-text-primary">
              Send Us a Message
            </h2>
            <p className="mt-3 text-text-secondary">
              Have a question, want to volunteer, or interested in partnering
              with us? We&apos;d love to hear from you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 rounded-2xl bg-surface p-8 shadow-sm"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Full Name"
                placeholder="John Doe"
                error={errors.name?.message}
                {...register("name")}
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
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
              <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{submitError}</span>
              </div>
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
          </form>
        </div>
      </Container>
    </section>
  );
}
