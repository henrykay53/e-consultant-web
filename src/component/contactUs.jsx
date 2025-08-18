import { Phone, MessageCircle, Mail } from "lucide-react";
import { contactImg } from "../assets/images";

const Contact = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          We’d love to hear from you! Reach out via phone, WhatsApp, or email.
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

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 rounded-full">
              <Phone className="text-red-600" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <a
                href="tel:+2349056981893"
                className="hover:text-red-600 hover:underline block"
              >
                09056981893
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 rounded-full">
              <MessageCircle className="text-red-600" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">WhatsApp</h3>
              <a
                href="https://wa.me/2349056981893"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-600 hover:underline block"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 rounded-full">
              <Mail className="text-red-600" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <a
                href="mailto:econsultantglobaltiija@gmail.com"
                className="text-gray-700 hover:text-red-600 transition-colors block"
              >
                econsultantglobaltiija@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
