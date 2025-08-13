




'use client';
import React from "react";

import { ShieldCheck, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-70">
          
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl  font-extrabold text-gray-900 leading-tight">
              Fast, Safe & <span className="text-green-700">Guaranteed</span> Pest Control in Lagos
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Get rid of pests quickly and safely. Same-day response available — child & pet-friendly treatments.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => navigate('/pricing')}
                className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg flex items-center justify-center gap-2 shadow-md transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Get a Free Quote <ArrowRight size={18} />
              </motion.button>

              <motion.a
                href="tel:+2348000000000"
                className="px-6 py-3 border border-green-300 text-green-700 font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-green-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={18} /> Call Now
              </motion.a>
            </div>

            {/* Guarantee Badge */}
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-700 bg-white border rounded-lg px-4 py-3 shadow-sm w-fit">
              <ShieldCheck className="text-green-600" size={20} />
              <span>
                <strong>30-Day Guarantee:</strong> We return if pests come back.
              </span>
            </div>

         
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                alt="technician"
                src="src/assets/images/professional.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-3 text-xs">
                Licensed technicians using safe products. Photo for illustration.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
