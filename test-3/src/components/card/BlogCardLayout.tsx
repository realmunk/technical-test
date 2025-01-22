import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import BlogCardContent from "./BlogCardContent";
import BlogCardImage from "./BlogCardImage";
import BlogCardButton from "./BlogCardButton";
import BlogCardFooter from "./BlogCardFooter";

type BlogCardLayoutProps = {
  post: BlogPost;
};

// Mock current user - in a real app, this would come from your auth context/state
const MOCK_CURRENT_USER = "realmunk";

const BlogCardLayout = ({ post }: BlogCardLayoutProps) => {
  const isAuthor = post.author === MOCK_CURRENT_USER;

  return (
    <article className="h-full w-full">
      <Link 
        href={`/blog/${post.slug}`}
        className="h-full w-full flex flex-col gap-6"
        tabIndex={0}
        aria-label={`Read article: ${post.title}`}
        role="article"
      > 
        <div className="flex-1 flex flex-col justify-center gap-6">
          <BlogCardFooter 
            author={post.author}
            isAuthor={isAuthor}
          />

          <BlogCardImage 
            slug={post.slug}
            imageUrl={post.imageUrl}
            title={post.title}
          />

          <BlogCardContent 
            title={post.title}
            excerpt={post.excerpt}
          />
          
          <BlogCardButton />
        </div>
      </Link>
    </article>
  );
};

export default BlogCardLayout; 