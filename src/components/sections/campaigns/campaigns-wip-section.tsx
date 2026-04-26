"use client";

import { motion } from "framer-motion";
import { Wrench, Mail, Heart, Bell } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CampaignsWipSection() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 px-8 py-12 text-center sm:px-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                <Wrench className="h-8 w-8" />
              </div>
              <span className="inline-block rounded-full bg-accent-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
                Work in Progress
              </span>
              <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
                Our Campaigns Are Coming Soon
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
                We are currently setting up secure payment systems to make sure
                every contribution reaches those who need it most. Our
                campaigns for health awareness, rare disease aid, and child
                health will be live shortly.
              </p>
            </div>

            <div className="grid gap-6 p-8 sm:grid-cols-3 sm:p-10">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary">
                  Health Awareness
                </h3>
                <p className="mt-1 text-xs text-text-secondary">
                  Campaigns for community health and hygiene awareness.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-100 text-secondary-600">
                  <Bell className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary">
                  Rare Disease Aid
                </h3>
                <p className="mt-1 text-xs text-text-secondary">
                  Support for patients facing rare and serious health
                  conditions.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary">
                  Child Health
                </h3>
                <p className="mt-1 text-xs text-text-secondary">
                  Initiatives focused on nutrition, vaccination, and
                  pediatric care.
                </p>
              </div>
            </div>

            <div className="border-t border-border bg-surface-muted px-8 py-8 text-center sm:px-12">
              <p className="text-sm text-text-secondary">
                Want to support our mission in the meantime? You can contribute
                directly to our official bank account or get in touch with us.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Button href="/donate" variant="primary" size="md">
                  <Heart className="h-4 w-4" />
                  Donate Now
                </Button>
                <Button href="/contact" variant="outline" size="md">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
