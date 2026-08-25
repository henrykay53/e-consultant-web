import { Phone } from "lucide-react";
import { company, telHref } from "../siteConfig";
import { trackCall } from "../helper";

/**
 * The single most important element on this site.
 *
 * The phone number is written into the button rather than hidden behind
 * "Call us", because a visible number is itself a trust signal — and on
 * desktop, where tel: does nothing useful, it is the only thing that works.
 */
const styles = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-900/20",
  onDark:
    "bg-white text-brand-700 hover:bg-brass-100 shadow-lg shadow-black/20",
  outline:
    "border-2 border-brand-600 text-brand-700 hover:bg-brand-50",
};

const sizes = {
  lg: "px-7 py-4 text-base gap-3",
  md: "px-5 py-3 text-sm gap-2.5",
};

const CallButton = ({
  source,
  variant = "primary",
  size = "lg",
  label = "Call",
  className = "",
}) => (
  <a
    href={telHref}
    onClick={() => trackCall(source)}
    className={`inline-flex items-center justify-center rounded-xl font-bold tracking-tight transition-all active:scale-[0.98] ${styles[variant]} ${sizes[size]} ${className}`}
  >
    <Phone size={size === "lg" ? 20 : 17} aria-hidden="true" />
    <span>
      {label} <span className="tabular">{company.phoneDisplay}</span>
    </span>
  </a>
);

export default CallButton;
