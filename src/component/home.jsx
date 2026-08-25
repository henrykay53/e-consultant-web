import Seo from "./seo";
import Hero from "./hero";
import TrustBadges from "./trustBadges";
import Services from "./service";
import CallBand from "./callBand";
import WhyChoose from "./whyChooseUs";
import Coverage from "./coverage";
import CaseStudies from "./caseStudies";
import Testimonials from "./testimonials";
import ClosingCta from "./closingCta";
import { company } from "../siteConfig";

const Home = () => (
  <>
    <Seo
      title={null}
      description={`Licensed fumigation and pest control across Lagos Island and Mainland. Termites, roaches, rodents and bed bugs cleared discreetly, with a 30-day guarantee. Call ${company.phoneDisplay}.`}
      path="/"
    />

    <Hero />
    <TrustBadges />
    <Services />

    {/* Conversion band #1 — placed straight after services, the point at
        which most visitors have identified their problem. */}
    <CallBand
      heading="Not sure which treatment you need?"
      body="Describe what you're seeing. We'll tell you what it is, what it takes to clear it, and what it costs."
      source="band-after-services"
      message={`Hello ${company.name}, I'm not sure which treatment I need. Here's what I'm seeing:`}
    />

    <WhyChoose />
    <Coverage />
    <CaseStudies />
    <Testimonials />
    <ClosingCta />
  </>
);

export default Home;
