


import React, { useState } from "react";
import { motion } from "framer-motion";

import { contactImg } from "../assets/images";

const Contact = () => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks — we will get back to you");
    setMsg("");
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          We’d love to hear from you! Reach out via phone, WhatsApp, or the form
          below.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src={contactImg}
            alt="Contact illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Contact Info & Form */}
        <div>
          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6 space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <a
                href="tel:+2349056981893"
                className="text-green-700 hover:underline block mt-1"
              >
                09056981893
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-lg">WhatsApp</h3>
              <a
                href="https://wa.me/2349056981893"
                target="_blank"
                rel="noreferrer"
                className="text-green-700 hover:underline block mt-1"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <label
              htmlFor="message"
              className="text-sm font-medium block mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type your message here..."
              className="p-3 border rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
            <div className="mt-4 text-right">
               <motion.button
                // onClick={() => navigate(`/blog/${post.id}`)}
                className="px-3 py-2 mt-5 rounded-md text-sm text-white bg-red-800 hover:bg-red-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Send Message
            </motion.button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;

