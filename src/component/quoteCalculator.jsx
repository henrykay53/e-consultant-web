import { useState, useMemo } from "react";
import { MessageCircle, Info, Phone } from "lucide-react";
import {
  pricing,
  computeQuote,
  houseTypeLabels,
  fumigationTypeLabels,
  locationLabels,
} from "../data";
import { company, waHref, telHref } from "../siteConfig";
import { trackWhatsApp, trackLead, trackQuoteCalculated, trackCall } from "../helper";

const QuoteCalculator = () => {
  const [selection, setSelection] = useState({
    houseType: "Apartment",
    fumigationType: "bbTreatment",
    location: "lagosIsland",
    rooms: 0,
  });

  const total = useMemo(() => computeQuote(selection), [selection]);

  const set = (key) => (e) =>
    setSelection((s) => ({
      ...s,
      [key]:
        key === "rooms"
          ? Math.max(0, Math.min(50, Number(e.target.value) || 0))
          : e.target.value,
    }));

  // The visitor has already told us the property type, treatment and area.
  // Previously the calculator displayed a number and stopped, throwing away
  // the best-qualified lead on the site.
  const handoff = () => {
    const message = [
      `Hello ${company.name}, I used the quote calculator on your website.`,
      `Property: ${houseTypeLabels[selection.houseType]}.`,
      `Treatment: ${fumigationTypeLabels[selection.fumigationType]}.`,
      `Location: ${locationLabels[selection.location]}.`,
      `Rooms: ${selection.rooms}.`,
      `Estimate shown: ${pricing.currency}${total.toLocaleString()}.`,
      `Please confirm and book me in.`,
    ].join(" ");

    trackQuoteCalculated({ ...selection, value: total, currency: "NGN" });
    trackLead("quote-calculator", { ...selection, value: total });
    trackWhatsApp("quote-calculator");

    window.open(waHref(message), "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full p-3 border border-bone-300 rounded-lg text-sm bg-white focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition";
  const labelClass = "block text-sm font-medium text-ink-soft mb-1.5";

  return (
    <div className="mt-12 rounded-3xl border border-bone-300 bg-bone shadow-sm p-6 sm:p-9">
      <div className="text-center">
        <p className="eyebrow text-brass-600">Work it out yourself</p>
      </div>
      <h2 className="mt-3 text-3xl font-bold text-ink text-center">
        Quick quote calculator
      </h2>
      <p className="text-sm text-ink-muted text-center mt-2 max-w-lg mx-auto">
        Choose your property and treatment for an instant estimate. No sign-up,
        no waiting for a callback.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
        <div>
          <label htmlFor="qc-house" className={labelClass}>
            Property type
          </label>
          <select
            id="qc-house"
            value={selection.houseType}
            onChange={set("houseType")}
            className={fieldClass}
          >
            {Object.keys(pricing.houseType).map((key) => (
              <option key={key} value={key}>
                {houseTypeLabels[key]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="qc-treatment" className={labelClass}>
            Treatment type
          </label>
          <select
            id="qc-treatment"
            value={selection.fumigationType}
            onChange={set("fumigationType")}
            className={fieldClass}
          >
            {Object.keys(pricing.fumigationType).map((key) => (
              <option key={key} value={key}>
                {fumigationTypeLabels[key]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="qc-location" className={labelClass}>
            Location
          </label>
          <select
            id="qc-location"
            value={selection.location}
            onChange={set("location")}
            className={fieldClass}
          >
            {Object.keys(pricing.location).map((key) => (
              <option key={key} value={key}>
                {locationLabels[key]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="qc-rooms" className={labelClass}>
            Extra rooms
          </label>
          <input
            id="qc-rooms"
            type="number"
            min="0"
            max="50"
            value={selection.rooms}
            onChange={set("rooms")}
            className={fieldClass}
            placeholder="e.g. 3"
          />
        </div>
      </div>

      <div className="mt-8 relative overflow-hidden rounded-2xl bg-brand-900 bugs-dark p-7 text-center">
        <div className="relative">
          <div className="text-brand-100/75 text-sm font-medium">
            Estimated price
          </div>
          <div
            className="font-display text-5xl font-bold text-white mt-2 tabular"
            aria-live="polite"
          >
            {pricing.currency}
            {total.toLocaleString()}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={telHref}
              onClick={() => {
                trackQuoteCalculated({ ...selection, value: total, currency: "NGN" });
                trackCall("quote-calculator");
              }}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-brand-700 font-bold hover:bg-brass-100 shadow-lg shadow-black/20 transition-colors"
            >
              <Phone size={18} aria-hidden="true" />
              <span>
                Confirm on a call · <span className="tabular">{company.phoneDisplay}</span>
              </span>
            </a>

            <button
              type="button"
              onClick={handoff}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Send to WhatsApp
            </button>
          </div>

          <p className="mt-5 text-xs text-brand-100/70 flex items-center justify-center gap-1.5">
            <Info size={13} aria-hidden="true" />
            An estimate, not an invoice — the survey confirms the final price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCalculator;
