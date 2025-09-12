"use client";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="w-full bg-[#F2F2F2]">
      {/* Título en dos renglones */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-14">
        <h2 className="text-center font-[Montserrat] font-extrabold text-[34px] md:text-[44px] leading-tight text-[#1e3a8a]">
          ¡Vende en <span className="text-[#1D4ED8]">Amazon USA</span>
          <br />
          <span className="font-[Montserrat] font-bold text-[#1e3a8a]">
            o directamente <span className="font-extrabold text-[#1D4ED8]">a clientes</span>!
          </span>
        </h2>
      </div>

      {/* Contenido: imagen + tarjeta */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-14">
        <div
          className="
            relative mx-auto mt-6 md:mt-10
            flex flex-col md:flex-row md:items-start md:justify-center
          "
        >
          {/* Imagen (tamaño original) */}
          <div className="relative z-20">
            <Image
              src="/img/mexausa/intro.png" // <- tu imagen 608x476
              alt="Bultos listos para envío"
              width={608}
              height={476}
              priority
              className="
                rounded-[26px]
                shadow-[0_24px_60px_rgba(0,0,0,0.15)]
                w-[608px] h-[476px] object-cover
              "
            />
          </div>

          {/* Tarjeta a la derecha, debajo de la imagen y ligeramente solapada */}
          <div
            className="
              z-10 md:-ml-10 lg:-ml-14  /* solape bajo la imagen */
              mt-4 md:mt-14           /* baja un poco para centrar vs la imagen */
              bg-white rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.12)]
              p-5 md:p-7
              w-full md:w-[620px] lg:w-[660px]
            "
          >
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[#0f172a]">
              <span className="font-semibold">Tú vendes,</span> nosotros nos encargamos de toda la logística.
            </p>

            <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[#0f172a]">
              <span className="font-semibold">Cargo Monterrey</span> es un freight forwarder internacional
              que ayuda a vendedores y proveedores Mexicanos a enviar sus productos a Estados Unidos.
            </p>

            <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[#0f172a]">
              Más que una paquetería de México a Estados Unidos, somos tu{" "}
              <span className="font-semibold">aliado comercial</span> para que puedas expandir tu negocio en USA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
