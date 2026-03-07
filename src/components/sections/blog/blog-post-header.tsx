import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

interface BlogPostHeaderProps {
  post: BlogPost;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <section className="pt-32 pb-8">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-text-secondary">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author.name}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative mt-8 aspect-[2/1] overflow-hidden rounded-2xl">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
