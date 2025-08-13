import { useState } from "react";
import { Menu, X, Phone, Mail, Home, Info, FileText, DollarSign } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "About Us", href: "/about", icon: <Info size={18} /> },
    { name: "Services", href: "/services", icon: <FileText size={18} /> },
    { name: "Pricing", href: "/pricing", icon: <DollarSign size={18} /> },
    { name: "Blog", href: "/blog", icon: <FileText size={18} /> },
    { name: "Contact", href: "/contact", icon: <Phone size={18} /> },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 bg-black text-white md:hidden">
        <h1 className="font-bold text-lg">E Consultants</h1>
        <button onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Side Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Dark Background */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Side Panel */}
          <div className="relative bg-white w-72 max-w-full h-full shadow-lg p-6 flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            {/* Brand */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-red-600">E Consultants</h2>
              <p className="text-sm text-gray-500">
                Licensed fumigation services across Lagos.
              </p>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Divider */}
            <div className="my-6 border-t border-gray-200"></div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a
                href="tel:+2348000000000"
                className="flex items-center gap-2 text-gray-700 hover:text-red-600"
              >
                <Phone size={16} /> +234 800 000 0000
              </a>
              <a
                href="mailto:info@econsultantsglobaltiija.ng"
                className="flex items-center gap-2 text-gray-700 hover:text-red-600"
              >
                <Mail size={16} /> info@econsultantsglobaltiija.ng
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
