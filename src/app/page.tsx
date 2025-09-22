// src/app/page.tsx
import BuyAndShipCTA from "@/components/BuyAndShipCTA";
import ComoFunciona from "@/components/ComoFunciona";
import Contacto from "@/components/Contacto";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partnership from "@/components/Partnership";
import Services from "@/components/Services";
import Tarifas from "@/components/Tarifas";
import Ubicaciones from "@/components/Ubicaciones";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main >
      <Navbar/>
      <Hero />
      <Services />
      <ComoFunciona />
      <Tarifas />
      <Partnership />
      <BuyAndShipCTA /> {/* <-- sólo en Home */}
      <Ubicaciones />
      <Contacto />
      <Footer />
    </main>
  );
}
