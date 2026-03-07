"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { missionPreview } from "@/data/home-data";

const highlights = [
  "Health aid for patients facing serious health challenges",
  "Health awareness through community outreach programs",
  "Health education to empower informed decisions",
  "Rare disease support for affected families",
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={missionPreview.image}
                alt="About Arogya India"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
