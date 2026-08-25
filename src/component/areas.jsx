import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Clock3 } from "lucide-react";
import Seo from "./seo";
import PageHeader from "./pageHeader";
import CallBand from "./callBand";
import { serviceAreas } from "../data";

const AreaCard = ({ area, primary }) => (
  <Link
    to={`/areas/${area.id}`}
    className={`group flex flex-col rounded-2xl p-6 transition-all ${
      primary
        ? "bg-brand-900 text-white hover:shadow-2xl hover:shadow-brand-950/30"
        : "bg-white border border-bone-300 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-950/8"
    }`}
  >
    <div className="flex items-center gap-2">
      <MapPin
        size={17}
        className={primary ? "text-brass-300" : "text-brand-600"}
        aria-hidden="true"
      />
      <h2 className="font-display text-xl font-bold">{area.name}</h2>
    </div>

    <p
      className={`mt-3 text-sm leading-relaxed flex-grow ${
        primary ? "text-brand-100/85" : "text-ink-soft"
      }`}
    >
      {area.blurb}
    </p>

    <span
      className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all ${
        primary ? "text-brass-300" : "text-brand-700"
      }`}
    >
      Fumigation in {area.name} <ArrowRight size={15} aria-hidden="true" />
    </span>
  </Link>
);

const Areas = () => {
  const island = serviceAreas.filter((a) => a.zone === "lagosIsland");
  const mainland = serviceAreas.filter((a) => a.zone !== "lagosIsland");

  return (
    <>
      <Seo
        title="Areas We Cover in Lagos"
        description="Licensed fumigation across Lekki, Victoria Island, Ikoyi, Ajah, Ikeja, Yaba, Surulere and Gbagada. Same-day slots on the Island, scheduled runs to the Mainland."
        path="/areas"
      />

      <PageHeader
        eyebrow="Where we work"
        title="Island first, Mainland daily"
        lede="Our vans are based on the Lekki–Epe axis, so Island bookings usually get a same-day slot. We cross the bridges on scheduled runs — book a day ahead and we'll fix a time window."
      />

      <section className="bg-bone section-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl font-bold">Lagos Island</h2>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-brand-100 text-brand-700 border border-brand-200">
              <Clock3 size={12} aria-hidden="true" /> Same-day
            </span>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {island.map((a) => (
              <AreaCard key={a.id} area={a} primary />
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold mt-14">Lagos Mainland</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mainland.map((a) => (
              <AreaCard key={a.id} area={a} />
            ))}
          </div>
        </div>
      </section>

      <CallBand
        heading="Don't see your estate?"
        body="We cover more of Lagos than we list here. Ring us with your address and we'll tell you straight away whether we can reach you today."
        source="band-areas"
      />
    </>
  );
};

export default Areas;
