import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Users, Clock, UserCheck } from "lucide-react";

const aboutCounter = {
  numberOfClients: 150,
  numberOfYearsOperational: 30,
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
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      onViewportEnter={() => controls.start({ opacity: 1, y: 0 })}
      className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-full sm:w-60"
    >
      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-2" />
      <span className="text-2xl sm:text-3xl font-bold text-gray-900">
        {count}
        {suffix}
      </span>
      <p className="text-xs sm:text-sm text-gray-500 text-center">{label}</p>
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
    <div className="w-full py-10 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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
    </div>
  );
}
