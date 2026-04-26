import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { DocumentsSection } from "@/components/sections/legal/documents-section";

export const metadata: Metadata = generatePageMetadata({
  title: "Documents",
  description:
    "Access official registration documents and certificates of Arogya Development Foundation, the parent organization of Arogya India.",
  path: "/documents",
});

const breadcrumbs = [{ name: "Documents", url: "/documents" }];

export default function DocumentsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Documents"
        subtitle="Transparency is at the core of our work. Official documents and certificates of Arogya Development Foundation will be available here."
        breadcrumbs={breadcrumbs}
      />
      <DocumentsSection />
    </>
  );
}
