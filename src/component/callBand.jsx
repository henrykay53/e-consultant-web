import { ShieldCheck } from "lucide-react";
import CallButton from "./callButton";
import WhatsAppButton from "./whatsappButton";
import LiveStatus from "./liveStatus";

/**
 * The repeating conversion unit. Dropped between every major section so a
 * visitor is never more than one scroll from a phone number, whichever
 * point in the page finally convinces them.
 */
const CallBand = ({
  heading = "Talk to a technician, not a call centre",
  body = "Tell us what you're seeing and we'll tell you what it costs — usually in under two minutes.",
  source = "call-band",
  message,
}) => (
  <section className="relative overflow-hidden bg-brand-900 bugs-dark">
    <div className="relative max-w-5xl mx-auto px-4 py-14 md:py-16 text-center">
      <ShieldCheck
        size={30}
        className="mx-auto text-brass-300"
        aria-hidden="true"
      />
      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">{heading}</h2>
      <p className="mt-3 text-brand-100/85 max-w-xl mx-auto">{body}</p>

      <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
        <CallButton source={source} variant="onDark" label="Call" />
        <WhatsAppButton source={source} variant="onDark" message={message} />
      </div>

      <div className="mt-5 flex justify-center">
        <LiveStatus onDark />
      </div>
    </div>
  </section>
);

export default CallBand;
