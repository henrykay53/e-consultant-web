import ScrollToTop from "./component/scrollToTop";
import Header from "./component/header";
import Footer from "./component/footer";
import StickyActions from "./component/stickyActions";
import AnalyticsTracker from "./analyticsTracker";

/**
 * Everything inside the router. Shared by the browser entry (BrowserRouter)
 * and the prerender entry (StaticRouter).
 */
const AppShell = ({ children }) => (
  <>
    <AnalyticsTracker />
    <ScrollToTop />

    <a href="#main" className="skip-link">
      Skip to main content
    </a>

    <div className="flex flex-col min-h-screen bg-white text-ink">
      <Header />
      <main id="main" className="flex-grow pb-action-bar">
        {children}
      </main>
      <Footer />
      <StickyActions />
    </div>
  </>
);

export default AppShell;
