import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { DonationFormSection } from "@/components/sections/donate/donation-form-section";
import { DonationImpactSection } from "@/components/sections/donate/donation-impact-section";
import { HowItWorksSection } from "@/components/sections/donate/how-it-works-section";
import { DonateFaqSection } from "@/components/sections/donate/donate-faq-section";

export const metadata: Metadata = generatePageMetadata({
  title: "Donate",
  description:
    "Donate to Arogya India securely via UPI or directly to our official bank account. Your contribution supports healthcare aid, awareness, and education and is eligible for 80G tax deduction.",
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
      <DonationFormSection />
      <DonationImpactSection />
      <HowItWorksSection />
      <DonateFaqSection />
    </>
  );
}
