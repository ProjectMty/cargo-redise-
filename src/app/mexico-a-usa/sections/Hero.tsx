"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="mxusa-hero"
      className="relative isolate overflow-hidden bg-gradient-to-r from-[#173E98] to-[#1EC8E6]"
    >
      {/* Fondo: coloca tu imagen grande detrás si quieres */}
      <div className="absolute inset-0 opacity-20">
        {/* <Image src="/img/mxusa/hero-bg.jpg" alt="" fill className="object-cover" /> */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-28 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          ¿Vives en México? <br /> ¡Coloca tus productos en Estados Unidos!
        </h1>
        <p className="mt-5 max-w-2xl text-white/90 text-lg md:text-xl">
          Te ayudamos a vender en USA: recolección, cruce, almacenaje, última milla y más.
        </p>
      </div>
    </section>
  );
}
