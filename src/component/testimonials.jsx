import React from "react";
import { testimonials } from "../data";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-900">What Our Customers Say</h3>
        <p className="text-gray-600 mt-2">
          Real feedback from our satisfied clients across Lagos.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
          >
            <FaQuoteLeft className="text-red-800 text-2xl mb-3" />
            <p className="text-gray-700 flex-grow">“{t.text}”</p>
            <footer className="mt-4 text-sm font-semibold text-gray-900">
              — {t.name}
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
