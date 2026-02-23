import type { BlogPost } from "@/types/blog";
import { siteConfig } from "@/data/site-config";

interface ArticleSchemaProps {
  post: BlogPost;
}

export function ArticleSchema({ post }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: `${siteConfig.url}${post.featuredImage}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    description: post.excerpt,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
