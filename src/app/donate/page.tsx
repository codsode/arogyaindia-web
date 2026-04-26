import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { BankDetailsSection } from "@/components/sections/donate/bank-details-section";

export const metadata: Metadata = generatePageMetadata({
  title: "Donate",
  description:
    "Support Arogya India's mission by donating directly to our official bank account. Your contribution helps us provide healthcare support, awareness, and education to those in need.",
  path: "/donate",
});

const breadcrumbs = [{ name: "Donate", url: "/donate" }];

export default function DonatePage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Support Our Mission"
        subtitle="Your contribution helps Arogya India provide healthcare support, spread awareness, and empower communities with essential health education."
        breadcrumbs={breadcrumbs}
      />
      <BankDetailsSection />
    </>
  );
}
