"use client";
import Swal from 'sweetalert2'
import React from "react";

interface CotizadorProps {
    nombre?: string;
    telefono?: string;
    correo?: string;
    asunto?: string;

}
export default function EnvioDatos({ nombre, telefono, correo, asunto }: CotizadorProps) {


    const handleEnviarDatos = async () => {


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

    };

    return (
        <div>
            <div className="flex hover:bg-white hover:text-[#0b4ba2] rounded-xl text-center 
                            justify-center w-full h-20 font-bold text-[25px]
                             bg-[#0b4ba2] text-white transition duration-300">
                <button
                    onClick={handleEnviarDatos}

                >
                    Enviar Datos
                </button>


            </div>


        </div>

    )
}

