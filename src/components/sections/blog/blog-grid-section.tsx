"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/types/blog";
import { staggerContainer, slideUp } from "@/animations/variants";

interface BlogGridSectionProps {
  posts: BlogPost[];
}

export function BlogGridSection({ posts }: BlogGridSectionProps) {
  if (posts.length === 0) {
    return (
      <section className="py-20">
        <Container>
          <p className="text-center text-text-secondary">
            No blog posts yet. Check back soon!
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={slideUp}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
