// Single source of truth for routes.
//
// The browser build wraps each importer in React.lazy for code splitting;
// the prerender build awaits them eagerly, so the static HTML contains real
// content and real meta tags rather than a Suspense fallback.

export const routes = [
  { path: "/", importer: () => import("./component/home") },
  { path: "/services", importer: () => import("./component/servicesPage") },
  { path: "/services/:id", importer: () => import("./component/serviceDetails") },
  { path: "/areas", importer: () => import("./component/areas") },
  { path: "/areas/:id", importer: () => import("./component/areaDetail") },
  { path: "/pricing", importer: () => import("./component/pricing") },
  { path: "/about", importer: () => import("./component/about") },
  { path: "/blog", importer: () => import("./component/blog") },
  { path: "/blog/:id", importer: () => import("./component/blogDetails") },
  { path: "/contact", importer: () => import("./component/contactUs") },
  { path: "/privacy", importer: () => import("./component/privacy") },
  { path: "*", importer: () => import("./component/notFound") },
];
