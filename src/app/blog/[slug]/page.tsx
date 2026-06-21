import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { getBlogPost, getBlogSlugs } from "@/lib/api/blog";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { ArticleSchema } from "@/components/seo/article-schema";
import { BlogPostHeader } from "@/components/sections/blog/blog-post-header";
import { BlogPostContent } from "@/components/sections/blog/blog-post-content";
import { BlogShareButtons } from "@/components/sections/blog/blog-share-buttons";
import { RelatedPostsSection } from "@/components/sections/blog/related-posts-section";
import { DonateBanner } from "@/components/sections/shared/donate-banner";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [{ url: post.featuredImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  const breadcrumbs = [
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema post={post} />
      <BlogPostHeader post={post} />
      <BlogPostContent content={post.content} />
      <BlogShareButtons title={post.title} slug={post.slug} />
      <RelatedPostsSection currentSlug={post.slug} />
      <DonateBanner />
    </>
  );
}
