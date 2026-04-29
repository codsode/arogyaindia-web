"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Is my donation eligible for tax deduction under 80G?",
    a: "Yes. Arogya Development Foundation has provisional approval under Section 80G of the Income Tax Act, 1961. Your donation receipt can be used to claim a tax deduction as per applicable rules.",
  },
  {
    q: "Will I receive a receipt for my donation?",
    a: "Absolutely. You'll receive an 80G-eligible donation receipt by email after your payment is verified. The receipt will include the donation amount, date, and our registration details.",
  },
  {
    q: "What payment methods are supported?",
    a: "Our online donation flow currently supports UPI payments via Razorpay (Google Pay, PhonePe, Paytm, BHIM, and other UPI apps). For larger contributions, you can use direct bank transfer (NEFT/RTGS/IMPS).",
  },
  {
    q: "How will my donation be used?",
    a: "Donations directly support our health aid, awareness, and education initiatives — including patient support, hygiene kit distribution, awareness sessions, and rare disease assistance. We are committed to transparency and accountability.",
  },
  {
    q: "Is the payment secure?",
    a: "Yes. All payments are processed by Razorpay, a PCI-DSS compliant payment gateway. Arogya India does not store your card or UPI details on our servers.",
  },
  {
    q: "Can I make a recurring donation?",
    a: "Recurring donations are not yet available on our website. We are working on this feature. In the meantime, you can donate manually each month or set up a standing instruction with your bank.",
  },
];

export function DonateFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface-muted py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-100 px-4 py-1 text-sm font-semibold text-accent-700">
            <MessageCircleQuestion className="h-3.5 w-3.5" />
            FAQs
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-text-secondary">
            Everything you need to know before making a donation.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl bg-surface shadow-sm ring-1 ring-border"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-primary-50/40"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-text-primary">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-primary-600 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-text-secondary">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-surface p-6 text-center shadow-sm ring-1 ring-border sm:p-8">
          <p className="text-sm text-text-secondary">
            Still have questions?{" "}
            <a
              href="/contact"
              className="font-semibold text-primary-700 hover:underline"
            >
              Get in touch with us
            </a>{" "}
            and we&apos;ll be happy to help.
          </p>
        </div>
      </Container>
    </section>
  );
}
