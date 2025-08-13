
import { Zap, ShieldCheck, CheckCircle } from 'lucide-react';
import teamImage from '../assets/images/team.jpg'; // Ensure this path is correct

const WhyChoose = () => {
  const features = [
    {
      icon: <Zap className="w-7 h-7 text-gray-900 shrink-0 transition-transform duration-300 group-hover:scale-110" />,
      title: "Fast",
      description: "Same-day response when available."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-gray-900 shrink-0 transition-transform duration-300 group-hover:scale-110" />,
      title: "Safe",
      description: "Child & pet-safe treatment options with clear safety guidance."
    },
    {
      icon: <CheckCircle className="w-7 h-7 text-gray-900 shrink-0 transition-transform duration-300 group-hover:scale-110" />,
      title: "Guaranteed",
      description: "30-day follow-up if pests return."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="relative group">
          <img
            src={teamImage}
            alt="Professional fumigation team"
            className="rounded-2xl shadow-lg w-full h-72 md:h-96 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-2xl bg-green-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Why Homeowners & Businesses Trust Us
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We’ve built our reputation on delivering fast, safe, and guaranteed pest control solutions. 
            From your home to your workplace, we ensure your space stays pest-free without compromising safety.
          </p>

          <ul className="mt-8 space-y-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4 group">
                {feature.icon}
                <p>
                  <span className="font-semibold text-gray-900">{feature.title}:</span> {feature.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium shadow-md hover:bg-green-700 hover:shadow-lg active:scale-95 transition-all duration-300">
              Book Your Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

