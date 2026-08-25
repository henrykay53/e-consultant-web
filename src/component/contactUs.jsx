import { Phone, MessageCircle, Mail, MapPin, Clock3, ShieldCheck } from "lucide-react";
import Seo from "./seo";
import PageHeader from "./pageHeader";
import Form from "./form";
import LiveStatus from "./liveStatus";
import { company, telHref, mailHref, waHref } from "../siteConfig";
import { trackCall, trackEmail, trackWhatsApp } from "../helper";

const Contact = () => (
  <>
    <Seo
      title="Contact Us"
      description={`Speak to ${company.name} about fumigation in Lagos. Call ${company.phoneDisplay}, message on WhatsApp, or leave your number and we'll ring you back.`}
      path="/contact"
    />

    <PageHeader
      eyebrow="Get in touch"
      title="One call usually settles it"
      lede="Tell us the property, the area and what you're seeing. Most people have a firm price inside two minutes."
    >
      <div className="mt-6 flex justify-center">
        <LiveStatus />
      </div>
    </PageHeader>

    <section className="bg-white section-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div className="space-y-3">
            {/* Call sits first and largest — it is the action we want. */}
            <a
              href={telHref}
              onClick={() => trackCall("contact-page")}
              className="relative overflow-hidden flex items-center gap-4 rounded-2xl bg-brand-900 bugs-dark p-6 text-white hover:shadow-2xl hover:shadow-brand-950/30 transition-shadow"
            >
              <span className="relative p-3 bg-white/10 border border-white/15 rounded-xl shrink-0">
                <Phone size={22} />
              </span>
              <span className="relative">
                <span className="eyebrow text-brass-300 block">Call us</span>
                <span className="font-display text-2xl font-bold tabular block mt-0.5">
                  {company.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={waHref(`Hi ${company.name}! I'd like a fumigation quote.`)}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsApp("contact-page")}
              className="flex items-center gap-4 rounded-2xl bg-bone border border-bone-300 p-5 hover:border-brand-300 hover:bg-white transition-all"
            >
              <span className="p-3 bg-whatsapp/10 rounded-xl text-whatsapp shrink-0">
                <MessageCircle size={21} />
              </span>
              <span>
                <span className="font-bold block">WhatsApp</span>
                <span className="text-sm text-ink-soft">Send photos of the problem</span>
              </span>
            </a>

            <a
              href={mailHref}
              onClick={() => trackEmail("contact-page")}
              className="flex items-center gap-4 rounded-2xl bg-bone border border-bone-300 p-5 hover:border-brand-300 hover:bg-white transition-all"
            >
              <span className="p-3 bg-brand-50 rounded-xl text-brand-600 shrink-0">
                <Mail size={21} />
              </span>
              <span className="min-w-0">
                <span className="font-bold block">Email</span>
                <span className="text-sm text-ink-soft break-words">{company.email}</span>
              </span>
            </a>

            {/* NAP block — identical wording to the footer and the schema. */}
            <div className="rounded-2xl bg-bone border border-bone-300 p-5 space-y-4">
              <div className="flex items-start gap-4">
                <span className="p-3 bg-brand-50 rounded-xl text-brand-600 shrink-0">
                  <MapPin size={21} />
                </span>
                <address className="not-italic">
                  <span className="font-bold block">{company.legalName}</span>
                  <span className="text-sm text-ink-soft">{company.addressLine}</span>
                </address>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-3 bg-brand-50 rounded-xl text-brand-600 shrink-0">
                  <Clock3 size={21} />
                </span>
                <span>
                  <span className="font-bold block">Opening hours</span>
                  <span className="text-sm text-ink-soft">Monday – Saturday, 7am – 8pm</span>
                </span>
              </div>

              <div className="rule-brass" />

              <p className="flex items-center gap-2.5 text-sm font-medium text-verified">
                <ShieldCheck size={17} className="shrink-0" aria-hidden="true" />
                Licensed, insured &amp; CAC registered
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Or leave it with us</h2>
            <p className="mt-2 text-ink-soft">
              Fill this in and we&apos;ll come back to you with a price. It also lands
              on WhatsApp so nothing gets lost.
            </p>
            <div className="mt-6">
              <Form source="contact-page" />
            </div>
          </div>
        </div>

        {/* TODO(owner): paste the embed URL into siteConfig.googleMapsEmbed
            once the Google Business Profile is claimed. */}
        {company.googleMapsEmbed && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold mb-5">Find us</h2>
            <iframe
              src={company.googleMapsEmbed}
              title={`Map showing ${company.legalName}`}
              className="w-full h-80 rounded-2xl border border-bone-300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </section>
  </>
);

export default Contact;
