"use client";

import Image from "next/image";
import {use, useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import "@/style/Ubicacion.css";
import DivZoom from "@/animate/DivZoom";

const navigation = [
    {
        name: "México",
        href: "/img/ubicacion/Mexico-fondo.svg",
        sucursales: [
            {id:"NL",
            src: "/img/ubicacion/estados/NLEON.svg"},
            {id: "LAREDO",
            src:"/img/ubicacion/estados/LAREDO.svg"
            },
            {id:"CDMX",
                src: "/img/ubicacion/estados/CDMX.svg"
            }
            ]
    },
    {
        name: "USA", href: "/img/ubicacion/Usa-fondo.svg",
        sucursales: [
            {id: "TEXAS",
            src:"/img/ubicacion/estados/TX.svg"},
            {id:"NY",
            src:"/img/ubicacion/estados/NY.svg"}
            ]
    },
    {
        name: "Canadá", href: "/img/ubicacion/Canada-fondo.svg",
        sucursales: [{id:"catharines",
            src:"/img/ubicacion/estados/Catharines.svg"}]
    }
];



export default function Ubicaciones() {
    const [seleccion, setSeleccion] = useState("México");
    const [currentMap, setCurrentMap] = useState(navigation[0]);

    const [imagen, setImagen] = useState("/img/ubicacion/Mexico-fondo.svg");
    const [fade, setFade] = useState(true);
    // const [mobileNav, setMobileNav] = useState(false);

    function changeSeleccion(name: string) {
        switch (name) {
            case "México":
                setImagen("/img/ubicacion/Mexico-fondo.svg")
                setSeleccion("México")

                break;
            case "USA":
                setImagen("/img/ubicacion/USA-fondo.svg")
                setSeleccion("USA")
                break;
            case "Canadá":
                setImagen("/img/ubicacion/Canada-fondo.svg")
                setSeleccion("Canadá")
                break;
            default:
                setImagen("/img/ubicacion/Mexico-fondo.svg")
                setSeleccion("México")
                break;
        }


    }

    function handleStyle(id:string){

        if(id === "NL"){
            return "img-nl"
        } else if(id === "LAREDO"){
            return "img-laredo"
        } else if(id === "CDMX"){
            return "img-cdmx"
        }

        if(id === "TEXAS"){
            return "img-texas"
        } else if(id === "NY"){
            return "img-ny"
        }

        if(id === "catharines"){
            return "img-catharines"
        }
        
    }
 

    return (
        <section id="ubicacion" className="fondo-seccion">
            
            <h1 className="titulo">
                Ubicaciones
            </h1>
            
            <div className="contenedor overflow-visible">

                <Image
                    src="/img/ubicacion/fondoUbicacion.png"
                    alt="ubicacion"
                    width={1200}
                    height={600}
                    // className="fondo-ubicacion"
                    priority
                />

                {/* Mapa de paises */}

                <div className="contenedor-carrusel">
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
                                    <Image
                                        src={img.href}
                                        alt={`slide-${img.href}`}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* estados resaltados */}
                    <div className="absolute mt-4 justify-center">
                        
                        {currentMap?.sucursales?.map((estado, i) => (
                            <DivZoom key={`${currentMap.name}-${estado.id}`} scale={1.05}>
                                 <Image
                                
                                src={estado.src}
                                alt={`Sucursal ${i + 1}`}
                                width={350}
                                height={350}
                                className={handleStyle(estado.id)}
                            />
                            </DivZoom>
                           
                        ))}
                        

                    </div>
                    {/* Carrusel en Desktop */}
                    <div className="carrusel-desktop">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplay={{ delay: 3000000 }}
                            pagination={{ clickable: true }}
                            onSlideChange={(swiper) => {
                                setCurrentMap(navigation[swiper.activeIndex]);
                            }}
                            className="rounded-xl overflow-hidden"
                        >
                            {navigation.map((img) => (
                                <SwiperSlide key={img.name}>
                                    <Image
                                        src={img.href}
                                        alt={img.name}
                                        width={300}
                                        height={300}
                                        className="w-full h-[400px] opacity-30"
                                    />
                                </SwiperSlide>


                            ))}
                        </Swiper>


                    </div>


                </div>


            </div >

        </section >
    )
}