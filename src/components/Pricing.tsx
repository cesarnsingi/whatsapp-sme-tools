export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold">
          Pricing
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="border p-8 rounded-lg">
            <h4 className="font-medium text-lg">Starter</h4>
            <p className="text-3xl font-semibold mt-4">
              15,000 Kz
            </p>
            <p className="text-gray-500 mt-2">
              Basic inventory and invoices
            </p>
          </div>

          <div className="border-2 border-primary p-8 rounded-lg">
            <h4 className="font-medium text-lg">Pro</h4>
            <p className="text-3xl font-semibold mt-4">
              30,000 Kz
            </p>
            <p className="text-gray-500 mt-2">
              Full features + analytics
            </p>
          </div>

          <div className="border p-8 rounded-lg">
            <h4 className="font-medium text-lg">Enterprise</h4>
            <p className="text-3xl font-semibold mt-4">
              Custom
            </p>
            <p className="text-gray-500 mt-2">
              Advanced support and scaling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
