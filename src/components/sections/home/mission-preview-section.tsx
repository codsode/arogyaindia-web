"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { missionPreview } from "@/data/home-data";

const highlights = [
  "Serving 100+ communities across India",
  "Free health camps and medical consultations",
  "Hygiene education and kit distribution",
  "Rare disease patient support network",
];

export function MissionPreviewSection() {
  return (
    <section className="bg-surface-muted py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-200 to-primary-300">
              <div className="flex h-full items-center justify-center text-primary-600">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
                    <svg className="h-10 w-10 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Healthcare for All</p>
                </div>
              </div>
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-surface p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary-600">50,000+</div>
              <div className="text-xs text-text-secondary">Lives Impacted</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3 inline-block rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700">
              About Us
            </div>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              {missionPreview.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              {missionPreview.description}
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary-600" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/about" variant="primary" size="lg">
                Learn About Us
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
