import { Container } from "@/components/ui/container";
import { mapEmbedUrl } from "@/data/contact-data";

export function MapSection() {
  return (
    <section className="pb-20">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Arogya India Office Location"
          />
        </div>
      </Container>
    </section>
  );
}
