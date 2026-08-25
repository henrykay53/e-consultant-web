import { ShieldCheck, FileCheck2, HeartHandshake, Building2 } from "lucide-react";
import { yearsOperating } from "../siteConfig";

/**
 * Credentials strip. Sits directly under the hero because "is this company
 * real?" is the question a Lagos customer asks before "how much?".
 */
const credentials = [
  {
    icon: FileCheck2,
    title: "CAC registered",
    body: "A limited company with a verifiable registration, not an informal outfit.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    body: "Regulator-approved chemicals only, with liability cover on every job.",
  },
  {
    icon: Building2,
    title: "Estate-approved",
    body: "Cleared to work in gated estates across Lekki, Ikoyi and Victoria Island.",
  },
  {
    icon: HeartHandshake,
    title: `${yearsOperating} years, same team`,
    body: "Trained in-house since 2000. No day-labour subcontractors in your home.",
  },
];

const TrustBadges = () => (
  <section className="bg-white border-y border-bone-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
      <div className="text-center">
        <p className="eyebrow text-brass-600">Why people let us in</p>
        <div className="rule-brass w-24 mx-auto mt-3" />
      </div>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {credentials.map(({ icon: Icon, title, body }) => (
          <li key={title} className="text-center sm:text-left">
            <span className="inline-flex w-11 h-11 rounded-xl bg-brand-50 text-brand-600 items-center justify-center">
              <Icon size={21} aria-hidden="true" />
            </span>
            <h3 className="mt-3.5 font-display text-lg font-bold">{title}</h3>
            <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{body}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TrustBadges;
