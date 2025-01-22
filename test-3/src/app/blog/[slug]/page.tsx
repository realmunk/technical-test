import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import BlogPostLayout from "@/components/post/BlogPostLayout";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostLayout post={post} slug={slug} />;
}



// Generate static params for all posts
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
} 