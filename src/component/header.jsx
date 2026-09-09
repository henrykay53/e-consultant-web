import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { company, telHref, mailHref } from "../siteConfig";
import { trackCall, trackEmail } from "../helper";
import LiveStatus from "./liveStatus";
import CallButton from "./callButton";

const navLinks = [
  { label: "Services", path: "/services" },
  { label: "Areas", path: "/areas" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector("a, button")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      {/* Utility bar: the phone number is on screen before anything else. */}
      <div className="bg-brand-900 text-brand-100/90 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4">
          <span className="hidden sm:flex items-center gap-2">
            <MapPin size={13} aria-hidden="true" className="text-brass-300" />
            Lagos Island &amp; Mainland · Same-day on the Island
          </span>
          <div className="flex items-center gap-5 ml-auto">
            <span className="hidden md:block">
              <LiveStatus onDark />
            </span>
            <a
              href={telHref}
              onClick={() => trackCall("top-bar")}
              className="font-bold text-white hover:text-brass-300 transition-colors flex items-center gap-1.5"
            >
              <Phone size={13} aria-hidden="true" />
              <span className="tabular">{company.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      <header className="bg-bone/95 backdrop-blur border-b border-bone-300 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px] gap-4">
            <Link
              to="/"
              aria-label={`${company.name} — home`}
              className="flex items-center gap-2.5 shrink-0"
            >
              <img
                src="/logo/logo.png"
                alt=""
                width="40"
                height="40"
                className="w-9 h-9 object-contain"
              />
              <span className="leading-none">
                <span className="block font-display font-bold text-brand-700 text-[15px] sm:text-base">
                  E Consultants
                </span>
                <span className="block eyebrow text-ink-muted mt-0.5 text-[9px] sm:text-[10px]">
                  Global Tiija LTD
                </span>
              </span>
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-7 ml-auto"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-brand-700"
                        : "text-ink-soft hover:text-brand-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
              className="lg:hidden p-2 -mr-2 text-ink"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-brand-950/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="relative ml-auto bg-bone w-[86%] max-w-sm h-full shadow-2xl flex flex-col overflow-y-auto"
          >
            <div className="flex items-start justify-between p-6 pb-4">
              <div>
                <p className="font-display font-bold text-brand-700 text-lg">
                  E Consultants
                </p>
                <p className="text-xs text-ink-muted mt-1">{company.tagline}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-1.5 -mr-1 text-ink-muted hover:text-ink"
              >
                <X size={24} />
              </button>
            </div>

            <div className="px-6">
              <CallButton source="mobile-menu" className="w-full" label="Call" />
              <div className="mt-3 flex justify-center">
                <LiveStatus />
              </div>
            </div>

            <nav className="mt-6 px-3 flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-3.5 rounded-lg font-semibold transition-colors ${
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink-soft hover:bg-bone-200"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto p-6 border-t border-bone-300 space-y-3 text-sm">
              <a
                href={mailHref}
                onClick={() => trackEmail("mobile-menu")}
                className="flex items-center gap-2.5 text-ink-soft hover:text-brand-700 break-all"
              >
                <Mail size={16} className="shrink-0" /> {company.email}
              </a>
              <p className="flex items-start gap-2.5 text-ink-muted">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                {company.addressLine}
              </p>
              <p className="flex items-center gap-2.5 text-verified font-medium pt-1">
                <ShieldCheck size={16} className="shrink-0" /> Licensed &amp; insured
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
