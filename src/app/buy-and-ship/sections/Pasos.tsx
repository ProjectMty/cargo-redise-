"use client";
import Image from "next/image";

export default function Pasos() {
  return (
    <section className="relative w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Imagen completa de pasos */}
        <div className="relative w-full">
          <Image
            src="/img/buyandship/pasos.png"
            alt="Pasos del servicio Buy and Ship"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
