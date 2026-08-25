import { Link } from "react-router-dom";
import Seo from "./seo";
import PageHeader from "./pageHeader";
import Services from "./service";
import CallBand from "./callBand";
import Coverage from "./coverage";
import { company } from "../siteConfig";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Fumigation &amp; Pest Control Services in Lagos"
        description="Termite treatment, rodent removal, cockroach control, bed bug treatment and whole-property fumigation across Lagos Island and Mainland. Licensed, discreet, 30-day guarantee."
        path="/services"
      />

      <PageHeader
        eyebrow="What we treat"
        title="Six treatments. One inspection first."
        lede={`${company.name} treats homes, estates, short-lets, offices, schools and warehouses across Lagos. Every job starts with an inspection, so you pay for the problem you actually have.`}
      />

      <Services showHeading={false} />

      <CallBand
        heading="Describe it and we'll name it"
        body="Most people can't tell a termite from a flying ant, and they shouldn't have to. Tell us what you've seen and we'll identify it on the phone."
        source="band-services-page"
      />

      <Coverage />
    </>
  );
}
