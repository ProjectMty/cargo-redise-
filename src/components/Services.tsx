"use client";

import { useState } from "react";
import Image from "next/image";
import DivZoom from "@/animate/DivZoom";
import AnimatedText from "@/animate/TextAnimate";
import FadeInFromLeft from "@/animate/FadeInFromLeft";
import { AnimatePresence } from "framer-motion";


/* ================== CONTROLES RÁPIDOS ================== */
const PANEL_MAX_W = 1120;       // ancho máx del panel (px) ~ como tus maquetas
const PHOTO_W = 560;            // ancho visible de la foto (px)
const PHOTO_H = 260;            // alto visible de la foto (px)
const PHOTO_RADIUS = 18;        // radio del marco de la foto (px)

/* ================== TIPOS ================== */
type Bullet = { icon: string; text: string };
type ServiceId =
  | "crossborder"
  | "marketplaces"
  | "inventory"
  | "returns"
  | "special";

/* ================== DATA ================== */
const SERVICES: Record<
  ServiceId,
  {
    title: string;
    photo: string;
    bullets: Bullet[];
    photoLeft?: boolean; // <— true = foto a la izquierda
  }
> = {
  crossborder: {
    title: "Servicios de transporte y entrega transfronteriza",
    photo: "/img/services/servicesfondo.png",
    bullets: [
      { icon: "/img/icons/Icono 1.1.svg", text: "Envíos sin problemas entre USA, Canadá y México." },
      { icon: "/img/icons/Icono 1.2.svg", text: "Tarifas competitivas en envíos dentro y fuera de Canadá y México." },
      { icon: "/img/icons/Icono 1.3.svg", text: "Nuestros camiones cruzan ambas fronteras cada día." },
      { icon: "/img/icons/Icono 1.4.svg", text: "Podemos recoger su mercancía en la puerta de su casa en los USA y entregarla en cualquier dirección en México." },
      { icon: "/img/icons/Icono 1.5.svg", text: "Servicio de importación a México." },
      { icon: "/img/icons/Icono 1.6.svg", text: "Servicio de consolidados." },
    ],
    photoLeft: false,
  },
  marketplaces: {
    title: "Entrega en marketplaces y última milla",
    photo: "/img/services/marketplaces.png",
    bullets: [
      { icon: "/img/icons/Icono 2.1.svg", text: "Entregas programadas a almacenes de Amazon FBA y Mercado Libre." },
      { icon: "/img/icons/Icono 2.2.svg", text: "Entregas de última milla hasta la puerta de tu comprador en México." },
      { icon: "/img/icons/Icono 2.3.svg", text: "Despachos de mercancía para ventas e‑commerce." },
      { icon: "/img/icons/Icono 2.4.svg", text: "Envíos a todo México." },
    ],
    photoLeft: true,
  },
  inventory: {
    title: "Manejo de inventario y almacenamiento",
    photo: "/img/services/warehouse.png",
    bullets: [
      { icon: "/img/icons/Icono 3.1.svg", text: "Almacenaje — Recibimos tu mercancía en nuestras bodegas y te entregamos como vayas necesitando unidades." },
      { icon: "/img/icons/Icono 3.2.svg", text: "Usa nuestra bodega como si fuera tuya." },
    ],
    photoLeft: false,
  },
  returns: {
    title: "Devoluciones y retornos",
    photo: "/img/services/returns.png",
    bullets: [
      { icon: "/img/icons/Icono 4.1.svg", text: "Realiza devoluciones de tus compras sin problema." },
      { icon: "/img/icons/Icono 4.2.svg", text: "Envía a nuestra bodega en México y nosotros lo llevamos a USA para devolver a tu proveedor." },
    ],
    photoLeft: true,
  },
  special: {
    title: "Transporte especializado",
    photo: "/img/services/special.png",
    bullets: [
      { icon: "/img/icons/Icono 5.1.svg", text: "Entregas LTL." },
      { icon: "/img/icons/Icono 5.2.svg", text: "Flete aéreo nocturno de 2 días y diferido." },
      { icon: "/img/icons/Icono 5.3.svg", text: "Vuelos internacionales (prioritarios y diferidos)." },
    ],
    photoLeft: false,
  },
};

/* ================== SUBCOMPONENTES ================== */
  function Tab({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;

  }) {


    return (
      <DivZoom
        scale={1.05}>
        <button
          onClick={onClick}

          className={[
            "rounded-[17pt] border px-4 md:px-5 py-2 font-[Montserrat] text-[14px] md:text-[15px] font-medium transition",
            active
              ? "bg-sky-600 text-[#F3F7FE] border-sky-600 shadow-sm"
              : "bg-transparent text-sky-600 border-sky-600 hover:bg-sky-50",
          ].join(" ")}
        >
          {label}
        </button>
      </DivZoom>

    );
  }

function BulletCard({ icon, text }: Bullet) {
  return (
    <DivZoom scale={1.03}>
      <div className="w-70 h-40 flex flex-row items-center justify-start gap-3 rounded-[18px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] px-4 py-2 
      trasnsition-all duration-300 ease-in-out hover:bg-blue-50
      ">

        <Image src={icon} alt="" width={32} height={32} className="shrink-0" />
        <p className="text-[#0B2D63] text-[14px] md:text-[15px] leading-snug font-[Montserrat]">
          {text}
        </p>

      </div>
    </DivZoom>
  );
}


