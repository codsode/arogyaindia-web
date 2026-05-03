"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Sparkles,
  Package,
  HandHeart,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { campaigns, getCampaignProgress } from "@/data/campaigns-data";
import { CampaignProgress } from "@/components/sections/campaigns/campaign-progress";
import { staggerContainer, slideUp } from "@/animations/variants";

const iconMap = {
  "heart-pulse": HeartPulse,
  sparkles: Sparkles,
  package: Package,
  "hand-heart": HandHeart,
};

const accentMap: Record<string, string> = {
  "heart-pulse": "from-secondary-500 to-secondary-700 text-white",
  sparkles: "from-primary-600 to-primary-800 text-white",
  package: "from-accent-500 to-accent-700 text-white",
  "hand-heart": "from-primary-700 to-primary-900 text-white",
};

export function CampaignsListSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700">
            Active Campaigns
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
            Choose a Cause to Support
          </h2>
          <p className="mt-3 text-text-secondary">
            Each campaign focuses on a specific aspect of community health.
            Pick the one that speaks to you — every contribution makes a real
            difference.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {campaigns.map((campaign) => {
            const Icon = iconMap[campaign.icon];
            const progress = getCampaignProgress(campaign);
            return (
              <motion.div key={campaign.slug} variants={slideUp}>
                <Link
                  href={`/campaigns/${campaign.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className={`bg-gradient-to-br p-8 ${accentMap[campaign.icon]}`}
                  >
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      {campaign.category}
                    </p>
                    <h3 className="mt-1 text-xl font-bold leading-snug">
                      {campaign.shortTitle}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="text-sm font-medium text-primary-700">
                      {campaign.tagline}
                    </p>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-text-secondary">
                      {campaign.emotionalDescription}
                    </p>

                    <div className="mt-5">
                      <CampaignProgress
                        percent={progress.percent}
                        raised={progress.raised}
                        goal={progress.goal}
                        donors={progress.donors}
                        variant="compact"
                      />
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {campaign.suggestedAmounts.slice(0, 4).map((amt) => (
                        <span
                          key={amt}
                          className="rounded-md bg-accent-100 px-2.5 py-1 text-xs font-medium text-text-primary"
                        >
                          ₹{amt.toLocaleString("en-IN")}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-6">
                      <span className="text-sm font-semibold text-primary-700">
                        Donate to this Campaign
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary-700 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
