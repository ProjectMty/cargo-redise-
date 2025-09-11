// src/components/BuyAndShipCTA.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function BuyAndShipCTA() {
  return (
    <section id="buyandship" className="relative w-full flex justify-center items-center py-20">
      <div className="relative w-full max-w-4xl">
        <Image
          src="/img/buyandship/Forma 1.png"
          alt="Buy & Ship"
          width={1200}
          height={600}
          className="w-full h-auto rounded-[28px] object-cover"
          priority
        />

        {/* Botón (sólo navega a la PÁGINA buy-and-ship) */}
        <div className="absolute bottom-8 md:bottom-16 w-full flex justify-center">
          <Link
            href="/buy-and-ship"
            className="px-6 py-2 bg-white text-sky-700 font-semibold rounded-full shadow-md hover:bg-sky-100 transition"
          >
            Visita aquí
          </Link>
        </div>
      </div>
    </section>
  );
}
