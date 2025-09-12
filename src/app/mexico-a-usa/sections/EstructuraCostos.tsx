"use client";

const COSTOS = [
  {
    title: "Honorarios",
    desc: "Sólo cuando entregamos en México: incluye recepción, cruce y liberación.",
  },
  {
    title: "Fletes",
    desc: "Recolección y última milla en USA/MX. Cotizamos por peso/volumen.",
  },
  {
    title: "Impuestos y aranceles",
    desc: "Según fracción arancelaria y valor declarado.",
  },
];

export default function EstructuraCostos() {
  return (
    <section
      id="mxusa-costos"
      className="bg-gradient-to-r from-[#1B59E1] to-[#05C2F2] py-14"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
          Estructura de Costos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COSTOS.map((c, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-lg">
              <p className="font-bold text-[#061349]">{c.title}</p>
              <p className="text-[#061349]/80 mt-2 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
