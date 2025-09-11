"use client";
import Image from "next/image";

export default function Industrias() {
  return (
    <section id="mxusa-industrias" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-[#061349] text-2xl md:text-3xl font-bold mb-6">
          Tipos de Industrias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md bg-gray-100 aspect-[4/3]"
            >
              {/* <Image src={`/img/mxusa/ind-${i+1}.jpg`} alt="" fill className="object-cover" /> */}
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl shadow-md bg-gray-100 aspect-[16/10]" />
          <div className="rounded-2xl shadow-md bg-gray-100 aspect-[16/10]" />
        </div>
      </div>
    </section>
  );
}
