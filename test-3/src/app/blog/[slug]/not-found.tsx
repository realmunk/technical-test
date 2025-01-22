import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Post Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Sorry, the blog post you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
          tabIndex={0}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Return to Home
        </Link>
      </div>
    </main>
  );
} 