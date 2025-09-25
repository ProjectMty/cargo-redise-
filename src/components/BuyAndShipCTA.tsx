// src/components/BuyAndShipCTA.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import TextShow from "@/animate/TextShow";
import DivZoom from "@/animate/DivZoom";
import TimeZoom from "@/animate/TimeZoom";

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



        <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] lg:-translate-y-[60%] w-[88vw] max-w-[500px] text-center text-white">
          <TextShow delay={0.2} lines={[
            <h1 key={1} className="font-extrabold lg:text-[35px] mb-3 lg:mb-10">
              ¿Buscas proveedores para surtir tu negocio?
            </h1>
          ]}>

          </TextShow>
          <TimeZoom delay={0.5}>
          <DivZoom scale={1.2}>
            <img
              src="/img/buyandship/buyShipLogo.svg"
              alt="logo buy and ship"
              className="mb-3 lg:mb-10" />
          </DivZoom>
</TimeZoom>
          <TextShow delay={0.7} lines={[
            <div key={1} className=" text-[10px] lg:text-[25px]">
              <span className="font-bold">Cargo Monterrey</span>  te ayuda con su nuevo servicio {" "}
              <span className="font-bold">Buy and Ship</span>.
            </div>
          ]}>

          </TextShow>




        </div>

        {/* Botón (sólo navega a la PÁGINA buy-and-ship) */}
        <div className="absolute bottom-6 lg:bottom-16 w-full flex justify-center ">
          <DivZoom scale={1.2}>
          <Link
            href="/buy-and-ship"
            className="text-sm lg:text-lg px-2 lg:px-6 py-0.5 lg:py-2 bg-white text-blue-800 font-semibold rounded-full shadow-md hover:bg-blue-800 hover:text-white  transition duration-350 z-50"
          >
            Visita aquí
          </Link>
          </DivZoom>
        </div>
      </div>
    </section>
  );
}
