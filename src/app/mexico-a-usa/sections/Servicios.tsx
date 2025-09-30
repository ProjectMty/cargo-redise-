"use client";
import { useState } from "react";
import Image from "next/image";
import AnimatedText from "@/animate/TextAnimate";
import { AnimatePresence } from "framer-motion";
import FadeInFromLeft from "@/animate/FadeInFromLeft";
import DivZoom from "@/animate/DivZoom";

// === TUS DATOS (rutas respetadas) ===
const services = [
  {
    id: 1,
    title: "Flete nacional",
    description: `Recogemos la mercancia en tu bodega o en la puerta
de tu negocio en cualquier parte de Mexico.
Tu mercancia llega a nuestro centro de distribución en
Monterrey y de ahí, nosotros transportamos la mercancía
a la frontera con Estados Unidos.`,
    image: "/img/mexausa/servicios/Boton elements 1/b1.png",
    icon: "/img/mexausa/servicios/Boton elements 1/Icono b1.svg",
  },
  {
    id: 2,
    title: "Preparación para compliance en USA",
    description: `Preparamos tu mercancia con las etiquetas y sellos
requeridos para su importación a USA.`,
    image: "/img/mexausa/servicios/Boton elements 2/b2.png",
    icon: "/img/mexausa/servicios/Boton elements 2/Icono b2.svg",
  },
  {
    id: 3,
    title: "Clasificación y documentación",
    description: `Clasificamos la mercancia con las tarifas arancelarias
correspondientes. Preparamos todos los documentos
requeridos para su exportación a USA.`,
    image: "/img/mexausa/servicios/Boton elements 3/b3.png",
    icon: "/img/mexausa/servicios/Boton elements 3/Icono b3.svg",
  },
  {
    id: 4,
    title: "Servicio de comercializadora para exportación",
    description: `Si tu no cuentas con registro en el padrón de
exportadores, nosotros te apoyamos con todos los
tramites y documentos necesarios para cumplir con el
Requisito.`,
    image: "/img/mexausa/servicios/Boton elements 4/b4.png",
    icon: "/img/mexausa/servicios/Boton elements 4/Icono b4.svg",
  },
  {
    id: 5,
    title: "Transfer a USA",
    description: `Ya liberada de Mexico, cruzamos tu mercancía a USA.`,
    image: "/img/mexausa/servicios/Boton elements 5/b5.png",
    icon: "/img/mexausa/servicios/Boton elements 5/Icono b5.svg",
  },
  {
    id: 6,
    title: "Flete en USA",
    description: `Coordinamos el flete para que tu mercancia llegue
directamente a la puerta de tu cliente en USA o a
centros de distribución de Amazon.`,
    image: "/img/mexausa/servicios/Boton elements 6/b6.png",
    icon: "/img/mexausa/servicios/Boton elements 6/Icono b6.svg",
  },
];

export default function ServiciosMxUsa() {
  const [activeId, setActiveId] = useState<number>(1);
  const active = services.find((s) => s.id === activeId)!;
  const [showComponent] = useState(true); // <-- Aquí defines 'showComponent'

  // estilos de botones
  const baseBtn =
    "rounded-[17px] px-6 py-4 text-[20px] font-medium font-[Montserrat] transition-colors duration-200";
  const selectedBtn =
    "bg-sky-600 text-[#F2F2F2] shadow-[0_8px_20px_rgba(2,132,199,0.35)]";
  const unselectedBtn =
    "border border-[#F2F2F2] text-[#F2F2F2] bg-transparent hover:bg-white/10";

  return (
    <section className="w-full bg-[#2E47A1] text-white scroll-mt-20" id="serviciosUSA">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* Título */}
        <AnimatedText delay={0.2} lines={[
          <h2 key={1} className="text-center text-white font-[Montserrat] font-extrabold text-[34px] md:text-[44px] leading-tight mb-6">
            Nuestros Servicios
          </h2>
        ]}></AnimatedText>



        {/* FILA 1: Botones 1–4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {services.slice(0, 4).map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`${baseBtn} ${activeId === s.id ? selectedBtn : unselectedBtn
                } w-full max-w-[320px] text-center`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* FILA 2: Botones 5–6 centrados */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto justify-items-center">
          {services.slice(4, 6).map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`${baseBtn} ${activeId === s.id ? selectedBtn : unselectedBtn
                } w-full text-center`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* CONTENIDO (doble recuadro) */}
        <div className="relative mt-10">
          {/* capa “sombra” (doble recuadro) */}
          <div className="pointer-events-none absolute -right-4 -bottom-4 left-4 top-4 rounded-[34px] bg-black/10 blur-[2px] opacity-20"></div>

          {/* tarjeta principal */}
          <div className="relative rounded-[30px] bg-white text-[#333333] px-6 md:px-10 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col lg:flex-row items-center gap-8">

              {/* Imagen a la medida original (no forzar) */}

              <DivZoom scale={1.1}>
                <div className="shrink-0">
                  <Image
                    src={active.image}
                    alt={active.title}
                    width={400} 
                    height={300} 
                    className="block rounded-[22px] shadow-[0_12px_30px_rgba(0,0,0,0.18)] max-w-full h-auto"
                  />
                </div>
              </DivZoom>
              {/* Texto + Icono */}
              <AnimatePresence mode="wait">
                {showComponent && (
                  <FadeInFromLeft keyId={`${active.id}`} delay={0.2}>
                    <div className="w-full">
                      {/* Icono */}
                      <div className="mb-4">
                        <Image
                          src={active.icon}
                          alt=""
                          width={96}
                          height={96}
                          className="w-[84px] h-[84px]"
                        />
                      </div>

                      {/* Título (30px) */}
                      <h3 className="font-[Montserrat] font-extrabold text-[30px] leading-tight mb-4 text-[#1E3A8A]">
                        {active.title}
                      </h3>

                      {/* Párrafo (25px, #333333) */}
                      <p className="whitespace-pre-line font-[Montserrat] text-[25px] leading-[1.35]">
                        {active.description}
                      </p>
                    </div>
                  </FadeInFromLeft>
                )}


              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* margen inferior para “respirar” */}
        <div className="h-10" />
      </div>
    </section>
  );
}
