import { Link } from "react-router-dom";
import { Quote, Star, ExternalLink } from "lucide-react";
import { testimonials } from "../data";
import { company } from "../siteConfig";

/**
 * No JSON-LD here — this component used to inject a second LocalBusiness
 * under a different name, so the homepage declared two competing companies.
 * Review stars in search results come from the Google Business Profile.
 */
const Testimonials = () => (
  <section className="relative overflow-hidden bg-bone-200 bugs-light section-y">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow text-brass-600">In their words</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
          The people who let us in
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <figure
            key={idx}
            className="bg-white rounded-2xl border border-bone-300 p-6 flex flex-col shadow-sm hover:shadow-lg transition-shadow"
          >
            <Quote size={26} className="text-brand-200 shrink-0" aria-hidden="true" />
            <blockquote className="mt-3 text-ink-soft leading-relaxed flex-grow">
              {t.text}
            </blockquote>

            <div className="mt-5 pt-4 border-t border-bone-200 flex items-center justify-between gap-3">
              <figcaption className="text-sm">
                <span className="font-bold block">{t.name}</span>
                {(t.area || t.date) && (
                  <span className="text-ink-muted text-xs">
                    {[t.area, t.date].filter(Boolean).join(" · ")}
                  </span>
                )}
              </figcaption>
              <div className="flex gap-0.5 shrink-0" aria-label="5 out of 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-brass-500 text-brass-500" />
                ))}
              </div>
            </div>
          </figure>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Link
          to="/pricing"
          className="px-7 py-3.5 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 shadow-lg shadow-brand-900/15 transition-colors"
        >
          See what it costs
        </Link>

        {company.googleReviewUrl && (
          <a
            href={company.googleReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl border-2 border-bone-300 bg-white font-bold inline-flex items-center gap-2 hover:border-brand-300 transition-colors"
          >
            Read our Google reviews <ExternalLink size={15} />
          </a>
        )}
      </div>
    </div>
  </section>
);

export default Testimonials;
