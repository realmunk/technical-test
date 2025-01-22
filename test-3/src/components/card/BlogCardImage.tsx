'use client';

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "motion/react";
import { imageLoader } from "@/utils/imageLoader";

type BlogCardImageProps = {
  slug: string;
  imageUrl: string;
  title: string;
  priority: boolean;
};

const BlogCardImage = ({ slug, imageUrl, title, priority }: BlogCardImageProps) => {
  const scale = useMotionValue(1);
  const opacity = useTransform(scale, [1, 1.02], [0, 1]);

  return (
    <motion.div 
      layoutId={`post-image-${slug}`}
      className="relative w-full aspect-[1/1] rounded-lg overflow-hidden shadow-xl"
      whileHover={{ scale: 1.02 }}
      style={{ scale }}
      transition={{
        type: "spring",
        bounce: 0.4,
        stiffness: 300,
        damping: 30
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
        style={{ opacity }}
      />
      <Image
        loader={imageLoader}
        src={imageUrl}
        alt={`Featured image for article: ${title}`}
        fill
        className="object-cover" 
        sizes="(max-width: 640px) 100vw, (max-width: 750px) 750px, (max-width: 828px) 828px, 1200px"
        quality={90}
        priority={priority}
      />
    </motion.div>
  );
};

export default BlogCardImage; 