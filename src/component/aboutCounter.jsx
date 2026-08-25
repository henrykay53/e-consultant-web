import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Users, Clock, UserCheck } from "lucide-react";
import { yearsOperating } from "../siteConfig";

const aboutCounter = {
  numberOfClients: 150,
  numberOfYearsOperational: yearsOperating,
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
      className="flex flex-col items-center text-center w-full max-w-xs px-6 py-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/15 mb-4"
      >
        <Icon className="w-7 h-7 text-brass-300" />
      </motion.div>

      <span className="font-display text-5xl font-bold text-white tabular">
        {count}
        {suffix}
      </span>
      <p className="text-sm text-brand-100/75 mt-2">{label}</p>
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
    <section className="relative overflow-hidden w-full bg-brand-900 bugs-dark section-y">
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center px-4">
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
