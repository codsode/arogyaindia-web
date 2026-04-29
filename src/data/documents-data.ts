export interface OrgDocument {
  title: string;
  description: string;
  fileUrl?: string;
  status: "available" | "in-progress" | "coming-soon";
  details?: { label: string; value: string }[];
}

export const orgDocuments: OrgDocument[] = [
  {
    title: "Certificate of Incorporation",
    description:
      "Issued by the Ministry of Corporate Affairs, Government of India, certifying the incorporation of Arogya Development Foundation under the Companies Act, 2013.",
    fileUrl: "/documents/certificate-of-incorporation.pdf",
    status: "available",
    details: [
      { label: "CIN", value: "U88900HR2025NPL133489" },
      { label: "PAN", value: "ABDCA1814H" },
      { label: "TAN", value: "RTKA31353A" },
      { label: "Date of Incorporation", value: "24 June 2025" },
    ],
  },
  {
    title: "12A Provisional Registration (Form 10AC)",
    description:
      "Provisional registration issued by the Income Tax Department under Section 12A of the Income Tax Act, 1961, granting income tax exemption to Arogya Development Foundation.",
    fileUrl: "/documents/form-10ac-12a.pdf",
    status: "available",
    details: [
      { label: "Unique Registration Number", value: "ABDCA1814HE20251" },
      { label: "Date of Registration", value: "02 April 2026" },
      { label: "Valid From", value: "AY 2026-27" },
      { label: "Valid Until", value: "AY 2028-29" },
    ],
  },
  {
    title: "80G Provisional Approval (Form 10AC)",
    description:
      "Provisional approval issued by the Income Tax Department under Section 80G of the Income Tax Act, 1961, enabling donors to claim tax deductions on their contributions to Arogya Development Foundation.",
    fileUrl: "/documents/form-10ac-80g.pdf",
    status: "available",
    details: [
      { label: "Unique Registration Number", value: "ABDCA1814HF20261" },
      { label: "Date of Approval", value: "02 April 2026" },
      { label: "Valid From", value: "AY 2026-27" },
      { label: "Valid Until", value: "AY 2028-29" },
    ],
  },
];
