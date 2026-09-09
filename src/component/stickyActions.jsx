import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

/**
 * One persistent call to action, identical on every breakpoint.
 *
 * Call and WhatsApp are already one tap away in the header and in the CTA
 * band that runs on every page, so the floating layer stays a single
 * uncluttered button.
 */
const StickyActions = () => (
  <Link
    to="/pricing"
    className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 inline-flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-brand-600 text-white font-bold shadow-xl shadow-brand-950/30 hover:bg-brand-700 active:scale-[0.97] transition-all pb-[max(0.875rem,env(safe-area-inset-bottom))]"
  >
    <Calculator size={19} aria-hidden="true" />
    <span className="text-sm">Get a quote</span>
  </Link>
);

export default StickyActions;
