import { company, absoluteUrl } from "./siteConfig";
import { services, serviceAreas } from "./data";
import { openingHoursSpecification } from "./component/availability";

/**
 * The business entity Google reads from every page.
 *
 * Built from siteConfig and the data layer at prerender time rather than
 * hand-written in index.html, so the phone number, address, hours and areas
 * can never drift away from what the site displays — or from the Google
 * Business Profile they are meant to match.
 */
export const businessSchema = () => {
  const sameAs = Object.values(company.social).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    "@id": `${company.url}/#business`,
    name: company.name,
    legalName: company.legalName,
    image: absoluteUrl("/images/social-preview.jpg"),
    logo: absoluteUrl("/logo/logo.png"),
    description:
      "Licensed fumigation and pest control services for homes and businesses across Lagos, Nigeria.",
    url: `${company.url}/`,
    telephone: company.phone,
    email: company.email,
    foundingDate: String(company.foundedYear),
    priceRange: "₦₦",
    currenciesAccepted: "NGN",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      addressLocality: company.locality,
      postalCode: company.postalCode,
      addressRegion: company.region,
      addressCountry: company.country,
    },
    openingHoursSpecification: openingHoursSpecification(),
    areaServed: [
      { "@type": "City", name: company.city },
      ...serviceAreas.map((a) => ({ "@type": "Place", name: a.name })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pest Control Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
      })),
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
};
