import Navbar from "@/components/Navbar";

export default function BuyAndShipPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero con tu imagen de fondo */}
      <section
        className="min-h-[70vh] flex items-center justify-center text-white"
        style={{
          // reemplaza por tu ruta
          backgroundImage: "url('/img/buyandship/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Título/branding si lo necesitas */}
      </section>

      {/* …resto de secciones Buy & Ship */}
    </main>
  );
}
