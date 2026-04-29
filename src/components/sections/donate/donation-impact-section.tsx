"use client";

import { motion } from "framer-motion";
import {
  Package,
  Stethoscope,
  GraduationCap,
  HeartPulse,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { staggerContainer, slideUp } from "@/animations/variants";

const impacts = [
  {
    amount: "₹500",
    title: "Hygiene Kit",
    description:
      "Provides essential hygiene supplies for one family in an underserved community.",
    icon: Package,
    color: "primary",
  },
  {
    amount: "₹1,100",
    title: "Awareness Session",
    description:
      "Funds a health awareness session for a group of children or community members.",
    icon: GraduationCap,
    color: "secondary",
  },
  {
    amount: "₹2,500",
    title: "Health Screening",
    description:
      "Sponsors basic medical screening and consultation for one patient at a health camp.",
    icon: Stethoscope,
    color: "accent",
  },
  {
    amount: "₹5,000",
    title: "Diagnostic Support",
    description:
      "Helps cover diagnostic costs for a patient suffering from a rare disease.",
    icon: HeartPulse,
    color: "primary",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary-100 text-primary-700",
  secondary: "bg-secondary-100 text-secondary-700",
  accent: "bg-accent-100 text-accent-700",
};

export function DonationImpactSection() {
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
          <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700">
            Where Your Donation Goes
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
            Real Impact, Every Rupee
          </h2>
          <p className="mt-3 text-text-secondary">
            See how your contribution translates directly into healthcare
            support for individuals and communities in need.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impacts.map((impact) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={impact.amount}
                variants={slideUp}
                className="group relative overflow-hidden rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${colorMap[impact.color]}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-2xl font-bold text-primary-700">
                  {impact.amount}
                </p>
                <h3 className="mt-1 text-base font-semibold text-text-primary">
                  {impact.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {impact.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
