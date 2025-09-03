import { Helmet } from "react-helmet-async";
import Services from "./service";

export default function ServicesPage() {
  return (
    <main>
      <Helmet>
        <title>Services | Lagos Pest Control</title>
        <meta
          name="description"
          content="Pest control services. Get instant quotes for homes, offices, and commercial properties with safe and certified pest control services."
        />
        <meta
          name="keywords"
          content="fumigation services Lagos, termite control, rodent control, fumigation services Nigeria, Lagos pest control services"
        />
      </Helmet>

      <Services />
    </main>
  );
}
