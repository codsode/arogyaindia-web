"use client";

import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { founderMessage } from "@/data/about-data";

export function FounderMessageSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Founder's Message"
          subtitle=""
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative rounded-2xl border border-primary-100 bg-primary-50/50 p-8 sm:p-12">
            <Quote className="absolute right-8 top-8 h-12 w-12 text-primary-200" />

            <div className="space-y-4">
              {founderMessage.message.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-relaxed text-text-secondary"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <User className="h-8 w-8 text-primary-400" />
              </div>
              <div>
                <p className="text-sm italic text-text-secondary">
                  {founderMessage.closing}
                </p>
                <p className="text-lg font-bold text-text-primary">
                  {founderMessage.name}
                </p>
                <p className="text-sm text-primary-600">
                  {founderMessage.role}
                </p>
                <p className="text-sm text-text-secondary">
                  {founderMessage.organization}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
