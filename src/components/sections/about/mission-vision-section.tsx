"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { Container } from "@/components/ui/container";
import { missionData } from "@/data/about-data";

export function MissionVisionSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-primary-100 bg-primary-50 p-8 sm:p-10"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              {missionData.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-secondary-100 bg-secondary-50 p-8 sm:p-10"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary-600">
              <Eye className="h-7 w-7 text-white" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              {missionData.vision}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
