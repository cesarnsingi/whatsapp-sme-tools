import WhatsAppPreview from "./WhatsAppPreview";
import Container from "./Layout/Container";
import { FaChartLine, FaBoxes, FaFileInvoiceDollar, FaWallet, FaUser } from "react-icons/fa";

export default function HeroFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* Left: WhatsApp chat */}
          <div className="flex-1">
            <WhatsAppPreview />
          </div>

          {/* Right: Features */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-6">
              Wabot turns WhatsApp into:
            </h2>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaChartLine className="text-green-500 w-6 h-6" />
                <span>A sales tracker</span>
              </li>
              <li className="flex items-center gap-3">
                <FaBoxes className="text-green-500 w-6 h-6" />
                <span>An inventory manager</span>
              </li>
              <li className="flex items-center gap-3">
                <FaFileInvoiceDollar className="text-green-500 w-6 h-6" />
                <span>An invoice generator</span>
              </li>
              <li className="flex items-center gap-3">
                <FaWallet className="text-green-500 w-6 h-6" />
                <span>A payment tracker</span>
              </li>
              <li className="flex items-center gap-3">
                <FaUser className="text-green-500 w-6 h-6" />
                <span>A lightweight CRM</span>
              </li>
            </ul>

            <p className="mt-8 text-gray-700 text-lg">
              Simple commands.<br />
              Clear responses.<br />
              Real business value.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
