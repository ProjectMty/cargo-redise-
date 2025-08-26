"use client";

import Image from "next/image";
import Link from "next/link";

/** Sección: Hero superior (fondo degradado + encabezado) */
function BS_Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#102e93] to-[#0ca7d9] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          ¡Coloca tus productos en Estados Unidos!
        </h1>
        <p className="mt-3 max-w-2xl text-white/90">
          Vende en Amazon USA o directamente a clientes; nosotros hacemos la logística.
        </p>
      </div>
    </section>
  );
}

/** Sección: Intro con imagen izquierda y texto derecha */
function BS_Intro() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <Image
            src="/img/buyandship/intro.jpg" // coloca tu imagen
            alt="Intro"
            width={560}
            height={380}
            className="rounded-2xl object-cover w-full h-auto shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-[#0a2f8a] text-2xl md:text-3xl font-extrabold">
            ¡Lleva tu marca al mercado más grande!
          </h2>
          <p className="mt-4 text-[#333] leading-relaxed">
            Cargo Monterrey es tu freight forwarder internacional. Ayudamos
            a vendedores mexicanos a enviar y distribuir productos a Estados Unidos.
            Desde la recepción en Laredo, TX, hasta la última milla: nos encargamos
            para que tú te enfoques en vender.
          </p>
        </div>
      </div>
    </section>
  );
}

/** Sección: Nuestros Servicios (rejilla simple) */
function BS_Services() {
  const items = [
    {
      title: "Flete en USA",
      desc: "Coordinamos la entrega a tu cliente en USA o a centros de distribución.",
      icon: "/img/icons/usa-truck.svg",
    },
    {
      title: "Despachos e-commerce",
      desc: "Gestión de paquetes para ventas online.",
      icon: "/img/icons/box.svg",
    },
    {
      title: "Marketplaces",
      desc: "Entregas programadas a almacenes FBA y marketplaces.",
      icon: "/img/icons/amazon.svg",
    },
    {
      title: "Tránsitos MX → USA",
      desc: "Cruces y documentación para envíos comerciales.",
      icon: "/img/icons/paper.svg",
    },
  ];
  return (
    <section className="bg-[#1f49c9] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="text-2xl md:text-3xl font-extrabold">Nuestros Servicios</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl bg-white text-[#0a2f8a] p-4 shadow-md">
              <div className="flex items-start gap-3">
                <Image src={it.icon} alt="" width={28} height={28} />
                <div>
                  <h4 className="font-bold">{it.title}</h4>
                  <p className="text-sm text-[#333] mt-1">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Sección: Costos (tres tarjetas) */
function BS_Costs() {
  const items = [
    {
      title: "Honorarios",
      desc:
        "Solo cuando entregamos en México; incluye recepción, cruce y liberación.",
      icon: "/img/icons/fee.svg",
    },
    {
      title: "Fletes",
      desc:
        "Recolección y última milla en USA/MX. Cotizamos por peso/volumen.",
      icon: "/img/icons/truck.svg",
    },
    {
      title: "Impuestos y aranceles",
      desc:
        "Según fracción arancelaria y valor declarado de mercancías.",
      icon: "/img/icons/tax.svg",
    },
  ];
  return (
    <section className="bg-gradient-to-r from-[#0e5dc3] to-[#11b7e6] py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="text-white text-2xl md:text-3xl font-extrabold">
          Estructura de Costos
        </h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl bg-white p-5 shadow-xl">
              <div className="flex items-start gap-3">
                <Image src={it.icon} alt="" width={28} height={28} />
                <div>
                  <h4 className="text-[#0a2f8a] font-bold">{it.title}</h4>
                  <p className="text-sm text-[#333] mt-1">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Sección: Industrias (placeholders para imágenes) */
function BS_Industries() {
  const cards = [1, 2, 3, 4];
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="text-[#0a2f8a] text-2xl md:text-3xl font-extrabold">
          Tipos de Industrias
        </h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((n) => (
            <div key={n} className="rounded-2xl bg-[#f5f7fb] aspect-[4/3] shadow-inner" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BuyAndShipPage() {
  return (
    <main className="w-full">
      <BS_Hero />
      <BS_Intro />
      <BS_Services />
      <BS_Costs />
      <BS_Industries />
      {/* Si quisieras reusar tu formulario de contacto, aquí importas y montas <Contactanos/> */}
      <section className="bg-[#0e5dc3] text-white py-10 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          ¿Tienes dudas?{" "}
          <Link href="/#contacto" className="underline font-semibold">
            Contáctanos
          </Link>
        </div>
      </section>
    </main>
  );
}
