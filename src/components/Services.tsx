"use client";


import AnimatedText from "@/animate/TextAnimate";

import "@/style/Servicios.css";

/* ================== CONTROLES RÁPIDOS ================== */
// const PANEL_MAX_W = 1120;       // ancho máx del panel (px) ~ como tus maquetas
// const PHOTO_W = 560;            // ancho visible de la foto (px)
// const PHOTO_H = 260;            // alto visible de la foto (px)
// const PHOTO_RADIUS = 18;        // radio del marco de la foto (px)

/* ================== TIPOS ================== */
// type Bullet = { icon: string; text: string };
// type ServiceId =
//   | "crossborder"
//   | "marketplaces"
//   | "inventory"
//   | "returns"
//   | "special";

/* ================== DATA ================== */
// const SERVICES: Record<
//   ServiceId,
//   {
//     title: string;
//     photo: string;
//     bullets: Bullet[];
//     photoLeft?: boolean; // <— true = foto a la izquierda
//   }
// > = {
//   crossborder: {
//     title: "Servicios de transporte y entrega transfronteriza",
//     photo: "/img/services/servicesfondo.png",
//     bullets: [
//       { icon: "/img/icons/Icono 1.1.svg", text: "Envíos sin problemas entre USA, Canadá y México." },
//       { icon: "/img/icons/Icono 1.2.svg", text: "Tarifas competitivas en envíos dentro y fuera de Canadá y México." },
//       { icon: "/img/icons/Icono 1.3.svg", text: "Nuestros camiones cruzan ambas fronteras cada día." },
//       { icon: "/img/icons/Icono 1.4.svg", text: "Podemos recoger su mercancía en la puerta de su casa en los USA y entregarla en cualquier dirección en México." },
//       { icon: "/img/icons/Icono 1.5.svg", text: "Servicio de importación a México." },
//       { icon: "/img/icons/Icono 1.6.svg", text: "Servicio de consolidados." },
//     ],
//     photoLeft: false,
//   },
//   marketplaces: {
//     title: "Entrega en marketplaces y última milla",
//     photo: "/img/services/marketplaces.png",
//     bullets: [
//       { icon: "/img/icons/Icono 2.1.svg", text: "Entregas programadas a almacenes de Amazon FBA y Mercado Libre." },
//       { icon: "/img/icons/Icono 2.2.svg", text: "Entregas de última milla hasta la puerta de tu comprador en México." },
//       { icon: "/img/icons/Icono 2.3.svg", text: "Despachos de mercancía para ventas e‑commerce." },
//       { icon: "/img/icons/Icono 2.4.svg", text: "Envíos a todo México." },
//     ],
//     photoLeft: true,
//   },
//   inventory: {
//     title: "Manejo de inventario y almacenamiento",
//     photo: "/img/services/warehouse.png",
//     bullets: [
//       { icon: "/img/icons/Icono 3.1.svg", text: "Almacenaje — Recibimos tu mercancía en nuestras bodegas y te entregamos como vayas necesitando unidades." },
//       { icon: "/img/icons/Icono 3.2.svg", text: "Usa nuestra bodega como si fuera tuya." },
//     ],
//     photoLeft: false,
//   },
//   returns: {
//     title: "Devoluciones y retornos",
//     photo: "/img/services/returns.png",
//     bullets: [
//       { icon: "/img/icons/Icono 4.1.svg", text: "Realiza devoluciones de tus compras sin problema." },
//       { icon: "/img/icons/Icono 4.2.svg", text: "Envía a nuestra bodega en México y nosotros lo llevamos a USA para devolver a tu proveedor." },
//     ],
//     photoLeft: true,
//   },
//   special: {
//     title: "Transporte especializado",
//     photo: "/img/services/special.png",
//     bullets: [
//       { icon: "/img/icons/Icono 5.1.svg", text: "Entregas LTL." },
//       { icon: "/img/icons/Icono 5.2.svg", text: "Flete aéreo nocturno de 2 días y diferido." },
//       { icon: "/img/icons/Icono 5.3.svg", text: "Vuelos internacionales (prioritarios y diferidos)." },
//     ],
//     photoLeft: false,
//   },
// };

/* ================== SUBCOMPONENTES ================== */
// function Tab({
//   label,
//   active,
//   onClick,
// }: {
//   label: string;
//   active: boolean;
//   onClick: () => void;

// }) {


//   return (
//     <DivZoom
//       scale={1.05}>
//       <div className="div-tarjeta">
      
//       </div>
//       <button
//         onClick={onClick}

//         className={[
//           "rounded-[17pt] border px-4 md:px-5 py-2 font-[Montserrat] text-[14px] md:text-[15px] font-medium transition",
//           active
//             ? "bg-sky-600 text-[#F3F7FE] border-sky-600 shadow-sm"
//             : "bg-transparent text-sky-600 border-sky-600 hover:bg-sky-50",
//         ].join(" ")}
//       >
//         {label}
//       </button>
//     </DivZoom>

//   );
// }

// function BulletCard({ icon, text }: Bullet) {
//   return (
//     <DivZoom scale={1.03}>
//       <div className="w-70 h-40 flex flex-row items-center justify-start gap-3 rounded-[18px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] px-4 py-2 
//       trasnsition-all duration-300 ease-in-out hover:bg-blue-50
//       ">

//         <Image src={icon} alt="" width={32} height={32} className="shrink-0" />
//         <p className="text-[#0B2D63] text-[14px] md:text-[15px] leading-snug font-[Montserrat]">
//           {text}
//         </p>

//       </div>
//     </DivZoom>
//   );
// }


/* ================== PRINCIPAL ================== */
export default function Services() {
  // const [active] = useState<ServiceId>("crossborder");
  // const service = SERVICES[active];

  // Config de layout por cantidad de bullets (como en tus capturas)
  // const manyBullets = service.bullets.length >= 2; // 2 columnas cuando hay 4+
  // const bulletsCols = manyBullets ? "sm:grid-cols-2" : "sm:grid-cols-1";

  // Alineación del recorte de la foto (si va a la izq, mostramos más izquierda; si va a la der, más derecha)
  // const photoObjectPos = service.photoLeft ? "object-[left_center]" : "object-[center_right]";
  // Muestra Componente
  // const [showComponent, setShowComponent] = useState(true); // <-- Aquí defines 'showComponent'



  return (
    <section id="servicios" className="section">
      <div className="max-w-[1200px] mx-auto">
        {/* Header y tabs */}

        <AnimatedText
          delay={0.2}
          lines={[
            <h2 key={1} className="texto-titulo">
              Nuestros Servicios
            </h2>
          ]}>

        </AnimatedText>
        <p className="subtitulo-texto">
          En <span className="font-bold">Cargo Monterrey</span> hacemos que importar mercancía sea{" "}
          <span className="font-bold">fácil, rápido y seguro</span>. Sin membresías ni trámites complicados,
          recibimos, procesamos y entregamos tus paquetes directamente en México.
        </p>

        <p className="subtitulo-texto">
          Conoce nuestros principales servicios:
        </p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
         
        </div>




      </div>
    </section>
  );
}
