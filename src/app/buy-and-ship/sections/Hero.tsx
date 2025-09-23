"use client";
import { useEffect, useState } from "react";

// import TimeZoom from "@/animate/TimeZoom";
// import AnimatedText from "@/animate/TextAnimate";
// import FadeInFromRight from "@/animate/FadeInFromRight";
import FadeOut from "@/animate/ExitAnimate";
import { AnimatePresence } from "framer-motion";


export default function BuyAndShipHero() {
  const [scrolled, setScrolled] = useState(true);


  // Cambia valor al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      
     
      setScrolled(window.scrollY <= 50);

    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Dentro de tu componente HeroBuyAndShip (sólo el bloque visual del hero)
    <section className="relative w-full min-h-[420px] md:min-h-[520px] lg:min-h-[500px] rounded-b-[40px] overflow-hidden bg-[#F2F2F2]">

      {/* Fondo: imagen principal */}
      <div className="absolute inset-0">
        <img
          src="/img/buyandship/bg1.png"
          alt="Almacén"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Vignette opcional (muy sutil) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14)_0%,rgba(0,0,0,0.18)_60%,rgba(0,0,0,0.32)_100%)] mix-blend-multiply pointer-events-none" />
      </div>

      {/* Overlay letras: centrado y dimensionado estable  left-3 lg:left-1/3*/}
      <div
        className="pointer-events-none fixed top-[25%] left-[49%] translate-x-[-19%] translate-y-[-50%] 2xl:top-[20%]
             w-[96vw] max-w-[1100px] lg:w-[74vw] lg:max-w-[1280px]"


        aria-hidden="true"
      >
        <AnimatePresence mode="wait">
          {scrolled && (
            <FadeOut delay={0.2}>
              <img
                src="/img/buyandship/LogoB&S.svg"
                alt="logo"
                className="w-lg opacity-[0.92] drop-shadow-[0_8px_26px_rgba(0,0,0,0.25)]"
                loading="eager"
              />
            </FadeOut>

          )}

        </AnimatePresence>
      </div>

      {/* Espaciado superior para no tapar la navbar */}
      <div className="h-[88px]" />
    </section>

  );
}
