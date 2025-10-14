"use client"
import React from "react";
import { useEffect } from "react";
import PDF from "./estiloPdf";
import { pdf } from "@react-pdf/renderer";


interface Props {
    tipoSeleccionado: string;
    valor: number | "";
    peso: number | "";
    largo: number | "";
    ancho: number | "";
    alto: number | "";
    cantidad: number | "";
    repetitivo: boolean;
    nombre: string;
    telefono: string;
    correo: string;
    asunto: string;
    costoIVA: number | "";
}

const DatosEnvio: React.FC<Props> =  ({

        tipoSeleccionado,
        valor,
        peso,
        largo,
        ancho,
        alto,
        cantidad,
        repetitivo,
        nombre,
        telefono,
        correo,
        asunto,
        costoIVA,
    }) => {
  useEffect(() => {
    const generateBase64 = async () => {
        console.log("GENERANDO PDF");
      try {
        const blob = await pdf(
          <PDF
            tipoSeleccionado={tipoSeleccionado}
            valor={valor}
            peso={peso}
            largo={largo}
            ancho={ancho}
            alto={alto}
            cantidad={cantidad}
            repetitivo={repetitivo}
            nombre={nombre}
            telefono={telefono}
            correo={correo}
            asunto={asunto}
            costoIVA={costoIVA}
          />
        ).toBlob();

        // Convertir a Base64
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result as string;
          localStorage.setItem("pdfBase64", base64data);
          console.log(" PDF guardado en localStorage");
        };
      } catch (error) {
        console.error(" Error al generar PDF:", error);
      }
    };

    generateBase64();
  }, [
    tipoSeleccionado,
    valor,
    peso,
    largo,
    ancho,
    alto,
    cantidad,
    repetitivo,
    nombre,
    telefono,
    correo,
    asunto,
    costoIVA,
  ]);


  return <></>;
};

export default DatosEnvio;