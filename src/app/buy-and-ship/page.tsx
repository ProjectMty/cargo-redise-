import Navbar from "@/components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Servicios";

import Contactanos from "./sections/Contactanos";
import Intro from "./sections/Intro";
import Pasos from "./sections/Pasos";
export default function BuyAndShipPage() {
  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Pasos />
      <Contactanos />
      
    </main>
  );
}
