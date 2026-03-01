import { HeroSection } from "@/components/sections/home/hero-section";
import { StatsSection } from "@/components/sections/home/stats-section";
import { ProgramsSection } from "@/components/sections/home/programs-section";
import { MissionPreviewSection } from "@/components/sections/home/mission-preview-section";
import { CampaignsPreviewSection } from "@/components/sections/home/campaigns-preview-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { BlogPreviewSection } from "@/components/sections/home/blog-preview-section";
import { CtaSection } from "@/components/sections/home/cta-section";
import { NewsletterSection } from "@/components/sections/shared/newsletter-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProgramsSection />
      <MissionPreviewSection />
      <CampaignsPreviewSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CtaSection />
      <NewsletterSection />
    </>
  );
}
