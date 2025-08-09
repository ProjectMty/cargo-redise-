"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

/**
 * NOTAS RÁPIDAS
 * - Cambia las rutas de imágenes según tus assets:
 *   - bgURL: fondo del bloque grande (puede ser un degradado o imagen de /img/...).
 *   - photo: foto del servicio (la de la persona con el pallet en tu mockup).
 *   - icon: iconos de cada bullet (colócalos en /public/img/icons/...).
 * - Todo el contenido se renderiza en un solo lugar; los tabs “cambian” lo visible.
 */

// Definimos los servicios (puedes editar textos y rutas sin tocar la lógica)
const SERVICES = [
  {
    id: "crossborder",
    title: "Servicios de transporte y entrega transfronteriza",
    bgURL: "/img/services/bg-gradient.png",
    photo: "/img/services/crossborder.jpg",
    bullets: [
      { icon: "/img/icons/usa-mx.svg", text: "Envíos sin problemas entre USA, Canadá y México." },
      { icon: "/img/icons/rate.svg", text: "Tarifas competitivas en envíos dentro y fuera de Canadá y México." },
      { icon: "/img/icons/truck.svg", text: "Nuestros camiones cruzan ambas fronteras cada día." },
      { icon: "/img/icons/pickup.svg", text: "Podemos recoger tu mercancía en USA y entregarla en cualquier dirección en México." },
      { icon: "/img/icons/import.svg", text: "Servicio de importación a México." },
      { icon: "/img/icons/consolidate.svg", text: "Servicio de envíos consolidados." },
    ],
  },
  {
    id: "marketplaces",
    title: "Entrega en marketplaces y última milla",
    bgURL: "/img/services/bg-gradient.png",
    photo: "/img/services/marketplaces.jpg",
    bullets: [
      { icon: "/img/icons/amazon.svg", text: "Cumplimiento a FBA/Mercado Libre y última milla." },
      { icon: "/img/icons/label.svg", text: "Etiquetado y preparación conforme a guías del marketplace." },
      { icon: "/img/icons/clock.svg", text: "Ventanas de entrega programadas y pruebas de entrega." },
    ],
  },
  {
    id: "inventory",
    title: "Manejo de inventario y almacenamiento",
    bgURL: "/img/services/bg-gradient.png",
    photo: "/img/services/warehouse.jpg",
    bullets: [
      { icon: "/img/icons/almacenaje.svg", text: "Almacenaje seguro en nuestras bodegas." },
      { icon: "/img/icons/scan.svg", text: "Recepción, escaneo, control por BoxID y tracking." },
      { icon: "/img/icons/report.svg", text: "Reportes y cortes de inventario bajo demanda." },
    ],
  },
  {
    id: "special",
    title: "Transporte especializado",
    bgURL: "/img/services/bg-gradient.png",
    photo: "/img/services/special.jpg",
    bullets: [
      { icon: "/img/icons/fragile.svg", text: "Manejo de mercancía frágil o sobredimensionada." },
      { icon: "/img/icons/insurance.svg", text: "Coberturas de seguro a medida." },
    ],
  },
  {
    id: "returns",
    title: "Devoluciones y retornos",
    bgURL: "/img/services/bg-gradient.png",
    photo: "/img/services/returns.jpg",
    bullets: [
      { icon: "/img/icons/rma.svg", text: "Gestión de RMA y retornos hacia USA." },
      { icon: "/img/icons/reverse.svg", text: "Trazabilidad completa con nuevo BoxID/Tracking vinculado." },
    ],
  },
] as const;

type ServiceId = (typeof SERVICES)[number]["id"];

export default function Services() {
  const [active, setActive] = useState<ServiceId>("crossborder");

  const service = SERVICES.find(s => s.id === active)!;

  return (
    <section id="servicios" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        {/* Encabezado */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#2E86DE]">
          Nuestros Servicios
        </h2>
        <p className="mt-3 text-center text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
          En <span className="font-bold">Cargo Monterrey</span>, hacemos que importar mercancía desde cualquier parte del mundo
          sea <span className="font-semibold">fácil, rápido y seguro</span>. Conoce nuestros principales servicios:
        </p>

        {/* Botonera (tabs) */}
        <div
          role="tablist"
          aria-label="Servicios"
          className="mt-6 flex flex-wrap gap-3 justify-center"
        >
          {SERVICES.map(s => {
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(s.id)}
                className={[
                  "px-4 py-2 rounded-full text-sm md:text-[15px] transition",
                  "border",
                  isActive
                    ? "bg-[oklch(42.4%_0.199_265.638)] text-white border-transparent shadow-md"
                    : "bg-white text-[#2E4AA6] border-[#CFE1FF] hover:bg-[#F2F6FF]"
                ].join(" ")}
              >
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Panel con animación (mismo espacio para todos los servicios) */}
        <div className="mt-8 md:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="relative"
            >
              {/* Tarjeta grande con fondo (puede ser tu PNG con bordes) */}
              <div className="relative rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl overflow-hidden">
                {/* Fondo decorativo */}
                {service.bgURL && (
                  <Image
                    src={service.bgURL}
                    alt=""
                    fill
                    priority={false}
                    className="object-cover -z-10"
                  />
                )}

                {/* Layout: imagen izquierda + bullets a la derecha (responsivo) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                  {/* Imagen del servicio */}
                  <div className="order-1">
                    <Image
                      src={service.photo}
                      alt={service.title}
                      width={900}
                      height={600}
                      className="w-full h-auto rounded-2xl object-cover shadow-md"
                      priority={false}
                    />
                  </div>

                  {/* Contenido (bullets) */}
                  <div className="order-2">
                    <h3 className="text-white text-lg md:text-xl font-extrabold drop-shadow-sm">
                      {service.title}
                    </h3>

                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 rounded-xl bg-white/95 backdrop-blur p-3"
                        >
                          {!!b.icon && (
                            <Image
                              src={b.icon}
                              alt=""
                              width={28}
                              height={28}
                              className="shrink-0"
                            />
                          )}
                          <p className="text-[14px] leading-snug text-[#061349]">
                            {b.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
