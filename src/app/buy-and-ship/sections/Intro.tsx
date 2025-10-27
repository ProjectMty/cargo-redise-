"use client";
import AnimatedText from "@/animate/TextAnimate";

export default function Intro() {
  return (
    <section
      className="w-full  py-14 md:py-16"
      aria-labelledby="intro-buyship-title"
    >
      <div className="max-w-5xl mx-auto px-5 text-center font-[Montserrat]">
        {/* Título principal */}
        <h2  id="intro-buyship-title"
              className="text-[36px] md:text-[44px] leading-tight  font-bold text-[var(--primary-blue)]"
            >
        <AnimatedText delay={0.6}
          lines={[
            
              <span key={1}> Servicio de Compras y Comercialización </span>,
              <span key={2}> y Pago a Proveedores Internacionales</span>
          ]}>

        </AnimatedText>
        </h2>
        {/* Párrafo 1 */}
        <p className="mt-6 text-[16px] md:text-[20px] lg:text-[22px] text-[#333333]">
         
          <span> ¿Quieres surtir tu negocio con mercancía que te ofrecen en otro país y no
          sabes cómo comprar y traer a México? </span>
      
        </p>

        {/* Subtítulo */}
        <h3 className="mt-6 text-[22px] md:text-[30px] lg:text-[34px] font-extrabold text-[#333333]">
          Cargo Monterrey es la solución!
        </h3>

        {/* Párrafo 2 con énfasis */}
        <p className="mt-4 text-[16px] md:text-[20px] lg:text-[25px] text-[#333333]">
          Con el servicio de{" "}
          <span className="font-extrabold text-[#0b4ba2]">Buy &amp; Ship</span> de{" "}
          <span className="font-extrabold text-[#0b4ba2]">Cargo Monterrey</span>, puedes
          comprar en cualquier parte del mundo y recibir aquí en{" "}
          <span className="font-extrabold text-[#0b4ba2]">México</span>!
        </p>
      </div>
    </section>
  );
}
