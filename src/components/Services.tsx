"use client";

import Image from "next/image";
import SideBackground from "@/components/SideBackground";

export default function Services() {
  return (
    <section className="w-full font-sans bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Título principal */}
        <div className="text-[#061349] text-center py-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            ¡Somos la mejor solución para envíos y fletes de USA a México!
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-[#4B4B4B]">
            <strong className="text-[#061349]">Cargo Monterrey</strong> es tu mejor aliado para todas tus compras e importaciones de USA, China o cualquier parte del mundo.
            <br />
            Tú te encargas de comprar nosotros nos encargamos de que lo recibas en México.
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-[#4B4B4B]">
            Además somos especialistas en logística transfronteriza lo que nos permite ayudar a vendedores mexicanos a <strong className="text-[#061349]">expandir sus negocios en USA y Canadá</strong>.
          </p>
          <p className="mt-6 font-bold text-lg text-[#061349]">
            Sin trámites complicados ni costos exagerados.
          </p>
        </div>

        {/* Subsección con fondo azul a la izquierda */}
        <div className="w-full pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <SideBackground position="left" className="max-w-[480px] h-[540px] ml-0" />
            <div className="pl-6 md:pl-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0072BC] mb-4">Impulsa tu negocio sin fronteras</h3>
              <p className="text-sm md:text-base mb-4 text-[#4B4B4B]">
                En <strong className="text-[#061349]">Cargo Monterrey</strong>, sabemos que el crecimiento no tiene límites. Con <strong className="text-[#061349]">más de 14 años de experiencia</strong> en comercio internacional, nos hemos convertido en el socio logístico estratégico que los sellers necesitan para expandirse a nuevos mercados.
              </p>
              <p className="text-sm md:text-base text-[#4B4B4B]">
                Desde <strong className="text-[#061349]">2011</strong>, hemos sido un aliado confiable para empresas y emprendedores que venden en <strong className="text-[#061349]">Amazon, MercadoLibre, Walmart y otros marketplaces</strong>, ofreciendo soluciones de importación seguras, rápidas y eficientes.
              </p>
            </div>
          </div>
        </div>

        {/* NUESTRA SECCIÓN DE SERVICIOS (TEXTO) */}
        <div className="text-[#061349] text-center pb-12 px-4 md:px-0">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Nuestros Servicios</h3>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-[#4B4B4B]">
            En <strong className="text-[#061349]">Cargo Monterrey</strong>, hacemos que importar mercancía desde cualquier parte del mundo sea <strong className="text-[#061349]">fácil, rápido y seguro</strong>. Sin membresías ni trámites complicados, nos encargamos de recibir, procesar y entregar tus paquetes directamente en México.
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-[#4B4B4B]">
            Conoce nuestros principales servicios:
          </p>
        </div>

        {/* Subtítulo de la sección de íconos */}
        <div className="text-[#061349] text-left pb-6 px-4 md:px-0">
          <h4 className="text-2xl md:text-3xl font-bold">
            Servicios de transporte<br className="block md:hidden" /> y entrega transfronteriza
          </h4>
        </div>

        {/* Subsección con fondo azul a la derecha */}
        <div className="w-full pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Columna izquierda */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
                <div className="bg-[#0000A1] p-4 rounded-xl">
                  <Image src="/icons/envio.svg" alt="envios" width={40} height={40} />
                </div>
                <p className="text-sm font-semibold text-[#0000A1]">
                  Envíos sin problemas entre <strong>EE. UU., Canadá y México.</strong>
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
                <div className="bg-[#0072BC] p-4 rounded-xl">
                  <Image src="/icons/camion.svg" alt="camiones" width={40} height={40} />
                </div>
                <p className="text-sm font-semibold text-[#0072BC]">
                  <strong>Nuestros camiones</strong> cruzan ambas fronteras <strong>cada día.</strong>
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
                <div className="bg-[#0000A1] p-4 rounded-xl">
                  <Image src="/icons/mexico.svg" alt="mexico" width={40} height={40} />
                </div>
                <p className="text-sm font-semibold text-[#0000A1]">
                  <strong>Servicio</strong> de importación a <strong>México.</strong>
                </p>
              </div>
            </div>

            {/* Columna central */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
                <div className="bg-[#0072BC] p-4 rounded-xl">
                  <Image src="/icons/tarifa.svg" alt="tarifas" width={40} height={40} />
                </div>
                <p className="text-sm font-semibold text-[#0072BC]">
                  <strong>Tarifas competitivas</strong> en envíos dentro y fuera de <strong>Canadá y México.</strong>
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
                <div className="bg-[#0000A1] p-4 rounded-xl">
                  <Image src="/icons/recoleccion.svg" alt="recoleccion" width={40} height={40} />
                </div>
                <p className="text-sm font-semibold text-[#0000A1]">
                  Podemos <strong>recoger su mercancía</strong> en la puerta de su casa en los <strong>USA</strong> y entregarla en cualquier dirección en <strong>México.</strong>
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
                <div className="bg-[#0072BC] p-4 rounded-xl">
                  <Image src="/icons/consolidado.svg" alt="consolidado" width={40} height={40} />
                </div>
                <p className="text-sm font-semibold text-[#0072BC]">
                  <strong>Servicio</strong> de envíos <strong>consolidados.</strong>
                </p>
              </div>
            </div>

            {/* Fondo azul a la derecha */}
            <SideBackground position="right" className="max-w-[480px] h-[540px] md:ml-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
