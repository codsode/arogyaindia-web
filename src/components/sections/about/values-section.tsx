"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Users, Accessibility, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { values } from "@/data/about-data";
import { staggerContainer, slideUp } from "@/animations/variants";

const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart className="h-6 w-6" />,
  "shield-check": <ShieldCheck className="h-6 w-6" />,
  accessibility: <Accessibility className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  handshake: <Handshake className="h-6 w-6" />,
};

export function ValuesSection() {
  return (
    <section className="bg-surface-muted py-20">
      <Container>
        <SectionHeading
          title="Our Values"
          subtitle="The core principles that guide every action we take and every community we serve."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={slideUp}
              className="group rounded-2xl bg-surface p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                {iconMap[value.icon]}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
