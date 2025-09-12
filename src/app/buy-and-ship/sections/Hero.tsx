
export default function BuyAndShipHero() {
  return (
   // Dentro de tu componente HeroBuyAndShip (sólo el bloque visual del hero)
<section className="relative w-full min-h-[520px] md:min-h-[620px] lg:min-h-[700px] rounded-b-[40px] overflow-hidden bg-[#F2F2F2]">

  {/* Fondo: imagen principal */}
  <div className="absolute inset-0">
    <img
      src="/img/buyandship/bg1.png"
      alt="Almacén"
      className="w-full h-full object-cover object-center"
      loading="eager"
    />
    {/* Vignette opcional (muy sutil) */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14)_0%,rgba(0,0,0,0.18)_60%,rgba(0,0,0,0.32)_100%)] mix-blend-multiply pointer-events-none" />
  </div>

  {/* Overlay letras: centrado y dimensionado estable */}
  <div
    className="
      pointer-events-none
      absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%]
      w-[88vw] max-w-[1100px]
      md:w-[80vw] md:max-w-[1200px]
      lg:w-[74vw] lg:max-w-[1280px]
    "
    aria-hidden="true"
  >
    <img
      src="/img/buyandship/bg2.svg"
      alt=""
      className="w-full h-auto opacity-[0.92] drop-shadow-[0_8px_26px_rgba(0,0,0,0.25)]"
      loading="eager"
    />
  </div>

  {/* Espaciado superior para no tapar la navbar */}
  <div className="h-[88px]" />
</section>

  );
}
