"use client";
import Swal from 'sweetalert2'
import React from "react";
import "@/style/Calculadora.css";
interface CotizadorProps {
    usuario: string;
  
}
export default function CotizadorPdf({usuario}: CotizadorProps) {


    const handleEnviarPDF = async () => {


        let pdfBase64 = localStorage.getItem("pdfBase64"); // o tu variable

        if (!pdfBase64) {
               Swal.fire({
                            title: "ERROR",
                            text: "no hay pdf disponible",
                            icon: "error"
                        });
            return;
        }
        pdfBase64 = pdfBase64.includes(",") ? pdfBase64.split(",")[1] : pdfBase64;

        const body = {
            nombre: usuario,
            compañia: "CargoMty",
            pdfBase64: pdfBase64
        };
        // Enviar al backend
        const response = await fetch("/API/enviarEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

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
            <div className="grid grid-cols-1 lg:grid-cols-4 items-center ">
                <button
                    onClick={handleEnviarPDF}
                    className="button col-span-4"
                >
                    Enviar correo
                </button>

        
            </div>


        </div>

    )
}

