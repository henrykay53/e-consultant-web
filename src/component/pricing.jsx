// import { Helmet } from "react-helmet-async";
// import QuoteCalculator from "./quoteCalculator";
// import { Phone } from "lucide-react";

// const Pricing = () => {
//   const plans = [
//     {
//       name: "Basic",
//       price: "₦75,000",
//       description: "Affordable fumigation for small apartments and studios in Lagos.",
//     },
//     {
//       name: "Standard",
//       price: "₦100,000",
//       description: "Ideal fumigation package for family homes with children & pets.",
//       highlight: true,
//     },
//     {
//       name: "Premium",
//       price: "₦500,000",
//       description: "Comprehensive fumigation for commercial properties & large estates.",
//     },
//   ];

//   return (
//     <main className="max-w-6xl mx-auto px-4 py-12">
//       {/* SEO Metadata */}
//       <Helmet>
//         <title>Pricing & Fumigation Quotes | Lagos Pest Control</title>
//         <meta
//           name="description"
//           content="Transparent fumigation pricing in Lagos. Get instant quotes for homes, offices, and commercial properties with safe and certified pest control services."
//         />
//         <meta
//           name="keywords"
//           content="fumigation pricing Lagos, pest control cost, fumigation services Nigeria, Lagos pest control quote"
//         />
//       </Helmet>

//       {/* Page Header */}
//       <header className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-900">Pricing & Quotes</h1>
//         <p className="text-gray-600 mt-3 text-lg">
//           Transparent pricing with instant quotes tailored to your needs.
//         </p>
//       </header>

//       {/* Pricing Plans */}
//       <section aria-label="Fumigation pricing plans" className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`rounded-2xl p-6 bg-white shadow-sm border transition-transform transform hover:scale-105 hover:shadow-lg ${
//               plan.highlight ? "border-blue-500" : "border-gray-200"
//             }`}
//           >
//             <h2
//               className={`text-xl font-semibold ${
//                 plan.highlight ? "text-blue-600" : "text-gray-800"
//               }`}
//             >
//               {plan.name}
//             </h2>
//             <p className="mt-4 text-4xl font-extrabold text-gray-900">{plan.price}</p>
//             <p className="text-sm text-gray-600 mt-3">{plan.description}</p>
//             <button
//               id={`choose-${plan.name.toLowerCase()}-plan`}
//               className={`mt-6 w-full py-2 rounded-lg font-medium text-white flex items-center justify-center gap-2 ${
//                 plan.highlight
//                   ? "bg-blue-600 hover:bg-blue-700"
//                   : "bg-gray-800 hover:bg-gray-900"
//               }`}
//             >
//               Choose {plan.name}
//             </button>
//           </div>
//         ))}
//       </section>

//       {/* Trust reinforcement */}
//       <p className="mt-6 text-center text-lg font-bold rounded-lg  bg-red-200 p-10">
//         Note that price estimates may vary based on specific property conditionds.
//       </p>

//       {/* Quote Calculator */}
//       <section
//         aria-label="Instant fumigation quote calculator"
//         className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
//       >
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">Instant Quote Calculator</h3>
//         <QuoteCalculator />
//       </section>

//       {/* Extra CTA */}
//       <section
//         aria-label="Urgent fumigation call-to-action"
//         className="mt-12 text-center bg-blue-50 p-6 rounded-2xl"
//       >
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Urgent Fumigation in Lagos?</h3>
//         <p className="text-gray-700 mb-4">Call our 24/7 pest control team and book same-day service.</p>
//         <a
//           href="tel:+2349056981893"
//           className="inline-flex items-center gap-2 px-6 py-3 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-700"
//         >
//           <Phone size={18} /> Call Now
//         </a>
//       </section>
//     </main>
//   );
// };

// export default Pricing;



import { Helmet } from "react-helmet-async";
import QuoteCalculator from "./quoteCalculator";
import { Phone, AlertTriangle } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₦75,000",
      description: "Affordable fumigation for small apartments and studios in Lagos.",
    },
    {
      name: "Standard",
      price: "₦100,000",
      description: "Ideal fumigation package for family homes with children & pets.",
      highlight: true,
    },
    {
      name: "Premium",
      price: "₦500,000",
      description: "Comprehensive fumigation for commercial properties & large estates.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* SEO Metadata */}
      <Helmet>
        <title>Pricing & Fumigation Quotes | Lagos Pest Control</title>
        <meta
          name="description"
          content="Transparent fumigation pricing in Lagos. Get instant quotes for homes, offices, and commercial properties with safe and certified pest control services."
        />
        <meta
          name="keywords"
          content="fumigation pricing Lagos, pest control cost, fumigation services Nigeria, Lagos pest control quote"
        />
      </Helmet>

      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Pricing & Quotes</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Transparent pricing with instant quotes tailored to your needs.
        </p>
      </header>

      {/* Pricing Plans */}
      <section
        aria-label="Fumigation pricing plans"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 mb-5 bg-white shadow-sm border transition-transform transform hover:scale-105 hover:shadow-lg ${
              plan.highlight ? "border-blue-500" : "border-gray-200"
            }`}
          >
            <h2
              className={`text-xl font-semibold ${
                plan.highlight ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {plan.name}
            </h2>
            <p className="mt-4 text-4xl font-extrabold text-gray-900">
              {plan.price}
            </p>
            <p className="text-sm text-gray-600 mt-3">{plan.description}</p>
           
          </div>
        ))}
      </section>

      {/* Disclaimer with Warning Icon */}
      <div className="mt-8 flex items-center justify-center gap-3 text-red-800 bg-red-50 border border-red-300 rounded-lg p-4 text-center">
        <AlertTriangle className="w-6 h-6 flex-shrink-0" />
        <p className="text-base font-medium">
          Note that price estimates may vary based on specific property conditions.
        </p>
      </div>

      {/* Quote Calculator */}
      <section
        aria-label="Instant fumigation quote calculator"
        className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Instant Quote Calculator
        </h3>
        <QuoteCalculator />
      </section>

      {/* Extra CTA */}
      <section
        aria-label="Urgent fumigation call-to-action"
        className="mt-12 text-center bg-blue-50 p-6 rounded-2xl"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Need Urgent Fumigation in Lagos?
        </h3>
        <p className="text-gray-700 mb-4">
          Call our 24/7 pest control team and book same-day service.
        </p>
        <a
          href="tel:+2349056981893"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-700"
        >
          <Phone size={18} /> Call Now
        </a>
      </section>
    </main>
  );
};

export default Pricing;


