import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { AboutIntroSection } from "@/components/sections/about/about-intro-section";
import { MissionVisionSection } from "@/components/sections/about/mission-vision-section";
import { ValuesSection } from "@/components/sections/about/values-section";
import { FounderMessageSection } from "@/components/sections/about/founder-message-section";
import { TeamSection } from "@/components/sections/about/team-section";
import { DonateBanner } from "@/components/sections/shared/donate-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about Arogya India, a public health initiative of Arogya Development Foundation committed to improving access to healthcare support, spreading health awareness, and promoting health education.",
  path: "/about",
});

const breadcrumbs = [{ name: "About", url: "/about" }];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="About Arogya India"
        subtitle="A public health initiative of Arogya Development Foundation, committed to improving access to healthcare support, spreading health awareness, and promoting health education across communities."
        breadcrumbs={breadcrumbs}
      />
      <AboutIntroSection />
      <MissionVisionSection />
      <ValuesSection />
      <FounderMessageSection />
      <TeamSection />
      <DonateBanner />
    </>
  );
}
