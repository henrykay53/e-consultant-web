import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./component/home";
import Services from "./component/service";
import ServiceDetail from "./component/serviceDetails";
import Pricing from "./component/pricing";
import About from "./component/about";
import Blog from "./component/blog";
import BlogDetail from "./component/blogDetails";
import Contact from "./component/contactUs";
import AnalyticsTracker from "./analyticsTracker";


export default function App() {
  return (
    <Router>

      <AnalyticsTracker/>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Header />

         <ScrollToTop /> 

        {/* Main content takes available space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />

            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

