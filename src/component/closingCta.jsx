import { ShieldCheck, Clock3, Receipt } from "lucide-react";
import CallButton from "./callButton";
import WhatsAppButton from "./whatsappButton";
import CallbackForm from "./callbackForm";
import LiveStatus from "./liveStatus";
import { company } from "../siteConfig";

const assurances = [
  { icon: Clock3, text: "Same-day slots on the Island most weekdays" },
  { icon: ShieldCheck, text: "Licensed technicians, treatment certificate provided" },
  { icon: Receipt, text: "Firm price agreed before anyone starts work" },
];

/**
 * Last section before the footer, and the one that has to work hardest —
 * it catches everyone who read the whole page and still hasn't acted.
 * Three routes out: call, WhatsApp, or leave a number.
 */
const ClosingCta = () => (
  <section className="relative overflow-hidden bg-brand-900 bugs-sparse">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="eyebrow text-brass-300">Ready when you are</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-[1.06]">
            One call and it&apos;s
            <span className="block text-brass-300">handled.</span>
          </h2>
          <p className="mt-5 text-brand-100/85 leading-relaxed max-w-lg">
            Most people ring us after living with it for weeks. It rarely takes
            as long, or costs as much, as they expected.
          </p>

          <ul className="mt-7 space-y-3">
            {assurances.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-brand-100/85 text-sm">
                <Icon size={18} className="text-brass-300 shrink-0 mt-0.5" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CallButton source="closing-cta" variant="onDark" />
            <WhatsAppButton
              source="closing-cta"
              variant="onDark"
              message={`Hello ${company.name}, I'd like to book a fumigation.`}
            />
          </div>

          <div className="mt-5">
            <LiveStatus onDark />
          </div>
        </div>

        <CallbackForm source="closing-cta" />
      </div>
    </div>
  </section>
);

export default ClosingCta;
