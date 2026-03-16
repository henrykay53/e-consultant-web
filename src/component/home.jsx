import { Helmet } from "react-helmet-async";
import Hero from "./hero";
import TrustBadges from "./trustBadges";
import Services from "./service";
import WhyChoose from "./whyChooseUs";
import Testimonials from "./testimonials";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Home | Lagos Pest Control Services</title>
        <meta
          name="description"
          content="Welcome to Lagos Pest Control. We provide safe and affordable fumigation services for homes, offices, and businesses in Nigeria."
        />
         <link rel="canonical" href="https://econsultantsglobaltiija.netlify.app/" />
      </Helmet>

      <Hero />
      <TrustBadges />    
      <Services />
      <WhyChoose />
      <Testimonials />
    </main>
  );
};

export default Home;
