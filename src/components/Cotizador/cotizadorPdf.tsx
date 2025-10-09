"use client";

import { useEffect, useState } from "react";
import PDF from "./estiloPdf";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";

export default function CotizadorPdf() {

    const [base64String, SetBase64String] = useState<string | null>(null);

    const [basePdf, setBasePdf] = useState<string | null>(null);

    useEffect(() => {
        const generateBase64 = async () => {
            const blob = await pdf(<PDF />).toBlob();

            // Convertir a Base64
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result as string;
                SetBase64String(base64data);

                localStorage.setItem("pdfBase64", base64data)
                console.log("pdf en localstorage")
            };
        }

        generateBase64();
        // localStorage.setItem('key', 'keyPdf');
    }, []);

    useEffect(() => {
        const getPdfBase64 = localStorage.getItem("pdfBase64");

        if (getPdfBase64) {
            setBasePdf(getPdfBase64);
            console.log("pdf recuperado con exito")
        }
    }, [base64String])



    return (
        <div>
            <PDFDownloadLink document={<PDF />} fileName="Cotizacion-PDF">
                {({ loading }) =>
                    loading ? (
                        <button>Loading document ...</button>
                    ) : (
                        <button>Download now!</button>
                    )
                }

            </PDFDownloadLink>

            <a href={basePdf || undefined} download="pdf-desde-localStorage" className="mt-10"> DESCARGAR DE LOCALSTORAGE</a>
        </div>

    )
}