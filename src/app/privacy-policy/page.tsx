import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { LegalContent, type LegalSection } from "@/components/sections/legal/legal-content";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Arogya India to understand how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
});

const breadcrumbs = [{ name: "Privacy Policy", url: "/privacy-policy" }];

const sections: LegalSection[] = [
  {
    heading: "1. Information We Collect",
    paragraphs: [
      "We may collect personal information such as your name, email address, phone number, and postal address when you contact us, donate, volunteer, or subscribe to our communications.",
      "We may also collect non-personal information such as browser type, device type, and pages visited to help us improve our website and services.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    list: [
      "To respond to your inquiries and provide requested information",
      "To process donations and send acknowledgements",
      "To share updates about our programs, campaigns, and initiatives (with your consent)",
      "To improve our website, content, and outreach",
      "To comply with legal and regulatory requirements",
    ],
  },
  {
    heading: "3. Information Sharing",
    paragraphs: [
      "Arogya India does not sell, rent, or trade your personal information. We may share information only with trusted service providers who help us operate our website and programs, and only to the extent necessary.",
      "We may also disclose information when required by law or to protect the rights and safety of our organization, donors, or beneficiaries.",
    ],
  },
  {
    heading: "4. Data Security",
    paragraphs: [
      "We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "5. Cookies",
    paragraphs: [
      "Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, although this may affect certain website features.",
    ],
  },
  {
    heading: "6. Your Rights",
    paragraphs: [
      "You may request access to, correction of, or deletion of your personal information at any time. To exercise these rights, please contact us at care@arogyaindia.org.",
    ],
  },
  {
    heading: "7. Updates to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised \"Last updated\" date.",
    ],
  },
  {
    heading: "8. Contact Us",
    paragraphs: [
      "If you have any questions about this Privacy Policy or how your information is handled, please contact us at care@arogyaindia.org.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Learn how Arogya India collects, uses, and safeguards your information."
        breadcrumbs={breadcrumbs}
      />
      <LegalContent
        intro="Arogya India, a public health initiative of Arogya Development Foundation, is committed to protecting the privacy of our supporters, donors, volunteers, and visitors. This Privacy Policy explains how we collect and handle personal information."
        sections={sections}
      />
    </>
  );
}
