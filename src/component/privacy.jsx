import { Link } from "react-router-dom";
import Seo from "./seo";
import PageHeader from "./pageHeader";
import { company, mailHref } from "../siteConfig";

/**
 * Required because the site runs Google Analytics and collects names and
 * phone numbers. Nigeria's Data Protection Act requires a privacy notice,
 * and Google Ads will not approve a campaign for a site without one.
 */
const Privacy = () => (
  <>
    <Seo
      title="Privacy Policy"
      description={`How ${company.name} collects, uses and protects your personal data under the Nigeria Data Protection Act.`}
      path="/privacy"
    />

    <PageHeader
      align="left"
      eyebrow="Legal"
      title="Privacy Policy"
      lede={`Last updated ${new Date().toLocaleDateString("en-NG", { month: "long", year: "numeric" })}`}
    />

  <div className="bg-white section-y">
    <div className="max-w-3xl mx-auto px-4">
      <div className="space-y-8 text-ink-soft leading-relaxed">
      <section>
        <h2 className="font-display text-xl font-bold text-ink">Who we are</h2>
        <p className="mt-2">
          {company.legalName} (&quot;we&quot;, &quot;us&quot;) provides fumigation and pest control
          services in Lagos, Nigeria. Our registered address is{" "}
          {company.addressLine}. We are the data controller for the information
          described in this notice.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-ink">What we collect</h2>
        <ul className="mt-2 list-disc ml-6 space-y-1.5">
          <li>
            <strong>Information you give us</strong> — your name, phone number,
            email address, property location and any details you type when you
            request a quote or contact us.
          </li>
          <li>
            <strong>Usage information</strong> — pages viewed, approximate
            location, device and browser type, collected through Google
            Analytics using cookies.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-ink">Why we use it</h2>
        <ul className="mt-2 list-disc ml-6 space-y-1.5">
          <li>To respond to your enquiry and prepare a quote.</li>
          <li>To carry out and follow up on work you book with us.</li>
          <li>
            To understand which pages and campaigns bring people to the site, so
            we can improve it.
          </li>
        </ul>
        <p className="mt-3">
          We rely on your consent when you submit a form, and on our legitimate
          interest in running and improving our business for analytics.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-ink">Who we share it with</h2>
        <p className="mt-2">
          We do not sell your personal data. We share it only with service
          providers who help us operate: our website host (Netlify, which
          receives form submissions), Google Analytics, and WhatsApp when you
          choose to message us through it. Each processes data under its own
          terms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-ink">How long we keep it</h2>
        <p className="mt-2">
          Enquiry details are kept for up to two years so we can honour
          guarantees and follow up on treatments. Analytics data is retained for
          14 months. You can ask us to delete your information sooner.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-ink">Your rights</h2>
        <p className="mt-2">
          Under the Nigeria Data Protection Act you may request a copy of the
          data we hold about you, ask us to correct or delete it, object to how
          we use it, or withdraw consent at any time. Email{" "}
          <a href={mailHref} className="text-brand-700 font-semibold underline underline-offset-4 decoration-brand-300 hover:decoration-brand-600">
            {company.email}
          </a>{" "}
          and we will respond within 30 days.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-ink">Cookies</h2>
        <p className="mt-2">
          We use Google Analytics cookies to measure traffic. You can block or
          delete cookies in your browser settings; the site will continue to
          work normally.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
        <p className="mt-2">
          Questions about this policy? Email{" "}
          <a href={mailHref} className="text-brand-700 font-semibold underline underline-offset-4 decoration-brand-300 hover:decoration-brand-600">
            {company.email}
          </a>{" "}
          or see our{" "}
          <Link to="/contact" className="text-brand-700 font-semibold underline underline-offset-4 decoration-brand-300 hover:decoration-brand-600">
            contact page
          </Link>
          .
        </p>
      </section>
      </div>
    </div>
  </div>
  </>
);

export default Privacy;
