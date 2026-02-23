import Container from "./Layout/Container";

export default function Contact() {
  return (
    <section id="contact">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Contact / Start</h2>
          <p className="mt-3 text-gray-600">
            Ready to bring Cerins into your business?
          </p>
        </div>

        <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border px-4 py-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Business Name"
            className="border px-4 py-3 rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone / WhatsApp"
            className="border px-4 py-3 rounded-md"
          />
          <textarea
            placeholder="Message"
            className="border px-4 py-3 rounded-md"
          />
          <button className="bg-primary text-white px-6 py-3 rounded-md col-span-full">
            Send Message
          </button>
        </form>
      </Container>
    </section>
  );
}
