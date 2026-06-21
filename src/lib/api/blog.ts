import type { BlogPost } from "@/types/blog";
import { blogPosts as staticBlogPosts } from "@/data/blog-posts-data";

// Base URL of the Arogya India backend. Configured via NEXT_PUBLIC_API_URL
// (see .env.example); falls back to the production API.
const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "https://api.arogyaindia.org/api/v1";

// Re-fetch from the backend at most once every 5 minutes (ISR).
const REVALIDATE_SECONDS = 300;

// Defaults for fields the backend does not provide.
const DEFAULT_IMAGE = "/images/blog/health-is-a-right.webp";
const DEFAULT_AVATAR = "/logo.png";
const DEFAULT_AUTHOR = "Arogya India";

interface ApiAuthor {
  name?: string;
  email?: string;
}

interface ApiCategory {
  name?: string;
  slug?: string;
}

interface ApiBlogListItem {
  id: string;
  title: string;
  slug: string;
  author?: ApiAuthor;
  category?: ApiCategory;
  date?: string;
  coverImage?: string;
  status?: string;
}

interface ApiBlogDetail extends ApiBlogListItem {
  content?: string;
  createdAt?: string;
  updatedAt?: string;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function makeExcerpt(html: string, max = 160): string {
  const text = stripHtml(html);
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

function readingTime(html: string): string {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

function mapListItem(b: ApiBlogListItem): BlogPost {
  const category = b.category?.name;
  return {
    slug: b.slug,
    title: b.title,
    excerpt: "",
    content: "",
    featuredImage: b.coverImage || DEFAULT_IMAGE,
    author: { name: b.author?.name || DEFAULT_AUTHOR, avatar: DEFAULT_AVATAR },
    publishedAt: b.date || new Date(0).toISOString(),
    readingTime: "",
    tags: category ? [category] : [],
  };
}

function mapDetail(b: ApiBlogDetail): BlogPost {
  const content = b.content || "";
  const category = b.category?.name;
  return {
    slug: b.slug,
    title: b.title,
    excerpt: content ? makeExcerpt(content) : "",
    content,
    featuredImage: b.coverImage || DEFAULT_IMAGE,
    author: { name: b.author?.name || DEFAULT_AUTHOR, avatar: DEFAULT_AVATAR },
    publishedAt: b.date || b.createdAt || new Date(0).toISOString(),
    readingTime: content ? readingTime(content) : "",
    tags: category ? [category] : [],
  };
}

async function apiGet<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return (json?.data ?? null) as T;
  } catch {
    // Network/CORS/parse failure — callers fall back to bundled content.
    return null;
  }
}

/**
 * Published blog posts from the backend. Falls back to the bundled static
 * posts when the backend is unreachable or has no published content yet.
 */
export async function getBlogPosts(limit = 50): Promise<BlogPost[]> {
  const data = await apiGet<{ blogs: ApiBlogListItem[] }>(
    `/blogs?status=published&sortBy=createdAt:desc&limit=${limit}`,
  );
  const blogs = data?.blogs ?? [];
  if (blogs.length > 0) return blogs.map(mapListItem);
  return staticBlogPosts.slice(0, limit);
}

/**
 * A single published post by slug. Falls back to a bundled post if the backend
 * doesn't have it.
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const data = await apiGet<{ blog: ApiBlogDetail }>(
    `/blogs/slug/${encodeURIComponent(slug)}`,
  );
  if (data?.blog) return mapDetail(data.blog);
  return staticBlogPosts.find((p) => p.slug === slug) ?? null;
}

/**
 * All slugs to pre-render at build time (backend published + bundled).
 */
export async function getBlogSlugs(): Promise<string[]> {
  const data = await apiGet<{ blogs: ApiBlogListItem[] }>(
    `/blogs?status=published&limit=200`,
  );
  const apiSlugs = (data?.blogs ?? []).map((b) => b.slug).filter(Boolean);
  const staticSlugs = staticBlogPosts.map((p) => p.slug);
  return Array.from(new Set([...apiSlugs, ...staticSlugs]));
}

/**
 * Posts related to the current one (simple "others" selection).
 */
export async function getRelatedPosts(
  currentSlug: string,
  limit = 2,
): Promise<BlogPost[]> {
  const all = await getBlogPosts(20);
  return all.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
