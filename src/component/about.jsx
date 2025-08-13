import { Helmet } from "react-helmet-async";
import AboutUsCounter from "./aboutCounter";

const About = () => {
  const team = [
    {
      name: "Barnard",
      role: "Sprayer Technician",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Femi",
      role: "Fogger Manager",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Chinedu",
      role: "Fumigation Support",
      img: "https://randomuser.me/api/portraits/men/68.jpg",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* SEO Meta */}
      <Helmet>
        <title>
          About E Consultants Global Tiija LTD | Licensed Pest Control & Fumigation in Lagos
        </title>
        <meta
          name="description"
          content="E Consultants Global Tiija LTD is a licensed pest control and fumigation company in Lagos, Nigeria. We specialize in safe, eco-friendly, and effective pest management for homes and businesses."
        />
        <meta
          name="keywords"
          content="pest control Lagos, fumigation Lagos, eco-friendly pest control, licensed pest control Nigeria, termite control, rodent control, E Consultants Global Tiija"
        />
      </Helmet>

      {/* Intro Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          About E Consultants Global Tiija LTD
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          E Consultants Global Tiija LTD is a{" "}
          <strong>licensed fumigation and pest control company in Lagos, Nigeria</strong>,
          committed to delivering safe, eco-friendly, and long-lasting pest solutions for
          residential, commercial, and industrial spaces. With a team of certified experts,
          we combine modern pest management technology with unmatched customer service.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <article className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
          <h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            To protect homes, businesses, and public spaces from harmful pests while
            ensuring the health, safety, and peace of mind of our clients.
          </p>
        </article>

        <article className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
          <h2 className="text-xl font-semibold text-gray-900">Certifications & Compliance</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            We are fully licensed by Nigerian regulatory authorities, insured for your safety,
            and use only government-approved, eco-friendly pest control products.
          </p>
        </article>

        <article className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
          <h2 className="text-xl font-semibold text-gray-900">Safety & Eco-Friendliness</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            We prioritize safe pest control methods, offering eco-friendly treatment options
            and clear guidance on safe re-entry after fumigation.
          </p>
        </article>
      </section>

      {/* Counter Section */}
      <section aria-label="Company Achievements" className="mb-16">
        <AboutUsCounter />
      </section>

      {/* Meet the Team */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Meet Our Experts</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed">
          Our team is made up of highly trained, certified professionals with years of
          experience in pest control, customer service, and operations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
          {team.map((member, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 text-center"
            >
              <figure>
                <img
                  src={member.img}
                  alt={`${member.name} - ${member.role}`}
                  className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-gray-100"
                />
                <figcaption className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
