"use client";

import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials-data";
import { staggerContainer, slideUp } from "@/animations/variants";

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Voices of Change"
          subtitle="Hear from the communities and individuals whose lives have been touched by Arogya India's work."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="relative rounded-2xl bg-surface-muted p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-primary-200" />
              <p className="mb-6 text-text-secondary leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
                  <User className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-muted">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
