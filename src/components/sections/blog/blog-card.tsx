import Link from "next/link";
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Image placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
        <div className="flex h-full items-center justify-center">
          <Newspaper className="h-10 w-10 text-primary-400" />
        </div>
        <div className="absolute left-3 top-3 flex gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="primary" className="bg-white/90 text-primary-700">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-semibold leading-snug text-text-primary group-hover:text-primary-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
        >
          Read More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
