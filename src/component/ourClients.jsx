import { motion } from "framer-motion";
import { useRef } from "react";

// import client logos from your assets
import { zenithLogo, brollLogo, eritoyLogo, dePhantomLogo, landmarkLogo } from "../assets/images"; 

const OurClients = () => {
  const clients = [
    { id: 1, name: "Zenith Bank PLC", logo: zenithLogo },
    { id: 2, name: "Broll properties", logo: brollLogo }, 
    { id: 3, name: "De Phantom Hotels", logo: dePhantomLogo },
    { id: 4, name: "Eritoy Schools", logo: eritoyLogo },
    { id: 5, name: "Landmark Boulevard", logo: landmarkLogo }, 
  ];

  const marquee = useRef(null);

  return (
    <section className="bg-white section-y border-t border-bone-300">
      <h2 className="font-display text-3xl font-bold text-center mb-3">
        Trusted by
      </h2>

      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-12"
          ref={marquee}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" },
          }}
        >
          {clients.concat(clients).map((client, idx) => (
            <motion.div
              key={`${client.id}-${idx}`}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center min-w-[180px] bg-bone border border-bone-300 rounded-2xl p-6 hover:border-brand-300 transition-colors"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 object-contain mb-3"
              />
              <p className="text-sm font-semibold text-ink-soft text-center whitespace-nowrap">
                {client.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;
