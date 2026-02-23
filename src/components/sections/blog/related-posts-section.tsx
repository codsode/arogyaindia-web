import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlogCard } from "./blog-card";
import { blogPosts } from "@/data/blog-posts-data";

interface RelatedPostsSectionProps {
  currentSlug: string;
}

export function RelatedPostsSection({ currentSlug }: RelatedPostsSectionProps) {
  const relatedPosts = blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 2);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="bg-surface-muted py-20">
      <Container>
        <SectionHeading
          title="Related Posts"
          subtitle="Continue reading more stories from Arogya India."
        />
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {relatedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
