import { Container } from "@/components/ui/container";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

interface LegalContentProps {
  intro?: string;
  lastUpdated?: string;
  sections: LegalSection[];
}

export function LegalContent({ intro, lastUpdated, sections }: LegalContentProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          {lastUpdated && (
            <p className="mb-4 text-sm text-text-muted">
              Last updated: {lastUpdated}
            </p>
          )}
          {intro && (
            <p className="mb-8 text-base leading-relaxed text-text-secondary">
              {intro}
            </p>
          )}
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-3 text-xl font-semibold text-text-primary">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((para, idx) => (
                  <p
                    key={idx}
                    className="mb-3 text-base leading-relaxed text-text-secondary"
                  >
                    {para}
                  </p>
                ))}
                {section.list && (
                  <ul className="ml-6 list-disc space-y-2 text-base text-text-secondary">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
