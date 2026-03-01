import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { CampaignsGridSection } from "@/components/sections/campaigns/campaigns-grid-section";
import { DonateBanner } from "@/components/sections/shared/donate-banner";

export const metadata: Metadata = generatePageMetadata({
  title: "Campaigns",
  description:
    "Explore Arogya India's active and completed campaigns across health awareness, rare disease aid, and child health. Support our mission to bring healthcare to every community.",
  path: "/campaigns",
});

const breadcrumbs = [{ name: "Campaigns", url: "/campaigns" }];

export default function CampaignsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Our Campaigns"
        subtitle="Driving meaningful change through focused campaigns for health awareness, rare disease support, and child health across India."
        breadcrumbs={breadcrumbs}
      />
      <CampaignsGridSection />
      <DonateBanner />
    </>
  );
}
