"use client";
import Image from "next/image";
import DivZoom from "@/animate/DivZoom";
import AnimatedText from "@/animate/TextAnimate";
import TimeZoom from "@/animate/TimeZoom";

const services = [
  { icon: "/img/icons/buyandship/Icono 1.svg", title: "Verificación de proveedor", desc: "Podemos realizar visita a fábricas y oficinas para asegurarnos que sí existe." },
  { icon: "/img/icons/buyandship/Icono 2.svg", title: "Buscador de productos", desc: "Tú nos dices qué buscas y nosotros buscamos opciones y te presentamos con tres cotizaciones distintas." },
  { icon: "/img/icons/buyandship/Icono 3.svg", title: "Gestión de muestras", desc: "Cuando ya elijas el producto y proveedor de tu agrado, nosotros gestionamos la solicitud y envío de muestras." },
  { icon: "/img/icons/buyandship/Icono 4.svg", title: "Pagos al extranjero", desc: "Realizamos pagos a tus proveedores en el extranjero." },
  { icon: "/img/icons/buyandship/Icono 5.svg", title: "Logística internacional", desc: "Nos encargamos de la comunicación entre tu proveedor y los puertos, pagos necesarios e importación hasta la llegada a tu negocio en México." },
  { icon: "/img/icons/buyandship/Icono 6.svg", title: "Almacenamiento", desc: "Si no cuentas con espacio suficiente, guardamos tu mercancía en un lugar limpio y seguro." },
  { icon: "/img/icons/buyandship/Icono 7.svg", title: "E-commerce fulfillment", desc: "¿Vendes online y realizas envíos a tus clientes en México? Nuestro equipo 3PL surte tus órdenes y pedidos." },
  { icon: "/img/icons/buyandship/Icono 8.svg", title: "Retornos y devoluciones", desc: "Si vendes online y recibes devoluciones, contamos con servicio de devoluciones nacionales e internacionales." },
];

export default function ServiciosBuyAndShip() {
  return (
    <section className="relative w-full py-16">
      {/* Fondo de sección con imagen */}
      <div className="absolute inset-0 z-0">

        <Image
          src="/img/buyandship/Fondo1Div3.png"
          alt="Fondo servicios"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Título */}
        <AnimatedText delay={0.2} lines={[
          <h2 className="text-center font-[Montserrat] font-extrabold text-[40px] md:text-[50px] text-white mb-8">
            Nuestros servicios
          </h2>
        ]}></AnimatedText>


        {/* CONTENEDOR AZUL (marco) que envuelve TODAS las tarjetas */}
        <div
          className="
            rounded-[22px] md:rounded-[28px]
            bg-[linear-gradient(90deg,_#1E51D2_0%,_#2CD0F6_100%)]
            p-3 md:p-4
            shadow-[0_30px_50px_rgba(0,0,0,0.18)]
          "
        >
          {/* Pila de tarjetas en una sola columna */}

          <div className="flex flex-col gap-4 md:gap-4">
            {services.map((s, i) => (
              <DivZoom scale={1.1}>
                <div
                  key={i}
                  className="
                  flex items-start gap-3 md:gap-4
                  bg-white
                  rounded-[14px] md:rounded-[16px]
                  shadow-[0_10px_20px_rgba(0,0,0,0.10)]
                  px-4 py-3 md:px-5 md:py-4
                  trasnsition-all duration-300 ease-in-out hover:bg-blue-50
                "
                >
                  {/* Icono en pill */}

                  <div
                    className="
                    shrink-0
                    w-[56px] h-[56px] md:w-[64px] md:h-[64px]
                    rounded-2xl
                    bg-[rgba(255,255,255,0.95)]
                    shadow-[0_8px_18px_rgba(15,23,42,0.08)]
                    flex items-center justify-center
                  "
                  >
                    <Image
                      src={s.icon}
                      alt={s.title}
                      width={34}
                      height={34}
                      className="md:w-[38px] md:h-[38px]"
                    />
                  </div>

                  {/* Texto */}
                  <div className="leading-snug">
                    <h3 className="font-[Montserrat] font-extrabold text-sky-600 text-[18px] md:text-[20px]">
                      {s.title}
                    </h3>
                    <p className="text-[#333] text-[14px] md:text-[15px] mt-1">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </DivZoom>
            ))}
          </div>


        </div>
        {/* Fin contenedor azul */}
      </div>
    </section>
  );
}
