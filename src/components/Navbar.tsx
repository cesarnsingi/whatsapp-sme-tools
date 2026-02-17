export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-tight">
          Cerins
        </h1>

        <div className="space-x-6 text-sm hidden md:block">
          <a href="#features" className="hover:text-accent">
            Features
          </a>
          <a href="#pricing" className="hover:text-accent">
            Pricing
          </a>
          <a
            href="#"
            className="bg-primary text-white px-4 py-2 rounded-md text-sm"
          >
            Start on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
