import { useState } from "react";
import { MessageCircle, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services, serviceAreas } from "../data";
import { company, waHref } from "../siteConfig";
import { trackLead, trackWhatsApp } from "../helper";

const FORM_NAME = "quote-request";

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k] ?? "")}`)
    .join("&");

/**
 * Quote request form.
 *
 * The important change from the previous version: the lead is *recorded*
 * before WhatsApp opens. Previously this component only called
 * window.open(wa.me/...) — so a blocked popup, a desktop visitor without
 * WhatsApp, or a closed tab meant the enquiry vanished with no trace.
 *
 * Now it posts to Netlify Forms first (free, already on your host — the
 * matching hidden form lives in index.html so Netlify's build parser can
 * find it), then hands off to WhatsApp. Either channel alone still works.
 */
const Form = ({
  defaultService,
  defaultArea = "",
  source = "quote-form",
  compact = false,
}) => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    area: defaultArea,
    service: defaultService || services[0].id,
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const set = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const buildMessage = () => {
    const serviceTitle =
      services.find((s) => s.id === values.service)?.title || "fumigation";
    return [
      `Hello ${company.name},`,
      `My name is ${values.name || "a customer"} and I would like a quote for ${serviceTitle}.`,
      values.area && `Location: ${values.area}.`,
      values.phone && `Phone: ${values.phone}.`,
      values.message && `Details: ${values.message}`,
    ]
      .filter(Boolean)
      .join(" ");
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const message = buildMessage();

    // 1. Record the lead so it exists whether or not WhatsApp opens.
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, ...values }),
      });
      setStatus("sent");
    } catch {
      // Never block the customer on our own analytics or hosting.
      setStatus("error");
    }

    trackLead(source, { service: values.service, area: values.area });
    trackWhatsApp(source, { service: values.service });

    // 2. Hand off to WhatsApp.
    window.open(waHref(message), "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full px-4 py-3 border border-bone-300 rounded-xl text-sm bg-bone focus:bg-white focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition";

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      className={`bg-white p-5 sm:p-7 border border-bone-300 rounded-2xl shadow-sm ${
        compact ? "" : "w-full"
      }`}
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="qf-name" className="block text-sm font-semibold text-ink-soft mb-1.5">
            Your name <span className="text-urgent-600">*</span>
          </label>
          <input
            id="qf-name"
            name="name"
            value={values.name}
            onChange={set("name")}
            placeholder="e.g. Adebayo Johnson"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="qf-phone" className="block text-sm font-semibold text-ink-soft mb-1.5">
            Phone number <span className="text-urgent-600">*</span>
          </label>
          <input
            id="qf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={values.phone}
            onChange={set("phone")}
            placeholder="e.g. 0803 000 0000"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="qf-email" className="block text-sm font-semibold text-ink-soft mb-1.5">
            Email <span className="text-ink-muted font-normal">(optional)</span>
          </label>
          <input
            id="qf-email"
            name="email"
            type="email"
            value={values.email}
            onChange={set("email")}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="qf-area" className="block text-sm font-semibold text-ink-soft mb-1.5">
            Area
          </label>
          <input
            id="qf-area"
            name="area"
            list="qf-areas"
            value={values.area}
            onChange={set("area")}
            placeholder="e.g. Lekki Phase 1"
            className={inputClass}
          />
          <datalist id="qf-areas">
            {serviceAreas.map((a) => (
              <option key={a.id} value={a.name} />
            ))}
          </datalist>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-service" className="block text-sm font-semibold text-ink-soft mb-1.5">
            Service needed
          </label>
          <select
            id="qf-service"
            name="service"
            value={values.service}
            onChange={set("service")}
            className={inputClass}
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-message" className="block text-sm font-semibold text-ink-soft mb-1.5">
            Tell us about the problem{" "}
            <span className="text-ink-muted font-normal">(optional)</span>
          </label>
          <textarea
            id="qf-message"
            name="message"
            rows={3}
            value={values.message}
            onChange={set("message")}
            placeholder="e.g. 3-bedroom flat, cockroaches in the kitchen, needed this week"
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-70 text-white font-bold flex items-center justify-center gap-2.5 shadow-lg shadow-brand-900/15 transition-colors active:scale-[0.99]"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <MessageCircle size={18} aria-hidden="true" />
            Request Free Quote
          </>
        )}
      </button>

      <p className="mt-3 text-xs text-ink-muted">
        We will send your details and open WhatsApp so you can talk to us right
        away. We only use your number to quote and book your job — we never
        share it with anyone else.
      </p>

      <div aria-live="polite">
        {status === "sent" && (
          <p className="mt-3 text-sm text-brand-700 flex items-center gap-2 font-medium">
            <CheckCircle2 size={16} aria-hidden="true" />
            Received — we have your details and will call you back shortly.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-urgent-700 flex items-start gap-2">
            <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            We could not save your details automatically. Please continue in
            WhatsApp, or call {company.phoneDisplay} directly.
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
