"use client";

import Image from "next/image";

type Bullet = { icon: string; text: string };

export default function ServicesCard() {
  // ⚠️ Cambia estos assets por los tuyos
  const title =
    "Servicios de transporte y entrega transfronteriza";

  const bullets: Bullet[] = [
    { icon: "/img/services/Icono 1.1.svg", text: "Envíos sin problemas entre USA, Canadá y México." },
    { icon: "/img/services/Icono 1.2.svg", text: "Tarifas competitivas en envíos dentro y fuera de Canadá y México." },
    { icon: "/img/services/Icono 1.3.svg", text: "Nuestros camiones cruzan ambas fronteras cada día." },
    { icon: "/img/services/Icono 1.4.svg", text: "Podemos recoger su mercancía en la puerta de su casa en los USA y entregarla en cualquier dirección en México." },
    { icon: "/img/services/Icono 1.5.svg", text: "Servicio de importación a México." },
    { icon: "/img/services/Icono 1.6.svg", text: "Servicio de consolidados." },
  ];

  const photo = "/img/services/servicesfondo.png";

  return (
    <div className="w-full flex justify-center">
      {/* Contenedor compacto como tu mock */}
      <div className="relative w-full max-w-5xl px-2">
        {/* Tarjeta trasera (offset) */}
        <div className="hidden md:block absolute inset-0 translate-x-[14px] translate-y-[14px] rounded-[22px] bg-gradient-to-r from-[#1B59E1] to-[#05C2F2] shadow-[0_14px_40px_rgba(0,0,0,0.18)]" />

        {/* Tarjeta principal */}
        <div className="relative rounded-[22px] bg-gradient-to-r from-[#1E51D2] to-[#2CD0F6] shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
          {/* Padding interior para aire */}
          <div className="p-4 sm:p-5 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
              {/* Columna izquierda: título + chips */}
              <div>
                <h3 className="text-white font-[Montserrat] font-extrabold text-[15px] sm:text-[16px] leading-tight mb-3">
                  {title}
                </h3>

                {/* Chips (tarjetitas blancas) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bullets.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-2xl bg-white shadow-[0_6px_18px_rgba(0,0,0,0.12)] px-4 py-3"
                    >
                      <Image
                        src={b.icon}
                        alt=""
                        width={30}
                        height={30}
                        className="shrink-0"
                      />
                      <p className="text-[12px] sm:text-[13px] leading-snug text-[#0B2D63] font-[Montserrat]">
                        {b.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna derecha: imagen */}
              <div className="flex justify-center md:justify-end">
                <div className="rounded-[18px] overflow-hidden bg-white/15 backdrop-blur-[1px] ring-1 ring-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                  <Image
                    src={photo}
                    alt={title}
                    width={420}
                    height={260}
                    className="object-cover w-[420px] h-[260px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
