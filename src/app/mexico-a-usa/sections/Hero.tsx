"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "¿Cómo funciona?", href: "/#funciona" },
  { name: "Buy & Ship", href: "/#buyandship" },
  { name: "México a USA", href: "/mexico-a-usa" },
  { name: "Tarifas", href: "/#tarifas" },
  { name: "Contáctanos", href: "/#contacto" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative w-full font-sans overflow-hidden rounded-b-[60px]">
      {/* Imagen de fondo */}
      <div className="relative w-full h-[400px] md:h-[520px] lg:h-[577px]">
        <Image
          src="/img/mexausa/bg1.png"
          alt="México a USA"
          fill
          className="object-cover object-center"
          priority
        />
        
{/* Texto alineado con la navbar y 2 renglones */}
<div className="absolute bottom-10 inset-x-0 z-30">
  {/* MISMO contenedor que la navbar para que alinee igual */}
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    <h1
      className="
        text-white font-[Montserrat] font-extrabold
        text-[30px] md:text-[46px] leading-[1.1]
        max-w-[58ch]   /* controla salto de línea */
      "
    >
      ¡Lleva tu marca al mercado más grande del mundo!
    </h1>

    <p
      className="
        mt-2 text-white font-[Montserrat] font-medium
        text-[22px] md:text-[30px] leading-snug
        max-w-[42ch]   /* controla ancho del segundo renglón */
      "
    >
      ¡Coloca tus productos en Estados Unidos!
    </p>
  </div>
</div>






      </div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
        <nav className="w-full bg-transparent">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between py-6">
            
            <Link href="/" className="flex items-center">
              <Image
                src="/img/logob.svg"
                alt="Logo Cargo Monterrey"
                width={140}
                height={40}
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-white text-sm font-medium tracking-normal group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a
                href="#calculadora"
                className="rounded-full bg-[#1b1ba6] text-white px-6 py-2 text-sm font-semibold hover:bg-[#14149c] transition"
              >
                Calculadora
              </a>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-white"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>

        {/* Menú móvil */}
        <Dialog
          as="div"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <Dialog.Panel className="fixed inset-0 z-50 bg-white p-6">
            <div className="flex items-center justify-between">
              <Image
                src="/img/logob.svg"
                alt="Logo Cargo Monterrey"
                width={120}
                height={35}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-gray-800 hover:text-[#00AEEF]"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#calculadora"
                className="block mt-4 rounded-full bg-[#1b1ba6] px-4 py-2 text-white text-center font-semibold hover:bg-[#14149c]"
              >
                Calculadora
              </a>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </section>
  );
}
