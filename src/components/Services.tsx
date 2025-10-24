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
  | "special"
  | "fulfillment"
  | "buyShip"
  | "cargo";



/* ================== DATA ================== */
const Servicios: Record<
  ServiceId,
  {
    title: string;
    bullets: Bullet[];
  }
> = {
  // crossborder: {
  //   title: "Servicios de transporte y entrega transfronteriza",
  //   bullets: [
  //     { icon: "/img/icons/Icono 1.1.svg", text: "Envíos sin problemas entre USA, Canadá y México." },
  //     { icon: "/img/icons/Icono 1.2.svg", text: "Tarifas competitivas en envíos dentro y fuera de Canadá y México." },
  //     { icon: "/img/icons/Icono 1.3.svg", text: "Nuestros camiones cruzan ambas fronteras cada día." },
  //     { icon: "/img/icons/Icono 1.4.svg", text: "Podemos recoger su mercancía en la puerta de su casa en los USA y entregarla en cualquier dirección en México." },
  //     { icon: "/img/icons/Icono 1.5.svg", text: "Servicio de importación a México." },
  //     { icon: "/img/icons/Icono 1.6.svg", text: "Servicio de consolidados." },
  //   ],
  // },
  crossborder: {
    title: "Servicios de transporte y entrega transfronteriza",
    bullets: [
      { icon: "/img/icons/Icono 1.1.svg", text: "Recepcion de mercancia en USA" },
      { icon: "/img/icons/Icono 1.2.svg", text: "Preparacion de documentacion y tramites de importacion" },
      { icon: "/img/icons/Icono 1.3.svg", text: "Servicio de transfer/cross border logistics" },
      { icon: "/img/icons/Icono 1.4.svg", text: "Integracion de mercancia a Mexico para tus ventas en fisico, Amazon FBA, Mercado Libre, o Walmart FS." },
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
    title: "Devoluciones y Reverse Logistics",
    bullets: [
      { icon: "/img/icons/Icono 4.1.svg", text: "Recepción, clasificación y retorno de productos desde México a USA o Canadá." },
      { icon: "/img/icons/Icono 4.2.svg", text: "Devoluciones FBA / FBM / Retail." },
       { icon: "/img/icons/Icono 4.2.svg", text: "Opciones de reempaque." },
        { icon: "/img/icons/Icono 4.2.svg", text: "Control total de inventarios y reportes detallados." },
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
  fulfillment: {
    title: "Fulfillment y Distribución ",
    bullets: [
      { icon: "/img/icons/Icono 5.1.svg", text: "Almacenamiento seguro en bodegas estratégicas." },
      { icon: "/img/icons/Icono 5.2.svg", text: "Gestión de inventario y control de stock en tiempo real." },
      { icon: "/img/icons/Icono 5.3.svg", text: "Preparación de órdenes (Pick & Pack) y etiquetado para marketplaces.  tus productos, facilitando tus ventas en línea." },
      { icon: "/img/icons/Icono 5.2.svg", text: "Distribución nacional a clientes o centros de distribución de Amazon, Mercado Libre y Walmart." },
      { icon: "/img/icons/Icono 5.2.svg", text: "Integración con tus plataformas de eCommerce." },
      { icon: "/img/icons/Icono 5.2.svg", text: "Traducción y adaptación de etiquetas al español." },
    ],
  },
  buyShip: {
    title: "Buy & Ship USA a México",
    bullets: [
      { icon: "/img/icons/Icono 5.1.svg", text: "Gestionamos el envío de muestras hasta tu puerta en México." },
      { icon: "/img/icons/Icono 5.2.svg", text: "Realizamos pagos internacionales y nos encargamos de toda la comunicación y logística hasta que tu mercancía llegue segura a tu negocio o domicilio." },
      { icon: "/img/icons/Icono 5.3.svg", text: "Ofrecemos servicio de importer of record, sales tax permit, y mas." },
    ],
  },
  cargo: {
     title: "¿Por qué elegir Cargo Monterrey?",
    bullets: [
      { icon: "/img/icons/Icono 5.1.svg", text: "Más de 10 años de experiencia en logística internacional." },
      { icon: "/img/icons/Icono 5.2.svg", text: "Cruces fronterizos diarios y cobertura total en México, EE.UU. y Canadá." },
      { icon: "/img/icons/Icono 5.3.svg", text: "Soporte en inglés y español." },
      { icon: "/img/icons/Icono 5.3.svg", text: "Soluciones personalizadas según tu tipo de producto y destino." },
      { icon: "/img/icons/Icono 5.3.svg", text: "Tarifas competitivas." },
    ],
  }

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
              Servicios Principales de Cargo Monterrey
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
              <div key={id} className="div-tarjeta">
                {/* Texto y bullets */}
                <button className="button-tarjeta-servicios" onClick={() => setOpenIndex(isOpen ? null : index)} >
                  <div className="titulo-texto-tarjeta"> {service.title}</div>
                  <div className="flecha-tarjeta">{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
                  <div className="linea-horizontal-servicios"></div>

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
                </button>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  );
}
