import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { LegalContent, type LegalSection } from "@/components/sections/legal/legal-content";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms and Conditions",
  description:
    "Read the Terms and Conditions governing your use of the Arogya India website and our programs.",
  path: "/terms-and-conditions",
});

const breadcrumbs = [
  { name: "Terms and Conditions", url: "/terms-and-conditions" },
];

const sections: LegalSection[] = [
  {
    heading: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using the Arogya India website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use this website.",
    ],
  },
  {
    heading: "2. Use of Website",
    paragraphs: [
      "The content on this website is provided for informational purposes only and is intended to support the mission of Arogya India. You agree to use this website lawfully and in a manner that does not infringe upon the rights of others.",
    ],
  },
  {
    heading: "3. Intellectual Property",
    paragraphs: [
      "All content on this website, including text, images, logos, and graphics, is the property of Arogya Development Foundation unless otherwise stated. You may not reproduce, distribute, or modify any content without prior written permission.",
    ],
  },
  {
    heading: "4. Donations",
    paragraphs: [
      "All donations made to Arogya India are voluntary and used to support our programs and initiatives. By donating, you confirm that the funds are from a legitimate source and that you are authorized to make the donation.",
    ],
  },
  {
    heading: "5. Health Information Disclaimer",
    paragraphs: [
      "Information shared on this website is for general awareness and educational purposes only and should not be considered medical advice. Please consult a qualified healthcare professional for medical concerns.",
    ],
  },
  {
    heading: "6. Third-Party Links",
    paragraphs: [
      "Our website may include links to third-party websites for your convenience. Arogya India is not responsible for the content, privacy practices, or accuracy of information on those external sites.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    paragraphs: [
      "Arogya India and Arogya Development Foundation shall not be liable for any direct, indirect, or incidental damages arising from your use of this website or its content.",
    ],
  },
  {
    heading: "8. Changes to Terms",
    paragraphs: [
      "We reserve the right to update or modify these Terms and Conditions at any time. Continued use of the website after changes are posted constitutes your acceptance of the updated terms.",
    ],
  },
  {
    heading: "9. Governing Law",
    paragraphs: [
      "These Terms and Conditions are governed by the laws of India. Any disputes arising shall be subject to the jurisdiction of the courts of Delhi, India.",
    ],
  },
  {
    heading: "10. Contact",
    paragraphs: [
      "For any questions about these Terms and Conditions, please contact us at care@arogyaindia.org.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Terms and Conditions"
        subtitle="Please review the terms governing your use of the Arogya India website and engagement with our initiatives."
        breadcrumbs={breadcrumbs}
      />
      <LegalContent
        intro="These Terms and Conditions outline the rules and guidelines for using the Arogya India website and engaging with our programs. By accessing this website, you agree to these terms."
        sections={sections}
      />
    </>
  );
}
