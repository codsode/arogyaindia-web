"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CampaignCard } from "@/components/sections/campaigns/campaign-card";
import { campaigns } from "@/data/campaigns-data";
import { staggerContainer, slideUp } from "@/animations/variants";

export function CampaignsPreviewSection() {
  const featured = [
    campaigns.find(
      (c) => c.category === "Health Awareness" && c.status === "active"
    ),
    campaigns.find(
      (c) => c.category === "Rare Disease Aid" && c.status === "active"
    ),
    campaigns.find(
      (c) => c.category === "Child Health" && c.status === "active"
    ),
  ].filter(Boolean);

  return (
    <section className="bg-surface-muted py-20">
      <Container>
        <SectionHeading
          title="Our Campaigns"
          subtitle="Support our active campaigns making a difference in communities across India."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {featured.map((campaign) => (
            <motion.div key={campaign!.id} variants={slideUp}>
              <CampaignCard campaign={campaign!} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button href="/campaigns" variant="outline" size="lg">
            View All Campaigns
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
