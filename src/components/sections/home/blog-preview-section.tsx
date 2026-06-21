"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/sections/blog/blog-card";
import type { BlogPost } from "@/types/blog";
import { staggerContainer, slideUp } from "@/animations/variants";

interface BlogPreviewSectionProps {
  posts: BlogPost[];
}

export function BlogPreviewSection({ posts }: BlogPreviewSectionProps) {
  return (
    <section className="bg-surface-muted py-20">
      <Container>
        <SectionHeading
          title="Latest Stories"
          subtitle="Read our latest blog posts about healthcare, community impact, and the stories that drive our mission."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {posts.slice(0, 3).map((post) => (
            <motion.div key={post.slug} variants={slideUp}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button href="/blog" variant="outline" size="lg">
            View All Posts
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
