'use client';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
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
              <li><a href="/" className="hover:text-red-600 transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-red-600 transition-colors">Services</a></li>
              <li><a href="/pricing" className="hover:text-red-600 transition-colors">Pricing</a></li>
              <li><a href="/about" className="hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-red-600 transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-red-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/termite-treatment" className="hover:text-red-600 transition-colors">Termite Treatment</a></li>
              <li><a href="/services/rodent-removal" className="hover:text-red-600 transition-colors">Rodent Control</a></li>
              <li><a href="/services/cockroach-control" className="hover:text-red-600 transition-colors">Cockroach Control</a></li>
              <li><a href="/services/bed-bug-treatment" className="hover:text-red-600 transition-colors">Bed Bug Treatment</a></li>
              <li><a href="/services/fumigation" className="hover:text-red-600 transition-colors">Home & Office Fumigation</a></li>

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
