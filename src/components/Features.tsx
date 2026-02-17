export default function Features() {
  const features = [
    {
      title: "Inventory Management",
      description:
        "Add products, update stock, and receive low-stock alerts directly through WhatsApp.",
    },
    {
      title: "Invoice Generation",
      description:
        "Create invoices, calculate totals automatically, and track pending payments.",
    },
    {
      title: "Payment Tracking",
      description:
        "Monitor revenue, mark invoices as paid, and stay on top of cash flow.",
    },
    {
      title: "Simple CRM",
      description:
        "Automatically store customers, track purchase history, and identify returning clients.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center">
          Core Features
        </h3>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {features.map((feature, index) => (
            <div key={index}>
              <h4 className="text-xl font-medium mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
