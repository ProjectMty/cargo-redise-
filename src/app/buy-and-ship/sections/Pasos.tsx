"use client";
import Image from "next/image";

export default function PasosUnoTres() {
  return (
    <section className="relative w-full py-12">
      {/* Fondo de la línea serpenteante */}
      <div className="absolute inset-0 z-0 flex justify-center">
        <Image
          src="/img/buyandship/fondopasos.svg"
          alt="Línea pasos"
          width={1200}
          height={400}
          className="object-contain"
          priority
        />
      </div>

      {/* Contenedor de íconos */}
      <div className="relative z-10 flex justify-between items-center max-w-5xl mx-auto px-8">
        {/* Paso 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/icons/buyandship/pasos/Icono 1.svg"
            alt="Paso 1"
            width={60}
            height={60}
          />
        </div>

        {/* Paso 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/icons/buyandship/pasos/Icono 2.svg"
            alt="Paso 2"
            width={60}
            height={60}
          />
        </div>

        {/* Paso 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/icons/buyandship/pasos/Icono 3.svg"
            alt="Paso 3"
            width={60}
            height={60}
          />
        </div>
      </div>
    </section>
  );
}
