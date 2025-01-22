'use client';

import Image from "next/image";
import { motion } from "motion/react";
import { imageLoader } from "@/utils/imageLoader";

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
        loader={imageLoader}
        src={imageUrl}
        alt={`Cover image for article: ${title}`}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 750px) 750px, (max-width: 828px) 828px, 1200px"
        quality={90}
        priority
      />
    </motion.div>
  );
};

export default BlogPostImage; 