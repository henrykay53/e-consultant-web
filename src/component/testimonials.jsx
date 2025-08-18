import { testimonials } from "../data";
import { FaQuoteLeft } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Testimonials = () => {


  const navigate = useNavigate();
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      {/* SEO Schema Markup for Google Rich Snippets */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Lagos Pest & Fumigation Services",
          "review": testimonials.map((t) => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": t.name },
            "reviewBody": t.text,
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          }))
        })
      }} />

      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-900">
          What Our Customers Say
        </h3>
        <p className="text-gray-600 mt-2">
          Trusted by homeowners and businesses across Lagos.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
          >
            <FaQuoteLeft className="text-red-800 text-2xl mb-3" />
            <p className="text-gray-700 flex-grow">“{t.text}”</p>
            
            {/* Star Rating */}
            <div className="flex items-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">★</span>
              ))}
            </div>

            {/* Reviewer Name */}
            <footer className="mt-2 text-sm font-semibold text-gray-900">
              — {t.name}
            </footer>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button
        onClick={() => navigate('/pricing')}
         className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 hover:shadow-lg active:scale-95 transition-all">
          Get a Free Quote Today
        </button>
       
      </div>
    </section>
  );
};

export default Testimonials;
