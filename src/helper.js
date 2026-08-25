// GA4 event helpers.
//
// Every lead-generating interaction on the site routes through here. Before
// this existed, only blog opens were tracked, so there was no way to tell
// which pages or campaigns actually produced phone calls.
//
// Mark `generate_lead` and `contact` as conversions in the GA4 admin.

export const logEvent = (action, params = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
};

/** Someone tapped a phone number. `source` says which CTA. */
export const trackCall = (source) =>
  logEvent("contact", { method: "phone", source });

/** Someone tapped an email address. */
export const trackEmail = (source) =>
  logEvent("contact", { method: "email", source });

/** Someone opened WhatsApp. */
export const trackWhatsApp = (source, params = {}) =>
  logEvent("contact", { method: "whatsapp", source, ...params });

/** Someone submitted a quote request — the conversion that matters. */
export const trackLead = (source, params = {}) =>
  logEvent("generate_lead", { currency: "NGN", source, ...params });

/** Someone used the calculator. Useful for spotting price drop-off. */
export const trackQuoteCalculated = (params = {}) =>
  logEvent("quote_calculated", params);
