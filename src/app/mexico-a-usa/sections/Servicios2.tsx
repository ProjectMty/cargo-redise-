"use client";
import Image from "next/image";
import AnimatedText from "@/animate/TextAnimate";
import DivZoom from "@/animate/DivZoom";
import "@/app/mexico-a-usa/style/servicios2MexUsa.css"
export default function Servicios2() {
  return (
    <section className="section-servicios2-mu" id="personalizadoUSA">
      <div className="contenedor-servicios2-mu">
        {/* Tarjeta grande con doble sombra (similar a tu referencia) */}
        <div className="contenedor-fondo-servicios2-mu">
          {/* Capa interior */}
          
            {/* Título */}
            <AnimatedText delay={0.2} lines={[
              <h2 key={1} className="titulo-servicios2-mu">
                Servicios Personalizados
              </h2>
            ]}>

            </AnimatedText>


            {/* Primer bloque: texto + imagen derecha */}
            <div className="contenedor-primero-servicios2-mu">
              <div className="text-white">
                <AnimatedText delay={0.6} lines={[
                  <h3 key={1} className="titulo-inf-servicios2-mu">
                    Recibir pagos de tus clientes extranjeros
                  </h3>
                ]}>

                </AnimatedText>
                <p className="sub-inf-servicios2-mu">
                  Si vendes a empresas extranjeras y no tienes la forma de
                  cómo recibir sus pagos, te apoyamos con cuentas receptoras
                  en USA y nosotros te pagamos en México.
                </p>
              </div>

              <DivZoom scale={1.05}>
                <div className="contenedor-img-servicios2-mu">
                  <Image
                    src="/img/mexausa/servicios2/imagen 1.png" // <-- usa la ruta real de tu imagen
                    alt="Pagos desde el extranjero"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </DivZoom>
            </div>

            {/* Segundo bloque: imagen izquierda + texto derecha */}
            <div className="contenedor-primero-servicios2-mu">
              <DivZoom scale={1.05}>
                <div className="hidden lg:block contenedor-img-servicios2-mu">
                  <Image
                    src="/img/mexausa/servicios2/imagen 2.png" // <-- usa la ruta real de tu imagen
                    alt="Paquetes y preparación"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </DivZoom>
              <div className="text-white ">
                <AnimatedText delay={0.8} lines={[
                  <h3 key={1} className="titulo-inf-servicios2-mu">
                    FBA prep
                  </h3>
                ]}>

                </AnimatedText>

                <p className="sub-inf-servicios2-mu">
                  Realizamos todas las etiquetas y embalaje requerido para
                  que tu mercancía ingrese a Amazon FBA en Estados Unidos.
                </p>
              </div>

               <DivZoom scale={1.05}>
                <div className="lg:hidden block contenedor-img-servicios2-mu">
                  <Image
                    src="/img/mexausa/servicios2/imagen 2.png" // <-- usa la ruta real de tu imagen
                    alt="Paquetes y preparación"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </DivZoom>
            </div>
          
        </div>

        {/* Sombra externa suave */}
       
      </div>
    </section>
  );
}
