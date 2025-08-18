import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, BadgeCheck, Award } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    { text: "Licensed Fumigation Experts", icon: ShieldCheck },
    { text: "Children and Pets Safe", icon: CheckCircle },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  return (
    <section className="bg-gray-50 py-12">
      <motion.ul
        className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {badges.map(({ text, icon: Icon }, index) => (
          <motion.li
            key={index}
            className="w-full flex items-center gap-3 p-6 bg-white text-gray-900 font-medium rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            variants={badgeVariants}
          >
            <Icon size={22} className="text-green-500 flex-shrink-0" />
            <span className="text-base">{text}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default TrustBadges;
