"use client";

import Image from "next/image";
import { useState } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const navigation = [
    { name: "México", href: "/img/ubicacion/Mexico.svg" },
    { name: "USA", href: "/img/ubicacion/Usa.svg" },
    { name: "Canadá", href: "/img/ubicacion/Canada.svg" }
];


export default function Ubicaciones() {
    const [seleccion, setSeleccion] = useState("México");
    const [imagen, setImagen] = useState("/img/ubicacion/Mexico.svg");
    const [fade, setFade] = useState(true);
    // const [mobileNav, setMobileNav] = useState(false);

    function changeSeleccion(name: string) {
        switch (name) {
            case "México":
                setImagen("/img/ubicacion/Mexico.svg")
                setSeleccion("México")

                break;
            case "USA":
                setImagen("/img/ubicacion/Usa.svg")
                setSeleccion("USA")
                break;
            case "Canadá":
                setImagen("/img/ubicacion/Canada.svg")
                setSeleccion("Canadá")
                break;
            default:
                setImagen("/img/ubicacion/Mexico.svg")
                setSeleccion("México")
                break;
        }


    }
    function changeImagen(name: string) {
        setFade(false);

        setTimeout(() => {
            changeSeleccion(name);
            setFade(true);
        }, 200);
    }


    return (
        <section id="ubicacion" className=" w-full bg-white relative flex justify-center  py-20 font-[Montserrat] scroll-smooth">
            <h1 className="font-extrabold text-[40px] lg:text-[55px] text-blue-950 text-center absolute top-5 ">
                Ubicaciones
            </h1>
            <div className="max-w-4xl rounded-[28px] object-cover mt-5 ">
                <Image
                    src="/img/ubicacion/fondoUbicacion.png"
                    alt="ubicacion"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-[28px] object-cover"
                    priority
                />
                {/* Navbar de paises */}
                <div className="absolute left-1/2 top-36 -translate-x-1/2 items-center">
                    <div className="hidden justify-center lg:flex space-x-10 ">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                id={item.name}
                                className="px-2 py-1  text-white text-2xl tracking-normal group transition-all duration-300 "
                                onClick={() => changeImagen(item.name)}
                            >
                                {item.name === seleccion ? (
                                    <p className="relative font-extrabold  ">
                                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                                        {item.name}</p>
                                ) : <p className=" relative font-medium ">
                                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />

                                    {item.name}

                                </p>}


                            </a>
                        ))}

                    </div>
                </div>
                {/* Mapa de paises */}

                <div className="absolute left-1/2 top-28 lg:top-52 -translate-x-1/2 items-center">
                    {/* Carrusel en móvil */}
                    <div className="relative max-h-[200px] lg:hidden overflow-hidden w-xs">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            className="w-full h-full"
                        >
                            {navigation.map((img) => (
                                <SwiperSlide key={img.name}>
                                    <img
                                        src={img.href}
                                        alt={`slide-${img.href}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Desktop con navbar */}
                    <div className="hidden lg:block relative max-h-[200px] lg:max-h-[500px] overflow-hidden w-xs lg:w-lg ">
                        <img src={imagen} alt="mapa" className={`w-full h-full object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                </div>


            </div >

        </section >
    )
}