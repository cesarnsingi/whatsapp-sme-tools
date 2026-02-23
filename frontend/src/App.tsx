import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroFeatures from "./components/HeroFeatures";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <HeroFeatures />
      <Features />
      <Pricing />
      <Footer />
      <ChatBot />
    </div>
  );
}
