export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-green-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title with bottom green underline */}
        <h3 className="text-3xl font-semibold mb-12">
          <span className="relative inline-block font-bold text-black pb-2">
            Pricing
            <span className="absolute bottom-0 left-0 w-full h-2 bg-green-700 rounded-sm"></span>
          </span>
        </h3>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Starter Plan */}
          <div className="border p-8 rounded-lg bg-blue-50 hover:shadow-lg transition-transform transform hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <h4 className="font-medium text-lg text-blue-600">Starter</h4>
              <p className="text-3xl font-semibold mt-4 text-blue-700">15,000 Kz</p>
              <p className="text-blue-500 mt-2">Basic inventory and invoices</p>
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Select Plan
            </button>
          </div>

          {/* Pro Plan — soft green */}
          <div className="border-2 border-green-300 p-8 rounded-lg relative bg-green-100 text-black scale-105 hover:shadow-lg transition-transform transform hover:-translate-y-1 flex flex-col justify-between">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-300 text-black text-xs px-3 py-1 rounded-full font-semibold">
              Most Popular
            </span>
            <div>
              <h4 className="font-medium text-lg">Pro</h4>
              <p className="text-3xl font-semibold mt-4">30,000 Kz</p>
              <p className="mt-2">Full features + analytics</p>
            </div>
            <button className="mt-6 bg-green-300 text-black px-6 py-2 rounded-md hover:bg-green-400 transition-colors">
              Select Plan
            </button>
          </div>

          {/* Enterprise Plan — soft gold */}
          <div className="border p-8 rounded-lg bg-yellow-50 hover:shadow-lg transition-transform transform hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <h4 className="font-medium text-lg text-yellow-700">Enterprise</h4>
              <p className="text-3xl font-semibold mt-4 text-yellow-800">Custom</p>
              <p className="text-yellow-600 mt-2">Advanced support and scaling</p>
            </div>
            <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
