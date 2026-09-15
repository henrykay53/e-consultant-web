// Single source of truth for business facts.
// Anything that appears in more than one place on the site belongs here,
// so claims can never drift out of sync across components.

export const company = {
  name: "E Consultants Global Tiija",
  legalName: "E Consultants Global Tiija LTD",
  tagline: "Licensed fumigation & pest control across Lagos.",

  // The canonical domain. Canonicals, og:url, the sitemap, robots.txt and
  // the structured-data @id all derive from this — never hardcode the host.
  url: "https://econsultantsglobaltiija.com.ng",

  // Must match the Google Business Profile exactly — Google cross-checks the
  // name, address and phone on the site against the listing.
  phone: "+2348022235317",
  phoneDisplay: "0802 223 5317",
  whatsapp: "2348022235317",
  email: "econsultantglobaltiija@gmail.com",

  addressLine: "Renaissance Place, Good Homes Estate, Lekki, Ajah, Lagos 101245",
  street: "Renaissance Place, Good Homes Estate, Lekki",
  postalCode: "101245",
  locality: "Ajah",
  city: "Lagos",
  region: "Lagos State",
  country: "NG",

  foundedYear: 2000,
  // Opening hours — must match the Google Business Profile.
  // 24-hour "HH:MM"; null means closed. Everything else derives from this:
  // the footer, the Contact page, the live "answering calls now" badge and
  // the hours Google reads from the structured data.
  hours: {
    Mon: ["08:00", "17:00"],
    Tue: ["08:00", "17:00"],
    Wed: ["08:00", "17:00"],
    Thu: ["08:00", "17:00"],
    Fri: ["08:00", "17:00"],
    Sat: ["08:00", "17:00"],
    Sun: null,
  },
  gaId: "G-PEN5VGLJFT",

  // TODO(owner): paste real profile URLs. Empty values stay hidden in the UI.
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    twitter: "",
  },

  // TODO(owner): paste your Google Business Profile review link once claimed.
  googleReviewUrl: "",
  googleMapsEmbed: "",
};

/** Years in business, derived so "25+ years" can never contradict "since 2000". */
export const yearsOperating = new Date().getFullYear() - company.foundedYear;

export const telHref = `tel:${company.phone}`;

export const mailHref = `mailto:${company.email}`;

/** WhatsApp deep link, optionally pre-filled with a message. */
export const waHref = (message) =>
  `https://wa.me/${company.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

/** Absolute URL for canonicals and social tags, which must never be relative. */
export const absoluteUrl = (path = "/") => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${company.url}${path.startsWith("/") ? path : `/${path}`}`;
};

export default company;
