import QuoteCalculator from "./quoteCalculator";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₦75,000",
      description: "Suitable for small apartments.",
    },
    {
      name: "Standard",
      price: "₦100,000",
      description: "Ideal for family homes.",
      highlight: true,
    },
    {
      name: "Premium",
      price: "₦500,000",
      description: "Commercial & large properties.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Pricing & Quotes
        </h2>
        <p className="text-gray-600 mt-2">
          Transparent pricing with instant quotes tailored to your needs.
        </p>
      </header>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 bg-white shadow-sm border transition-transform transform hover:scale-105 hover:shadow-lg ${
              plan.highlight ? "border-blue-500" : "border-gray-200"
            }`}
          >
            <h4
              className={`text-lg font-semibold ${
                plan.highlight ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {plan.name}
            </h4>
            <div className="mt-4 text-4xl font-extrabold text-gray-900">
              {plan.price}
            </div>
            <p className="text-sm text-gray-600 mt-3">{plan.description}</p>
            <button
              className={`mt-6 w-full py-2 rounded-lg font-medium text-white ${
                plan.highlight
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-800 hover:bg-gray-900"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {/* Quote Calculator */}
      <section className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Instant Quote Calculator
        </h3>
        <QuoteCalculator />
      </section>
    </main>
  );
};

export default Pricing;
