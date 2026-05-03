import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CampaignSchema } from "@/components/seo/campaign-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { CampaignDetailSection } from "@/components/sections/campaigns/campaign-detail-section";
import { campaigns, getCampaignBySlug } from "@/data/campaigns-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) return {};

  return {
    ...generatePageMetadata({
      title: campaign.seoTitle,
      description: campaign.seoDescription,
      path: `/campaigns/${campaign.slug}`,
    }),
    keywords: campaign.keywords,
  };
}

export default async function CampaignPage({ params }: PageProps) {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) notFound();

  const breadcrumbs = [
    { name: "Campaigns", url: "/campaigns" },
    { name: campaign.shortTitle, url: `/campaigns/${campaign.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <CampaignSchema campaign={campaign} />
      <PageHero
        title={campaign.shortTitle}
        subtitle={campaign.tagline}
        breadcrumbs={breadcrumbs}
      />
      <CampaignDetailSection campaign={campaign} />
    </>
  );
}
