import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppShell from "./AppShell";
import { routes } from "./routes";
import "./index.css";

/**
 * Renders one route to static HTML plus its Helmet tags, so social crawlers
 * (which never execute JavaScript) see the correct title, description and
 * og:image for every page instead of the homepage's.
 */
export async function render(url) {
  const resolved = await Promise.all(
    routes.map(async (r) => ({ path: r.path, Component: (await r.importer()).default }))
  );

  const helmetContext = {};

  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppShell>
            <Routes>
              {resolved.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </AppShell>
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );

  const { helmet } = helmetContext;
  // `prioritizeSeoTags` on <Helmet> moves title, canonical and the og:/
  // twitter: tags into `helmet.priority`. Emitting only meta/link/title
  // silently dropped every per-page canonical and og:url.
  const head = helmet
    ? [
        helmet.priority?.toString(),
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join("\n    ")
    : "";

  return { html, head };
}
