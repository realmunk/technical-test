'use client';

import { motion } from "motion/react";

type BlogCardContentProps = {
  title: string;
  excerpt: string;
};

const BlogCardContent = ({ title, excerpt }: BlogCardContentProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-gray-900"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-4xl font-bold mb-3 text-center">{title}</h2>
      <p className="text-base font-normal text-gray-600 text-center max-w-[85%]">
        {excerpt}
      </p>
    </motion.div>
  );
};

export default BlogCardContent; 