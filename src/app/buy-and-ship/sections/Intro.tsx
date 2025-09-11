"use client";

export default function Intro() {
  return (
    <section
      className="w-full bg-[#F2F2F2] py-14 md:py-16"
      aria-labelledby="intro-buyship-title"
    >
      <div className="max-w-5xl mx-auto px-5 text-center font-[Montserrat]">
        {/* Título principal */}
        <h2
          id="intro-buyship-title"
          className="text-[28px] leading-tight md:text-[42px] lg:text-[50px] font-extrabold text-blue-800"
        >
          Servicio de Compras y Comercialización
          <br className="hidden md:block" />
          y Pago a Proveedores Internacionales
        </h2>

        {/* Párrafo 1 */}
        <p className="mt-6 text-[16px] md:text-[20px] lg:text-[25px] text-[#333333]">
          ¿Quieres surtir tu negocio con mercancía que te ofrecen en otro país y no
          sabes cómo comprar y traer a México?
        </p>

        {/* Subtítulo */}
        <h3 className="mt-6 text-[22px] md:text-[30px] lg:text-[40px] font-extrabold text-[#333333]">
          Cargo Monterrey es la solución!
        </h3>

        {/* Párrafo 2 con énfasis */}
        <p className="mt-4 text-[16px] md:text-[20px] lg:text-[25px] text-[#333333]">
          Con el servicio de{" "}
          <span className="font-extrabold text-blue-800">Buy &amp; Ship</span> de{" "}
          <span className="font-extrabold text-blue-800">Cargo Monterrey</span>, puedes
          comprar en cualquier parte del mundo y recibir aquí en{" "}
          <span className="font-extrabold text-blue-800">México</span>!
        </p>
      </div>
    </section>
  );
}
