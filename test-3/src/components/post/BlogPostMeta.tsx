'use client';

import { motion } from "motion/react";

type BlogPostMetaProps = {
  author: string;
};

const BlogPostMeta = ({ author }: BlogPostMetaProps) => {
  return (
    <motion.div 
      className="flex items-center justify-between space-x-2 text-white/80 font-medium"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <address className="not-italic inline text-2xl">
        By <span rel="author" className="font-medium">{author}</span>
      </address>
      
      <motion.button 
        className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open comments section"
      >
        <span className="text-white/70">8</span>
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M8 10h8M8 14h4" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
          <path d="M3 12c0 4.97 4.03 9 9 9a8.94 8.94 0 004.9-1.46L21 21l-2.1-4.1A8.95 8.95 0 0021 12c0-4.97-4.03-9-9-9s-9 4.03-9 9z" stroke="currentColor" strokeWidth={2}/>
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default BlogPostMeta; 