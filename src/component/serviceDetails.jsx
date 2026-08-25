import { useParams, Link, Navigate } from "react-router-dom";
import {
  Bug, ShieldCheck, Home, Trees, SprayCan, PawPrint,
  Check, AlertCircle, ArrowRight, MapPin,
} from "lucide-react";
import Seo from "./seo";
import PageHeader from "./pageHeader";
import Form from "./form";
import CallBand from "./callBand";
import CallButton from "./callButton";
import WhatsAppButton from "./whatsappButton";
import LiveStatus from "./liveStatus";
import { services, serviceAreas, pricing } from "../data";
import { company, absoluteUrl } from "../siteConfig";

const iconMap = {
  general: Bug,
  termite: ShieldCheck,
  home: Home,
  outdoor: Trees,
  disinfection: SprayCan,
  petSafe: PawPrint,
};

const steps = [
  ["Inspection & firm price", "We find the source before we quote, then give you a figure that doesn't move once we start."],
  ["Targeted treatment", "Applied where the pests actually live and breed — not sprayed indiscriminately around the skirting."],
  ["Certificate & follow-up", "A treatment certificate for your records, and a follow-up visit inside the guarantee period."],
];

const faqs = [
  ["Is this safe for children and pets?", "Yes. We use child and pet-safe formulations and write down exact re-entry times before we leave. Tell us in advance if anyone in the home is pregnant, asthmatic or immunocompromised."],
  ["Will the neighbours know?", "No. Our vehicles are unmarked and technicians arrive in plain uniform with photo ID your estate security can check."],
  ["How long until we see results?", "Most pests are cleared within 24–72 hours. Termite and bed bug work can need a second visit, which is included."],
  ["Do we need to leave the property?", "For a targeted treatment, usually a few hours. Whole-property fumigation needs longer — we confirm exact timings when we quote."],
  ["What if they come back?", "Inside 30 days we return and re-treat at no extra cost. You don't pay twice for the same problem."],
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((x) => x.id === id);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = iconMap[service.icon] || Bug;
  const fromPrice = service.priceKey
    ? pricing.fumigationType[service.priceKey] + pricing.houseType.Apartment
    : null;

  const waMessage = `Hello ${company.name}, I'd like a quote for ${service.title.toLowerCase()}.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.details,
    serviceType: service.title,
    provider: { "@id": `${company.url}/#business` },
    areaServed: { "@type": "City", name: "Lagos" },
    url: absoluteUrl(`/services/${service.id}`),
  };

  return (
    <>
      <Seo
        title={service.metaTitle || service.title}
        description={service.metaDescription || service.short}
        path={`/services/${service.id}`}
        schema={schema}
      />

      <PageHeader
        align="left"
        breadcrumbs={[{ label: "Services", to: "/services" }, { label: service.title }]}
        eyebrow="Treatment"
        title={service.title}
        lede={service.details}
      >
        <div className="mt-6 flex items-center gap-4">
          <span className="inline-flex w-14 h-14 rounded-2xl bg-brand-600 text-white items-center justify-center shadow-lg shadow-brand-900/20 shrink-0">
            <Icon size={26} aria-hidden="true" />
          </span>
          {fromPrice && (
            <p className="text-ink-soft">
              From{" "}
              <strong className="font-display text-2xl text-brand-700">
                {pricing.currency}
                {fromPrice.toLocaleString()}
              </strong>
              <Link
                to="/pricing"
                className="block text-sm text-brand-700 underline underline-offset-4 decoration-brand-300"
              >
                get an exact figure
              </Link>
            </p>
          )}
        </div>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <CallButton source={`service-${service.id}`} />
          <WhatsAppButton source={`service-${service.id}`} message={waMessage} />
        </div>
        <div className="mt-5"><LiveStatus /></div>
      </PageHeader>

      <section className="bg-white section-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <div>
            {service.signs?.length > 0 && (
              <>
                <p className="eyebrow text-brass-600">Know the signs</p>
                <h2 className="mt-3 text-3xl font-bold">
                  How you&apos;ll know it&apos;s {service.title.toLowerCase()}
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {service.signs.map((sign) => (
                    <li key={sign} className="flex items-start gap-3">
                      <AlertCircle size={18} className="text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-ink-soft">{sign}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {service.includes?.length > 0 && (
              <>
                <h2 className="mt-12 text-2xl font-bold">What the treatment includes</h2>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 bg-bone border border-bone-300 rounded-xl px-4 py-3"
                    >
                      <Check size={17} className="text-verified shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="mt-12 text-2xl font-bold">How it works</h2>
            <ol className="mt-6 space-y-6">
              {steps.map(([title, body], i) => (
                <li key={title} className="flex gap-4">
                  <span className="w-9 h-9 rounded-xl bg-brand-600 text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{title}</h3>
                    <p className="text-sm text-ink-soft mt-1 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 text-2xl font-bold">Common questions</h2>
            <div className="mt-5 rounded-2xl border border-bone-300 bg-bone divide-y divide-bone-300 overflow-hidden">
              {faqs.map(([q, a]) => (
                <details key={q} className="group p-5">
                  <summary className="cursor-pointer font-semibold list-none flex items-center justify-between gap-4">
                    {q}
                    <ArrowRight
                      size={16}
                      className="text-brand-600 shrink-0 group-open:rotate-90 transition-transform"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-2xl font-bold">Request a quote</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Two minutes. Or ring us — it&apos;s usually faster.
            </p>
            <div className="mt-5">
              <Form defaultService={service.id} source={`service-${service.id}`} />
            </div>
          </div>
        </div>
      </section>

      <CallBand
        heading={`Book ${service.title.toLowerCase()} today`}
        body="Tell us the property and what you're seeing. We'll give you a firm price on the call."
        source={`band-service-${service.id}`}
        message={waMessage}
      />

      <section className="bg-bone section-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold">
            {service.title} near you
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {serviceAreas.map((a) => (
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

export default ServiceDetail;
