"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamMembers } from "@/data/about-data";
import { staggerContainer, slideUp } from "@/animations/variants";

export function TeamSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Our Team"
          subtitle="Meet the dedicated individuals behind Arogya India who work tirelessly to make healthcare accessible to all."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={slideUp}
              className="group text-center"
            >
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-primary-100 transition-transform group-hover:scale-105">
                <User className="h-12 w-12 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary-600">
                {member.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
