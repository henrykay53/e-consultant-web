import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Seo from "./seo";
import CallBand from "./callBand";
import { blogPosts } from "../data";
import { company, absoluteUrl } from "../siteConfig";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts
    .filter((p) => p.id !== post.id)
    .map((p) => ({ p, score: p.tags.filter((t) => post.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ p }) => p);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": `${company.url}/#business` },
    mainEntityOfPage: absoluteUrl(`/blog/${post.id}`),
  };

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
        image={post.image}
        type="article"
        schema={schema}
      />

      <article className="bg-white">
        <header className="relative overflow-hidden bg-gradient-to-b from-bone-200 to-bone bugs-light border-b border-bone-300">
          <div className="relative max-w-3xl mx-auto px-4 py-12 md:py-16">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:gap-2.5 transition-all"
            >
              <ArrowLeft size={16} aria-hidden="true" /> All guides
            </Link>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold bg-brand-100 text-brand-700 border border-brand-200 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.06]">
              {post.title}
            </h1>

            <p className="mt-5 text-sm text-ink-muted">
              <time dateTime={post.date}>{post.date}</time> · {post.author}
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-12">
          <img
            src={post.image}
            alt=""
            width="1200"
            height="600"
            className="w-full h-64 md:h-80 object-cover rounded-2xl border-4 border-white shadow-xl shadow-brand-950/10"
          />

          <div className="mt-10 text-ink-soft leading-[1.75] whitespace-pre-line text-[1.06rem]">
            {post.content}
          </div>
        </div>
      </article>

      <CallBand
        heading="Dealing with this in your own home?"
        body={`We've been clearing pests across Lagos since ${company.foundedYear}. Tell us what you're seeing and we'll tell you what it takes.`}
        source={`band-blog-${post.id}`}
      />

      {related.length > 0 && (
        <section className="bg-bone section-y">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-display text-2xl font-bold">Keep reading</h2>
            <ul className="mt-6 space-y-3">
              {related.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/blog/${p.id}`}
                    className="group flex items-center justify-between gap-4 border border-bone-300 rounded-xl px-5 py-4 bg-white hover:border-brand-300 hover:shadow-md transition-all"
                  >
                    <span className="font-semibold text-sm">{p.title}</span>
                    <ArrowRight
                      size={16}
                      className="text-brand-600 shrink-0 group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogDetail;
