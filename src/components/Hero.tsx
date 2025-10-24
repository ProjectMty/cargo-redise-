"use client";

import Image from "next/image";
import SectionDefault from "@/animate/SectionDefault"
import AnimatedText from "@/animate/TextAnimate";
import DivZoom from "@/animate/DivZoom";
import TextDownAnimate from "@/animate/TextDownAnimate";
import "@/style/Hero.css"

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

    <section className="section-hero" id="hero">

      {/* Imagen de fondo */}
      <div className="Img-fondo-hero">
        <Image
          src="/img/BannerE1.png"
          alt="Camioneta Cargo Monterrey"
          fill                   // ocupa todo el contenedor
          priority               // precarga (opcional para el hero)
          sizes="100vw"
          className="object-cover object-left-top"
        />

        {/* Texto sobrepuesto centrado */}

        <div className="Contenedor-titulo-hero">
          <h1 className="Titulo-hero">

            <AnimatedText
              delay={0}
              lines={[
                <span key={1} className="block font-bold mb-3">Importa <span className="">fácil y rápido </span> <span className="font-normal">desde</span></span>,
                <span key={2} className="block mb-3">cualquier parte del mundo con</span>,
                <span key={3} className="font-bold ">Cargo Monterrey!</span>

              ]}>
            </AnimatedText>
          </h1>
        </div>

      </div>


      {/* Caja blanca de servicios */}
      <SectionDefault>
        <div className="Contenedor-servicios-hero">
          <div className="contenedor-informacion-hero">

            {/* Servicio 1 */}
            <div className="servicio-hero">
              <Image
                src="img/icons/internacional.svg"
                alt="Envíos Internacionales"
                width={30}
                height={30}
                className="mt-1 "
              />
              <div>
                <h3 className="servicio-titulo-hero">Envíos Internacionales</h3>
                <p className="servicio-texto-hero">
                  Servicio de transporte y entrega transfronteriza desde USA, China y más.
                </p>
              </div>
            </div>

            {/* Servicio 2 */}
            <div className="servicio-hero">
              <Image
                src="img/icons/amazon.svg"
                alt="Entregas en Amazon y Mercado Libre"
                width={30}
                height={30}
                className="mt-1"
              />
              <div>
                <h3 className="servicio-titulo-hero">Entregas en Amazon y Mercado Libre</h3>
                <p className="servicio-texto-hero">
                  Entregas programadas a almacenes FBA y última milla en todo México.
                </p>
              </div>
            </div>

            {/* Servicio 3 */}
            <div className="servicio-hero">
              <Image
                src="img/icons/soporte.svg"
                alt="Soporte 24/7"
                width={30}
                height={30}
                className="mt-1"
              />
              <div>
                <h3 className="servicio-titulo-hero">Soporte 24/7</h3>
                <p className="servicio-texto-hero">
                  Atención personalizada todo el día, todos los días.
                </p>
              </div>
            </div>

            {/* Servicio 4 */}
            <div className="servicio-hero">
              <Image
                src="img/icons/seguro.svg"
                alt="Cargo Insurance"
                width={30}
                height={30}
                className="mt-1"
              />
              <div>
                <h3 className="servicio-titulo-hero">Cargo Insurance</h3>
                <p className="servicio-texto-hero">
                  Seguro del 100% sobre el valor declarado en cada envío.
                </p>
              </div>
            </div>

            {/* Servicio 5 */}
            <div className="servicio-hero">
              <Image
                src="img/icons/almacenaje.svg"
                alt="Almacenaje"
                width={30}
                height={30}
                className="mt-1"
              />
              <div>
                <h3 className="servicio-titulo-hero">Almacenaje</h3>
                <p className="servicio-texto-hero">
                  Resguardamos mercancía en nuestras bodegas y te notificamos cuando esté lista para enviar.
                </p>
              </div>
            </div>

            {/* Servicio 6 */}
            <div className="servicio-hero">
              <Image
                src="img/icons/rastreo.svg"
                alt="Rastrea tus paquetes"
                width={30}
                height={30}
                className="mt-1"
              />
              <div>
                <h3 className="servicio-titulo-hero">Rastrea tus paquetes</h3>
                <p className="servicio-texto-hero">
                  Consulta ubicación y estado de tu paquete en tiempo real.
                </p>
              </div>
            </div>

          </div>
        </div>
      </SectionDefault>

      {/* ===== Sección inferior (después de la caja de servicios) ===== */}
      <section className="contenedor-section-about-hero">
        <div className="contenedor-about-hero">

          {/* Título principal */}
          <TextDownAnimate
            delay={0.2}
            lines={[
              <h2 key={1} className="titulo-about-hero">
                ¡Somos la mejor solución <span className="font-bold">para</span>,
                <br className="hidden md:block" />
                envíos y fletes de <span className="text-white">USA a México!</span>
              </h2>
            ]}>



          </TextDownAnimate>
          {/* Párrafos descriptivos */}
          <div id="Descriptivo" className="mt-6 space-y-4 text-center">
            <p className="parrafo-about-hero">
              <span className="font-bold">Cargo Monterrey</span> es tu solución para todas tus compras e importaciones de USA y China.
              Compra en cualquier parte del mundo online y recibe en México.
            </p>
            <p className="parrafo-about-hero">
              Transformamos oportunidades locales en éxitos internacionales. Somos especialistas en
              logística transfronteriza y ayudamos a vendedores mexicanos a <span className="font-extrabold">expandir sus negocios en USA y Canadá.</span>
            </p>
            <p className="parrafo-about-hero">
              Sin trámites complicados ni costos exagerados.
            </p>
          </div>

          {/* Imagen izquierda + Tarjeta derecha */}
          {/* Imagen izquierda + Tarjeta derecha con superposición */}
          {/* Imagen izquierda + Tarjeta derecha con superposición y texto alineado a la derecha */}

          <div className="contenedor-inferior-about-hero">

            {/* Columna: Imagen (queda debajo) */}
            <div className="relative">
              <Image
                src="/img/operacion.png"
                alt="Operación de carga"
                width={560}
                height={400}
                className="img-izq-about-hero"
                loading="lazy"
              />
            </div>

            {/* Columna: Tarjeta (encima y montada hacia la izquierda, con texto alineado a la derecha) */}
            <DivZoom scale={1.1}>

              <div
                className="div-der-about-hero"
              >
                <h3 className="titulo-der-about-hero">
                  Impulsa tu negocio sin fronteras
                </h3>
                <p className="parrafo-der-about-hero">
                  En Cargo Monterrey, sabemos que el crecimiento no tiene límites.
                  Con <span className="font-bold">más de 14 años de experiencia</span> en comercio internacional,
                  nos hemos convertido en el <span className="font-bold">socio logístico estratégico</span> que los sellers necesitan
                  para expandirse a nuevos mercados.
                </p>
                <p className="parrafo-der-about-hero">
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
