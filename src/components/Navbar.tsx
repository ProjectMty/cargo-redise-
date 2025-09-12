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
  { name: "Buy & Ship", href: "/#buyandship" },
  { name: "México a USA", href: "/mexico-a-usa" },
  { name: "Tarifas", href: "#tarifas" },
  { name: "Contáctanos", href: "#contacto" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logob.svg"
            alt="Logo Cargo Monterrey"
            width={130}
            height={36}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-white text-sm font-medium tracking-normal group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Calculadora */}
        <div className="hidden lg:block">
          <a
            href="#calculadora"
            className="rounded-full bg-[#1b1ba6] text-white px-5 py-1.5 text-sm font-semibold hover:bg-[#14149c] transition"
          >
            Calculadora
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white"
            aria-label="Abrir menú"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
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
              aria-label="Cerrar menú"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-gray-800 hover:text-[#00AEEF]"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 rounded-full bg-[#1b1ba6] px-4 py-2 text-white text-center font-semibold hover:bg-[#14149c]"
            >
              Calculadora
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
