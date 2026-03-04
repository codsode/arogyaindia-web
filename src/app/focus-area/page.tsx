import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { FocusAreasGridSection } from "@/components/sections/focus-area/focus-areas-grid-section";
import { DonateBanner } from "@/components/sections/shared/donate-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "Impact",
  description:
    "Discover the impact of Arogya India's initiatives: rare disease patient support, women's health & menstrual awareness, community health awareness, and school hygiene education.",
  path: "/focus-area",
});

const breadcrumbs = [{ name: "Impact", url: "/focus-area" }];

export default function FocusAreaPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Our Impact"
        subtitle="Creating meaningful change through healthcare support, awareness initiatives, and community education programs."
        breadcrumbs={breadcrumbs}
      />
      <FocusAreasGridSection />
      <DonateBanner />
    </>
  );
}
