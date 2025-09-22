"use client";
import Image from "next/image";
import AnimatedText from "@/animate/TextAnimate";
import DivZoom from "@/animate/DivZoom";

export default function Servicios2() {
  return (
    <section className="w-full bg-[#F2F2F2] py-16" id="personalizadoUSA">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Tarjeta grande con doble sombra (similar a tu referencia) */}
        <div className="relative rounded-[32px] bg-gradient-to-b from-[#2C69B3] to-[#1F51A6] p-1">
          {/* Capa interior */}
          <div className="rounded-[30px] bg-[#2C59A7] p-6 md:p-10">
            {/* Título */}
            <AnimatedText delay={0.2} lines={[
              <h2 className="text-white font-[Montserrat] font-extrabold text-2xl md:text-4xl text-center">
                Servicios Personalizados
              </h2>
            ]}>

            </AnimatedText>


            {/* Primer bloque: texto + imagen derecha */}
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <AnimatedText delay={0.6} lines={[
                  <h3 className="font-[Montserrat] font-extrabold text-xl md:text-2xl text-center md:text-left">
                    Recibir pagos de tus clientes extranjeros
                  </h3>
                ]}>

                </AnimatedText>
                <p className="mt-3 font-[Montserrat] text-white/90 text-base md:text-lg text-center md:text-left">
                  Si vendes a empresas extranjeras y no tienes la forma de
                  cómo recibir sus pagos, te apoyamos con cuentas receptoras
                  en USA y nosotros te pagamos en México.
                </p>
              </div>

              <DivZoom scale={1.05}>
                <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden">
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
            <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
              <DivZoom scale={1.05}>
                <div className="relative w-full h-[220px] md:h-[260px] rounded-2xl overflow-hidden">

                  <Image
                    src="/img/mexausa/servicios2/imagen 2.png" // <-- usa la ruta real de tu imagen
                    alt="Paquetes y preparación"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </DivZoom>
              <div className="text-white">
                <AnimatedText delay={0.8} lines={[
                  <h3 className="font-[Montserrat] font-extrabold text-xl md:text-2xl">
                    FBA prep
                  </h3>
                ]}>

                </AnimatedText>

                <p className="mt-3 font-[Montserrat] text-white/90 text-base md:text-lg">
                  Realizamos todas las etiquetas y embalaje requerido para
                  que tu mercancía ingrese a Amazon FBA en Estados Unidos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sombra externa suave */}
        <div className="mx-auto mt-6 h-6 w-[95%] rounded-full bg-black/10 blur-xl opacity-30" />
      </div>
    </section>
  );
}
