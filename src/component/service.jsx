import { useState } from "react";
import { services } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Lucide icons
import { Bug, ShieldCheck, Home, Trees, SprayCan, PawPrint } from "lucide-react";

// Map of icon names to components
const iconMap = {
  general: Bug,
  termite: ShieldCheck,
  home: Home,
  outdoor: Trees,
  disinfection: SprayCan,
  petSafe: PawPrint,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70 },
  },
  exit: { opacity: 0, y: 30 },
};

export default function Services() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Our Pest Control Solutions
        </h2>

          <h3 className="text-xl text-gray-700 mt-2">
    Professional fumigation & pest control services in Lagos for homes & businesses
  </h3>
        <p className="text-gray-600 mt-3 text-lg">
          Tailored solutions for homes and businesses.
        </p>
      </div>

      {/* Service Cards */}
      <motion.div
        key={showAll} // force remount on toggle for stagger animation
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <AnimatePresence>
          {displayedServices.map((s) => {
            const Icon = iconMap[s.icon] || Bug;
            return (
              <motion.article
                key={s.id}
                className="group border rounded-2xl p-6 shadow-sm bg-white hover:shadow-lg transition-all cursor-pointer"
                onClick={() => navigate(`/services/${s.id}`)}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                {/* Service Icon */}
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition">
                  <Icon size={22} />
                </div>

                <h3 className="font-semibold text-lg text-gray-800">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {s.short}
                </p>

                <div className="mt-6">
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/services/${s.id}`);
                    }}
                    className="px-3 py-2 mb-5 rounded-md text-sm text-white bg-red-800 hover:bg-red-900 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book {s.title}
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* View All Button */}
      {!showAll && (
        <div className="mt-10 text-center">
          <motion.button
            onClick={() => setShowAll(true)}
            // className="px-6 py-3 rounded-lg border bg-red-800 text-white w-[50%] mx-auto"
            className="px-5 py-3 rounded-md text-sm text-white bg-gray-800 hover:bg-gray-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
             See All Pest Control Services
          </motion.button>
        </div>
      )}
    </section>
  );
}
