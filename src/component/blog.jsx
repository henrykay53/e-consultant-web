import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../data";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Expert tips, insights, and updates on keeping your home and business pest-free.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500">{post.date}</p>
              <h2
                className="text-xl font-semibold text-gray-900 mt-1 hover:text-red-800 transition-colors cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mt-3">{post.excerpt}</p>
              {/* <button
                onClick={() => navigate(`/blog/${post.id}`)}
                className="inline-block mt-4 text-red-800 hover:underline font-medium text-sm"
              >
                Read More →
              </button> */}

                 <motion.button
                onClick={() => navigate(`/blog/${post.id}`)}
                className="px-3 py-2 mt-5 rounded-md text-sm text-white bg-red-800 hover:bg-red-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Read More →
            </motion.button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
