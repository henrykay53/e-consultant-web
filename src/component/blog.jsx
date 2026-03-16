import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../data";
import { logEvent } from "../helper";

const POSTS_PER_PAGE = 3;

const BlogList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleOpenPost = (post) => {
    logEvent("blog_post_open", {
      category: "engagement",
      label: post.title,
      post_id: post.id,
    });
    navigate(`/blog/${post.id}`);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">


      {/* SEO Metadata */}
      <Helmet>
        <title>Fumigation Blog | Pest Control Tips & Services in Lagos</title>
        <meta
          name="description"
          content="Read expert fumigation and pest control tips for homes, offices, and businesses in Lagos. Stay updated with safe and effective pest prevention guides."
        />
        <meta
          name="keywords"
          content="fumigation blog, pest control tips, Lagos pest control, pest prevention Nigeria, home fumigation advice"
        />
      </Helmet>
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Expert tips, insights, and updates on keeping your home and business pest-free.
        </p>

        {/* Search Input */}
        <div className="mt-6 max-w-md ">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // reset to first page on search
            }}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-800"
          />
        </div>
      </header>

      {/* Blog Posts Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2
                  className="text-xl font-semibold text-gray-900 mt-1 hover:text-red-800 transition-colors cursor-pointer"
                  onClick={() => handleOpenPost(post)}
                >
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mt-3">{post.excerpt}</p>

                <motion.button
                  onClick={() => handleOpenPost(post)}
                  className="px-3 py-2 mt-5 rounded-md text-sm text-white bg-red-800 hover:bg-red-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More →
                </motion.button>
              </div>
            </article>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No posts found.
          </p>
        )}
      </section>

      {/* Pagination Controls */}
      {filteredPosts.length > POSTS_PER_PAGE && (
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 rounded-md bg-gray-300 text-white hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 rounded-md bg-gray-300 text-white hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
};

export default BlogList;

