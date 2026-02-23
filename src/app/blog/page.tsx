import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { BlogGridSection } from "@/components/sections/blog/blog-grid-section";
import { NewsletterSection } from "@/components/sections/shared/newsletter-section";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Read stories of impact, healthcare insights, and community updates from Arogya India's blog.",
  path: "/blog",
});

const breadcrumbs = [{ name: "Blog", url: "/blog" }];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Our Blog"
        subtitle="Stories of impact, healthcare insights, and updates from our work across India."
        breadcrumbs={breadcrumbs}
      />
      <BlogGridSection />
      <NewsletterSection />
    </>
  );
}
