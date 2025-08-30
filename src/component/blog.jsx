import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../data";
import { logEvent } from "../helper";

const BlogList = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount(blogPosts.length);
  };

  //Track blog post open
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
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Expert tips, insights, and updates on keeping your home and business
          pest-free.
        </p>
      </header>

      {/* Blog Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, visibleCount).map((post) => (
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
        ))}
      </section>

      {/* Show More Button */}
      {visibleCount < blogPosts.length && (
        <div className="text-center mt-10">
          <motion.button
            onClick={handleShowMore}
            className="px-5 py-3 rounded-md text-sm text-white bg-gray-800 hover:bg-gray-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Show More
          </motion.button>
        </div>
      )}
    </main>
  );
};

export default BlogList;
