import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { BreadcrumbItem } from "@/types/seo";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 pt-32 pb-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-600/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary-600/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="mb-6">
          <Breadcrumb items={breadcrumbs} />
        </div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
