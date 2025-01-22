import { posts } from "@/data/posts";

import ScrollContainer from "@/components/ScrollContainer";
import BlogCard from "@/components/card/BlogCard";

export default function BlogFeed() {
  return (
    <ScrollContainer>
      {posts.map((post, index) => (
        <div 
          className="snap-start h-screen w-full shrink-0 flex relative max-w-[420px] mx-auto px-10 items-center" 
          key={post.id}
          role="article"
          aria-posinset={index + 1}
          aria-setsize={posts.length}
        >
          <BlogCard post={post} />
        </div>
      ))}
    </ScrollContainer>
  );
} 
