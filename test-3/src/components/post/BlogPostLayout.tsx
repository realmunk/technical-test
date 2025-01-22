import type { BlogPost } from "@/types/blog";
import BlogPostHeader from "./BlogPostHeader";
import BlogPostContent from "./BlogPostContent";

type BlogPostLayoutProps = {
  post: BlogPost;
  slug: string;
};

const BlogPostLayout = ({ post, slug }: BlogPostLayoutProps) => {
  return (
    <article className="relative min-h-screen">
      <BlogPostHeader post={post} slug={slug} />
      <BlogPostContent content={post.content} />
    </article>
  );
};

export default BlogPostLayout; 