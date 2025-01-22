'use client';

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type BlogCardProps = {
  post: BlogPost;
};

// Mock current user - in a real app, this would come from your auth context/state
const MOCK_CURRENT_USER = "realmunk";

const BlogCard = ({ post }: BlogCardProps) => {
  const router = useRouter();
  const isAuthor = post.author === MOCK_CURRENT_USER;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Save the scroll position before navigation
    const scrollContainer = document.querySelector('.snap-mandatory');
    if (scrollContainer) {
      sessionStorage.setItem('home-scroll-position', scrollContainer.scrollTop.toString());
    }
    router.push(`/blog/${post.slug}`);
  };

  return (
    <article className="h-full w-full">
      <Link 
        href={`/blog/${post.slug}`}
        onClick={handleClick}
        className="group relative h-full w-full flex flex-col"
        tabIndex={0}
        aria-label={`Read article: ${post.title}`}
        role="article"
      >
        <footer className="m-6 text-center text-sm text-black">
          <strong>Shared</strong>&nbsp;<address className="inline m-0 not-italic"><span rel="author">by {isAuthor ? 'you' : post.author}</span></address>
        </footer>
        <motion.div 
          layoutId={`post-image-${post.slug}`}
          className="relative aspect-[1/1] w-full rounded-lg overflow-hidden shadow-xl"
        >
          <Image
            src={post.imageUrl}
            alt={`Featured image for article: ${post.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 768px) 100vw, 420px"
            priority
          />
        </motion.div>

        <div className="mt-6 flex flex-col items-center text-gray-900">
          <h2 className="text-3xl font-bold mb-3 text-center">{post.title}</h2>
          <p className="text-base text-gray-600 text-center max-w-[85%]">{post.excerpt}</p>
        </div>

        <div className="mt-8 flex justify-center" aria-hidden="true">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
            <svg 
              className="w-5 h-5 text-gray-600" 
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path 
                d="M13 6L19 12L13 18"
                stroke="currentColor" 
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard; 