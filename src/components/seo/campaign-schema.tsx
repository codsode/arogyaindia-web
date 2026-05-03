import { siteConfig } from "@/data/site-config";
import type { Campaign } from "@/data/campaigns-data";

interface CampaignSchemaProps {
  campaign: Campaign;
}

export function CampaignSchema({ campaign }: CampaignSchemaProps) {
  const url = `${siteConfig.url}/campaigns/${campaign.slug}`;

  // Schema.org DonateAction + FundraisingEvent-style payload.
  // Modeled as a NonProfit fundraising effort via a custom WebPage/Action structure
  // that search engines understand for non-profits.
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: campaign.title,
        description: campaign.seoDescription,
        inLanguage: "en-IN",
        isPartOf: { "@id": siteConfig.url },
        about: {
          "@type": "NGO",
          name: "Arogya Development Foundation",
          url: siteConfig.url,
        },
      },
      {
        "@type": "DonateAction",
        name: campaign.title,
        description: campaign.emotionalDescription,
        url,
        recipient: {
          "@type": "NGO",
          name: "Arogya Development Foundation",
          url: siteConfig.url,
          email: siteConfig.contact.email,
          telephone: siteConfig.contact.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "UGF 26, Signum 36 The Serenas, Sector-36 Sohna",
            addressLocality: "Gurgaon",
            addressRegion: "Haryana",
            postalCode: "122103",
            addressCountry: "IN",
          },
          taxID: "ABDCA1814H",
          identifier: [
            {
              "@type": "PropertyValue",
              propertyID: "CIN",
              value: "U88900HR2025NPL133489",
            },
            {
              "@type": "PropertyValue",
              propertyID: "12A URN",
              value: "ABDCA1814HE20251",
            },
            {
              "@type": "PropertyValue",
              propertyID: "80G URN",
              value: "ABDCA1814HF20261",
            },
          ],
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "INR",
          minPrice: 10,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: campaign.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Campaigns",
            item: `${siteConfig.url}/campaigns`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: campaign.shortTitle,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
