import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * Every interior page opens the same way: brass eyebrow, serif headline,
 * bone ground with the bug texture behind it. Keeps the pages reading as
 * one site rather than a set of separately-built templates.
 */
const PageHeader = ({
  eyebrow,
  title,
  lede,
  breadcrumbs = [],
  align = "center",
  children,
}) => (
  <section className="relative overflow-hidden bg-gradient-to-b from-bone-200 to-bone bugs-light border-b border-bone-300">
    <div
      className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {breadcrumbs.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          className={`flex items-center gap-1 text-sm text-ink-muted mb-5 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={13} aria-hidden="true" />}
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-brand-700 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-ink-soft font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}

      {eyebrow && <p className="eyebrow text-brass-600">{eyebrow}</p>}

      <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-[1.05]">
        {title}
      </h1>

      {lede && (
        <p
          className={`mt-5 text-lg text-ink-soft leading-relaxed ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {lede}
        </p>
      )}

      {children}
    </div>
  </section>
);

export default PageHeader;
