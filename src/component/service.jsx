import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bug, ShieldCheck, Home, Trees, SprayCan, PawPrint, ArrowRight, Phone } from "lucide-react";
import { services } from "../data";
import { telHref } from "../siteConfig";
import { trackCall } from "../helper";

const iconMap = {
  general: Bug,
  termite: ShieldCheck,
  home: Home,
  outdoor: Trees,
  disinfection: SprayCan,
  petSafe: PawPrint,
};

export default function Services({ showHeading = true }) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? services : services.slice(0, 3);

  return (
    <section className="bg-white section-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-brass-600">What we treat</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              Tell us what you&apos;re seeing
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Every treatment starts with an inspection, so you&apos;re paying for
              the problem you actually have — not a standard spray.
            </p>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((s, i) => {
            const Icon = iconMap[s.icon] || Bug;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className="group relative flex flex-col bg-bone border border-bone-300 rounded-2xl overflow-hidden hover:border-brand-300 hover:shadow-xl hover:shadow-brand-950/8 transition-all"
              >
                <Link to={`/services/${s.id}`} className="flex-grow p-6 pb-4">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-brand-600 text-white items-center justify-center shadow-md shadow-brand-900/20">
                    <Icon size={22} aria-hidden="true" />
                  </span>

                  <h3 className="mt-4 font-display text-xl font-bold group-hover:text-brand-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {s.short}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 group-hover:gap-2.5 transition-all">
                    What&apos;s involved <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>

                {/* A call CTA on every card. The visitor who is ready should
                    never have to navigate to find a phone number. */}
                <a
                  href={telHref}
                  onClick={() => trackCall(`service-card-${s.id}`)}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-t border-bone-300 text-sm font-bold text-brand-700 hover:bg-brand-600 hover:text-white transition-colors"
                >
                  <Phone size={15} aria-hidden="true" /> Call about {s.title.toLowerCase()}
                </a>
              </motion.article>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-7 py-3.5 rounded-xl border-2 border-bone-300 bg-white text-sm font-bold text-ink hover:border-brand-300 hover:text-brand-700 transition-colors"
            >
              See all {services.length} treatments
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
