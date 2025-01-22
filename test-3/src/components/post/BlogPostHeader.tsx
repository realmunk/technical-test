import type { BlogPost } from "@/types/blog";
import BlogPostImage from "./BlogPostImage";
import BlogPostCaption from "./BlogPostCaption";
import BlogPostExitButton from "./BlogPostExitButton";

type BlogPostHeaderProps = {
  post: BlogPost;
  slug: string;
};

const BlogPostHeader = ({ post, slug }: BlogPostHeaderProps) => {
  return (
    <header 
      className="relative h-screen"
      role="banner"
      aria-label="Article header"
    >
      <figure 
        className="relative w-full h-full bg-white"
        role="img"
        aria-labelledby="article-title"
      >
        <BlogPostExitButton />
        <BlogPostImage 
          imageUrl={post.imageUrl} 
          title={post.title} 
          slug={slug} 
        />
        <BlogPostCaption 
          title={post.title}
          author={post.author}
        />
      </figure>
    </header>
  );
};

export default BlogPostHeader; 