"use client";

import Image from "next/image";
import UpAnimate from "@/animate/UpAnimate";
import AnimatedText from "@/animate/TextAnimate";
import "@/app/mexico-a-usa/style/costosMexUsa.css"

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
    <section className="section-costos-mu" id="CostosUSA">
      {/* --------- Banda de fondo delgada + título --------- */}
      <div className="contenedor-fondo-costos-mu">
        <Image
          src="/img/mexausa/costos/background.png"
          alt="Fondo costos"
          fill
          className="img-fondo-costos-mu"
          priority
        />
        <div className="contenedor-titulo-costos-mu">
          <AnimatedText delay={0.2} lines={[
            <h2 key={1} className="titulo-costo-mu">
              Estructura de Costos
            </h2>
          ]}></AnimatedText>

        </div>
      </div>

      {/* --------- Tarjetas (sobrepuestas a la banda) --------- */}
      <div className="contenedor-tarjetas-costos-mu">
       
          {items.map((it, i) => (
            <UpAnimate move={-10} key={i}>
              <div
                key={i}
                className="contenedor-costo-mu"
              >
                {/* Icono flotante */}
                <div
                  className="icono-tarjeta-costo-mu"
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
                <h3 className="titulo-tarjeta-costo-mu">
                  {it.title}
                </h3>

                {/* Subtítulo (negrita corta) */}
                <p className="subtitulo-tarjeta-costo-mu">
                  {it.sub}
                </p>

                {/* Cuerpo */}
                <p className="texto-tarjeta-costo-mu">
                  {it.body}
                </p>
              </div>
            </UpAnimate>

          ))}
       
      </div>
    </section>
  );
}
