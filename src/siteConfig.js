// Single source of truth for business facts.
// Anything that appears in more than one place on the site belongs here,
// so claims can never drift out of sync across components.

export const company = {
  name: "E Consultants Global Tiija",
  legalName: "E Consultants Global Tiija LTD",
  tagline: "Licensed fumigation & pest control across Lagos.",

  // TODO(owner): replace with your own domain once purchased, then re-run
  // `npm run build` so canonicals, sitemap and social tags all follow.
  url: "https://econsultantsglobaltiija.netlify.app",

  phone: "+2349056981893",
  phoneDisplay: "0905 698 1893",
  whatsapp: "2349056981893",
  email: "econsultantglobaltiija@gmail.com",

  addressLine: "12 Angelica Avenue, GoodHomes Estate, Ajah, Lagos",
  street: "12 Angelica Avenue, GoodHomes Estate",
  locality: "Ajah",
  city: "Lagos",
  region: "Lagos State",
  country: "NG",

  foundedYear: 2000,
  openingHours: "Mo-Sa 08:00-18:00",
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
