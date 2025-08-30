import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Users, Clock, UserCheck } from "lucide-react";

const aboutCounter = {
  numberOfClients: 150,
  numberOfYearsOperational: 20,
  numberOfPersonnels: 7,
};

const CounterItem = ({ icon: Icon, label, value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const incrementTime = 20;
    const step = Math.ceil((end / duration) * incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      onViewportEnter={() => controls.start({ opacity: 1, y: 0 })}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center text-center bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl p-8 w-full sm:w-72 hover:shadow-2xl hover:-translate-y-2 transition-transform"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4"
      >
        <Icon className="w-8 h-8 text-blue-600" />
      </motion.div>

      <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 drop-shadow-sm">
        {count}
        {suffix}
      </span>
      <p className="text-sm sm:text-base text-gray-600 mt-2">{label}</p>
    </motion.div>
  );
};

export default function AboutUsCounter() {
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (!hasRun) {
      setHasRun(true);
    }
  }, [hasRun]);

  if (!hasRun) return null;

  return (
    <section className="w-full py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4">
        <CounterItem
          icon={Users}
          label="Happy Clients"
          value={aboutCounter.numberOfClients}
          suffix="+"
        />
        <CounterItem
          icon={Clock}
          label="Years Operational"
          value={aboutCounter.numberOfYearsOperational}
          suffix="+"
        />
        <CounterItem
          icon={UserCheck}
          label="Personnels"
          value={aboutCounter.numberOfPersonnels}
        />
      </div>
    </section>
  );
}
