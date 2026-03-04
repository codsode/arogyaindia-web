"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { aboutIntro } from "@/data/about-data";

export function AboutIntroSection() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="space-y-4">
            {aboutIntro.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-relaxed text-text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
