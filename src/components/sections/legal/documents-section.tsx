import { FileText, Download, Mail, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { orgDocuments, type OrgDocument } from "@/data/documents-data";

const statusStyles: Record<
  OrgDocument["status"],
  { label: string; className: string }
> = {
  available: {
    label: "Available",
    className: "bg-primary-100 text-primary-700",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-accent-100 text-accent-700",
  },
  "coming-soon": {
    label: "Coming Soon",
    className: "bg-secondary-100 text-secondary-700",
  },
};

export function DocumentsSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-text-primary">
                  Transparency &amp; Accountability
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Arogya Development Foundation is a registered nonprofit
                  organization under the Companies Act, 2013. Our official
                  documents and certificates are available below. Additional
                  certifications will be added as they are issued.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {orgDocuments.map((doc) => {
              const status = statusStyles[doc.status];
              return (
                <div
                  key={doc.title}
                  className="flex flex-col rounded-xl border border-border bg-surface p-6 shadow-sm"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
                    >
                      {status.label}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {doc.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {doc.description}
                  </p>

                  {doc.details && (
                    <dl className="mt-4 space-y-1.5 rounded-lg bg-surface-muted/60 p-3 text-xs">
                      {doc.details.map((detail) => (
                        <div
                          key={detail.label}
                          className="flex justify-between gap-2"
                        >
                          <dt className="text-text-secondary">{detail.label}</dt>
                          <dd className="font-medium text-text-primary">
                            {detail.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {doc.status === "available" && doc.fileUrl && (
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
                    >
                      <Download className="h-4 w-4" />
                      View Document
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl bg-primary-50 p-6 text-center sm:p-8">
            <Mail className="mx-auto mb-3 h-8 w-8 text-primary-600" />
            <h3 className="text-lg font-semibold text-text-primary">
              Need a Specific Document?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-text-secondary">
              For verification or any document-related queries, please reach
              out to us at{" "}
              <a
                href="mailto:care@arogyaindia.org"
                className="font-medium text-primary-700 hover:underline"
              >
                care@arogyaindia.org
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
