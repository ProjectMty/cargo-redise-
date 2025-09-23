"use client";
import Image from "next/image";
import UpAnimate from "@/animate/UpAnimate";
import AnimatedText from "@/animate/TextAnimate";
import FadeInFromRight from "@/animate/FadeInFromRight";


const industrias = [
  {
    id: 1,
    title: "Vendedores que buscan expandir o vender su marca en Amazon USA",
    image: "/img/mexausa/industrias/Div1.png",
  },
  {
    id: 2,
    title: "Fabricantes que necesitan enviar productos vendidos a sus clientes en USA",
    image: "/img/mexausa/industrias/Div2.png",
  },
  {
    id: 3,
    title: "Fabricantes que necesitan enviar muestras",
    image: "/img/mexausa/industrias/Div3.png",
  },
  {
    id: 4,
    title: "Personas físicas que buscan enviar paquetería a cualquier parte de USA",
    image: "/img/mexausa/industrias/Div4.png",
  },
];

export default function Industrias() {
  return (
    <section className="relative w-full bg-blue-300 md:bg-white py-20" id="industriaUSA">
      {/* --------- Banda superior --------- */}
      <div className="relative w-full h-full md:h-[220px] z-10">
        <Image
          src="/img/mexausa/industrias/FinalBg.png"
          alt="Fondo industrias"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center mb-20">
          <AnimatedText delay={0.2} lines={[
            <h2 key={1} className="text-white drop-shadow-[0_3px_5px_rgba(0,0,0,0.6)] text-[26px] md:text-[45px] font-extrabold font-[Montserrat]">
              Tipos de Industrias
            </h2>
          ]}>

          </AnimatedText>

        </div>
      </div>

      {/* --------- Tarjetas --------- */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 mt-20 lg:-mt-20 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {industrias.map((item) => (
            <UpAnimate key={1} move={-10}>
              <div
                key={item.id}
                className="bg-white rounded-[40px] shadow-[0_12px_20px_rgba(0,0,0,0.12)] overflow-hidden h-[350px] lg:h-[300px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={260}
                  className="w-full h-[270px] lg:h-[180px] object-cover -mt-10 lg:-mt-7"
                />
                <p className="p-7 text-[14px] md:text-[15px] font-semibold text-[#0f172a] text-center mb-5 mt-2">
                  {item.title}
                </p>
              </div>
            </UpAnimate>

          ))}
        </div>
      </div>

      {/* --------- Texto inferior --------- */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 ">
        <div className="shadow-[0_10px_10px_rgba(0,0,0,0.12)] px-10 rounded-3xl bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-10">
            {/* Div parte abajo */}
            <div>
              <AnimatedText delay={0.2} lines={[
                <h3 key={1} className="text-[#1D4ED8] font-extrabold text-[20px] md:text-[24px] mb-3">
                  ¡No limites tus clientes a tu área geográfica!
                </h3>
              ]}>

              </AnimatedText>

              <p className="text-[#374151] text-[15px] md:text-[16px] leading-relaxed">
                Tu mercancía viaja con un seguro que protege tu mercancía al 100%
                contra robo, daño y extravío. Entendemos tu utilidad está en la
                velocidad en la cual tu producto llega a tu cliente.
              </p>
              <p className="mt-3 text-[#374151] text-[15px] md:text-[16px] leading-relaxed mb-10">
                Cuenta con Cargo Monterrey para entregar tu mercancía a tu cliente
                en Estados Unidos en menos de 10 días hábiles.
              </p>
            </div>
            {/* Imagen */}
            <FadeInFromRight delay={0.6}>
<div className="flex justify-center">
              <Image
                src="/img/mexausa/industrias/Imagen 1.png"
                alt="Mapa industrias"
                width={400}
                height={300}
                className="rounded-[20px] shadow-lg object-cover"
              />
            </div>
            </FadeInFromRight>
            

          </div>
        </div>
      </div>
    </section>
  );
}
