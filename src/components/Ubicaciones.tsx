"use client";

import Image from "next/image";
import { useState } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import "@/style/Ubicacion.css";

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

    const [currentMap, setCurrentMap] = useState(navigation[0]);


    const [fade, setFade] = useState(false);
    // const [mobileNav, setMobileNav] = useState(false);

    function handleStyle(id:string){

        if(id === "NL"){
            return "img-nl estado-resaltado"
        } else if(id === "LAREDO"){
            return "img-laredo estado-resaltado"
        } else if(id === "CDMX"){
            return "img-cdmx estado-resaltado"
        }

        if(id === "TEXAS"){
            return "img-texas estado-resaltado"
        } else if(id === "NY"){
            return "img-ny estado-resaltado"
        }

        if(id === "catharines"){
            return "img-catharines estado-resaltado"
        }
        
    }
 
    return (
        <section id="ubicacion" className="fondo-seccion bg-white">
            
            <h1 className="titulo-texto">
                Ubicaciones
            </h1>
            
            <div className="contenedor overflow-visible group">

                <Image
                    src="/img/ubicacion/fondoUbicacion.png"
                    alt="ubicacion"
                    width={1200}
                    height={600}
                    className="fondo-ubicacion pointer-events-none z-0"
                    priority
                />

                {/* Mapa de paises */}

                <div className="contenedor-carrusel">
                    {/* Carrusel en móvil */}
                    <div className="carrusel-movil">
                        <Swiper
                            modules={[Autoplay,Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            autoplay={{ delay: 3000}}
                            loop={true}
                            className=" w-[70%] h-[70%] top-9"
                        >
                            {navigation.map((img) => (
                                <SwiperSlide key={img.name}>
                                    <Image
                                        src={img.href}
                                        alt={img.name}
                                        width={300}
                                        height={200}
                                        className=" object-cover rounded-lg"
                                        style={{userSelect: "none"}}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* estados resaltados */}
                    <div className=" justify-center relative -left-1/3 ">
                        
                        {currentMap?.sucursales?.map((estado, i) => (
                            <div key={i} 
                            onMouseEnter={() => setFade(true)}
                            onMouseLeave={() => setFade(false)}
                                    >
                                 <Image
                                
                                src={estado.src}
                                alt={`Sucursal ${i + 1}`}
                                width={350}
                                height={350}
                                className={handleStyle(estado.id)}
                                style={{userSelect: "none"}}
                            />
                            </div>
                           
                        ))}
                        

                    </div>
                    {/* Carrusel en Desktop */}
                    <div className="carrusel-desktop">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplay={{ delay: 300000 }}
                           
                            loop={true}
                            onSlideChange={(swiper) => {
                                setCurrentMap(navigation[swiper.realIndex]);
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
                                        className={fade ? "opacity-30 duration-300 w-full h-[400px]" : 
                                            "opacity-100 transition-opacity ease-in-out will-change-transform duration-500 w-full h-[400px]"}
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