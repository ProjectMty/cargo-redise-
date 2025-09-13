"use client";
import Image from "next/image";

const industrias = [
  {
    id: 1,
    title: "Vendedores que buscan expandir o vender su marca en Amazon USA",
    image: "/img/mexausa/industrias/Forma 1.png",
  },
  {
    id: 2,
    title: "Fabricantes que necesitan enviar productos vendidos a sus clientes en USA",
    image: "/img/mexausa/industrias/Forma 2.png",
  },
  {
    id: 3,
    title: "Fabricantes que necesitan enviar muestras",
    image: "/img/mexausa/industrias/ind3.png",
  },
  {
    id: 4,
    title: "Personas físicas que buscan enviar paquetería a cualquier parte de USA",
    image: "/img/mexausa/industrias/ind4.png",
  },
];

export default function Industrias() {
  return (
    <section className="relative w-full bg-[#F2F2F2]">
      {/* --------- Banda superior --------- */}
      <div className="relative w-full h-[180px] md:h-[220px]">
        <Image
          src="/img/mexausa/industrias/bg1.png"
          alt="Fondo industrias"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white drop-shadow-md text-[26px] md:text-[34px] font-extrabold font-[Montserrat]">
            Tipos de Industrias
          </h2>
        </div>
      </div>

      {/* --------- Tarjetas --------- */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {industrias.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[18px] shadow-[0_12px_35px_rgba(0,0,0,0.12)] overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={260}
                className="w-full h-[180px] object-cover"
              />
              <p className="p-4 text-[14px] md:text-[15px] font-semibold text-[#0f172a] text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --------- Texto inferior --------- */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h3 className="text-[#1D4ED8] font-extrabold text-[20px] md:text-[24px] mb-3">
              ¡No limites tus clientes a tu área geográfica!
            </h3>
            <p className="text-[#374151] text-[15px] md:text-[16px] leading-relaxed">
              Tu mercancía viaja con un seguro que protege tu mercancía al 100%
              contra robo, daño y extravío. Entendemos tu utilidad está en la
              velocidad en la cual tu producto llega a tu cliente.
            </p>
            <p className="mt-3 text-[#374151] text-[15px] md:text-[16px] leading-relaxed">
              Cuenta con Cargo Monterrey para entregar tu mercancía a tu cliente
              en Estados Unidos en menos de 10 días hábiles.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/img/mexausa/industrias/Imagen 1.png"
              alt="Mapa industrias"
              width={400}
              height={300}
              className="rounded-[20px] shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
