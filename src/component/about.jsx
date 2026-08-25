import { Target, BadgeCheck, Leaf, ShieldCheck } from "lucide-react";
import Seo from "./seo";
import PageHeader from "./pageHeader";
import AboutUsCounter from "./aboutCounter";
import OurClients from "./ourClients";
import CallBand from "./callBand";
import ClosingCta from "./closingCta";
import { femi, chinedu, benard } from "../assets/images";
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
    body: "A CAC-registered limited company, insured, using only regulator-approved products. We provide a treatment certificate on every job.",
  },
  {
    icon: Leaf,
    title: "Safe by design",
    body: "Child and pet-safe formulations wherever the job allows, with written re-entry times before we leave your property.",
  },
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

    <section className="bg-white section-y">
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
              className="bg-white rounded-2xl border border-bone-300 p-6 hover:shadow-xl hover:shadow-brand-950/8 transition-shadow"
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
