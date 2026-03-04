import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { ProgramsGridSection } from "@/components/sections/programs/programs-grid-section";
import { ImpactSection } from "@/components/sections/programs/impact-section";
import { DonateBanner } from "@/components/sections/shared/donate-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "Programs",
  description:
    "Explore Arogya India's programs including health camps, hygiene education, patient support, hygiene kit distribution, rare disease support, and community health education.",
  path: "/what-we-do",
});

const breadcrumbs = [{ name: "Programs", url: "/what-we-do" }];

export default function WhatWeDoPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Our Programs"
        subtitle="Comprehensive programs designed to bring healthcare, education, and support to communities across India."
        breadcrumbs={breadcrumbs}
      />
      <ProgramsGridSection />
      <ImpactSection />
      <DonateBanner />
    </>
  );
}
