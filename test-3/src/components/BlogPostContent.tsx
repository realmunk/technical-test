'use client';

import Image from "next/image";
import { motion } from "motion/react";
import type { BlogPost } from "@/types/blog";

type BlogPostContentProps = {
  post: BlogPost;
  slug: string;
};

export default function BlogPostContent({ post, slug }: BlogPostContentProps) {
  return (
    <>

      <article className="relative min-h-screen">
        {/* Article Header */}
        <header className="relative h-screen">
          {/* Hero Image */}
          <figure className="relative w-full h-full bg-white">
            <motion.div
              layoutId={`post-image-${slug}`}
              className="relative w-full h-full"
              transition={{
                type: "spring",
                bounce: 0.25,
                duration: 0.4
              }}
            >
              <Image
                src={post.imageUrl}
                alt={`Cover image for article: ${post.title}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </motion.div>
            
            
            {/* Article Title */}
            <motion.figcaption
              className="absolute bottom-0 left-0 right-0 py-12 px-10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h1 
                className="text-7xl font-black mb-4 text-white"
                initial={{ y: -50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }
                }}
              >
                {post.title}
              </motion.h1>
              <div 
                className="flex items-center justify-between space-x-2 text-white/80 font-medium"
              >
                <motion.div 
                  className="flex-column"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }
                  }}
                >
                  <address className="not-italic inline text-2xl">
                    By <span rel="author" className="font-medium">{post.author}</span>
                  </address>
                </motion.div>
                <motion.div 
                  className="flex-column"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }
                  }}
                >
                  <span className="text-white/70" aria-label="8 comments">8</span>
                  <button 
                    className="text-white/70 hover:text-white"
                    aria-label="Open comments"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M8 10h8M8 14h4" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
                      <path d="M3 12c0 4.97 4.03 9 9 9a8.94 8.94 0 004.9-1.46L21 21l-2.1-4.1A8.95 8.95 0 0021 12c0-4.97-4.03-9-9-9s-9 4.03-9 9z" stroke="currentColor" strokeWidth={2}/>
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.figcaption>
          </figure>
        </header>

        {/* Article Content */}
        <div className="relative max-w-3xl mx-auto px-4 py-16">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Introduction</h2>
            <p className="font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <h2 className="text-3xl font-bold mt-8 mb-6">Main Content</h2>
            <p className="font-normal">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </article>
    </>
  );
} 