import React from "react";
import { services } from "../data";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Lucide icons
import { Bug, ShieldCheck, Home, Trees, SprayCan, PawPrint } from "lucide-react";

const iconMap = {
  general: Bug,
  termite: ShieldCheck,
  home: Home,
  outdoor: Trees,
  disinfection: SprayCan,
  petSafe: PawPrint,
};

const Services = () => {
  const navigate = useNavigate(); // ✅ Now navigate works

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Our Pest Control Solutions
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Tailored solutions for homes and businesses.
        </p>
      </div>

      {/* Service Cards */}
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {services.map((s) => {
          const Icon = iconMap[s.icon] || Bug;
          return (
            <motion.article
              key={s.id}
              className="group border rounded-2xl p-6 shadow-sm bg-white hover:shadow-lg transition-all cursor-pointer"
              onClick={() => navigate(`/services/${s.id}`)} // ✅ click navigates to details
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
              }}
            >
              {/* Service Icon */}
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition">
                <Icon size={22} />
              </div>

              <h3 className="font-semibold text-lg text-gray-800">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{s.short}</p>

              <div className="mt-6 flex items-center justify-between">
               


                <motion.button
                  onClick={() => navigate(`/services/${s.id}`)}
                  className="px-3 py-2 mb-5 rounded-md text-sm text-white bg-red-800 hover:bg-red-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* View All Button */}
      <div className="mt-10 text-center">
        <motion.button
          onClick={() => navigate('/services')}
          className="px-6 py-3 rounded-lg border bg-red-800 text-white w-[50%] mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          View All Services
        </motion.button>
      </div>
    </section>
  );
};

export default Services;
