'use client';

import { motion } from "motion/react";
import BlogPostMeta from "./BlogPostMeta";

type BlogPostCaptionProps = {
  title: string;
  author: string;
};

const BlogPostCaption = ({ title, author }: BlogPostCaptionProps) => {
  return (
    <motion.figcaption
      className="absolute bottom-0 left-0 right-0 py-12 px-10 bg-gradient-to-t from-black/80 to-transparent"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2
      }}
    >
      <motion.h1 
        id="article-title"
        className="text-7xl font-black mb-4 text-white drop-shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.3
        }}
      >
        {title}
      </motion.h1>
      <BlogPostMeta author={author} />
    </motion.figcaption>
  );
};

export default BlogPostCaption; 