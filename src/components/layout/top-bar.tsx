import { Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site-config";

export function TopBar() {
  return (
    <div className="hidden bg-primary-800 text-white sm:block">
      <Container className="flex items-center justify-between py-2">
        <div className="flex items-center gap-6 text-xs">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-1.5 transition-colors hover:text-primary-200"
          >
            <Phone className="h-3 w-3" />
            {siteConfig.contact.phone}
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-primary-200"
          >
            <Mail className="h-3 w-3" />
            {siteConfig.contact.email}
          </a>
        </div>
        <div className="text-xs text-primary-200">
          Making healthcare a reality for all
        </div>
      </Container>
    </div>
  );
}
