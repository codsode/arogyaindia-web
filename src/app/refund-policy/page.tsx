import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { LegalContent, type LegalSection } from "@/components/sections/legal/legal-content";

export const metadata: Metadata = generatePageMetadata({
  title: "Refund Policy",
  description:
    "Read the Refund Policy of Arogya India regarding donations and contributions to our programs.",
  path: "/refund-policy",
});

const breadcrumbs = [{ name: "Refund Policy", url: "/refund-policy" }];

const sections: LegalSection[] = [
  {
    heading: "1. General Policy",
    paragraphs: [
      "Donations made to Arogya India are voluntary contributions used to support our health initiatives, including health aid, awareness, and education programs. As a nonprofit organization, donations are generally non-refundable once received and allocated.",
    ],
  },
  {
    heading: "2. Refund Eligibility",
    paragraphs: [
      "Refund requests will be considered only in the following situations:",
    ],
    list: [
      "An accidental or duplicate transaction made in error",
      "An incorrect amount processed due to a technical issue",
      "Unauthorized use of a donor's payment method",
    ],
  },
  {
    heading: "3. Refund Request Process",
    paragraphs: [
      "To request a refund, please contact us at care@arogyaindia.org within 7 days of the transaction. Your request must include the following details:",
    ],
    list: [
      "Full name of the donor",
      "Date and amount of the donation",
      "Transaction reference or receipt number",
      "Reason for the refund request",
    ],
  },
  {
    heading: "4. Processing Time",
    paragraphs: [
      "Approved refunds will be processed within 7 to 14 working days from the date of approval. The refund will be credited back to the original payment method used for the donation.",
    ],
  },
  {
    heading: "5. Tax Receipts",
    paragraphs: [
      "If a tax receipt has already been issued for the donation, the donor must return or invalidate the receipt before a refund can be processed.",
    ],
  },
  {
    heading: "6. Contact Us",
    paragraphs: [
      "For any questions or concerns regarding our Refund Policy, please contact us at care@arogyaindia.org.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Refund Policy"
        subtitle="Understand our policy regarding refunds for donations made to Arogya India."
        breadcrumbs={breadcrumbs}
      />
      <LegalContent
        intro="Arogya India values every contribution made to support our cause. This Refund Policy outlines the conditions under which a refund may be requested and processed."
        sections={sections}
      />
    </>
  );
}
