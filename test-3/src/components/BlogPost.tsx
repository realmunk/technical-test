import type { BlogPost } from "@/types/blog";
import BlogPostLayout from "./post/BlogPostLayout";

type BlogPostProps = {
  post: BlogPost;
  slug: string;
};

const BlogPost = ({ post, slug }: BlogPostProps) => {
  return <BlogPostLayout post={post} slug={slug} />;
};

export default BlogPost; 