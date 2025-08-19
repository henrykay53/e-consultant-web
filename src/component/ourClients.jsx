import { motion } from "framer-motion";
import { useRef } from "react";

const OurClients = () => {
  const clients = [
    { id: 1, name: "Zenith Bank PLC", logo: "/logos/zenith-bank.svg" },
    { id: 2, name: "African Alliance Insurance Plc", logo: "/logos/african-alliance.svg" },
    { id: 3, name: "De Phantom Hotels", logo: "/logos/de-phantom.svg" },
    { id: 4, name: "Eritoy Schools", logo: "/logos/eritoy-schools.svg" },
    { id: 5, name: "Oceancrest Properties", logo: "/logos/oceancrest.svg" },
  ];

  const marquee = useRef(null);

  return (
    <section className="py-12 ">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Trusted Clients</h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-8"
          ref={marquee}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
          }}
        >
          {clients.concat(clients).map((client, idx) => (
            <div key={`${client.id}-${idx}`} className="min-w-[150px] flex justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 object-contain"
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;
