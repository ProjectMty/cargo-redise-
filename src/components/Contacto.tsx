"use client";
import { FaWhatsapp, FaPhoneAlt, FaMapMarked } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import "@/style/contacto.css";
import AnimatedText from "@/animate/TextAnimate";
import { useState } from "react";
import Swal from 'sweetalert2'

export default function Contacto() {
    const [nombre, SetNombre] = useState("");
    const [telefono, SetTelefono] = useState("");
    const [correo, SetCorreo] = useState("");
    const [asunto, SetAsunto] = useState("");

    const handleChangeTelefono = (e: React.ChangeEvent<HTMLInputElement>) => {
        // eliminar todo lo que no sea número
        let numeros = e.target.value.replace(/\D/g, "").slice(0, 10);


        if (numeros.length > 6) {
            numeros = `(${numeros.slice(0, 3)}) ${numeros.slice(3, 6)}-${numeros.slice(6)}`;
        } else if (numeros.length > 3) {
            numeros = `(${numeros.slice(0, 3)}) ${numeros.slice(3)}`;
        } else if (numeros.length > 0) {
            numeros = `(${numeros}`;
        }

        SetTelefono(numeros);

    };

    const handleEnvioDatos = async () => {


        const body = {
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            asunto: asunto
        };
        console.log(body)
        // Enviar al backend
        const response = await fetch("/API/enviarDatos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        console.log("correo enviado")
        const data = await response.json();

        Swal.fire({
            title: "Correo enviado",
            text: data.message,
            icon: "success",
            timer: 3000
        });
        SetNombre("");
        SetTelefono("");
        SetCorreo("");
        SetAsunto("");

    };



    return (
        <section id="contacto" className="">
            <div className="section-contactanos">
                <div className="relative w-full z-10 ">
                    <AnimatedText delay={0.2} lines={[
                        <h1 key={1} className="titulo-contatanos">
                            Contáctanos
                        </h1>
                    ]}></AnimatedText>

                    {/* inicio de formulario */}
                    <div className="contenedor-formulario">
                        {/* contenedor izquierdo */}
                        <div className="contenedor-izq">
                            <h2 className="titulo-izq">¡Empieza a importar ya!</h2>

                            {/* inicio de lista  */}
                            {/* Ubicacion  */}
                            <div className="conteneodr-inf">
                                <div className="contenedor-icon">
                                    <FaMapMarked className="icon"></FaMapMarked>
                                </div>
                                <a href="https://goo.gl/maps/efSbnm7sufjc6sjG9" className="informacion">
                                    Av Lázaro Cárdenas 999 Local 2, Col. Las Brisas, 64780 Monterrey, Nuevo León
                                </a>
                            </div>
                            {/* telefono  */}
                            <div className="conteneodr-inf">
                                <div className="contenedor-icon">
                                    <FaPhoneAlt className="icon"></FaPhoneAlt>

                                </div>
                                <a href="https://cargomty.com/tel:+528120903977" className="informacion">+52 81 2090 3977</a>
                            </div>

                            {/* Whatsapp  */}
                            <div className="conteneodr-inf">
                                <div className="contenedor-icon">
                                    <FaWhatsapp className="icon"></FaWhatsapp>
                                </div>
                                <div className="col-span-3">
                                    <div className="contenedor-numeros">
                                        <a href="https://wa.me/528116691037" className="hover:underline">+52 81 1669 1037</a>
                                        <a href="https://wa.me/528181766691" className="hover:underline">+52 81 8176 6691</a>
                                        <a href="https://wa.me/528114123816" className="hover:underline">+52 81 1412 3816</a>
                                    </div>
                                </div>

                            </div>

                            {/* gmail  */}
                            <div className="conteneodr-inf">
                                <div className="contenedor-icon">
                                    <GoMail className="icon"></GoMail>
                                </div>
                                <a href="mailto:info@cargomty.com" className="informacion">info@cargomty.com</a>
                            </div>


                        </div>

                        {/* contenedor derecho */}
                        <div className="contenedor-der">
                            <div className="contenedor-forms">


                                <label htmlFor="ContactName">Nombre: </label>
                                <input type="text" name="name" id="ContactName" className="contenedor-input"
                                    value={nombre}
                                    placeholder="nombre"
                                    onChange={(e) => SetNombre(e.target.value)} />

                                <label htmlFor="ContactPhone">Teléfono: </label>
                                <input type="text" name="phone" id="ContactPhone" className="contenedor-input"
                                    value={telefono}
                                    placeholder="(123) 456-7890"
                                    onChange={handleChangeTelefono} />

                                <label htmlFor="ContactEmail">Correo: </label>
                                <input type="text" name="email" id="ContactEmail" className="contenedor-input"
                                    value={correo}
                                    placeholder="ejemplo@correo.com"
                                    onChange={(e) => SetCorreo(e.target.value)} />

                                <label htmlFor="ContactAsunto">Asunto: </label>

                                <textarea name="asunto" id="ContactAsunto" rows={4} cols={50} className="contenedor-input-asunto"
                                    value={asunto}
                                    placeholder="datos adicionales"
                                    onChange={(e) => SetAsunto(e.target.value)} >

                                </textarea>

                                <button className="flex hover:bg-white hover:text-[#0b4ba2] rounded-xl text-center 
                                    justify-center items-center w-full h-20 font-bold text-[25px]
                                    bg-[#0b4ba2] text-white transition duration-300" onClick={handleEnvioDatos}>
                                    Enviar Datos
                                </button>



                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}