import {
  Target, BadgeCheck, Leaf, ShieldCheck, FileCheck2,
  SprayCan, Truck,
} from "lucide-react";
import Seo from "./seo";
import PageHeader from "./pageHeader";
import AboutUsCounter from "./aboutCounter";
import OurClients from "./ourClients";
import CallBand from "./callBand";
import ClosingCta from "./closingCta";
import { femi, chinedu, benard, fumigateImg } from "../assets/images";
import { company, yearsOperating } from "../siteConfig";

const team = [
  { name: "Benard", role: "Sprayer Technician", img: benard },
  { name: "Femi", role: "Fogger Technician", img: femi },
  { name: "Chinedu", role: "Fumigation Support", img: chinedu },
];

const pillars = [
  {
    icon: Target,
    title: "Our mission",
    body: "To clear pests properly the first time, without cutting corners on safety, and to leave a household feeling looked after rather than sprayed at.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed & compliant",
    body: "A CAC-registered limited company, insured, using only regulator-approved products. We issue a treatment certificate on every job.",
  },
  {
    icon: Leaf,
    title: "Safe by design",
    body: "Child and pet-safe formulations wherever the job allows, with written re-entry times handed over before we leave your property.",
  },
];

const credentials = [
  { icon: FileCheck2, label: "CAC registered", detail: "Limited liability company" },
  { icon: SprayCan, label: "Approved products", detail: "Regulator-listed only" },
];

const About = () => (
  <>
    <Seo
      title="About Us"
      description={`${company.legalName} — a licensed fumigation and pest control company serving Lagos Island and Mainland since ${company.foundedYear}.`}
      path="/about"
    />

    <PageHeader
      eyebrow={`Since ${company.foundedYear}`}
      title="The same team, for a quarter of a century"
      lede={`${company.legalName} has been treating homes, estates and businesses across Lagos for ${yearsOperating} years. Our technicians are trained in-house — we don't subcontract day labour into your home.`}
    />

    {/* Credentials sit directly under the header: the first thing a cautious
        buyer wants is proof, not narrative. */}
    <section className="bg-white border-b border-bone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ul className="flex flex-wrap justify-center gap-x-14 gap-y-6">
          {credentials.map(({ icon: Icon, label, detail }) => (
            <li key={label} className="flex items-start gap-3">
              <span className="inline-flex w-10 h-10 rounded-xl bg-brand-50 text-brand-600 items-center justify-center shrink-0">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-bold text-sm leading-tight">{label}</span>
                <span className="block text-xs text-ink-muted mt-0.5">{detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Story */}
    <section className="bg-white section-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <img
            src={fumigateImg}
            alt="An E Consultants technician treating a property in Lagos"
            width="1200"
            height="900"
            loading="lazy"
            className="w-full h-72 md:h-[26rem] object-cover rounded-2xl border-4 border-white shadow-2xl shadow-brand-950/15"
          />
          <div className="absolute -bottom-5 -right-2 sm:right-6 bg-brand-900 text-white rounded-2xl px-6 py-4 shadow-xl shadow-brand-950/30">
            <p className="font-display text-3xl font-bold tabular leading-none">
              {yearsOperating}
            </p>
            <p className="eyebrow text-brass-300 mt-1.5">Years on the job</p>
          </div>
        </div>

        <div>
          <p className="eyebrow text-brass-600">How we work</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            Inspection first. Always.
          </h2>
          <div className="mt-5 space-y-4 text-ink-soft leading-relaxed">
            <p>
              Most pest problems in Lagos get treated twice because nobody
              looked properly the first time. A blanket spray clears what you
              can see and leaves the nest where it is, so four weeks later
              you&apos;re making the same phone call.
            </p>
            <p>
              We inspect before we quote — drains, soakaways, roof voids, the
              back of the kitchen units. Then we treat the source, write down
              exactly what we used, and hand you a certificate for your estate
              or facility manager.
            </p>
            <p>
              If they come back inside thirty days, so do we. At no cost.
            </p>
          </div>

          <ul className="mt-7 space-y-3">
            {[
              [Truck, "Discreet, unmarked vehicles — your neighbours don't need to know"],
              [FileCheck2, "A written treatment certificate on completion"],
            ].map(([Icon, text]) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={18} className="text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-ink-soft">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-white section-y pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="bg-bone border border-bone-300 p-7 rounded-2xl hover:border-brand-300 transition-colors"
            >
              <span className="inline-flex w-12 h-12 rounded-xl bg-brand-600 text-white items-center justify-center shadow-md shadow-brand-900/20">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-xl font-bold">{title}</h2>
              <p className="text-ink-soft mt-2.5 leading-relaxed text-sm">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <AboutUsCounter />

    <section className="relative overflow-hidden bg-bone bugs-light section-y">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="eyebrow text-brass-600">The people who turn up</p>
        <h2 className="mt-3 text-4xl font-bold">Meet the technicians</h2>
        <p className="text-ink-soft mt-4 max-w-2xl mx-auto leading-relaxed">
          The same faces, job after job. Each one carries photo ID your estate
          security can check before they come through the gate.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {team.map((member) => (
            <article
              key={member.name}
              className="bg-white rounded-2xl border border-bone-300 p-6 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-950/8 transition-all"
            >
              <figure className="flex items-center gap-4">
                <img
                  src={member.img}
                  alt={`${member.name}, ${member.role}`}
                  width="160"
                  height="160"
                  loading="lazy"
                  className="w-20 h-20 rounded-full object-cover border-4 border-bone-200"
                />
                <figcaption className="text-left">
                  <h3 className="font-display text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-ink-muted">{member.role}</p>
                  <p className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-verified">
                    <ShieldCheck size={12} aria-hidden="true" /> ID verified
                  </p>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>

    <OurClients />

    <CallBand
      heading="Talk to the people who'll do the work"
      body="No call centre, no middleman. You speak to the team that turns up at your gate."
      source="band-about"
    />

    <ClosingCta />
  </>
);

export default About;
