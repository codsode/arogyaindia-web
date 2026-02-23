import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { MissionVisionSection } from "@/components/sections/about/mission-vision-section";
import { ValuesSection } from "@/components/sections/about/values-section";
import { TeamSection } from "@/components/sections/about/team-section";
import { TimelineSection } from "@/components/sections/about/timeline-section";
import { DonateBanner } from "@/components/sections/shared/donate-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about Arogya India's mission, vision, values, and the dedicated team working to make healthcare accessible to all across India.",
  path: "/about",
});

const breadcrumbs = [{ name: "About", url: "/about" }];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="About Arogya India"
        subtitle="A grassroots health-focused NGO dedicated to bringing dignity, care, and awareness to underserved communities across India."
        breadcrumbs={breadcrumbs}
      />
      <MissionVisionSection />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
      <DonateBanner />
    </>
  );
}
