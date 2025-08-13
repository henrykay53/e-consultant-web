import Hero from "./hero";
import TrustBadges from "./trustBadges";
import ServicesPreview from "./service";
import WhyChoose from "./whyChooseUs";
import Testimonials from "./testimonials";

const Home = ({ navigate }) => {
  return (
    <main>
      <Hero navigate={navigate} />
      <TrustBadges />
      <ServicesPreview navigate={navigate} />
      <WhyChoose />
      <Testimonials />
    </main>
  );
};

export default Home;
