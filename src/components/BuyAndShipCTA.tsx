// src/components/BuyAndShipCTA.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function BuyAndShipCTA() {
  return (
    <section id="buyandship" className="relative w-full flex justify-center items-center py-20 bg-gradient-to-r from-blue-400 to to-blue-900 font-[Montserrat] scroll-smooth">


      <div className="relative w-full max-w-4xl">
        <Image
          src="/img/buyandship/Forma 1.png"
          alt="Buy & Ship"
          width={1200}
          height={600}
          className="w-full h-auto rounded-[28px] object-cover z-10"
          priority
        />

        <div className=" pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] lg:-translate-y-[60%] w-[88vw] max-w-[500px] text-center ">
          <h1 className="font-extrabold lg:text-[35px] mb-3 lg:mb-10">
            ¿Buscas proveedores para surtir tu negocio?
          </h1>

          <img
            src="/img/buyandship/buyShipLogo.svg"
            alt="logo buy and ship"
            className="mb-3 lg:mb-10" />

          <div className=" text-[10px] lg:text-[25px]">
            <span className="font-bold">Cargo Monterrey</span>  te ayuda con su nuevo servicio {" "}
            <span className="font-bold">Buy and Ship</span>.
          </div>



        </div>

        {/* Botón (sólo navega a la PÁGINA buy-and-ship) */}
        <div className="absolute bottom-6 lg:bottom-16 w-full flex justify-center ">
          <Link
            href="/buy-and-ship"
            className="text-sm lg:text-lg px-2 lg:px-6 py-0.5 lg:py-2 bg-white text-blue-800 font-semibold rounded-full shadow-md hover:bg-blue-800 hover:text-white transition z-50"
          >
            Visita aquí
          </Link>
        </div>
      </div>
    </section>
  );
}
