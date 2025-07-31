"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "¿Cómo funciona?", href: "#funciona" },
  { name: "Buy & Ship", href: "#buy" },
  { name: "México a USA", href: "#mxusa" },
  { name: "Tarifas", href: "#tarifas" },
  { name: "Contáctanos", href: "#contacto" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative w-full font-sans overflow-hidden">
      {/* Fondo con imagen como background */}
      <div
        className="relative rounded-b-[60px] pb-24 bg-cover bg-center"
        style={{ backgroundImage: "url(/img/bannerchat.png)" }}
      >
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
                <button onClick={() => setMobileMenuOpen(true)} className="text-white">
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
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-700">
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

        {/* Texto principal */}
        <div className="relative z-10 text-center px-6 pt-72 pb-10">
          <h1 className="text-white text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight drop-shadow-lg">
            IMPORTA FÁCIL Y RÁPIDO DESDE CUALQUIER PARTE DEL MUNDO CON CARGO MONTERREY!
          </h1>
        </div>
      </div>

      {/* Caja blanca de servicios */}
      <div className="relative z-20 -mt-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <div className="text-[#00AEEF] text-2xl">🚚</div>
            <div>
              <h3 className="text-[#061349] font-bold text-lg">Envíos Internacionales</h3>
              <p className="text-gray-600 text-sm">
                Servicio de transporte y entrega transfronteriza desde USA, China y más.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-[#00AEEF] text-2xl">📦</div>
            <div>
              <h3 className="text-[#061349] font-bold text-lg">Entregas en Amazon y Mercado Libre</h3>
              <p className="text-gray-600 text-sm">
                Entregas programadas a almacenes FBA y última milla en todo México.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-[#00AEEF] text-2xl">🕒</div>
            <div>
              <h3 className="text-[#061349] font-bold text-lg">Soporte 24/7</h3>
              <p className="text-gray-600 text-sm">
                Atención personalizada todo el día, todos los días.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-[#00AEEF] text-2xl">🛡️</div>
            <div>
              <h3 className="text-[#061349] font-bold text-lg">Cargo Insurance</h3>
              <p className="text-gray-600 text-sm">
                Seguro del 100% sobre el valor declarado en cada envío.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
