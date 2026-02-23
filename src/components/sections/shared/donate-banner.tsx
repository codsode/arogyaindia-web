"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function DonateBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-accent-500 to-accent-600 py-16">
      <div className="absolute inset-0">
        <div className="absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Heart className="mx-auto mb-4 h-10 w-10 text-white" />
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Make a Difference Today
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-white/90">
            Your donation helps us provide hygiene kits, health education, and
            medical support to underserved communities across India.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" className="bg-white text-accent-600 hover:bg-white/90">
              Donate Now
            </Button>
            <Button href="/what-we-do" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              See Our Impact
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
