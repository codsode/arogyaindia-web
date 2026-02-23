import { Container } from "@/components/ui/container";

interface BlogPostContentProps {
  content: string;
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <section className="py-8">
      <Container>
        <article
          className="prose mx-auto max-w-3xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </section>
  );
}
