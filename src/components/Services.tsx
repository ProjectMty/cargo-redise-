"use client";


import AnimatedText from "@/animate/TextAnimate";
import Image from "next/image";
import "@/style/Servicios.css";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

/* ================== TIPOS ================== */
type Bullet = { icon: string; text: string };
type ServiceId =
  | "crossborder"
  | "marketplaces"
  | "inventory"
  | "returns"
  | "special";



/* ================== DATA ================== */
const Servicios: Record<
  ServiceId,
  {
    title: string;
    bullets: Bullet[];
  }
> = {
  crossborder: {
    title: "Servicios de transporte y entrega transfronteriza",
    bullets: [
      { icon: "/img/icons/Icono 1.1.svg", text: "Envíos sin problemas entre USA, Canadá y México." },
      { icon: "/img/icons/Icono 1.2.svg", text: "Tarifas competitivas en envíos dentro y fuera de Canadá y México." },
      { icon: "/img/icons/Icono 1.3.svg", text: "Nuestros camiones cruzan ambas fronteras cada día." },
      { icon: "/img/icons/Icono 1.4.svg", text: "Podemos recoger su mercancía en la puerta de su casa en los USA y entregarla en cualquier dirección en México." },
      { icon: "/img/icons/Icono 1.5.svg", text: "Servicio de importación a México." },
      { icon: "/img/icons/Icono 1.6.svg", text: "Servicio de consolidados." },
    ],
  },
  marketplaces: {
    title: "Entrega en marketplaces y última milla",
    bullets: [
      { icon: "/img/icons/Icono 2.1.svg", text: "Entregas programadas a almacenes de Amazon FBA y Mercado Libre." },
      { icon: "/img/icons/Icono 2.2.svg", text: "Entregas de última milla hasta la puerta de tu comprador en México." },
      { icon: "/img/icons/Icono 2.3.svg", text: "Despachos de mercancía para ventas e‑commerce." },
      { icon: "/img/icons/Icono 2.4.svg", text: "Envíos a todo México." },
    ],
  },
  inventory: {
    title: "Manejo de inventario y almacenamiento",
    bullets: [
      { icon: "/img/icons/Icono 3.1.svg", text: "Almacenaje — Recibimos tu mercancía en nuestras bodegas y te entregamos como vayas necesitando unidades." },
      { icon: "/img/icons/Icono 3.2.svg", text: "Usa nuestra bodega como si fuera tuya." },
    ],
  },
  returns: {
    title: "Devoluciones y retornos",
    bullets: [
      { icon: "/img/icons/Icono 4.1.svg", text: "Realiza devoluciones de tus compras sin problema." },
      { icon: "/img/icons/Icono 4.2.svg", text: "Envía a nuestra bodega en México y nosotros lo llevamos a USA para devolver a tu proveedor." },
    ],
  },
  special: {
    title: "Transporte especializado",
    bullets: [
      { icon: "/img/icons/Icono 5.1.svg", text: "Entregas LTL." },
      { icon: "/img/icons/Icono 5.2.svg", text: "Flete aéreo nocturno de 2 días y diferido." },
      { icon: "/img/icons/Icono 5.3.svg", text: "Vuelos internacionales (prioritarios y diferidos)." },
    ],
  },

};




/* ================== PRINCIPAL ================== */
export default function Services() {
  const [openIndex, setOpenIndex] = useState<null | number>(0);



  return (
    <section id="servicios" className="section">
      <div className="max-w-[1500px]  mx-auto">
        {/* Header y tabs */}

        <AnimatedText
          delay={0.2}
          lines={[
            <h2 key={1} className="texto-titulo">
              Nuestros Servicios
            </h2>
          ]}>

        </AnimatedText>

        <p className="subtitulo-texto">
          En <span className="font-bold">Cargo Monterrey</span> hacemos que importar mercancía sea{" "}
          <span className="font-bold">fácil, rápido y seguro</span>. Sin membresías ni trámites complicados,
          recibimos, procesamos y entregamos tus paquetes directamente en México.
        </p>

        <p className="subtitulo-texto font-bold">
          Conoce nuestros principales servicios:
        </p>

        {/* contenedor superior */}
        <div className="contenedor-tarjetas">
          {Object.entries(Servicios).map(([id, service], index) => {
            const isOpen = openIndex === index;
            return (
              <div key={id}>
                {/* Texto y bullets */}
                <div className="div-tarjeta">
                  
                  <button onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="">
                    <div className="titulo-texto-tarjeta"> {service.title}</div>  
                    <div className="flecha-tarjeta">{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
                    
                  </button>
                  <div className="linea-horizontal"></div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-4 text-sm "
                      ><ul className="contenedor-descripcion-tarjeta">
                          {service.bullets.map((bullet, index) => (
                            <li key={index} className="contenedor-bullet-tarjeta">
                              <Image
                                src={bullet.icon}
                                alt="icono"
                                width={30}
                                height={30}
                                className="icono-tarjeta"
                              />
                              <span className="mt-1.5">{bullet.text}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              </div>
            )
          })}


        </div>





      </div>
    </section>
  );
}
