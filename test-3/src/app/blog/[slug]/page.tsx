import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import BlogPostLayout from "@/components/post/BlogPostLayout";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostLayout post={post} slug={slug} />;
}



// Generate static params for all posts
export async function generateStaticParams() {
  return await posts.map((post) => ({
    slug: post.slug,
  }));
} 