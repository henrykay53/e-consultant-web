/**
 * Every concrete URL the site serves, expanded from the data layer so a new
 * service, area or blog post is picked up by the prerenderer and the sitemap
 * automatically.
 */
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dataSource = readFileSync(join(root, "src", "data.js"), "utf8");

/** Pulls `id: "..."` values out of a named export block in data.js. */
const idsFrom = (exportName) => {
  const start = dataSource.indexOf(`export const ${exportName}`);
  if (start === -1) return [];
  const rest = dataSource.slice(start);
  const end = rest.search(/\nexport const /);
  const block = end === -1 ? rest : rest.slice(0, end);
  return [...block.matchAll(/\bid:\s*(?:"([^"]+)"|slugify\(\s*"([^"]+)")/g)].map(
    (m) => m[1] ?? m[2]
  );
};

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const serviceIds = idsFrom("services");
export const areaIds = idsFrom("serviceAreas");
export const blogIds = idsFrom("blogPosts").map(slugify);

export const staticPaths = [
  "/",
  "/services",
  "/areas",
  "/pricing",
  "/about",
  "/blog",
  "/contact",
  "/privacy",
];

export const routePaths = [
  ...staticPaths,
  ...serviceIds.map((id) => `/services/${id}`),
  ...areaIds.map((id) => `/areas/${id}`),
  ...blogIds.map((id) => `/blog/${id}`),
];
