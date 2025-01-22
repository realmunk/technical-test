type BlogPostContentProps = {
  content: string;
};

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <section 
      className="relative max-w-3xl mx-auto px-4 py-16"
      role="main"
      aria-label="Article content"
    >
      <div className="prose prose-lg mx-auto">
        <p 
          className="font-normal text-gray-800 leading-relaxed"
        >
          {content}
        </p>
      </div>
    </section>
  );
};

export default BlogPostContent; 