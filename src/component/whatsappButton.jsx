import { MessageCircle } from "lucide-react";
import { company, waHref } from "../siteConfig";
import { trackWhatsApp } from "../helper";

const styles = {
  solid: "bg-whatsapp text-white hover:brightness-95 shadow-lg shadow-black/10",
  outline: "border-2 border-bone-300 text-ink hover:border-brand-300 hover:bg-white",
  onDark: "border-2 border-white/30 text-white hover:bg-white/10",
};

const WhatsAppButton = ({
  source,
  message = `Hello ${company.name}, I'd like to ask about fumigation.`,
  variant = "outline",
  size = "lg",
  label = "WhatsApp us",
  className = "",
}) => (
  <a
    href={waHref(message)}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackWhatsApp(source)}
    className={`inline-flex items-center justify-center rounded-xl font-bold tracking-tight transition-all active:scale-[0.98] ${
      styles[variant]
    } ${size === "lg" ? "px-7 py-4 text-base gap-3" : "px-5 py-3 text-sm gap-2.5"} ${className}`}
  >
    <MessageCircle size={size === "lg" ? 20 : 17} aria-hidden="true" />
    {label}
  </a>
);

export default WhatsAppButton;
