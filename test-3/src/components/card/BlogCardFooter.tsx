type BlogCardFooterProps = {
  author: string;
  isAuthor: boolean;
};

const BlogCardFooter = ({ author, isAuthor }: BlogCardFooterProps) => {
  return (
    <footer className="text-center text-sm text-black">
      <strong className="font-semibold">Shared</strong>&nbsp;
      <address className="inline m-0 not-italic font-normal">
        by <span rel="author" className="font-medium">{isAuthor ? 'you' : author}</span>
      </address>
    </footer>
  );
};

export default BlogCardFooter; 