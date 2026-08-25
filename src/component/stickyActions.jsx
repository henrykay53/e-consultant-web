import { useEffect, useState } from "react";
import { Phone, MessageCircle, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { company, telHref, waHref } from "../siteConfig";
import { trackCall, trackWhatsApp } from "../helper";

const DEFAULT_MESSAGE = `Hello ${company.name}, I'd like to ask about fumigation.`;

/**
 * The phone number follows the visitor everywhere.
 *
 * On mobile the bar shows the actual number rather than the word "Call",
 * because a visible number reassures in a market where plenty of sites
 * turn out to be dead ends.
 */
const StickyActions = () => {
  const [showDesktop, setShowDesktop] = useState(false);

  // The desktop rail appears only after the hero, where the header CTA has
  // scrolled away — otherwise it competes with the hero's own buttons.
  useEffect(() => {
    const onScroll = () => setShowDesktop(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 transition-all duration-300 ${
          showDesktop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href={telHref}
          onClick={() => trackCall("floating-desktop")}
          className="flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-brand-600 text-white font-bold shadow-xl shadow-brand-950/25 hover:bg-brand-700 transition-colors"
        >
          <Phone size={20} aria-hidden="true" />
          <span className="tabular">{company.phoneDisplay}</span>
        </a>

        <a
          href={waHref(DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp("floating-desktop")}
          aria-label="Chat with us on WhatsApp"
          className="flex items-center gap-2.5 pl-4 pr-5 py-3 rounded-full bg-whatsapp text-white font-bold shadow-lg shadow-black/15 hover:brightness-95 transition-all"
        >
          <MessageCircle size={19} aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      {/* Mobile bar. Call takes half the width — it is the primary action. */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 flex bg-white border-t border-bone-300 shadow-[0_-4px_20px_rgba(58,9,16,0.10)] pb-[env(safe-area-inset-bottom)]">
        <a
          href={telHref}
          onClick={() => trackCall("mobile-bar")}
          className="flex-[1.35] flex flex-col items-center justify-center gap-0.5 py-2.5 bg-brand-600 text-white"
        >
          <Phone size={19} aria-hidden="true" />
          <span className="text-[11px] font-bold tabular leading-none">
            {company.phoneDisplay}
          </span>
        </a>

        <a
          href={waHref(DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp("mobile-bar")}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-ink-soft"
        >
          <MessageCircle size={19} className="text-whatsapp" aria-hidden="true" />
          <span className="text-[11px] font-bold leading-none">WhatsApp</span>
        </a>

        <Link
          to="/pricing"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-ink-soft border-l border-bone-200"
        >
          <Calculator size={19} aria-hidden="true" />
          <span className="text-[11px] font-bold leading-none">Quote</span>
        </Link>
      </div>
    </>
  );
};

export default StickyActions;
