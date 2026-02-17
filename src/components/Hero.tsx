export default function Hero() {
  return (
    <section className="py-24 bg-soft">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Your Business.
          <br />
          Managed Through WhatsApp.
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          Cerins transforms WhatsApp into your inventory manager,
          invoice generator, payment tracker, and CRM —
          built for SMEs in Angola.
        </p>

        {/* Centered Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <button className="bg-primary text-white px-6 py-3 rounded-md">
            Book Demo
          </button>

          {/* Optional secondary button */}
          <button className="border border-primary px-6 py-3 rounded-md">
            Start on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
