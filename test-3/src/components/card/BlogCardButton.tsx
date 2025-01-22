'use client';

import { motion } from "motion/react";

const BlogCardButton = () => {
  return (
    <motion.div 
      className="mt-8 flex justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-hidden="true"
    >
      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-lg">
        <svg 
          className="w-5 h-5 text-white" 
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path 
            d="M4 9V4H9M20 9V4H15M20 15V20H15M4 15V20H9" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default BlogCardButton; 