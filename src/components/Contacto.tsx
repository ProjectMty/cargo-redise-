"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contacto() {

    return (
        <section id="contacto" className=" z-0 relative w-full flex
        justify-center items-center py-5 bg-gradient-to-r from-blue-400 to to-blue-900 font-[Montserrat] scroll-smooth">

            <div className="relative w-full z-10">
                <h1 className="font-extrabold text-[40px] lg:text-[55px] text-white text-center relative  mt-5">
                    Contáctanos
                </h1>
                {/* inicio de formulario */}
                <div className="bg-blue-800 z-20 mt-10 mb-40 translate-x-1/6 lg:translate-x-1/4 w-9/12 lg:w-2/3 h-1/2 grid lg:grid-cols-2 gap-7 rounded-3xl">
                    {/* contenedor izquierdo */}
                    <div className="">
                        <h2 className="mt-6 text-center font-bold text-lg lg:text-2xl">¡Empieza a importar ya!</h2>

                        {/* inicio de lista  */}
                        {/* Ubicacion  */}
                        <div className="px-5 grid grid-cols-4 mt-6">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-sky-400 text-white flex items-center justify-center font-bold mt-8 lg:mt-6 text-xl -translate-x-3 lg:translate-x-8">
                                1
                            </div>
                            <h2 className="text-xs lg:text-sm mt-6 -ml-2.5 col-span-3">Lazaro Cardenas 999 Local 2, Col las Brisas, 74190, Monterrey, Nuevo León</h2>
                        </div>
                        {/* telefono  */}
                        <div className="px-5 grid grid-cols-4 mt-4">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-sky-400 text-white flex items-center justify-center font-bold mt-4 text-xl -translate-x-3 lg:translate-x-8">
                                2
                            </div>
                            <h2 className="text-xs lg:text-sm mt-6 -ml-2.5 col-span-3">+52 81 2030 3977</h2>
                        </div>

                        {/* Whatsapp  */}
                        <div className="px-5 grid grid-cols-4 mt-4">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-sky-400 text-white flex items-center justify-center font-bold mt-6 lg:mt-4 text-xl -translate-x-3 lg:translate-x-8">
                                3
                            </div>
                            <div className="col-span-3">
                                <div className="grid text-sm mt-2 -ml-2.5 ">
                                    <h2 className="">+52 81 0000 0000</h2>
                                    <h2 className="">+52 81 1111 1111</h2>
                                    <h2 className="">+52 81 2222 2222</h2>
                                </div>
                            </div>

                        </div>

                        {/* gmail  */}
                        <div className="px-5 grid grid-cols-4 mt-4 ">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-sky-400 text-white flex items-center justify-center font-bold mt-5 lg:mt-4 text-xl -translate-x-3 lg:translate-x-8">
                                4
                            </div>
                            <h2 className="text-sm mt-6 -ml-2.5 col-span-3">correo@gmail.com</h2>
                        </div>


                    </div>

                    {/* contenedor derecho */}
                    <div className="bg-blue-700 relative items-center w-full h-full text-sm rounded-3xl">
                        <form action="/action.php" className="w-full mt-3 px-6">


                            <label htmlFor="ContactName">Nombre: </label>
                            <input type="text" name="name" id="ContactName" className="bg-white w-full mt-2 mb-3 h-7 rounded-md" />

                            <label htmlFor="ContactPhone">Teléfono: </label>
                            <input type="text" name="phone" id="ContactPhone" className="bg-white w-full mt-2 mb-3 h-7 rounded-md" />

                            <label htmlFor="ContactEmail">Correo: </label>
                            <input type="text" name="email" id="ContactEmail" className="bg-white w-full mt-2 mb-3 h-7 rounded-md" />

                            <label htmlFor="ContactAsunto">Asunto: </label>

                            <textarea name="email" id="ContactAsunto" rows={4} cols={50} className="bg-white w-full mt-2 mb-3 rounded-md" >

                            </textarea>
                            <div className="bg-blue-400 rounded-xl text-center w-1/2 h-10 font-bold translate-x-1/2 mb-5 hover:bg-blue-800 transition">
                                <input type="submit" value={"Enviar"} className="mt-3 " />
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    )
}