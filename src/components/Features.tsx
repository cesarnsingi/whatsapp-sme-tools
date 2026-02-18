import Container from "./Layout/Container";

export default function Features() {
  const list = [
    {
      title: "Inventory Management",
      desc: "Add products, update stock, and receive low-stock alerts via WhatsApp.",
    },
    {
      title: "Invoice Generation",
      desc: "Create invoices and track payments seamlessly.",
    },
    {
      title: "Payment Tracking",
      desc: "Monitor your cash flow and mark statuses with ease.",
    },
    {
      title: "CRM Basics",
      desc: "Capture customers and track their activity.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <Container>
        <h2 className="text-3xl font-semibold text-center">
          <span className="relative inline-block font-bold text-black pb-2">
            Core Features
            <span className="absolute bottom-0 left-0 w-full h-2 bg-green-700 rounded-sm"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {list.map((f, i) => (
            <div key={i}>
              <h3 className="text-xl font-medium">{f.title}</h3>
              <p className="text-gray-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
