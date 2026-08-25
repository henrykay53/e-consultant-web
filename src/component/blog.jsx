import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Seo from "./seo";
import PageHeader from "./pageHeader";
import { blogPosts } from "../data";
import { logEvent } from "../helper";
import CallBand from "./callBand";

const POSTS_PER_PAGE = 6;

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return blogPosts;
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  return (
    <>
      <Seo
        title="Pest Control &amp; Fumigation Blog"
        description="Practical fumigation and pest control advice for Lagos homes, estates, short-lets and businesses. Termites, rodents, bed bugs and prevention guides."
        path="/blog"
      />

      <PageHeader
        eyebrow="Guides"
        title="What we've learned, written down"
        lede="Practical advice for Lagos homes, estates and short-lets — from the jobs we actually get called to."
      >
        <div className="mt-8 max-w-md mx-auto relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none"
            aria-hidden="true"
          />
          <label htmlFor="blog-search" className="sr-only">
            Search blog posts
          </label>
          <input
            id="blog-search"
            type="search"
            placeholder="Search posts…"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full border border-bone-300 rounded-xl pl-12 pr-4 py-3.5 text-sm bg-white focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>
      </PageHeader>

    <div className="bg-white section-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-bone rounded-2xl border border-bone-300 overflow-hidden hover:border-brand-300 hover:shadow-xl hover:shadow-brand-950/8 transition-all"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/blog/${post.id}`}
                onClick={() =>
                  logEvent("blog_post_open", { label: post.title, post_id: post.id })
                }
                className="group block h-full"
              >
                <img
                  src={post.image}
                  alt=""
                  width="640"
                  height="360"
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <time className="text-sm text-ink-muted" dateTime={post.date}>
                    {post.date}
                  </time>
                  <h2 className="font-display text-xl font-bold mt-1 group-hover:text-brand-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-ink-soft text-sm mt-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
                    Read more <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))
        ) : (
          <p className="text-center col-span-full text-ink-muted text-lg py-12">
            No posts match “{searchQuery}”.
          </p>
        )}
      </section>

      {filteredPosts.length > POSTS_PER_PAGE && (
        <nav className="flex justify-center items-center mt-12 gap-4" aria-label="Pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-5 py-2.5 rounded-xl border border-bone-300 bg-white text-sm font-bold hover:border-brand-300 hover:text-brand-700 disabled:opacity-40 disabled:hover:border-bone-300 transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-ink-soft">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-5 py-2.5 rounded-xl border border-bone-300 bg-white text-sm font-bold hover:border-brand-300 hover:text-brand-700 disabled:opacity-40 disabled:hover:border-bone-300 transition-colors"
          >
            Next
          </button>
        </nav>
      )}
      <CallBand
        heading="Reading up because something's already in the house?"
        body="Articles help. A technician helps faster. Tell us what you're seeing and we'll tell you what it takes to clear it."
        source="band-blog"
      />
      </div>
    </div>
    </>
  );
};

export default BlogList;
