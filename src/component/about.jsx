import React from "react";

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
      {/* Intro Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">About E Consultants</h2>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          We’re a licensed fumigation company serving Lagos with a focus on
          safety, transparency, and results.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-lg font-semibold">Our Mission</h4>
          <p className="text-gray-600 mt-2">
            Keep homes & businesses pest-free while protecting families and staff.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-lg font-semibold">Certifications</h4>
          <p className="text-gray-600 mt-2">
            Licensed technicians, insured services, and accredited products.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-lg font-semibold">Safety</h4>
          <p className="text-gray-600 mt-2">
            Clear re-entry guidance and eco-friendly treatment options.
          </p>
        </div>
      </div>

      <div>
        <AboutUsCounter />
      </div>

      {/* Meet the Team */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900">Meet Our Team</h3>
        <p className="text-gray-600 mt-2">
          The people who make SafeFume the trusted choice for pest control.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
            />
            <h4 className="text-lg font-semibold">{member.name}</h4>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
