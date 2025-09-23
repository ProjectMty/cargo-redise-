"use client";
import Image from "next/image";
import TextDownAnimate from "@/animate/TextDownAnimate";
import DivZoom from "@/animate/DivZoom";


export default function Intro() {
  return (
    <section className="w-full bg-[#F2F2F2] scroll-mt-20" id="intro">
      {/* Título en dos renglones */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-14">
<TextDownAnimate delay={0.6} lines={[
  <h2 key={1} className="text-center font-[Montserrat] font-extrabold text-[34px] md:text-[44px] leading-tight text-[#1e3a8a]">
          ¡Vende en <span className="text-[#1D4ED8]">Amazon USA</span>
          <br />
          <span className="font-[Montserrat] font-bold text-[#1e3a8a]">
            o directamente <span className="font-extrabold text-[#1D4ED8]">a clientes</span>!
          </span>
        </h2>
]

}>

</TextDownAnimate>
        

      </div>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-14">
        <div
          className="
            relative mx-auto mt-6 md:mt-10
            grid md:grid-cols-[608px_1fr] items-center gap-6
          "
        >
          {/* IMAGEN (sin recuadro blanco) */}
          <DivZoom scale={1.08}>

          
          <div className="relative z-20 rounded-[26px] md:-ml 5 overflow-hidden">
            <Image
              src="/img/mexausa/intro.png"   // 608 × 476
              alt="Bultos listos para envío"
              width={608}
              height={476}
              priority
              className="block w-[608px] h-[476px] object-cover"
            />
          </div>
</DivZoom>
          {/* TARJETA: debajo de la imagen y verticalmente centrada */}
          <div className="relative z-10 -ml-20 md:-ml-20 lg:-ml-12">
            <div className="bg-white rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.12)] p-5 md:p-7 h-[375px]">
              <p className="text-[15px] md:text-[20px] leading-relaxed text-[#0f172a]">
                <span className="font-semibold md:text-[20px]">Tú vendes,</span> nosotros nos encargamos de
                toda la logística.
              </p>

              <p className="mt-3 text-[15px] md:text-[20px] leading-relaxed text-[#0f172a]">
                <span className="font-semibold">Cargo Monterrey</span> es un freight forwarder
                internacional que ayuda a vendedores y proveedores Mexicanos a enviar sus
                productos a Estados Unidos.
              </p>

              <p className="mt-3 text-[20px] md:text-[20px] leading-relaxed text-[#0f172a]">
                Más que una paquetería de México a Estados Unidos, somos tu{" "}
                <span className="font-semibold md:text-[20px]">aliado comercial</span> para que puedas
                expandir tu negocio en USA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
