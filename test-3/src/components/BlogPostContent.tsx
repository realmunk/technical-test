'use client';

import Image from "next/image";
import { motion } from "framer-motion";
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
                bounce: 0.2,
                duration: 0.6
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
              className="absolute bottom-0 left-0 right-0 p-8"
              initial={{ y: 50, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 0.25,
              }}
            >
              <motion.h1 
                className="text-5xl font-bold mb-4 text-white"
                initial={{ y: 20, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                }}
              >
                {post.title}
              </motion.h1>
              <motion.div 
                className="flex items-center justify-between space-x-2 text-white/80"
                initial={{ y: 20, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1
                }}
              >
                <div className="flex-column">
                  <address className="not-italic inline">- by <span rel="author">{post.author}</span></address>
                </div>
                <div className="flex-column">
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
                </div>
              </motion.div>
            </motion.figcaption>
          </figure>
        </header>

        {/* Article Content */}
        <div className="relative max-w-3xl mx-auto px-4 py-16">
          <div className="prose prose-lg mx-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p>
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