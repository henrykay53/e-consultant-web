import { useState } from "react";
import { Phone, Check } from "lucide-react";
import { company, waHref } from "../siteConfig";
import { trackLead, trackWhatsApp } from "../helper";

const FORM_NAME = "callback-request";

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

/**
 * Deliberately two fields.
 *
 * The full quote form asks for six, which is right when someone is ready to
 * buy. This one exists for the much larger group who are not — every extra
 * field costs completions, so it asks for the absolute minimum needed to
 * ring someone back.
 */
const CallbackForm = ({ source = "callback", area = "" }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, name, phone, area, source }),
      });
    } catch {
      // Never block the customer on our own form handler.
    }

    trackLead(source, { area, type: "callback" });
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-white border-2 border-verified/30 rounded-2xl p-6 text-center">
        <span className="inline-flex w-11 h-11 rounded-full bg-verified/10 text-verified items-center justify-center">
          <Check size={22} />
        </span>
        <h3 className="mt-3 font-display text-xl font-bold">Got it, {name.split(" ")[0] || "thanks"}.</h3>
        <p className="mt-1.5 text-sm text-ink-soft">
          We&apos;ll ring {phone} shortly. If it&apos;s urgent, don&apos;t wait for us —
        </p>
        <a
          href={waHref(`Hi ${company.name}, I just requested a callback. My name is ${name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp(`${source}-after-submit`)}
          className="mt-3 inline-block text-sm font-bold text-brand-700 underline underline-offset-4"
        >
          message us on WhatsApp now
        </a>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      className="bg-white border border-bone-300 rounded-2xl p-5 sm:p-6 shadow-sm"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="area" value={area} />
      <input type="hidden" name="source" value={source} />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>

      <h3 className="font-display text-xl font-bold">Rather we called you?</h3>
      <p className="mt-1 text-sm text-ink-muted">
        Two fields. No obligation, no sales script.
      </p>

      <div className="mt-4 grid gap-3">
        <div>
          <label htmlFor="cb-name" className="sr-only">Your name</label>
          <input
            id="cb-name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="w-full px-4 py-3 border border-bone-300 rounded-xl text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="cb-phone" className="sr-only">Phone number</label>
          <input
            id="cb-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            required
            className="w-full px-4 py-3 border border-bone-300 rounded-xl text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors active:scale-[0.99]"
      >
        <Phone size={18} aria-hidden="true" /> Call me back
      </button>
    </form>
  );
};

export default CallbackForm;
