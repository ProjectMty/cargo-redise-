"use client";
import Image from "next/image";

const CARDS = [
  {
    icon: "/img/icons/ltl.svg",
    title: "Flete en USA",
    desc: "Coordinamos la entrega al cliente en USA o a centros de distribución.",
  },
  {
    icon: "/img/icons/box.svg",
    title: "Despachos e-commerce",
    desc: "Gestión de paquetes para ventas en línea.",
  },
  {
    icon: "/img/icons/market.svg",
    title: "Marketplaces",
    desc: "Entregas programadas a FBA y marketplaces.",
  },
  {
    icon: "/img/icons/transit.svg",
    title: "Tránsitos MX → USA",
    desc: "Cruce y documentación aduanal.",
  },
];

export default function Servicios() {
  return (
    <section id="mxusa-servicios" className="bg-[#173E98] py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Nuestros Servicios</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white text-[#061349] p-4 shadow-md flex gap-3"
            >
              <div className="shrink-0">
                {/* <Image src={c.icon} alt="" width={36} height={36} /> */}
                <div className="w-9 h-9 rounded-lg bg-sky-100" />
              </div>
              <div>
                <p className="font-semibold">{c.title}</p>
                <p className="text-sm text-[#263b70]/80">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
