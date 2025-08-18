import Hero from "./hero";
import TrustBadges from "./trustBadges";
import ServicesPreview from "./service";
import WhyChoose from "./whyChooseUs";
import Testimonials from "./testimonials";

const Home = () => {
  return (
    <main>
      <Hero  />
      <TrustBadges />
      <ServicesPreview  />
      <WhyChoose />
      <Testimonials />
    </main>
  );
};

export default Home;
