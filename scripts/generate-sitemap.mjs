/**
 * Writes dist/sitemap.xml and dist/robots.txt from the same route list the
 * prerenderer uses, so they can never drift apart.
 */
import { writeFileSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { routePaths } from "./routePaths.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Read the canonical origin straight out of siteConfig so changing the
// domain in one place updates the sitemap too.
const config = readFileSync(join(root, "src", "siteConfig.js"), "utf8");
const origin = (config.match(/url:\s*"([^"]+)"/) || [])[1]?.replace(/\/$/, "");

if (!origin) {
  console.error("[sitemap] Could not read `url` from src/siteConfig.js");
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

const priorityFor = (path) => {
  if (path === "/") return "1.0";
  if (path === "/pricing" || path === "/contact") return "0.9";
  if (path.startsWith("/services") || path.startsWith("/areas")) return "0.8";
  if (path.startsWith("/blog/")) return "0.6";
  return "0.7";
};

const urls = routePaths
  .map(
    (path) => `  <url>
    <loc>${origin}${path === "/" ? "/" : path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path.startsWith("/blog/") ? "yearly" : "monthly"}</changefreq>
    <priority>${priorityFor(path)}</priority>
  </url>`
  )
  .join("\n");

writeFileSync(
  join(root, "dist", "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  "utf8"
);

writeFileSync(
  join(root, "dist", "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`,
  "utf8"
);

console.log(`[sitemap] ${routePaths.length} URLs written for ${origin}`);
