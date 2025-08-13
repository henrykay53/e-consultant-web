import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Form from "./form";
import { services } from "../data";

// Lucide icons
import { Bug, ShieldCheck, Home, Trees, SprayCan, PawPrint } from "lucide-react";

// Icon mapping
const iconMap = {
  general: Bug,
  termite: ShieldCheck,
  home: Home,
  outdoor: Trees,
  disinfection: SprayCan,
  petSafe: PawPrint,
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((x) => x.id === id);

  if (!service) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        Service not found
      </div>
    );
  }

  // Get icon component based on service.icon value
  const Icon = iconMap[service.icon] || Bug;

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center">
          <Icon size={24} />
        </div>
        <h2 className="text-2xl font-semibold">{service.title}</h2>
      </div>

      <p className="mt-4 text-gray-700">{service.details}</p>

      <div className="mt-6">
        <h3 className="font-semibold">How it works</h3>
        <ol className="list-decimal ml-6 mt-2 text-gray-600">
          <li>Inspection & quote</li>
          <li>Targeted treatment</li>
          <li>Follow-up & prevention advice</li>
        </ol>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">FAQs</h3>
        <details className="mt-2">
          <summary className="cursor-pointer">Is this safe for kids & pets?</summary>
          <div className="mt-2 text-gray-600">
            Yes — we provide child & pet safe options and clear re-entry guidance.
          </div>
        </details>
        <details className="mt-2">
          <summary className="cursor-pointer">How long until results?</summary>
          <div className="mt-2 text-gray-600">
            Most pests are removed within 24–72 hours; follow-up visits vary by treatment.
          </div>
        </details>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold">Request a quote</h3>
        <Form />
      </div>

      <div className="mt-6">
        <motion.button
          onClick={() => navigate("/services")}
          className="px-3 py-2 mb-5 rounded-md text-sm text-white bg-red-800 hover:bg-red-900 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to services
        </motion.button>
      </div>
    </main>
  );
};

export default ServiceDetail;
