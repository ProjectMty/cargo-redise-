"use client";

import { useState } from "react";
import Image from "next/image";
import SectionDefault from "@/animate/SectionDefault"
import AnimatedText from "@/animate/TextAnimate";
import DivZoom from "@/animate/DivZoom";
import TextDownAnimate from "@/animate/TextDownAnimate";


// const navigation = [
//   { name: "Inicio", href: "/#hero" },
//   { name: "Nosotros", href: "/#servicios" },
//   { name: "¿Cómo funciona?", href: "/#comofunciona" },
//   { name: "Buy & Ship", href: "/#buyandship" },      // ← ancla en home
//   { name: "México a USA", href: "/mexico-a-usa" },   // ← página aparte
//   { name: "Tarifas", href: "/#tarifas" },
//   { name: "Contáctanos", href: "/#contacto" },
// ];

export default function Hero() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (

    <section className="relative w-full overflow-hidden rounded-b-[60px]  font-[Montserrat]" id="hero">

      {/* Imagen de fondo */}
      <div className="relative w-full h-[400px] md:h-[520px] lg:h-[577px]">
        <img
          src="/img/banner1.png"
          alt="Camioneta Cargo Monterrey"
          className="w-full h-full object-cover object-left-top"
          loading="lazy"
        />

        {/* Texto sobrepuesto centrado */}

        <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-6 z-10">
          <h1 className="text-white font-normal leading-tight drop-shadow-lg  text-[28px] sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto">

            <AnimatedText
              delay={0.25}
              lines={[
                <span key={1} className="block font-bold">Importa <span className="">fácil y rápido </span> <span className="font-normal">desde</span></span>,
                <span key={2} className="block">cualquier parte del mundo con</span>,
                <span key={3} className="font-bold">Cargo Monterrey!</span>
                // <span className="block">Importa <span className="text-white font-extrabold">fácil y rápido</span> desde</span>,
                // <span className="block">cualquier parte del mundo con</span>,

                // <span className="block">Cargo Monterrey!</span>
              ]}>



            </AnimatedText>
          </h1>
        </div>

      </div>


      {/* Caja blanca de servicios */}
      <SectionDefault>
        <div className="relative z-20 flex justify-center -mt-20 md:-mt-32 px-4 md:px-8">
          <div className="w-full max-w-6xl bg-white rounded-[40px] shadow-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Servicio 1 */}
            <div className="flex items-start space-x-4">
              <Image
                src="img/icons/internacional.svg"
                alt="Envíos Internacionales"
                width={30}
                height={30}
                className="mt-1"
              />
              <div>
                <h3 className="text-[#061349] font-bold text-lg">Envíos Internacionales</h3>
                <p className="text-gray-600 text-sm">
                  Servicio de transporte y entrega transfronteriza desde USA, China y más.
                </p>
              </div>
            </div>

            {/* Servicio 2 */}
            <div className="flex items-start space-x-4">
              <Image
                src="img/icons/amazon.svg"
                alt="Entregas en Amazon y Mercado Libre"
                width={30}
                height={30}
                className="mt-1"
              />
              <div>
                <h3 className="text-[#061349] font-bold text-lg">Entregas en Amazon y Mercado Libre</h3>
                <p className="text-gray-600 text-sm">
                  Entregas programadas a almacenes FBA y última milla en todo México.
                </p>
              </div>
            </div>

            {/* Servicio 3 */}
            <div className="flex items-start space-x-4">
              <Image
                src="img/icons/soporte.svg"
                alt="Soporte 24/7"
                width={30}
                height={30}
                className="mt-1"
              />
              <div>
                <h3 className="text-[#061349] font-bold text-lg">Soporte 24/7</h3>
                <p className="text-gray-600 text-sm">
                  Atención personalizada todo el día, todos los días.
                </p>
              </div>
            </div>

            {/* Servicio 4 */}
            <div className="flex items-start space-x-4">
              <Image
                src="img/icons/seguro.svg"
                alt="Cargo Insurance"
                width={30}
                height={30}
                className="mt-1"
              />
              <div>
                <h3 className="text-[#061349] font-bold text-lg">Cargo Insurance</h3>
                <p className="text-gray-600 text-sm">
                  Seguro del 100% sobre el valor declarado en cada envío.
                </p>
              </div>
            </div>

            {/* Servicio 5 */}
            <div className="flex items-start space-x-4">
              <Image
                src="img/icons/almacenaje.svg"
                alt="Almacenaje"
                width={30}
                height={30}
                className="mt-1"
              />
              <div>
                <h3 className="text-[#061349] font-bold text-lg">Almacenaje</h3>
                <p className="text-gray-600 text-sm">
                  Resguardamos mercancía en nuestras bodegas y te notificamos cuando esté lista para enviar.
                </p>
              </div>
            </div>

            {/* Servicio 6 */}
            <div className="flex items-start space-x-4">
              <Image
                src="img/icons/rastreo.svg"
                alt="Rastrea tus paquetes"
                width={30}
                height={30}
                className="mt-1"
              />
              <div>
                <h3 className="text-[#061349] font-bold text-lg">Rastrea tus paquetes</h3>
                <p className="text-gray-600 text-sm">
                  Consulta ubicación y estado de tu paquete en tiempo real.
                </p>
              </div>
            </div>

          </div>
        </div>
      </SectionDefault>

      {/* ===== Sección inferior (después de la caja de servicios) ===== */}
      <section className="relative bg-[oklch(42.4%_0.199_265.638)] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">

          {/* Título principal */}
          <TextDownAnimate
            delay={1}
            lines={[
              <h2 key={1} className="text-center font-extrabold leading-tight text-[26px] md:text-4xl">
                ¡Somos la mejor solución <span className="font-bold">para</span>,
                <br className="hidden md:block" />
                envíos y fletes de <span className="text-white">USA a México!</span>
              </h2>
            ]}>



          </TextDownAnimate>
          {/* Párrafos descriptivos */}
          <div id="Descriptivo" className="mt-6 space-y-4 text-center">
            <p className="text-white/90 text-sm md:text-base">
              <span className="font-bold">Cargo Monterrey</span> es tu solución para todas tus compras e importaciones de USA y China.
              Compra en cualquier parte del mundo online y recibe en México.
            </p>
            <p className="text-white/90 text-sm md:text-base">
              Transformamos oportunidades locales en éxitos internacionales. Somos especialistas en
              logística transfronteriza y ayudamos a vendedores mexicanos a <span className="font-extrabold">expandir sus negocios en USA y Canadá.</span>
            </p>
            <p className="text-white font-bold text-sm md:text-base">
              Sin trámites complicados ni costos exagerados.
            </p>
          </div>

          {/* Imagen izquierda + Tarjeta derecha */}
          {/* Imagen izquierda + Tarjeta derecha con superposición */}
          {/* Imagen izquierda + Tarjeta derecha con superposición y texto alineado a la derecha */}

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8">

            {/* Columna: Imagen (queda debajo) */}
            <div className="relative">
              <img
                src="/img/operacion.png"           // <-- tu imagen real
                alt="Operación de carga"
                className="w-full max-w-[560px] h-auto rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Columna: Tarjeta (encima y montada hacia la izquierda, con texto alineado a la derecha) */}
            <DivZoom scale={1.1}>

              <div
                className="
      bg-white text-[#061349] rounded-3xl shadow-xl
      p-6 md:p-8
      relative z-10
      md:-ml-16 lg:-ml-24     /* <-- superposición hacia la izquierda */
      text-right              /* <-- alineación del texto */
    "
              >
                <h3 className="font-extrabold text-lg md:text-xl">
                  Impulsa tu negocio sin fronteras
                </h3>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  En Cargo Monterrey, sabemos que el crecimiento no tiene límites.
                  Con <span className="font-bold">más de 14 años de experiencia</span> en comercio internacional,
                  nos hemos convertido en el <span className="font-bold">socio logístico estratégico</span> que los sellers necesitan
                  para expandirse a nuevos mercados.
                </p>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  Desde <span className="font-bold">2011</span>, hemos sido un aliado confiable para empresas y emprendedores
                  que venden en <span className="font-bold">Amazon, MercadoLibre, Walmart y otros marketplaces</span>,
                  ofreciendo soluciones de importación seguras, rápidas y eficientes.
                </p>
              </div>
            </DivZoom>

          </div>


        </div>
      </section>

    </section>

  );
}
