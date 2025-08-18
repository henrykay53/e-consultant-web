import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail, Home, Info, FileText, DollarSign } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/", icon: <Home size={18} /> },
    { label: "Services", path: "/services", icon: <FileText size={18} /> },
    { label: "Pricing", path: "/pricing", icon: <DollarSign size={18} /> },
    { label: "About", path: "/about", icon: <Info size={18} /> },
    { label: "Blog", path: "/blog", icon: <FileText size={18} /> },
    { label: "Contact", path: "/contact", icon: <Phone size={18} /> },
  ];

  return (
    <>
      {/* Top Bar */}
      <motion.header
        className="bg-white shadow-sm sticky top-0 z-40"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 12 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className=" text-3xl font-bold text-red-800 cursor-pointer"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 60 }}
            >
              E Consultants
            </motion.div>

            {/* Desktop Nav */}
            <motion.div
              className="hidden md:flex items-center space-x-6 ml-6 "
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.07, delayChildren: 0.3 },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                >
                  <Link
                    to={link.path}
                    className="hover:text-red-800 font-semibold transition-colors "
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <motion.a
                href="tel:+2349056981893"
                className="px-4 py-2 border rounded-md text-sm font-medium bg-green-50 border-green-200 text-green-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us
              </motion.a>

              <motion.button
                onClick={() => navigate("/pricing")}
                className="px-3 py-2 rounded-md text-sm text-white bg-red-800 hover:bg-red-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Quote
              </motion.button>
            </div>

            {/* Mobile Hamburger */}
            <div
              className="md:hidden p-2 text-gray-700 "
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Side Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Side Panel */}
          <div className="relative bg-white w-72 max-w-full h-full shadow-lg p-6 flex flex-col">
            {/* Close Button */}
            <div
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4  text-gray-600 hover:text-black"
            >
              <X size={24} />
            </div>

            {/* Brand */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-red-600">E Consultants</h2>
              <p className="text-sm text-gray-500">
                Licensed fumigation services across Lagos.
              </p>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="my-6 border-t border-gray-200"></div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a
                href="tel:+2349056981893"
                className="flex items-center gap-2 text-gray-700 hover:text-red-600"
              >
                <Phone size={16} /> 09056981893
              </a>
              <a
                href="mailto:econsultantglobaltiija@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-red-600"
              >
                <Mail size={16} /> econsultantglobaltiija@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
