import { EyeOff, Clock3, Baby, FileCheck2, Receipt, RotateCcw } from "lucide-react";
import teamImage from "../assets/images/team.jpg";
import CallButton from "./callButton";

/**
 * Written for the Island customer specifically: estate access, discretion,
 * short-let turnarounds and paperwork are the objections that actually
 * come up, far more often than price.
 */
const reasons = [
  {
    icon: EyeOff,
    title: "Discreet by default",
    body: "Plain vehicles, uniformed technicians, no branding parked outside your gate. Your neighbours don't need to know.",
  },
  {
    icon: Clock3,
    title: "We work around your day",
    body: "Early mornings, evenings and Sundays by arrangement — and we schedule Island jobs around the Lekki–Epe traffic, not through it.",
  },
  {
    icon: Baby,
    title: "Safe around children and pets",
    body: "Child and pet-safe formulations, with clear re-entry times written down before we leave — not guessed at.",
  },
  {
    icon: FileCheck2,
    title: "Paperwork your estate accepts",
    body: "A treatment certificate after every job, which facility managers and short-let platforms routinely ask for.",
  },
  {
    icon: Receipt,
    title: "Priced before we start",
    body: "A firm figure and a transfer receipt. No surprise additions once the equipment is already in your compound.",
  },
  {
    icon: RotateCcw,
    title: "30 days, no argument",
    body: "If pests return inside the guarantee, we come back and re-treat. You don't pay twice for the same problem.",
  },
];

const WhyChoose = () => (
  <section className="relative overflow-hidden bg-bone bugs-light section-y">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow text-brass-600">The difference</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-[1.06]">
            Anyone can spray.
            <span className="block text-brand-600">Few do it properly.</span>
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            Most complaints we hear about other companies aren&apos;t about pests
            coming back. They&apos;re about a stranger who turned up late, in an
            unmarked shirt, sprayed the skirting boards and left no paperwork.
          </p>

          <div className="mt-8 rounded-3xl overflow-hidden border-4 border-white shadow-xl shadow-brand-950/15">
            <img
              src={teamImage}
              alt="The E Consultants fumigation team in uniform in Lagos"
              width="900"
              height="600"
              loading="lazy"
              className="w-full h-64 md:h-72 object-cover"
            />
          </div>

          <div className="mt-7">
            <CallButton source="why-choose" label="Talk it through —" />
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-8">
          {reasons.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <span className="inline-flex w-10 h-10 rounded-lg bg-white border border-bone-300 text-brand-600 items-center justify-center shadow-sm">
                <Icon size={19} aria-hidden="true" />
              </span>
              <h3 className="mt-3 font-display text-lg font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default WhyChoose;
