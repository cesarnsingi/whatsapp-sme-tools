import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import HeroFeatures from "./components/HeroFeatures";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroFeatures />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
