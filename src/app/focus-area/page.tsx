import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { FocusAreasGridSection } from "@/components/sections/focus-area/focus-areas-grid-section";
import { DonateBanner } from "@/components/sections/shared/donate-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "Focus Area",
  description:
    "Discover Arogya India's key focus areas: accessible healthcare, hygiene & sanitation awareness, rare disease advocacy, and community health & wellness.",
  path: "/focus-area",
});

const breadcrumbs = [{ name: "Focus Area", url: "/focus-area" }];

export default function FocusAreaPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Our Focus Areas"
        subtitle="The key areas where we concentrate our efforts to create the greatest impact on community health and well-being."
        breadcrumbs={breadcrumbs}
      />
      <FocusAreasGridSection />
      <DonateBanner />
    </>
  );
}
