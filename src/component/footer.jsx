import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 ">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>

                <div className="flex gap-2 items-center">
                <img src="logo\logo.png" alt="logo" className="w-[10%]" />

            <h2 className="text-xl font-bold text-red-500">E Consultants Global Tiija</h2>
                
                </div>
            <p className="mt-2 text-sm text-gray-400">
              Licensed fumigation & pest control services across Lagos and Nigeria, 
              keeping homes & businesses safe since 2008.
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
                { path: "/services/disinfestation", label: "Bed Bug Treatment" },
                { path: "/services/detailed-fumigation", label: "Home & Office Fumigation" },
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
                <a href="tel:+2349056981893" className="hover:text-red-600 transition-colors">
                  09056981893
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-red-600" />
                <a href="mailto:econsultantglobaltiija@gmail.com" className="hover:text-red-600 transition-colors">
                  econsultantglobaltiija@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-red-600" />
                <span>Good Homes Estate, Ajah, Lagos</span>
              </li>
            </ul>

            {/* Social Media
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="text-center text-xs text-gray-200">
          © {new Date().getFullYear()} E Consultants Global Tiija LTD — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
