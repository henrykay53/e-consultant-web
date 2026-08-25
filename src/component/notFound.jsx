import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "./seo";
import CallButton from "./callButton";
import WhatsAppButton from "./whatsappButton";
import LiveStatus from "./liveStatus";
import { services } from "../data";

const NotFound = () => (
  <section className="relative overflow-hidden bg-bone bugs-light">
    <Seo
      title="Page not found"
      description="That page could not be found. Call or message us and we'll point you the right way."
      path="/404"
      noindex
    />

    <div className="relative max-w-2xl mx-auto px-4 py-20 md:py-28 text-center">
      <p className="font-display text-7xl font-bold text-brand-200">404</p>
      <h1 className="mt-4 text-4xl font-bold">This page has been fumigated</h1>
      <p className="mt-4 text-lg text-ink-soft">
        The link is either out of date or slightly mistyped. Your pest problem,
        unfortunately, is still there — so let&apos;s deal with that instead.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <CallButton source="404" />
        <WhatsAppButton
          source="404"
          message="Hi! I hit a broken link on your website."
        />
      </div>

      <div className="mt-5 flex justify-center">
        <LiveStatus />
      </div>

      <div className="mt-12 text-left bg-white border border-bone-300 rounded-2xl p-6">
        <h2 className="font-display text-lg font-bold">Popular pages</h2>
        <ul className="mt-4 grid sm:grid-cols-2 gap-2.5 text-sm">
          {services.slice(0, 4).map((s) => (
            <li key={s.id}>
              <Link
                to={`/services/${s.id}`}
                className="group inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:gap-2.5 transition-all"
              >
                {s.title}
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/pricing"
              className="group inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:gap-2.5 transition-all"
            >
              Pricing &amp; instant quote <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link
              to="/areas"
              className="group inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:gap-2.5 transition-all"
            >
              Areas we cover <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default NotFound;
