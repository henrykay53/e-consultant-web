import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { serviceAreas } from "../data";

/**
 * Island first, and said out loud. Operations are concentrated there, so
 * the page should promise what we can actually deliver rather than claiming
 * uniform coverage of all of Lagos.
 */
const Coverage = () => {
  const island = serviceAreas.filter((a) => a.zone === "lagosIsland");
  const mainland = serviceAreas.filter((a) => a.zone !== "lagosIsland");

  return (
    <section className="bg-white section-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-brass-600">Where we work</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Most days, we&apos;re on the Island
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Our vans are based on the Lekki–Epe axis, so Island bookings
            usually get a same-day slot. We cross to the Mainland daily on
            scheduled runs.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-3xl bg-brand-900 bugs-dark p-7 sm:p-9">
            <div className="relative">
              <span className="eyebrow text-brass-300">Primary coverage</span>
              <h3 className="mt-2 font-display text-3xl font-bold text-white">
                Lagos Island
              </h3>
              <p className="mt-2.5 text-brand-100/85 text-sm leading-relaxed">
                Same-day slots most weekdays. Estate clearance handled for you.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {island.map((a) => (
                  <li key={a.id}>
                    <Link
                      to={`/areas/${a.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-2 rounded-lg bg-white/10 text-white border border-white/15 hover:bg-white hover:text-brand-800 transition-colors"
                    >
                      <MapPin size={13} aria-hidden="true" />
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl bg-bone border border-bone-300 p-7 sm:p-9">
            <span className="eyebrow text-brass-600">Also covered</span>
            <h3 className="mt-2 font-display text-3xl font-bold">Lagos Mainland</h3>
            <p className="mt-2.5 text-ink-soft text-sm leading-relaxed">
              Scheduled runs across the bridges. Book a day ahead and we&apos;ll fix
              a time window rather than keep you waiting.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {mainland.map((a) => (
                <li key={a.id}>
                  <Link
                    to={`/areas/${a.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-2 rounded-lg bg-white border border-bone-300 hover:border-brand-300 hover:text-brand-700 transition-colors"
                  >
                    <MapPin size={13} aria-hidden="true" />
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/areas"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:gap-2.5 transition-all"
            >
              All areas we cover <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
