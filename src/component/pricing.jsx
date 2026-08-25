import { Link } from "react-router-dom";
import { AlertTriangle, Check, Star } from "lucide-react";
import Seo from "./seo";
import PageHeader from "./pageHeader";
import QuoteCalculator from "./quoteCalculator";
import CallBand from "./callBand";
import ClosingCta from "./closingCta";
import { pricingTiers, pricing } from "../data";

const Pricing = () => (
  <>
    <Seo
      title="Pricing &amp; Instant Quotes"
      description="Transparent fumigation pricing for Lagos. Use the instant calculator for homes, estates and commercial properties, or call for a firm price on the spot."
      path="/pricing"
    />

    <PageHeader
      eyebrow="Pricing"
      title="No surprises at the gate"
      lede="Every figure below comes from the same calculator you can use yourself. We agree a firm price before anyone unloads equipment in your compound."
    />

    <section className="bg-white section-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-7 transition-all ${
                tier.highlight
                  ? "bg-brand-900 text-white shadow-2xl shadow-brand-950/25"
                  : "bg-bone border border-bone-300 hover:border-brand-300"
              }`}
            >
              {tier.highlight && (
                <span className="inline-flex items-center gap-1.5 eyebrow text-brand-900 bg-brass-300 px-2.5 py-1 rounded-full mb-4">
                  <Star size={11} className="fill-brand-900" aria-hidden="true" />
                  Most booked
                </span>
              )}

              <h2 className="font-display text-xl font-bold">{tier.name}</h2>

              <p className="mt-4">
                <span
                  className={`text-sm ${
                    tier.highlight ? "text-brand-100/70" : "text-ink-muted"
                  }`}
                >
                  from{" "}
                </span>
                <span className="font-display text-4xl font-bold tabular">
                  {pricing.currency}
                  {tier.from.toLocaleString()}
                </span>
              </p>

              <p
                className={`text-sm mt-3 leading-relaxed ${
                  tier.highlight ? "text-brand-100/85" : "text-ink-soft"
                }`}
              >
                {tier.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {tier.fits.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2.5 text-sm ${
                      tier.highlight ? "text-brand-100/85" : "text-ink-soft"
                    }`}
                  >
                    <Check
                      size={16}
                      className={`shrink-0 mt-0.5 ${
                        tier.highlight ? "text-brass-300" : "text-verified"
                      }`}
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 bg-brass-100 border-l-4 border-brass-500 rounded-r-xl p-5">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-brass-600" aria-hidden="true" />
          <p className="text-sm text-ink-soft">
            <strong className="text-ink">These are starting figures.</strong> The
            final price depends on the size of the property, how far the
            infestation has spread and access. We confirm the exact number before
            any work begins — never after.
          </p>
        </div>

        <QuoteCalculator />
      </div>
    </section>

    <CallBand
      heading="Rather just ask a person?"
      body="Give us the property type and your area and we'll quote you on the call. No forms, no waiting for an email."
      source="band-pricing"
    />

    <ClosingCta />
  </>
);

export default Pricing;
