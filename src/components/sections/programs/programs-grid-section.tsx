"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  BookOpen,
  HeartHandshake,
  Package,
  Ribbon,
  GraduationCap,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { programs } from "@/data/programs-data";
import { staggerContainer, slideUp } from "@/animations/variants";

const iconMap: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope className="h-8 w-8" />,
  "book-open": <BookOpen className="h-8 w-8" />,
  "hand-heart": <HeartHandshake className="h-8 w-8" />,
  package: <Package className="h-8 w-8" />,
  ribbon: <Ribbon className="h-8 w-8" />,
  "graduation-cap": <GraduationCap className="h-8 w-8" />,
};

export function ProgramsGridSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Our Programs"
          subtitle="Explore our comprehensive programs designed to bring healthcare, education, and support to communities across India."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              variants={slideUp}
              className={`grid items-center gap-8 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8 lg:grid-cols-3 ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Icon & visual */}
              <div className="flex items-center justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  {iconMap[program.icon]}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2">
                <h3 className="mb-3 text-2xl font-bold text-text-primary">
                  {program.title}
                </h3>
                <p className="leading-relaxed text-text-secondary">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
