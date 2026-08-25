import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, BadgeCheck, Clock3, EyeOff, Star } from "lucide-react";
import { professionalImg } from "../assets/images";
import { company, yearsOperating } from "../siteConfig";
import CallButton from "./callButton";
import WhatsAppButton from "./whatsappButton";
import LiveStatus from "./liveStatus";

const WA_MESSAGE = `Hello ${company.name}, I need fumigation. Here's my location:`;

const proofPoints = [
  { icon: BadgeCheck, label: `${yearsOperating} years in Lagos` },
  { icon: ShieldCheck, label: "Licensed & insured" },
  { icon: EyeOff, label: "Unmarked, uniformed team" },
  { icon: Clock3, label: "30-day guarantee" },
];

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-bone-200 via-bone to-bone bugs-light">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-20">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="inline-flex items-center gap-2 eyebrow text-brand-700 bg-brand-100 border border-brand-200 rounded-full px-3.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600" aria-hidden="true" />
            Lekki · Victoria Island · Ikoyi · Ajah
          </p>

          <h1 className="mt-5 text-[2.6rem] leading-[1.03] sm:text-6xl lg:text-[4.1rem] font-bold text-ink">
            Pests gone.
            <br />
            <span className="text-brand-600">Quietly, properly,</span>
            <br />
            today.
          </h1>

          <p className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">
            Licensed fumigation for homes, estates, short-lets and businesses
            across Lagos Island — and the Mainland when you need us. Our
            technicians arrive in plain vehicles, in uniform, with ID your
            estate security can check.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CallButton source="hero" label="Call" />
            <WhatsAppButton source="hero" message={WA_MESSAGE} />
          </div>

          <div className="mt-5">
            <LiveStatus />
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 max-w-lg">
            {proofPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
                <Icon size={17} className="text-brass-500 shrink-0" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-950/25 border-4 border-white">
            <img
              src={professionalImg}
              alt="E Consultants technician in protective equipment treating a property in Lagos"
              width="900"
              height="1100"
              fetchpriority="high"
              className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/90 via-brand-950/55 to-transparent p-5 pt-16">
              <p className="text-white/95 text-sm font-medium">
                Every technician carries photo ID and a treatment certificate.
              </p>
            </div>
          </div>

          {/* Guarantee seal — the brass reads as certification, not decoration. */}
          <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white rounded-2xl shadow-xl border border-bone-300 px-5 py-4 max-w-[15rem]">
            <div className="flex items-center gap-1 text-brass-500" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-brass-500" />
              ))}
            </div>
            <p className="mt-2 text-sm font-bold text-ink leading-snug">
              If they come back, so do we.
            </p>
            <p className="text-xs text-ink-muted mt-1">
              30-day guarantee on every treatment.
            </p>
          </div>
        </motion.div>
      </div>

      <p className="mt-14 lg:mt-16 text-center text-sm text-ink-muted">
        Not sure what you&apos;re dealing with?{" "}
        <Link
          to="/services"
          className="font-semibold text-brand-700 underline underline-offset-4 decoration-brand-300 hover:decoration-brand-600"
        >
          Match your problem to a treatment
        </Link>
      </p>
    </div>
  </section>
);

export default Hero;
