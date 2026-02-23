import Container from "./Layout/Container";
import { FaRegMessage } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      {/* Sub Navbar */}
      <div className="bg-black text-sm text-white">
        <Container>
          <div className="flex items-center justify-between py-2">
            {/* Left side links */}
            <div className="flex space-x-6">
              <a href="#help" className="hover:text-green-400 transition-colors">
                Help Center
              </a>
              <a href="#partner" className="hover:text-green-400 transition-colors">
                Partner
              </a>
            </div>

            {/* Right side link */}
            <div>
              <a href="#login" className="hover:text-green-400 transition-colors">
                Log In
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Brand (clickable to home) */}
          <a
            href="/"
            className="text-5xl font-semibold flex items-center gap-3 hover:text-green-900 transition-colors"
          >
            <FaRegMessage className="w-7 h-7 text-green-900" />
            wabot
          </a>

          <div className="space-x-10 text-lg font-medium hidden md:flex items-center">
            <a href="#features" className="hover:text-green-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-green-900 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="hover:text-green-900 transition-colors">
              Contact Sales
            </a>

            {/* Book Demo Button */}
            <a
              href="#demo"
              className="
                text-black
                px-6 py-3
                rounded-full
                font-semibold
                shadow-[12px_6px_20px_8px_rgba(5,46,22,0.8)]
                hover:shadow-[16px_10px_25px_10px_rgba(5,46,22,0.9)]
                transition-all duration-300
              "
            >
              Book a Demo
            </a>

            {/* Start on WhatsApp Button */}
            <a
              href="#"
              className="
                text-black
                px-6 py-3
                rounded-full
                font-semibold
                shadow-[12px_6px_20px_8px_rgba(5,46,22,0.8)]
                hover:shadow-[16px_10px_25px_10px_rgba(5,46,22,0.9)]
                transition-all duration-300
              "
            >
              Start on WhatsApp
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
