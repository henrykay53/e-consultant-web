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
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Trusted Clients
      </h2>

      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-12"
          ref={marquee}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" },
          }}
        >
          {clients.concat(clients).map((client, idx) => (
            <motion.div
              key={`${client.id}-${idx}`}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center min-w-[180px] bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 object-contain mb-3"
              />
              <p className="text-sm sm:text-base font-medium text-gray-700 text-center whitespace-nowrap">
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
