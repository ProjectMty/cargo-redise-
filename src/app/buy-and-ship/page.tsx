import Navbar from "@/components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Servicios";
import Contactanos from "./sections/Contactanos";
import Intro from "./sections/Intro";
import Pasos from "./sections/Pasos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
export default function BuyAndShipPage() {
  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Pasos />
      <Contacto />
      <Footer />
    </main>
  );
}
