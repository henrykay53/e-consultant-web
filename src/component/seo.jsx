import { Helmet } from "react-helmet-async";
import { company, absoluteUrl } from "../siteConfig";

/**
 * One place for every page's title, description, canonical and social tags.
 *
 * Note: these tags are injected by React at runtime. Facebook, WhatsApp and
 * LinkedIn crawlers do not run JavaScript, which is why `npm run build` also
 * prerenders every route to static HTML (see scripts/prerender.mjs). Without
 * that step, shared links show the homepage title on every page.
 */
const Seo = ({
  title,
  description,
  path = "/",
  image = "/images/social-preview.jpg",
  type = "website",
  noindex = false,
  schema,
  children,
}) => {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);
  const fullTitle = title
    ? `${title} | ${company.name}`
    : `Fumigation & Pest Control in Lagos | ${company.name}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_NG" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
      {children}
    </Helmet>
  );
};

export default Seo;
