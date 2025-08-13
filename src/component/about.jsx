import React from "react";
import { Helmet } from "react-helmet-async";
import AboutUsCounter from "./aboutCounter";

const About = () => {
  const team = [
    {
      name: "John Doe",
      role: "Lead Technician",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      role: "Operations Manager",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Johnson",
      role: "Customer Support",
      img: "https://randomuser.me/api/portraits/men/68.jpg",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* SEO Meta */}
      <Helmet>
        <title>About E Consultants Global Tiija | Licensed Pest Control in Lagos</title>
        <meta
          name="description"
          content="Learn about E Consultants, a licensed fumigation company in Lagos focused on safety, transparency, and effective pest control services."
        />
        <meta
          name="keywords"
          content="E Consultants, Pest Control, Fumigation, Lagos, Licensed Technicians, Eco-friendly"
        />
      </Helmet>

      {/* Intro Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About E Consultants Global Tiija LTD</h1>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          We’re a licensed fumigation company serving Lagos with a focus on
          safety, transparency, and results.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Keep homes & businesses pest-free while protecting families and staff.
          </p>
        </article>
        <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold">Certifications</h2>
          <p className="text-gray-600 mt-2">
            Licensed technicians, insured services, and accredited products.
          </p>
        </article>
        <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold">Safety</h2>
          <p className="text-gray-600 mt-2">
            Clear re-entry guidance and eco-friendly treatment options.
          </p>
        </article>
      </section>

      {/* Counter Section */}
      <section>
        <AboutUsCounter />
      </section>

      {/* Meet the Team */}
      <section className="text-center my-12">
        <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
        <p className="text-gray-600 mt-2">
          The people who make E Consultants the trusted choice for pest control.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6">
          {team.map((member, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center"
            >
              <img
                src={member.img}
                alt={`${member.name} - ${member.role}`}
                className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
