"use client";
import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/#hero" },
  { name: "Nosotros", href: "/#servicios" },
  { name: "¿Cómo funciona?", href: "/#comofunciona" },
  { name: "Buy & Ship", href: "/#buyandship" },      // ← ancla en home
  { name: "México a USA", href: "/mexico-a-usa" },   // ← página aparte
  { name: "Tarifas", href: "/#tarifas" },
  { name: "Contáctanos", href: "/#contacto" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Cambia valor al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
  
      setScrolled(window.scrollY > 400);

    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-500
       ${scrolled ? 'bg-white/60 shadox-md' : 'bg-transparent'
      }`}>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center ">
          <Image
            src={scrolled ? "/img/logos/logo-azul.svg" : "/img/logos/logo-blanco.svg"}
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
              className={`relative text-sm font-medium tracking-normal group transition-colors duration-300
                 ${scrolled ? 'text-blue-900' : 'text-white'}`}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Calculadora */}
        <div className="lg:block ">
          <a
            href="/#calculadora"
            className="rounded-full bg-[#1b1ba6] text-white px-5 py-1.5 text-sm font-semibold hover:bg-[#14149c] transition"
          >
            Calculadora
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden p-2 rounded-md">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white"
            aria-label="Abrir menú"
          >
            <Bars3Icon className={`h-10 w-10 ${mobileMenuOpen ? "hidden": " block"}`} ></Bars3Icon>
             
            
          </button>
        </div>
      </nav>

      {/* Menu movil */}

         <Transition show={mobileMenuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="lg:hidden"
        onClose={setMobileMenuOpen}
      >
        {/* Fondo oscuro */}
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 z-40" />
        </Transition.Child>

        {/* Panel*/}
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-out duration-300"
          enterFrom="translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transform transition ease-in duration-200"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="translate-x-full opacity-0"
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm bg-white/80 p-6 shadow-xl">
            <div className="flex items-center justify-end">
            
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-blue-900"
                aria-label="Cerrar menú"
              >
                <XMarkIcon className="h-10 w-10" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-blue-900 hover:text-[#00AEEF]"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#calculadora"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-4 rounded-full bg-blue-900 px-4 py-2 text-white text-center font-semibold hover:bg-[#14149c]"
              >
                Calculadora
              </a>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
    </header>
  );
}
