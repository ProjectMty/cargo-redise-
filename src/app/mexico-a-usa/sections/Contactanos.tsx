"use client";

export default function Contactanos() {
  return (
    <section id="mxusa-contacto" className="py-16 bg-gradient-to-r from-[#173E98] to-[#1EC8E6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Contáctanos</h2>
        <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 md:p-8">
          {/* Sustituye por tu formulario real */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="rounded-lg px-4 py-2 text-[#061349]" placeholder="Nombre" />
            <input className="rounded-lg px-4 py-2 text-[#061349]" placeholder="Email" />
            <input className="rounded-lg px-4 py-2 text-[#061349]" placeholder="Teléfono" />
            <input className="rounded-lg px-4 py-2 text-[#061349]" placeholder="Empresa" />
            <textarea className="md:col-span-2 rounded-lg px-4 py-2 text-[#061349]" rows={4} placeholder="Mensaje" />
            <div className="md:col-span-2">
              <button className="rounded-full bg-white text-[#173E98] px-6 py-2 font-semibold hover:bg-sky-50">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
