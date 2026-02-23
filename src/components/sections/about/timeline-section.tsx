"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { milestones } from "@/data/about-data";

export function TimelineSection() {
  return (
    <section className="bg-surface-muted py-20">
      <Container>
        <SectionHeading
          title="Our Journey"
          subtitle="Key milestones in Arogya India's mission to make healthcare a reality for all."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 md:left-1/2 md:-translate-x-px" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 flex items-start gap-6 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 top-1 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                <div className="h-3 w-3 rounded-full bg-primary-600 ring-4 ring-primary-100" />
              </div>

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}>
                <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-bold text-primary-700">
                  {milestone.year}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-text-primary">
                  {milestone.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
