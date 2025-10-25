// src/components/BuyAndShipCTA.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import TextShow from "@/animate/TextShow";
import DivZoom from "@/animate/DivZoom";
import TimeZoom from "@/animate/TimeZoom";
import "@/style/buy&ship.css"
export default function BuyAndShipCTA() {
  return (
    <section id="buyandship" className="section-buyShip">


      <div className="relative w-full max-w-4xl">

        <Image
          src="/img/buyandship/Forma 1.png"
          alt="Buy & Ship"
          width={1200}
          height={600}
          className="img-fondo-buyShip"
          priority
        />

        <div className="contenedor-texto-buyShip">
          <TextShow delay={0.2} lines={[
            <h1 key={1} className="titulo-buyShip">
              ¿Buscas proveedores para surtir tu negocio?
            </h1>
          ]}>

          </TextShow>
          <TimeZoom delay={0.5}>
            <DivZoom scale={1.2}>
              <Image
                src="/img/buyandship/buyShipLogo.svg"
                alt="logo buy and ship"
                width={500}
                height={200}
                className="logo-buyShip" />
            </DivZoom>
          </TimeZoom>
          <TextShow delay={0.7} lines={[
            <div key={1} className="subtitulo-buyShip">
              <span className="font-bold">Cargo Monterrey</span>  te ayuda con su nuevo servicio {" "}
              <span className="font-bold">Buy and Ship</span>.
            </div>
          ]}>

          </TextShow>




        </div>

        {/* Botón (sólo navega a la PÁGINA buy-and-ship) */}
        <div className="contenedor-boton-buyShip">
          <DivZoom scale={1.2}>
            <Link
              href="/buy-and-ship"
              className="boton-buyShip"
            >
              Visita aquí
            </Link>
          </DivZoom>
        </div>
      </div>
    </section>
  );
}
