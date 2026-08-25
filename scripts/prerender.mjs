/**
 * Bakes every route into static HTML.
 *
 * Facebook, WhatsApp and LinkedIn crawlers do not execute JavaScript, so
 * react-helmet-async tags never reached them — sharing any page showed the
 * homepage title and no image. This renders each route at build time and
 * writes the resulting markup and <head> tags into its own index.html.
 *
 * Netlify serves a real file in preference to the SPA _redirects rule, so
 * /services/index.html is what a crawler (and a first-time visitor) gets.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const ssrEntry = join(root, "dist-ssr", "entry-server.js");

if (!existsSync(ssrEntry)) {
  console.error("[prerender] SSR bundle missing — run `vite build --ssr` first.");
  process.exit(1);
}

const { render } = await import(ssrEntry);
const { routePaths } = await import(join(root, "scripts", "routePaths.mjs"));

const template = readFileSync(join(distDir, "index.html"), "utf8");

let ok = 0;
for (const route of routePaths) {
  try {
    const { html, head } = await render(route);

    // Drop the template's fallback SEO tags. Every route renders <Seo>, so
    // leaving them in would emit two canonicals and two og:url values.
    const base = template
      .replace(/\n?\s*<title>[\s\S]*?<\/title>/, "")
      .replace(/\n?\s*<meta name="description"[^>]*>/g, "")
      .replace(/\n?\s*<link rel="canonical"[^>]*>/g, "")
      .replace(/\n?\s*<meta property="og:[^>]*>/g, "")
      .replace(/\n?\s*<meta name="twitter:[^>]*>/g, "");

    let page = base.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    if (head) {
      // Helmet's tags win over the defaults already in the template.
      page = page.replace("</head>", `  ${head}\n  </head>`);
    }

    const outPath =
      route === "/"
        ? join(distDir, "index.html")
        : join(distDir, route, "index.html");

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, page, "utf8");
    ok += 1;
  } catch (err) {
    console.error(`[prerender] FAILED ${route}: ${err.message}`);
    process.exitCode = 1;
  }
}

// The SSR bundle is a build artefact, not something to deploy.
rmSync(join(root, "dist-ssr"), { recursive: true, force: true });

console.log(`[prerender] ${ok}/${routePaths.length} routes prerendered`);
