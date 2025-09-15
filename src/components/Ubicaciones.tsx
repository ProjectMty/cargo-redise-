"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";

const navigation = [
    { name: "México", href: "/img/ubicacion/Mexico.svg" },
    { name: "USA", href: "/img/ubicacion/Usa.svg" },
    { name: "Canadá", href: "/img/ubicacion/Canada.svg" }

];


export default function Ubicaciones() {
    const [seleccion, setSeleccion] = useState("");
    const [imagen, setImagen] = useState("/img/ubicacion/Mexico.svg");
    let name = "México"

    function changeImage({name} : {name:string}) {
        switch (name) {
            case "México":
                setImagen("/img/ubicacion/Usa.svg")
                break;
            case "USA":
                setImagen("/img/ubicacion/Usa.svg")
                break;
            case "Canadá":
                setImagen("/img/ubicacion/Canada.svg")
                break;
            default:
                setImagen("/img/ubicacion/Usa.svg")
                break;
        }



    }

    return (
        <section id="ubicacion" className=" w-full bg-white relative flex justify-center  py-20 font-[Montserrat]">
            <h1 className="font-extrabold text-[55px] text-blue-950 text-center absolute top-5 ">
                Ubicaciones
            </h1>
            <div className="max-w-4xl rounded-[28px] object-cover mt-5">
                <Image
                    src="/img/ubicacion/fondoUbicacion.png"
                    alt="ubicacion"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-[28px] object-cover"
                    priority
                />

                <div className=" absolute left-1/2 top-60 -translate-x-1/2 -translate-y-[10%]  text-center">


                    <div className="hidden lg:flex items-center space-x-10">
                         {navigation.map((item) => (
                            <a
                                key={item.name}
                                href="#ubicacion"
                                className="relative text-white text-sm font-medium tracking-normal group"
                                
                            >
                                {item.name}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))} 
                          
                    </div>
                    <div className="">

                        <img src={imagen} alt="mapa" className="relative left-1/2 top-1/2 -translate-x-1/2  w-[88vw] max-w-[600px] " />


                    </div>
                </div>


            </div >

        </section >
    )
}