import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { CampaignsListSection } from "@/components/sections/campaigns/campaigns-list-section";

export const metadata: Metadata = generatePageMetadata({
  title: "Campaigns",
  description:
    "Support Arogya India's active campaigns — from our first health and hygiene initiative to sanitary aid for women and girls, hygiene kit sponsorship, and general donations.",
  path: "/campaigns",
});

const breadcrumbs = [{ name: "Campaigns", url: "/campaigns" }];

export default function CampaignsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Our Campaigns"
        subtitle="Focused initiatives for health, hygiene, and dignity. Choose a campaign and support the cause that matters most to you."
        breadcrumbs={breadcrumbs}
      />
      <CampaignsListSection />
    </>
  );
}
