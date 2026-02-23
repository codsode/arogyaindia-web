"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  BookOpen,
  HeartHandshake,
  Package,
  Ribbon,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { programs } from "@/data/programs-data";
import { staggerContainer, slideUp } from "@/animations/variants";

const iconMap: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope className="h-6 w-6" />,
  "book-open": <BookOpen className="h-6 w-6" />,
  "hand-heart": <HeartHandshake className="h-6 w-6" />,
  package: <Package className="h-6 w-6" />,
  ribbon: <Ribbon className="h-6 w-6" />,
  "graduation-cap": <GraduationCap className="h-6 w-6" />,
};

export function ProgramsSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Our Programs"
          subtitle="We run impactful programs that bring healthcare, hygiene education, and support to communities across India."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={slideUp}>
              <Card className="group h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  {iconMap[program.icon]}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  {program.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  {program.shortDescription}
                </p>
                <Link
                  href="/what-we-do"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
