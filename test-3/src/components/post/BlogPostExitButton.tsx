'use client';

import Link from "next/link";
import { motion } from "motion/react";

const BlogPostExitButton = () => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const link = e.currentTarget.querySelector('a');
      link?.click();
    }
  };

  return (
    <motion.div
      className="absolute p-4 z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      role="navigation"
      aria-label="Navigation"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Link
        href="/"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/75 transition-colors"
        aria-label="Return to home page"
      >
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </Link>
    </motion.div>
  );
};

export default BlogPostExitButton; 