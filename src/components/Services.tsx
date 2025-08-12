"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

/* ============================
   DATA (edita títulos, fotos e íconos aquí)
   ============================ */
const SERVICES = [
  {
    id: "crossborder",
    title: "Servicios de transporte y entrega transfronteriza",
    bgURL: "/img/services/panel-bg.png",
    photo: "/img/services/servicesfondo.png",
    bullets: [
      { icon: "/img/services/Icono 1.1.svg", text: "Envíos sin problemas entre USA, Canadá y México." },
      { icon: "/img/services/Icono 1.2.svg", text: "Tarifas competitivas en envíos dentro y fuera de Canadá y México." },
      { icon: "/img/services/Icono 1.3.svg", text: "Nuestros camiones cruzan ambas fronteras cada día." },
      { icon: "/img/services/Icono 1.4.svg", text: "Podemos recoger tu mercancía en USA y entregarla en cualquier dirección en México." },
      { icon: "/img/services/Icono 1.5.svg", text: "Servicio de importación a México." },
      { icon: "/img/services/Icono 1.6.svg", text: "Servicio de envíos consolidados." },
    ],
  },
  // Puedes completar los otros tabs cuando tengas assets listos
  {
    id: "marketplaces",
    title: "Entrega en marketplaces y última milla",
    bgURL: "/img/services/panel-bg.png",
    photo: "/img/services/marketplaces.jpg",
    bullets: [
      { icon: "/img/icons/amazon.svg", text: "Cumplimiento a FBA/Mercado Libre y última milla." },
      { icon: "/img/icons/label.svg",  text: "Etiquetado y preparación conforme a guías del marketplace." },
      { icon: "/img/icons/clock.svg",  text: "Ventanas de entrega programadas y pruebas de entrega." },
    ],
  },
  {
    id: "inventory",
    title: "Manejo de inventario y almacenamiento",
    bgURL: "/img/services/panel-bg.png",
    photo: "/img/services/warehouse.jpg",
    bullets: [
      { icon: "/img/icons/almacenaje.svg", text: "Almacenaje seguro en nuestras bodegas." },
      { icon: "/img/icons/scan.svg",       text: "Recepción, escaneo, control por BoxID y tracking." },
      { icon: "/img/icons/report.svg",     text: "Reportes y cortes de inventario bajo demanda." },
    ],
  },
  {
    id: "special",
    title: "Transporte especializado",
    bgURL: "/img/services/panel-bg.png",
    photo: "/img/services/special.jpg",
    bullets: [
      { icon: "/img/icons/fragile.svg",   text: "Manejo de mercancía frágil o sobredimensionada." },
      { icon: "/img/icons/insurance.svg", text: "Coberturas de seguro a medida." },
    ],
  },
  {
    id: "returns",
    title: "Devoluciones y retornos",
    bgURL: "/img/services/panel-bg.png",
    photo: "/img/services/returns.jpg",
    bullets: [
      { icon: "/img/icons/rma.svg",     text: "Gestión de RMA y retornos hacia USA." },
      { icon: "/img/icons/reverse.svg", text: "Trazabilidad completa con nuevo BoxID/Tracking vinculado." },
    ],
  },
] as const;

type ServiceId = (typeof SERVICES)[number]["id"];

/* ============================
   Tarjetita (usa tu PNG de marco + icono encima)
   ============================ */
function BulletCard({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <li
      className="
        relative rounded-[20px] min-h-[84px]
        pl-[62px] pr-4 py-4
        shadow-[0_6px_18px_rgba(0,0,0,0.12)]
        border border-white/40
        overflow-hidden
      "
      style={{
        backgroundImage: "url('/img/services/Cuadro1.1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Icono alineado al recuadro izquierdo */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <Image src={icon} alt="" width={30} height={30} />
      </div>
      <p className="relative z-10 text-[15px] leading-snug text-[#061349]">
        {children}
      </p>
    </li>
  );
}

/* ============================
   Componente principal
   ============================ */
export default function Services() {
  const [active, setActive] = useState<ServiceId>("crossborder");
  const service = SERVICES.find((s) => s.id === active)!;

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

        {/* Tabs */}
        <div role="tablist" aria-label="Servicios" className="mt-6 flex flex-wrap gap-3 justify-center">
          {SERVICES.map((s) => {
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(s.id)}
                className={[
                  "px-4 py-2 rounded-full text-sm md:text-[15px] transition border",
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

        {/* Panel (más aire desde los tabs) */}
        <div className="mt-12 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Fondo degradado PNG, esquinas grandes */}
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl">
                <Image
                  src={service.bgURL}
                  alt=""
                  fill
                  className="object-cover"
                  priority={false}
                />

                {/* Contenido encima: texto IZQ + foto DER, como tu mockup */}
                <div className="relative z-10 px-5 md:px-8 lg:px-10 py-6 md:py-8">
                  <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] items-start gap-5 md:gap-8">

                    {/* IZQUIERDA: título + 6 tarjetitas */}
                    <div className="order-2 md:order-1">
                      <h3 className="text-white font-extrabold text-[22px] md:text-[24px] leading-tight mb-4 md:mb-5">
                        {service.title}
                      </h3>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                        {service.bullets.map((b, i) => (
                          <BulletCard key={i} icon={b.icon}>
                            {b.text}
                          </BulletCard>
                        ))}
                      </ul>
                    </div>

                    {/* DERECHA: foto con marco interno y radio grande */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                      <div className="rounded-[22px] bg-white/10 backdrop-blur-[1px] p-3 shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
                        <Image
                          src={service.photo}
                          alt={service.title}
                          width={640}
                          height={430}
                          className="w-[320px] sm:w-[360px] md:w-[420px] lg:w-[460px] h-auto rounded-[20px] object-cover"
                        />
                      </div>
                    </div>

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
