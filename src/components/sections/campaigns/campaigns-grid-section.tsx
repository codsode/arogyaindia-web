"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CampaignCard } from "./campaign-card";
import { campaigns } from "@/data/campaigns-data";
import { staggerContainer, slideUp } from "@/animations/variants";
import type { CampaignCategory } from "@/types/campaign";

const categories: ("All" | CampaignCategory)[] = [
  "All",
  "Health Awareness",
  "Rare Disease Aid",
  "Child Health",
];

export function CampaignsGridSection() {
  const [activeCategory, setActiveCategory] = useState<
    "All" | CampaignCategory
  >("All");

  const filteredCampaigns =
    activeCategory === "All"
      ? campaigns
      : campaigns.filter((c) => c.category === activeCategory);

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Our Campaigns"
          subtitle="Support our ongoing and completed campaigns across health awareness, rare disease aid, and child health."
        />

        {/* Filter tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-surface-muted text-text-secondary hover:bg-primary-50 hover:text-primary-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Campaign grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredCampaigns.map((campaign) => (
              <motion.div key={campaign.id} variants={slideUp}>
                <CampaignCard campaign={campaign} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
