'use client';

import Image from "next/image";
import { motion } from "motion/react";

type BlogPostImageProps = {
  imageUrl: string;
  title: string;
  slug: string;
};

const BlogPostImage = ({ imageUrl, title, slug }: BlogPostImageProps) => {
  return (
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
        src={imageUrl}
        alt={`Cover image for article: ${title}`}
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={90}
      />
    </motion.div>
  );
};

export default BlogPostImage; 