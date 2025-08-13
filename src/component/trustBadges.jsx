


'use client';
import { motion } from 'framer-motion';

const TrustBadges = () => {
  const badges = [
    "Licensed & Insured",
    "Child & Pet Safe Options",
    "30-Day Satisfaction Guarantee",
    "30+ Years Experience",
  ];

  // Animation variants for container and each badge
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
  };

  return (
    <div className="bg-gray-50 py-4">
      <motion.div
        className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap gap-4 justify-center text-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
      >
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            className="px-4 py-2 text-lg bg-gray-900 text-white font-semibold border border-green-100 rounded shadow-sm cursor-pointer"
            variants={badgeVariants}
          >
            {badge}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustBadges;
