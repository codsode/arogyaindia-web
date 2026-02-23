"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { BlogCard } from "./blog-card";
import { blogPosts } from "@/data/blog-posts-data";
import { staggerContainer, slideUp } from "@/animations/variants";

export function BlogGridSection() {
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
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={slideUp}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
