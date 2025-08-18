import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle, BadgeCheck, Award } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    { text: "Licensed Fumigation Experts in Lagos", icon: ShieldCheck },
    { text: "Safe for Children, Pets & Businesses", icon: CheckCircle },
    { text: "30-Day Pest-Free Guarantee", icon: BadgeCheck },
    { text: "25+ Years Pest Control Experience", icon: Award },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
  };

  return (
    <section className="bg-gray-50 py-4">
      <motion.ul
        className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap gap-4 justify-center text-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {badges.map(({ text, icon: Icon }, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-2 px-4 py-2 text-lg bg-gray-900 text-white font-semibold border border-green-100 rounded shadow-sm"
            variants={badgeVariants}
          >
            <Icon size={18} className="text-green-400" />
            {text}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default TrustBadges;
