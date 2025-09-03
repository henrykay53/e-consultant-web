import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../data";
import { Helmet } from "react-helmet-async";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">Blog post not found</h2>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 px-4 py-2 border rounded"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* SEO Meta */}
      <Helmet>
        <title>{post.title} | E Consultants</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <link rel="canonical" href={`https://econsultantsglobaltiija.netlify.app/blog/${post.id}`} />
      </Helmet>

      

      <motion.button
        onClick={() => navigate("/blog")}
        className="px-3 py-2 mb-5 rounded-md text-sm text-white bg-red-800 hover:bg-red-900 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Blog
      </motion.button>

      <article>
        <header>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-72 object-cover rounded-lg mb-6"
          />
          <p className="text-sm text-gray-500">
            <time>{post.date}</time> • {post.author}
          </p>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">{post.title}</h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <section className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
          {post.content}
        </section>
      </article>
    </main>
  );
};

export default BlogDetail;
