"use client";

import Image from "next/image";
import UpAnimate from "@/animate/UpAnimate";
import AnimatedText from "@/animate/TextAnimate";
export default function Costos() {
  const items = [
    {
      title: "Honorarios",
      icon: "/img/mexausa/costos/Icono 1.svg",
      sub: "3.5% sobre el valor de la mercancía.",
      body:
        "Esto cubre la clasificación de la mercancía, verificación y cumplimiento de requisitos de compliance en USA, documentación de exportación, documentación de importación, así como coordinación de fletes.",
    },
    {
      title: "Fletes",
      icon: "/img/mexausa/costos/Icono 2.svg",
      sub: "Cotizamos el flete nacional, transfer, y flete en USA.",
      body: "Esto varía basado en ubicaciones, peso y dimensiones.",
    },
    {
      title: "Impuestos y aranceles",
      icon: "/img/mexausa/costos/Icono 3.svg",
      sub: "Se cobran los impuestos y aranceles para importar la mercancía a USA.",
      body:
        "*Estos costos varían dependiendo de país de origen y tipo de mercancía.",
    },
  ];

  return (
    <section className="w-full bg-[#F2F2F2] scroll-mt-20" id="CostosUSA">
      {/* --------- Banda de fondo delgada + título --------- */}
      <div className="relative w-full h-[270px] overflow-hidden">
        <Image
          src="/img/mexausa/costos/background.png"
          alt="Fondo costos"
          fill
          className="object-cover object-center opacity-95"
          priority
        />
        <div className="relative z-10 h-full flex items-start justify-center mt-10">
          <AnimatedText delay={0.2} lines={[
            <h2 key={1} className="text-white drop-shadow-md text-[28px] md:text-[34px] font-extrabold font-[Montserrat]">
              Estructura de Costos
            </h2>
          ]}></AnimatedText>

        </div>
      </div>

      {/* --------- Tarjetas (sobrepuestas a la banda) --------- */}
      <div className="max-w-6xl mx-auto px-4 md:px-30 -mt-30 pb-18">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {items.map((it, i) => (
            <UpAnimate move={-10}>
              <div
                key={i}
                className="
                relative bg-white rounded-[25px]
                shadow-[0_18px_50px_rgba(0,0,0,0.10)]
                pt-13 pb-6 px-6 text-center h-[300px]
              "
              >
                {/* Icono flotante */}
                <div
                  className="
                  absolute -top-7 left-1/2 -translate-x-1/2
                  bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                  border border-white/60
                  w-[58px] h-[58px] flex items-center justify-center
                "
                >
                  <Image
                    src={it.icon}
                    alt={it.title}
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </div>

                {/* Título */}
                <h3 className="font-[Montserrat] font-extrabold text-[#1e3a8a] text-[18px] md:text-[20px]">
                  {it.title}
                </h3>

                {/* Subtítulo (negrita corta) */}
                <p className="mt-2 text-[12px] md:text-[12.5px] font-semibold text-[#0f172a]">
                  {it.sub}
                </p>

                {/* Cuerpo */}
                <p className="mt-3 text-[12px] md:text-[12.5px] leading-relaxed text-[#374151]">
                  {it.body}
                </p>
              </div>
            </UpAnimate>

          ))}
        </div>
      </div>
    </section>
  );
}
