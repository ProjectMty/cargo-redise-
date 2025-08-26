"use client";

import Image from "next/image";
import Link from "next/link";

export default function BuyAndShipCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-[#123b99] to-[#069ed0] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center">
        <div className="relative rounded-[24px] overflow-hidden shadow-2xl">
          {/* Imagen del arte */}
          <Image
            src="/img/buyandship/cta-card.png" // <-- coloca aquí tu imagen
            alt="Buy & Ship"
            width={880}
            height={320}
            className="object-cover"
            priority
          />
          {/* Botón flotante sobre la imagen */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <Link
              href="/buy-and-ship"
              className="rounded-full bg-white/95 text-[#0a2f8a] hover:bg-white px-5 py-2 text-sm font-semibold shadow-md transition"
            >
              Visita aquí
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
