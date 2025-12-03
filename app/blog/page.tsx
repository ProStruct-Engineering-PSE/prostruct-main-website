import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-semibold mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog Posts</h1>
          <p className="text-gray-600">
            All 46 blog posts from ProStruct Engineering
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-4">
            All blog posts are organized in the{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">
              /blog/[post-slug]/
            </code>{" "}
            folder structure.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">
              📝 Blog Post Structure:
            </h2>
            <div className="space-y-2 text-sm text-blue-800">
              <p>
                ✅ Location:{" "}
                <code className="bg-blue-100 px-2 py-1 rounded">
                  app/blog/[post-slug]/page.tsx
                </code>
              </p>
              <p>
                ✅ URL:{" "}
                <code className="bg-blue-100 px-2 py-1 rounded">
                  /blog/[post-slug]/
                </code>
              </p>
              <p>
                ✅ Example:{" "}
                <Link
                  href="/blog/how-to-identify-a-load-bearing-wall"
                  className="text-blue-600 hover:underline font-medium"
                >
                  /blog/how-to-identify-a-load-bearing-wall/
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-md font-semibold text-green-900 mb-2">
              Example Blog Posts:
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog/la-fires-rebuilding-what-altadena-palisades-residents-need-to-know"
                  className="text-green-600 hover:underline"
                >
                  → LA Fires Rebuilding Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-identify-a-load-bearing-wall"
                  className="text-green-600 hover:underline"
                >
                  → How to Identify a Load-Bearing Wall
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/what-are-the-types-of-adu"
                  className="text-green-600 hover:underline"
                >
                  → What Are The Types of ADU?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
