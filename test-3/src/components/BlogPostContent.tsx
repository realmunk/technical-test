'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { BlogPost } from "@/types/blog";
import BlogPostHeader from "./BlogPostHeader";

type BlogPostContentProps = {
  post: BlogPost;
  slug: string;
};

const BlogPostContent = ({ post, slug }: BlogPostContentProps) => {
  return (
    <AnimatePresence mode="wait">
      <article className="relative min-h-screen">
        <header className="relative h-screen">
          <figure className="relative w-full h-full bg-white">
            <motion.div
              layoutId={`post-image-${slug}`}
              className="relative w-full h-full"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1
              }}
            >
              <Image
                src={post.imageUrl}
                alt={`Cover image for article: ${post.title}`}
                fill
                className="object-cover"
                priority
                sizes="100vw"
                quality={90}
              />
            </motion.div>
            
            <BlogPostHeader post={post} />
          </figure>
        </header>

        <motion.div 
          className="relative max-w-3xl mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="prose prose-lg mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              Introduction
            </motion.h2>
            <motion.p 
              className="font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {post.content}
            </motion.p>
          </div>
        </motion.div>
      </article>
    </AnimatePresence>
  );
};

export default BlogPostContent; 