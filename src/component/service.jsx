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

/** Compact enough that all six fit on screen together. */
const ServiceCard = ({ service, elevated = false }) => {
  const Icon = iconMap[service.icon] || Bug;

  return (
    <article
      className={`group relative flex flex-col h-full bg-bone border border-bone-300 rounded-2xl overflow-hidden transition-all hover:border-brand-300 ${
        elevated
          ? "shadow-xl shadow-brand-950/12"
          : "hover:shadow-xl hover:shadow-brand-950/8"
      }`}
    >
      <Link to={`/services/${service.id}`} className="flex-grow p-5">
        <span className="inline-flex w-11 h-11 rounded-xl bg-brand-600 text-white items-center justify-center shadow-md shadow-brand-900/20">
          <Icon size={20} aria-hidden="true" />
        </span>

        <h3 className="mt-3.5 font-display text-lg font-bold leading-snug group-hover:text-brand-700 transition-colors">
          {service.title}
        </h3>
        <p className="mt-1.5 text-sm text-ink-soft leading-relaxed line-clamp-2">
          {service.short}
        </p>

        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 group-hover:gap-2.5 transition-all">
          What&apos;s involved <ArrowRight size={14} aria-hidden="true" />
        </span>
      </Link>

      {/* A call CTA on every card — a visitor who is ready should never have
          to navigate to find a phone number. */}
      <a
        href={telHref}
        onClick={() => trackCall(`service-card-${service.id}`)}
        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border-t border-bone-300 text-sm font-bold text-brand-700 hover:bg-brand-600 hover:text-white transition-colors"
      >
        <Phone size={14} aria-hidden="true" /> Call now
      </a>
    </article>
  );
};

export default function Services({ showHeading = true }) {
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

        {/* Mobile: the cards stack on top of each other as you scroll rather
            than running on as a six-card list. Each card sticks 10px lower
            than the one before, so the pile stays visible behind the top
            card. Pure CSS sticky — no scroll listeners. */}
        <div className="sm:hidden mt-9">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="sticky pb-4"
              style={{ top: `${86 + i * 10}px`, zIndex: i + 1 }}
            >
              <ServiceCard service={service} elevated />
            </div>
          ))}
          {/* Lets the final card settle at the top of the stack before the
              section scrolls away. */}
          <div aria-hidden="true" className="h-24" />
        </div>

        {/* Tablet and desktop: all six at once, two rows of three. */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
