"use client";

import React from "react";

interface CotizadorProps {
    usuario: string;
  
}
export default function CotizadorPdf({usuario}: CotizadorProps) {



    // useEffect(() => {
    //     const getPdfBase64 = localStorage.getItem("pdfBase64");

    //     if (getPdfBase64) {
    //         setBasePdf(getPdfBase64);
    //         console.log("pdf recuperado con exito")
    //     }
    // }, [base64String])

    // const handleDescargarPDF = async () => {
    //     const getPdfBase64 = localStorage.getItem("pdfBase64");

    //     if (!getPdfBase64) {
    //         alert("No se encontró el PDF en localStorage");
    //         return;
    //     }

    //     const response = await fetch("/API/descargarPdf", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ getPdfBase64 }),
    //     });

    //     if (!response.ok) {
    //         alert("Error al generar PDF");
    //         return;
    //     }

    //     const blob = await response.blob();
    //     const downloadUrl = URL.createObjectURL(blob);
    //     setUrlPdf(downloadUrl);
    //     console.log("PDF generado en link")
    //     // Crear link temporal para descargar
    //     //   const blob = await response.blob();
    //     //   const url = URL.createObjectURL(blob);
    //     //   const a = document.createElement("a");
    //     //   a.href = url;
    //     //   a.download = "cotizacion.pdf";
    //     //   document.body.appendChild(a);
    //     //   a.click();
    //     //   a.remove();
    //     //   URL.revokeObjectURL(url);
    // };
        {/* <button
                    onClick={handleDescargarPDF}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Generar pdf
                </button> */}

    const handleEnviarPDF = async () => {


        let pdfBase64 = localStorage.getItem("pdfBase64"); // o tu variable

        if (!pdfBase64) {
            alert("No hay PDF disponible");
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
        alert(data.message);
    };

    return (
        <div>
            <div className="mt-4">
                <button
                    onClick={handleEnviarPDF}
                    className="rounded-xl px-5 xl:px-2 py-10 font-medium hover:bg-blue-600 hover:text-white
                     bg-blue-400 text-white transition duration-300 text-center w-[100%]"
                >
                    Enviar correo
                </button>

        
            </div>


        </div>

    )
}

