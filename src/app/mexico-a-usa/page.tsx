import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Servicios from "./sections/Servicios"
import Servicios2 from "./sections/Servicios2";
import Costos from "./sections/Costos";
import Industrias from "./sections/Industrias";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
export default function MexicoUSA() {
  return (
    <main >
      <Hero />
      <Intro/>
      <Servicios/>
      <Servicios2/>
      <Costos/>
      <Industrias/>
      <Contacto/>
      <Footer />
    </main>
  );
}
