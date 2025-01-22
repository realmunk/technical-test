'use client';

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/types/blog";
import BlogCardLayout from "./card/BlogCardLayout";

type BlogCardProps = {
  post: BlogPost;
};

const BlogCard = ({ post }: BlogCardProps) => {
  const router = useRouter();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Save the scroll position before navigation
    const scrollContainer = document.querySelector('.snap-mandatory');
    if (scrollContainer) {
      sessionStorage.setItem('home-scroll-position', scrollContainer.scrollTop.toString());
    }
    router.push(`/blog/${post.slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e as unknown as React.MouseEvent);
    }
  };

  return (
    <motion.div 
      className="h-full w-full flex items-center focus-within:outline-none group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Read article: ${post.title}`}
    >
      <BlogCardLayout post={post} />
    </motion.div>
  );
};

export default BlogCard; 