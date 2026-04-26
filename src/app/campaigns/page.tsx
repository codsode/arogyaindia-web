import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { CampaignsWipSection } from "@/components/sections/campaigns/campaigns-wip-section";

export const metadata: Metadata = generatePageMetadata({
  title: "Campaigns",
  description:
    "Arogya India's campaigns page is currently being prepared. Our health awareness, rare disease aid, and child health campaigns will be launched soon.",
  path: "/campaigns",
});

const breadcrumbs = [{ name: "Campaigns", url: "/campaigns" }];

export default function CampaignsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Our Campaigns"
        subtitle="Focused initiatives for health awareness, rare disease support, and child health across India."
        breadcrumbs={breadcrumbs}
      />
      <CampaignsWipSection />
    </>
  );
}
