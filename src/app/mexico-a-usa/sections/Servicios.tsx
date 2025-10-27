"use client";
import { useState } from "react";
import Image from "next/image";
import AnimatedText from "@/animate/TextAnimate";
import { AnimatePresence } from "framer-motion";
import FadeInFromLeft from "@/animate/FadeInFromLeft";
import DivZoom from "@/animate/DivZoom";
import "@/app/mexico-a-usa/style/serviciosMexUsa.css"
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

  return (
    <section className="section-servicios-mu" id="serviciosUSA">
      <div className="contenedor-servicios-mu">

        {/* Título */}
        <AnimatedText delay={0.2} lines={[
          <h2 key={1} className="titulo-servicios-mu">
            Nuestros Servicios
          </h2>
        ]}></AnimatedText>

        {/* FILA 1: Botones 1–4 */}
        <div className="contenedor-botones-arriba-servicios-mu">
          {services.slice(0, 4).map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`boton-base-servicios-mu ${activeId === s.id ? "boton-select-servicios-mu" : "boton-unselect-servicios-mu"
                } w-full max-w-[320px] text-center`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* FILA 2: Botones 5–6 centrados */}
        <div className="contenedor-botones-abajo-servicios-mu">
          {services.slice(4, 6).map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`boton-base-servicios-mu ${activeId === s.id ? "boton-select-servicios-mu" : "boton-unselect-servicios-mu"
                } boton-tamaño-servicios-mu `}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* CONTENIDO (doble recuadro) */}
        <div className="relative mt-10">
        
          {/* tarjeta principal */}
          <div className="contenedor-inf-servicio-mu">
            {/* Imagen a la medida original (no forzar) */}

              <DivZoom scale={1.1}>
                <div className="shrink-0">
                  <Image
                    src={active.image}
                    alt={active.title}
                    width={400} 
                    height={300} 
                    className="img-inf-servicio-mu"
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
                          className="icon-inf-servicio-mu"
                        />
                      </div>

                      {/* Título (30px) */}
                      <h3 className="titulo-inf-servicio-mu">
                        {active.title}
                      </h3>

                      {/* Párrafo (25px, #333333) */}
                      <p className="texto-inf-servicio-mu">
                        {active.description}
                      </p>
                    </div>
                  </FadeInFromLeft>
                )}


              </AnimatePresence>
            
          </div>
        </div>
 
      </div>
    </section>
  );
}
