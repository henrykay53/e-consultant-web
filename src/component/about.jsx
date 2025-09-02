import { Target, BadgeCheck, Leaf } from "lucide-react";
import { Helmet } from "react-helmet-async";
import AboutUsCounter from "./aboutCounter";
import Carousel from "./ourClients";
import {femi, chinedu} from "../assets/images";

const About = () => {
  const team = [
    {
      name: "Benard",
      role: "Sprayer Technician",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Femi",
      role: "Fogger Technician",
      img: femi,
    },
    {
      name: "Chinedu",
      role: "Fumigation Support",
      img: chinedu,
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
          content="Learn about E Consultants Global Tiija LTD, a licensed pest control and fumigation company in Lagos, Nigeria. We provide eco-friendly, government-approved pest solutions for homes, offices, and industries."
        />
        <meta
          name="keywords"
          content="pest control Lagos, fumigation Lagos, eco-friendly fumigation Nigeria, licensed pest control company, termite treatment Lagos, rodent extermination Nigeria"
        />
      </Helmet>

      {/* Intro Section */}
      <section className="text-center mb-14">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900">
          About <span className="text-red-700">E Consultants Global Tiija LTD</span>
        </h1>
        <p className="text-lg text-gray-600 mt-5 max-w-3xl mx-auto leading-relaxed">
          At <strong>E Consultants Global Tiija LTD</strong>, we are a{" "}
          <strong>licensed fumigation and pest control company in Lagos, Nigeria</strong>.
          Our goal is to protect homes, offices, and industries with{" "}
          <span className="font-semibold">eco-friendly, safe, and long-lasting pest management solutions</span>.
          With certified technicians and state-of-the-art equipment, we ensure you enjoy a pest-free environment.
        </p>
      </section>

      {/* Features Section */}
      <section
        aria-label="Company Features"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      >
        {/* Mission */}
        <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all text-center">
          <Target className="w-10 h-10 text-red-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            To deliver safe, effective, and eco-friendly pest control solutions
            that protect lives, property, and the environment while ensuring
            peace of mind for our clients.
          </p>
        </article>

        {/* Certifications */}
        <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all text-center">
          <BadgeCheck className="w-10 h-10 text-green-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900">Certifications & Compliance</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            We are licensed by Nigerian regulatory authorities, insured for your safety,
            and use only <strong>government-approved, eco-friendly products</strong> that
            meet global best practices.
          </p>
        </article>

        {/* Safety */}
        <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all text-center">
          <Leaf className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900">Safety & Eco-Friendliness</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Our treatments prioritize human health, pets, and the environment. We provide clear
            re-entry guidelines to ensure safety after every fumigation service.
          </p>
        </article>
      </section>

      {/* Counter Section */}
      <section aria-label="Company Achievements" className="mb-20">
        <AboutUsCounter />
      </section>

      {/* Meet the Team */}
      <section aria-label="Meet Our Experts" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Experts</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          Our team consists of trained, certified, and passionate professionals dedicated
          to protecting your space from harmful pests while providing excellent customer service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {team.map((member, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-4"
            >
              <figure className="flex items-center gap-x-4">
                <img
                  src={member.img}
                  alt={`${member.name}, ${member.role}`}
                  className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
                />
                <figcaption className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>

      </section>

      <Carousel />
    </main>
  );
};

export default About;
