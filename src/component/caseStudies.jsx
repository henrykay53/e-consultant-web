import { Link } from "react-router-dom";
import { caseStudies } from "../data";

/**
 * Renders nothing until the owner adds real work to `caseStudies` in
 * data.js. Fumigation is an invisible service, so photographic proof is
 * the strongest trust signal available — but inventing case studies
 * would be worse than showing none.
 *
 * Shape:
 *   { id, title, location, problem, work, result, image, alt }
 */
const CaseStudies = () => {
  if (!caseStudies.length) return null;

  return (
    <section className="relative overflow-hidden bg-bone bugs-light border-y border-bone-300">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-y">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-brass-600">Proof</p>
          <h2 className="mt-3 text-4xl font-bold">Recent work</h2>
          <p className="mt-3 text-ink-soft">
            Real jobs across Lagos — what the problem was, what we did, and how
            it turned out.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="bg-white rounded-2xl border border-bone-300 overflow-hidden hover:border-brand-300 hover:shadow-xl hover:shadow-brand-950/8 transition-all"
            >
              {study.image && (
                <img
                  src={study.image}
                  alt={study.alt || ""}
                  width="640"
                  height="360"
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{study.title}</h3>
                {study.location && (
                  <p className="text-sm text-ink-muted mt-0.5">{study.location}</p>
                )}
                <dl className="mt-4 space-y-3 text-sm">
                  {[
                    ["Problem", study.problem],
                    ["What we did", study.work],
                    ["Result", study.result],
                  ]
                    .filter(([, v]) => v)
                    .map(([label, value]) => (
                      <div key={label}>
                        <dt className="font-semibold text-ink">{label}</dt>
                        <dd className="text-ink-soft leading-relaxed">{value}</dd>
                      </div>
                    ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/pricing"
            className="inline-block px-7 py-3.5 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 shadow-lg shadow-brand-900/15 transition-colors"
          >
            Get a quote for your property
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
