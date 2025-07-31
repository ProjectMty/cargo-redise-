"use client";

import Image from "next/image";
import Link from "next/link";
import useMediaQuery from '@/hooks/useMediaQuery';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import EnviaLogo from "@/assets/partnership/envia-com.png";
import FedexLogo from "@/assets/partnership/fedex.png";
import MercadoLibreLogo from "@/assets/partnership/mercadolibre.png";
import TeikerLogo from "@/assets/partnership/teiker.png";
import TresGuerrasLogo from "@/assets/partnership/tres-guerras.png";


export default function Partnership() {
  const isLg = useMediaQuery("(min-width: 1024px)");

  return (
    <section id="partners" className="w-full bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-[#061349] mb-12">
          Nuestros Aliados
        </h2>

        <Carousel
          centerMode={isLg}
          centerSlidePercentage={17}
          emulateTouch={!isLg}
          infiniteLoop={!isLg}
          showArrows={!isLg}
          swipeable={!isLg}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          renderItem={(item) => (
            <div className="flex h-full w-full items-center justify-center px-4">
              {item}
            </div>
          )}
        >
          {/* Mercado Libre */}
          <div className="w-48 px-6 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
            <Link
              href="https://mercadolibre.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={MercadoLibreLogo}
                alt="MercadoLibre Logo"
                width={800}
                height={600}
                className="w-full"
              />
            </Link>
          </div>

          {/* Envia */}
          <div className="w-60 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
            <Link
              href="https://envia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={EnviaLogo}
                alt="Envia Logo"
                width={475}
                height={106}
                className="w-full"
              />
            </Link>
          </div>

          {/* Fedex */}
          <div className="w-52 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
            <Link
              href="https://fedex.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={FedexLogo}
                alt="Fedex Logo"
                width={800}
                height={600}
                className="w-full"
              />
            </Link>
          </div>

          {/* Teiker */}
          <div className="w-60 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
            <Link
              href="https://teiker.mx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={TeikerLogo}
                alt="Teiker Logo"
                width={800}
                height={600}
                className="w-full"
              />
            </Link>
          </div>

          {/* Tres Guerras */}
          <div className="w-60 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
            <Link
              href="https://www.tresguerras.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={TresGuerrasLogo}
                alt="TresGuerras Logo"
                width={800}
                height={600}
                className="w-full"
              />
            </Link>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
