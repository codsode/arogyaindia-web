"use client";

import { motion } from "framer-motion";
import { ClipboardList, Smartphone, Receipt, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

const steps = [
  {
    icon: ClipboardList,
    title: "Fill Your Details",
    description:
      "Enter your name, contact, and the amount you'd like to donate. All fields are required for receipt issuance.",
  },
  {
    icon: Smartphone,
    title: "Pay via UPI",
    description:
      "Securely complete the payment using any UPI app — Google Pay, PhonePe, Paytm, BHIM, and more.",
  },
  {
    icon: Receipt,
    title: "Get 80G Receipt",
    description:
      "Receive your tax-deductible donation receipt by email. Use it to claim deduction under Section 80G.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-secondary-100 px-4 py-1 text-sm font-semibold text-secondary-700">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
            Donating Takes Less Than a Minute
          </h2>
          <p className="mt-3 text-text-secondary">
            Three simple steps from intent to impact — all secured by Razorpay.
          </p>
        </motion.div>

        <div className="relative grid gap-6 lg:grid-cols-3 lg:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative"
              >
                <div className="h-full rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border sm:p-8">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-5xl font-bold text-primary-100">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface shadow-sm ring-1 ring-border">
                      <ArrowRight className="h-4 w-4 text-primary-600" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
