import Container from "./Layout/Container";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <span className="text-2xl font-semibold">Cerins</span>

          <div className="space-x-8 text-sm font-medium hidden md:flex">
            <a href="#features" className="hover:text-accent">
              Features
            </a>
            <a href="#pricing" className="hover:text-accent">
              Pricing
            </a>
            <a href="#contact" className="hover:text-accent">
              Contact
            </a>
            <a
              href="#"
              className="bg-primary text-white px-5 py-2 rounded-md"
            >
              Start on WhatsApp
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
