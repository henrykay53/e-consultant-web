import { lazy, Suspense, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppShell from "./AppShell";
import { routes } from "./routes";

const RouteFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center" role="status">
    <span className="sr-only">Loading…</span>
    <div className="w-8 h-8 rounded-full border-2 border-brand-200 border-t-brand-600 animate-spin" />
  </div>
);

export default function App() {
  // Each route is its own chunk, so a visitor who only wants the phone
  // number no longer downloads the blog and the quote calculator too.
  const lazyRoutes = useMemo(
    () => routes.map((r) => ({ ...r, Component: lazy(r.importer) })),
    []
  );

  return (
    <Router>
      <AppShell>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {lazyRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
      </AppShell>
    </Router>
  );
}
