"use client";

import Image from "next/image";

export default function BuyAndShip() {
  return (
    <section id="buy" className="w-full font-[Montserrat] text-[#061349]">
      {/* HERO (azul) */}
      <div className="relative isolate overflow-hidden bg-[oklch(42.4%_0.199_265.638)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <h1 className="text-white font-extrabold leading-tight text-[28px] md:text-[36px] lg:text-[44px]">
            ¡Coloca tus productos en Estados Unidos!
          </h1>
          <p className="mt-2 text-white/90 text-sm md:text-base max-w-2xl">
            Vende en Amazon USA o directamente a clientes; nosotros hacemos la
            logística.
          </p>
        </div>

        {/* degradado suave inferior */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-[#0b2d63]/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Intro: imagen izquierda + texto derecha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 -mt-10 md:-mt-12">
          <div className="rounded-3xl bg-white shadow-[0_14px_40px_rgba(0,0,0,0.12)] p-2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/img/buy-hero.jpg"
                alt="Empaques listos para envío"
                width={1024}
                height={700}
                className="h-[240px] md:h-[320px] w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#FFFFFF] md:text-[#061349] md:!text-inherit">
              <span className="text-[#1d66ff]">¡Lleva tu marca</span> al mercado
              más grande!
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#333]">
              Cargo Monterrey es tu freight forwarder internacional. Ayudamos a
              vendedores mexicanos a enviar y distribuir productos a Estados
              Unidos. Desde la recepción en Laredo, TX, hasta la última milla:
              nos encargamos para que tú sólo te enfoques en vender.
            </p>
          </div>
        </div>

        {/* Nuestros Servicios – chips */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-white md:text-[#061349] text-lg md:text-2xl font-extrabold">
            Nuestros Servicios
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "Flete en USA",
              "Despachos e‑commerce",
              "Marketplaces",
              "Tránsitos MX → USA",
            ].map((t, i) => (
              <span
                key={i}
                className="rounded-full border border-sky-600 text-sky-600 bg-white px-4 py-2 text-sm font-semibold shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* grid de 4 tarjetas con icono + texto (como en tu mock) */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <CardService
              icon="/img/icons/usa-truck.svg"
              title="Flete en USA"
              text="Coordinamos la entrega a tu cliente en USA o a centros de distribución."
            />
            <CardService
              icon="/img/icons/box.svg"
              title="Despachos e‑commerce"
              text="Gestión de paquetes para ventas en línea."
            />
            <CardService
              icon="/img/icons/market.svg"
              title="Marketplaces"
              text="Entregas programadas a FBA y marketplaces."
            />
            <CardService
              icon="/img/icons/transit.svg"
              title="Tránsitos MX → USA"
              text="Cruce y documentación para envíos comerciales."
            />
          </div>
        </div>

        {/* Servicios Personalizados – 2 tarjetas anchas con imagen */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-lg md:text-2xl font-extrabold">
            Servicios Personalizados
          </h3>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <WideImageCard
              img="/img/pagos-clientes.jpg"
              title="Recibir pagos de tus clientes extranjeros"
              text="Si vendes a empresas o personas en USA, podemos recibir sus pagos y liquidarte en México con soporte contable."
            />
            <WideImageCard
              img="/img/fba-prep.jpg"
              title="FBA Prep"
              text="Reempaque, etiquetado y acondicionamiento para cumplir con las reglas de Amazon FBA u otros marketplaces."
            />
          </div>
        </div>

        {/* Estructura de Costos – 3 tarjetas */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-lg md:text-2xl font-extrabold">
            Estructura de Costos
          </h3>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            <PillCard
              icon="/img/icons/fee.svg"
              title="Honorarios"
              text="Sólo cuando entregamos en México: incluye recepción, cruce y liberación."
            />
            <PillCard
              icon="/img/icons/truck.svg"
              title="Fletes"
              text="Recolección y última milla en USA/MX. Cotizamos por peso/volumen."
            />
            <PillCard
              icon="/img/icons/tax.svg"
              title="Impuestos y aranceles"
              text="Según fracción arancelaria y valor declarado de mercancías."
            />
          </div>
        </div>

        {/* Tipos de Industrias – 4 mini cards */}
        <div className="mt-12 md:mt-16 mb-16">
          <h3 className="text-lg md:text-2xl font-extrabold">Tipos de Industrias</h3>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: "/img/ind-1.jpg", t: "Vendedores que buscan crecer en USA" },
              { img: "/img/ind-2.jpg", t: "Retailers que necesitan mover producto" },
              { img: "/img/ind-3.jpg", t: "Fabricantes que resisten retail/wholesale" },
              { img: "/img/ind-4.jpg", t: "Personas físicas que buscan cumplir ante USA" },
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.12)] overflow-hidden"
              >
                <Image
                  src={v.img}
                  alt={v.t}
                  width={640}
                  height={420}
                  className="h-[140px] w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-sm font-semibold">{v.t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- subcomponentes ---------- */

function CardService({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] p-4 flex items-start gap-3">
      <Image src={icon} alt="" width={34} height={34} className="shrink-0" />
      <div>
        <p className="font-bold text-[#0B2D63]">{title}</p>
        <p className="text-sm text-[#333]">{text}</p>
      </div>
    </div>
  );
}

function WideImageCard({
  img,
  title,
  text,
}: {
  img: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.12)] overflow-hidden">
      <Image
        src={img}
        alt={title}
        width={1200}
        height={800}
        className="h-[160px] md:h-[190px] w-full object-cover"
      />
      <div className="p-4">
        <p className="font-bold text-[#0B2D63]">{title}</p>
        <p className="text-sm text-[#333]">{text}</p>
      </div>
    </div>
  );
}

function PillCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white shadow-[0_10px_22px_rgba(0,0,0,0.12)] p-4 flex items-start gap-3">
      <Image src={icon} alt="" width={28} height={28} className="shrink-0" />
      <div>
        <p className="font-bold text-[#0B2D63]">{title}</p>
        <p className="text-sm text-[#333]">{text}</p>
      </div>
    </div>
  );
}