/* ================== PRINCIPAL ================== */
export default function Services() {
  const [active, setActive] = useState<ServiceId>("crossborder");
  const service = SERVICES[active];

  // Config de layout por cantidad de bullets (como en tus capturas)
  const manyBullets = service.bullets.length >= 2; // 2 columnas cuando hay 4+
  const bulletsCols = manyBullets ? "sm:grid-cols-2" : "sm:grid-cols-1";

  // Grid para foto/texto: 12 columnas; damos más ancho al texto (7) y 5 a la foto
  const leftSpan = service.photoLeft ? "md:order-2 md:col-span-7" : "md:col-span-7";
  const rightSpan = service.photoLeft ? "md:order-1 md:col-span-5" : "md:col-span-5";

  // Alineación del recorte de la foto (si va a la izq, mostramos más izquierda; si va a la der, más derecha)
  const photoObjectPos = service.photoLeft ? "object-[left_center]" : "object-[center_right]";
  // Muestra Componente
  const [showComponent, setShowComponent] = useState(true); // <-- Aquí defines 'showComponent'



  return (
    <section id="servicios" className="bg-[#F2F2F2] py-14 scroll-mt-20 font-[Montserrat]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header y tabs */}

        <AnimatedText
          delay={0.2}
          lines={[
            <h2 key={1} className="text-center font-[Montserrat] font-bold text-sky-600 text-[36px] md:text-[42px]">
              Nuestros Servicios
            </h2>
          ]}>

        </AnimatedText>
        <p className="mt-3 text-center text-[#333333] font-[Montserrat] text-[16px] md:text-[18px] max-w-4xl mx-auto">
          En <span className="font-bold">Cargo Monterrey</span> hacemos que importar mercancía sea{" "}
          <span className="font-bold">fácil, rápido y seguro</span>. Sin membresías ni trámites complicados,
          recibimos, procesamos y entregamos tus paquetes directamente en México.
        </p>

        <p className="mt-2 text-center text-[#333333] font-[Montserrat] text-[16px] md:text-[18px]">
          Conoce nuestros principales servicios:
        </p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {(Object.entries(SERVICES) as [ServiceId, (typeof SERVICES)[ServiceId]][]).map(
            ([id, s]) => (
              <Tab
                key={id}
                label={s.title}
                active={active === id}
                onClick={() => {
                  setShowComponent(false);
                  setTimeout(() => {
                    setActive(id);
                    setShowComponent(true);
                  }, 500);
                }}
              />
            )
          )}
        </div>

        {/* =============== Panel doble con degradado + sombra (estilo maqueta) =============== */}
        <AnimatePresence mode="wait">
          {showComponent && (

            <FadeInFromLeft keyId={active} delay={0.2}>
              <div className="mt-12 md:mt-16 flex justify-center ">
                <div className="relative w-full" style={{ maxWidth: `${PANEL_MAX_W}px` }}>
                  {/* Tarjeta trasera con offset */}
                  <div className="hidden md:block absolute inset-0 translate-x-6 translate-y-6 rounded-[26px] bg-gradient-to-r from-[#1B59E1] to-[#05C2F2] shadow-[0_10px_15px_rgba(0,0,0,0.22)]" />

                  {/* Tarjeta frontal */}
                  <div className="relative rounded-[26px] bg-gradient-to-r from-[#1E51D2] to-[#2CD0F6] shadow-[0_18px_48px_rgba(0,0,0,0.2)]">
                    <div className="p-5 md:p-6">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                        {/* Columna de texto/bullets */}

                        <div className={leftSpan}>
                          <div>
                            <AnimatedText
                              delay={0.2}
                              lines={[

                                <h3 key={1} className="text-white font-[Montserrat] font-extrabold text-[18px] md:text-[30px] leading-tight mb-4">
                                  {service.title}
                                </h3>
                              ]}></AnimatedText>
                          </div>

                          <div className="flex justify-center mt-20 mb-20">
                            <div className={["grid gap-4", bulletsCols].join(" ")}>
                              {service.bullets.map((b, i) => (

                                <BulletCard key={i} icon={b.icon} text={b.text} />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Columna de FOTO */}

                        <div className={["flex justify-center py-20", rightSpan, service.photoLeft ? "md:justify-start" : "md:justify-end"].join(" ")}>
                          <DivZoom scale={1.05}>
                            <div
                              className="overflow-hidden ring-1 ring-white/45 bg-white/10 backdrop-blur-[1px] shadow-[0_14px_34px_rgba(0,0,0,0.18)]"
                              style={{ borderRadius: `${PHOTO_RADIUS}px` }}
                            >

                              <Image
                                src={service.photo}
                                alt={service.title}
                                width={PHOTO_W}
                                height={PHOTO_H}
                                className={["object-cover", photoObjectPos].join(" ")}
                                priority={active === "crossborder"}
                              />

                            </div>
                          </DivZoom>
                        </div>



                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInFromLeft>
          )}
        </AnimatePresence>
        {/* ========================================================= */}
      </div>
    </section>
  );
}
