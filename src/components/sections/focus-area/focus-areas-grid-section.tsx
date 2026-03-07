"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { focusAreas } from "@/data/focus-areas-data";
import { staggerContainer, slideUp } from "@/animations/variants";

export function FocusAreasGridSection() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-16"
        >
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.id}
              variants={slideUp}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <h3 className="mb-3 text-2xl font-bold text-text-primary sm:text-3xl">
                  {area.title}
                </h3>
                <p className="mb-6 leading-relaxed text-text-secondary">
                  {area.description}
                </p>
                <ul className="space-y-3">
                  {area.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                      <span className="text-text-secondary">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
