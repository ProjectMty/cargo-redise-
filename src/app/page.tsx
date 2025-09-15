// src/app/page.tsx
import BuyAndShipCTA from "@/components/BuyAndShipCTA";
import ComoFunciona from "@/components/ComoFunciona";
import Hero from "@/components/Hero";
import Partnership from "@/components/Partnership";
import Services from "@/components/Services";
import Tarifas from "@/components/Tarifas";
import Ubicaciones from "@/components/Ubicaciones";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ComoFunciona />
      <Tarifas />
      <Partnership />
      <BuyAndShipCTA /> {/* <-- sólo en Home */}
      <Ubicaciones />
    </main>
  );
}
