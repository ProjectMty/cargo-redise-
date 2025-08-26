import BuyAndShipCTA from "@/components/BuyAndShipCTA";
import ComoFunciona from "@/components/ComoFunciona";
import Hero from "@/components/Hero";
import Partnership from "@/components/Partnership"; 
import Services from "@/components/Services";
import Tarifas from "@/components/Tarifas";
import BuyAndShip from "@/components/buyandship";
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ComoFunciona/>
      <Tarifas/>
      <Partnership/>
      <BuyAndShipCTA/>
    </main>
  );
}
