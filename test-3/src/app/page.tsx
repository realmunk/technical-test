'use client';

import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";
import { useEffect, useRef } from "react";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Restore scroll position
    const savedScrollPosition = sessionStorage.getItem('home-scroll-position');
    if (savedScrollPosition) {
      container.scrollTop = parseInt(savedScrollPosition);
      sessionStorage.removeItem('home-scroll-position');
    }
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <div 
        ref={scrollContainerRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll"
      >
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="snap-start h-screen w-full shrink-0 relative flex">
            {/* Card container */}
            <div className="relative max-w-[420px] w-full mx-auto px-10">
              <BlogCard post={post} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
