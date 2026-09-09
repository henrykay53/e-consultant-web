import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Users, Clock, UserCheck } from "lucide-react";
import { yearsOperating } from "../siteConfig";

const stats = [
  { icon: Users, label: "Clients served", value: 150, suffix: "+" },
  { icon: Clock, label: "Years in business", value: yearsOperating, suffix: "+" },
  { icon: UserCheck, label: "Trained technicians", value: 7, suffix: "" },
];

const DURATION = 1400;

const CounterItem = ({ icon: Icon, label, value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();

  // Server-rendered output carries the real figure, so the numbers are in
  // the prerendered HTML for crawlers and for anyone without JavaScript.
  // The browser starts from zero and counts up when the row scrolls in.
  const [count, setCount] = useState(() =>
    typeof window === "undefined" ? value : 0
  );

  useEffect(() => {
    if (!inView) return undefined;
    if (reduceMotion) {
      setCount(value);
      return undefined;
    }

    let frame;
    const start = performance.now();

    // Eased by elapsed time rather than a fixed step, so every counter
    // finishes together regardless of how large its number is.
    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-6 py-2"
    >
      <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/15 mb-5">
        <Icon className="w-6 h-6 text-brass-300" aria-hidden="true" />
      </span>

      <span className="font-display text-5xl md:text-6xl font-bold text-white tabular leading-none">
        {count}
        {suffix}
      </span>

      <span className="mt-3 h-px w-8 bg-brass-500/50" aria-hidden="true" />

      <p className="mt-3 eyebrow text-brand-100/70">{label}</p>
    </div>
  );
};

export default function AboutUsCounter() {
  return (
    <section className="relative overflow-hidden bg-brand-900 bugs-dark section-y">
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="py-8 sm:py-0">
              <CounterItem {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
