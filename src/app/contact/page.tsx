import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PageHero } from "@/components/sections/shared/page-hero";
import { ContactInfoSection } from "@/components/sections/contact/contact-info-section";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";
import { MapSection } from "@/components/sections/contact/map-section";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Arogya India. Reach out for donations, volunteering, partnerships, or any inquiries about our healthcare programs.",
  path: "/contact",
});

const breadcrumbs = [{ name: "Contact", url: "/contact" }];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Contact Us"
        subtitle="Have a question, want to volunteer, or interested in supporting our mission? We'd love to hear from you."
        breadcrumbs={breadcrumbs}
      />
      <ContactInfoSection />
      <ContactFormSection />
      <MapSection />
    </>
  );
}
