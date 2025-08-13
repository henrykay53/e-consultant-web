'use client';
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  return (
    <footer className="bg-gray-900 text-gray-300 h-full">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">E Consultants</h2>
            <p className="mt-2 text-sm text-gray-400">
              Licensed fumigation & pest control services across Lagos, keeping homes & businesses safe since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["/", "/services", "/pricing", "/about", "/blog", "/contact"].map((path, idx) => (
                <li
                  key={idx}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                  onClick={() => handleNavigation(path)}
                >
                  {path === "/" ? "Home" :
                   path === "/services" ? "Services" :
                   path === "/pricing" ? "Pricing" :
                   path === "/about" ? "About Us" :
                   path === "/blog" ? "Blog" :
                   path === "/contact" ? "Contact" : ""}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                { path: "/services/termite-treatment", label: "Termite Treatment" },
                { path: "/services/rodent-removal", label: "Rodent Control" },
                { path: "/services/cockroach-control", label: "Cockroach Control" },
                { path: "/services/bed-bug-treatment", label: "Bed Bug Treatment" },
                { path: "/services/fumigation", label: "Home & Office Fumigation" },
              ].map((service, idx) => (
                <li
                  key={idx}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                  onClick={() => handleNavigation(service.path)}
                >
                  {service.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-red-600" />
                <a href="tel:+2348000000000" className="hover:text-red-600 transition-colors">
                  +234 800 000 0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-red-600" />
                <a href="mailto:info@econsultantsglobaltiija.ng" className="hover:text-green-500 transition-colors">
                  info@econsultantsglobaltiija.ng
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-red-600" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} E Consultants — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
