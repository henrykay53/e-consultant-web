import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin, Check, ArrowRight, Clock3 } from "lucide-react";
import Seo from "./seo";
import PageHeader from "./pageHeader";
import Form from "./form";
import CallBand from "./callBand";
import CallButton from "./callButton";
import WhatsAppButton from "./whatsappButton";
import LiveStatus from "./liveStatus";
import { serviceAreas, services, locationLabels } from "../data";
import { company, absoluteUrl } from "../siteConfig";

const AreaDetail = () => {
  const { id } = useParams();
  const area = serviceAreas.find((a) => a.id === id);

  if (!area) return <Navigate to="/areas" replace />;

  const isIsland = area.zone === "lagosIsland";
  const waMessage = `Hello ${company.name}, I need fumigation in ${area.name}, Lagos. Please send me a quote.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fumigation and pest control",
    provider: { "@id": `${company.url}/#business` },
    areaServed: { "@type": "Place", name: `${area.name}, Lagos` },
    url: absoluteUrl(`/areas/${area.id}`),
  };

  return (
    <>
      <Seo
        title={`Fumigation in ${area.name}, Lagos`}
        description={`${area.blurb} Licensed technicians, discreet vehicles and a 30-day guarantee. Call ${company.phoneDisplay}.`}
        path={`/areas/${area.id}`}
        schema={schema}
      />

      <PageHeader
        align="left"
        breadcrumbs={[
          { label: "Areas", to: "/areas" },
          { label: area.name },
        ]}
        eyebrow={locationLabels[area.zone]}
        title={`Fumigation & Pest Control in ${area.name}`}
        lede={area.blurb}
      >
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <CallButton source={`area-${area.id}`} />
          <WhatsAppButton source={`area-${area.id}`} message={waMessage} />
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <LiveStatus />
          {isIsland && (
            <span className="inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-full bg-brand-100 text-brand-700 border border-brand-200">
              <Clock3 size={13} aria-hidden="true" /> Same-day slots most weekdays
            </span>
          )}
        </div>
      </PageHeader>

      <section className="bg-white section-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <div>
            <p className="eyebrow text-brass-600">On the ground</p>
            <h2 className="mt-3 text-3xl font-bold">
              What we see most often in {area.name}
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">{area.context}</p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {area.common.map((pest) => (
                <li
                  key={pest}
                  className="flex items-start gap-3 bg-bone border border-bone-300 rounded-xl px-4 py-3"
                >
                  <Check size={17} className="text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-ink-soft">{pest}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold">
              Treatments available in {area.name}
            </h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="group flex items-center justify-between gap-3 border border-bone-300 rounded-xl px-4 py-3.5 bg-bone hover:border-brand-300 hover:bg-white transition-all"
                >
                  <span className="font-semibold text-sm">{s.title}</span>
                  <ArrowRight
                    size={16}
                    className="text-brand-600 shrink-0 group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-2xl font-bold">Get a quote for {area.name}</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Or just ring us — it&apos;s usually faster.
            </p>
            <div className="mt-5">
              <Form source={`area-${area.id}`} defaultArea={area.name} />
            </div>
          </div>
        </div>
      </section>

      <CallBand
        heading={`We're in ${area.name} regularly`}
        body="Tell us your estate and what you're seeing. We'll tell you the next slot we can get to you."
        source={`band-area-${area.id}`}
        message={waMessage}
      />

      <section className="bg-bone section-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold">Other areas we cover</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {serviceAreas
              .filter((a) => a.id !== area.id)
              .map((a) => (
                <Link
                  key={a.id}
                  to={`/areas/${a.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-2 rounded-lg bg-white border border-bone-300 hover:border-brand-300 hover:text-brand-700 transition-colors"
                >
                  <MapPin size={13} aria-hidden="true" />
                  {a.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AreaDetail;
