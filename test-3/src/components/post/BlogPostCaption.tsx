'use client';

import { motion } from "motion/react";
import BlogPostMeta from "./BlogPostMeta";
import BounceIn from "../animations/BounceIn";

type BlogPostCaptionProps = {
  title: string;
  author: string;
};

const BlogPostCaption = ({ title, author }: BlogPostCaptionProps) => {
  return (
    <figcaption
      className="absolute bottom-0 left-0 right-0 py-12 px-10 bg-gradient-to-t from-black/80 to-transparent"
    >
      <BounceIn>
        <h1 
          id="article-title"
          className="text-6xl font-black mb-4 text-white drop-shadow-sm line-clamp-4 overflow-hidden"
        >
          {title}
        </h1>
      </BounceIn>
      <BlogPostMeta author={author} />
    </figcaption>
  );
};

export default BlogPostCaption; 