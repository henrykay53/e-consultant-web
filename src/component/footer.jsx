import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Instagram,
  Facebook,
  Linkedin,
  Star,
  ShieldCheck,
} from "lucide-react";
import { company, telHref, mailHref, yearsOperating } from "../siteConfig";
import { services, serviceAreas } from "../data";
import { trackCall, trackEmail } from "../helper";

const quickLinks = [
  { path: "/services", label: "Services" },
  { path: "/areas", label: "Areas we cover" },
  { path: "/pricing", label: "Pricing" },
  { path: "/about", label: "About us" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

const socialLinks = [
  { key: "instagram", Icon: Instagram, label: "Instagram" },
  { key: "facebook", Icon: Facebook, label: "Facebook" },
  { key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
];

const Footer = () => {
  const active = socialLinks.filter(({ key }) => company.social[key]);

  return (
    <footer className="relative overflow-hidden bg-brand-950 bugs-dark text-brand-100/75 mt-auto">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/logo/logo.png"
                alt=""
                width="40"
                height="40"
                className="w-9 h-9 object-contain"
              />
              <span className="leading-none">
                <span className="block font-display font-bold text-white">
                  E Consultants
                </span>
                <span className="block eyebrow text-brass-300 mt-0.5 text-[9px]">
                  Global Tiija LTD
                </span>
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed">
              Licensed fumigation and pest control across Lagos Island and the
              Mainland. Keeping homes, estates and businesses pest-free since{" "}
              {company.foundedYear}.
            </p>

            <div className="mt-5 flex items-center gap-1" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-brass-300 text-brass-300" />
              ))}
              <span className="ml-2 text-xs text-brand-100/70">
                {yearsOperating} years in Lagos
              </span>
            </div>

            {active.length > 0 && (
              <div className="flex gap-3 mt-5">
                {active.map(({ key, Icon, label }) => (
                  <a
                    key={key}
                    href={company.social[key]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="font-display text-white font-bold mb-4">Our services</h2>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.id}`}
                    className="hover:text-brass-300 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-white font-bold mb-4">Areas</h2>
            <ul className="space-y-2.5 text-sm">
              {serviceAreas.slice(0, 6).map((a) => (
                <li key={a.id}>
                  <Link
                    to={`/areas/${a.id}`}
                    className="hover:text-brass-300 transition-colors"
                  >
                    Fumigation in {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/areas"
                  className="text-brass-300 font-semibold hover:underline"
                >
                  See all areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-white font-bold mb-4">Get in touch</h2>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={telHref}
                  onClick={() => trackCall("footer")}
                  className="flex items-center gap-2.5 text-white font-bold text-base hover:text-brass-300 transition-colors"
                >
                  <Phone size={16} className="text-brass-300 shrink-0" />
                  <span className="tabular">{company.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={mailHref}
                  onClick={() => trackEmail("footer")}
                  className="flex items-start gap-2.5 hover:text-brass-300 transition-colors break-all"
                >
                  <Mail size={16} className="text-brass-300 shrink-0 mt-0.5" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brass-300 shrink-0 mt-0.5" />
                <address className="not-italic">{company.addressLine}</address>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock3 size={16} className="text-brass-300 shrink-0 mt-0.5" />
                Mon – Sat, 7am – 8pm
              </li>
              <li className="flex items-start gap-2.5 text-brass-300 font-medium pt-1">
                <ShieldCheck size={16} className="shrink-0 mt-0.5" />
                Licensed, insured &amp; CAC registered
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} {company.legalName} — All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {quickLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="hover:text-brass-300 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
