import Container from "./Layout/Container";

export default function Hero() {
  return (
    <section className="bg-soft">
      <Container>
        <div className="text-center pt-24 pb-12">
          <h1 className="text-5xl font-bold leading-tight">
            Your Business.
            <br />
            Managed Through{" "}
            <span className="relative inline-block font-bold text-black">
              <span className="absolute top-0 left-0 w-full h-2 bg-green-700 rounded-sm"></span>
              <span className="relative px-1">
                WhatsApp
              </span>
            </span>
            .
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            <span className="text-green-600 font-semibold">
              Built
            </span>{" "}
            for SMEs in Angola.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-md">
              Book Demo
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md transition-colors">
              Start on WhatsApp
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
