"use client";
import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/animate/TextAnimate";
import { usePathname, useRouter } from 'next/navigation';
import "@/app/mexico-a-usa/style/heroMexUsa.css"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Introducción", href: "/mexico-a-usa/#intro" },
  { name: "Servicios", href: "/mexico-a-usa/#serviciosUSA" },
  { name: "Personalizado", href: "/mexico-a-usa/#personalizadoUSA" },
  { name: "Costos", href: "/mexico-a-usa/#CostosUSA" },
  { name: "Industria", href: "/mexico-a-usa/#industriaUSA" },
  { name: "Contáctanos", href: "/mexico-a-usa/#contacto" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleSmartNavigation = (href: string) => {
    const [path, hash] = href.split("#");

    if (pathname === path || path === "") {
      // Ya estamos en la misma página
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Puede que no haya cargado aún
        setTimeout(() => {
          const elRetry = document.getElementById(hash);
          if (elRetry) {
            elRetry.scrollIntoView({ behavior: "smooth" });
          }
        }, 200);
      }
    } else {
      // Cambia de página (Next.js se encarga del resto)
      router.push(href);
    }
  };
  // Cambia valor al hacer scroll
  useEffect(() => {
    const handleScroll = () => {

      setScrolled(window.scrollY > 400);

    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-hero-mu">
      {/* Imagen de fondo */}
      <div className="contenedor-hero-mu">
        <Image
          src="/img/mexausa/bg1.png"
          alt="México a USA"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Texto alineado con la navbar y 2 renglones */}
        <div className="contenedor-texto-hero-mu">
          {/* MISMO contenedor que la navbar para que alinee igual */}
          <div className="hero-texto-mu">
            <AnimatedText delay={0.2} lines={[
              <h1 key={1} className="titulo-hero-texto-mu"
              >
                ¡Lleva tu marca al mercado más grande del mundo!
              </h1>,
              <p key={2}
                className="subtitulo-hero-texto-mu"
              >
                ¡Coloca tus productos en Estados Unidos!
              </p>
            ]}></AnimatedText>



          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className={`section-navbar-mu
       ${scrolled ? 'bg-white/80 shadox-md' : 'bg-transparent'
        }`}>
        <nav className="w-full bg-transparent">
          <div className="contenedor-navbar-dektop-mu">

            <Link href="/" className="flex items-center">
              <Image
                src={scrolled ? "/img/logos/logo-azul.svg" : "/img/logos/logo-blanco.svg"}
                alt="Logo Cargo Monterrey"
                width={140}
                height={40}
                priority
              />
            </Link>

            <div className="contenedor-button-navbar-mu">

              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleSmartNavigation(item.href)}
                  className={`group button-navbar-mu
                  ${scrolled ? 'text-blue-900' : 'text-white'}`}
                >
                  {item.name}
                  <span className="line-button-navbar-mu"></span>
                </button>
              ))}

            </div>

            {/* calculadora */}
            <div className="hidden lg:block">
              <a
                href="#calculadora"
                className="rounded-full pointer-events-none bg-[#1b1ba6] text-white px-6 py-2 text-sm font-semibold hover:bg-[#14149c] transition opacity-0"
              >
                Calculadora
              </a>
            </div>

            <div className="lg:hidden p-2 rounded-md">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-white"
                aria-label="Abrir menú"
              >
                <Bars3Icon className={`h-10 w-10 ${mobileMenuOpen ? "hidden" : " block"}`} ></Bars3Icon>

              </button>
            </div>
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
                 
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      </header>
    </section>
  );
}
