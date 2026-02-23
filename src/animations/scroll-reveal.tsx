"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ScrollReveal({
  children,
  variants = defaultVariants,
  className,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
