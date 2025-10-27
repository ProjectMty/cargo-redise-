"use client";
import { useEffect, useState } from "react";

// import TimeZoom from "@/animate/TimeZoom";
// import AnimatedText from "@/animate/TextAnimate";
// import FadeInFromRight from "@/animate/FadeInFromRight";
import FadeOut from "@/animate/ExitAnimate";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import "@/app/buy-and-ship/sections/style/hero-bs.css"

export default function BuyAndShipHero() {
  const [scrolled, setScrolled] = useState(true);

  // Cambia valor al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 300);
   
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Dentro de tu componente HeroBuyAndShip (sólo el bloque visual del hero)
    <section className="section-hero-bs">

      {/* Fondo: imagen principal */}
      <div className="absolute inset-0">

        <Image
          src="/img/buyandship/bg1.png"
          alt="Almacén"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Vignette opcional (muy sutil) */}
        <div className="shadow-hero-bs" />
      </div>

      {/* Overlay letras: centrado y dimensionado estable*/}
      <div
        className="contenedor-logo-hero-bs"

        aria-hidden="true"
      >
        <AnimatePresence mode="wait">
          {scrolled && (
            <FadeOut delay={0}>
              <Image
                src="/img/buyandship/LogoB&S.svg"
                alt="logo"
                width={500}
                height={200}
                className="logo-hero-bs"
                loading="eager"
              />
            </FadeOut>

          )}

        </AnimatePresence>
      </div>
    </section>

  );
}
