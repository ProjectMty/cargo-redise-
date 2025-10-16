import { NextResponse } from "next/server";
import fs from "fs/promises"

export async function GET() {
    return new Response("retorna folio", { status: 400 });
}

export async function POST(req: Request) {
    try {

        const { getPdfBase64 } = await req.json();
        if (!getPdfBase64) throw new Error("No se recibió base64PDF");

        const base64String = getPdfBase64.split(",")[1]; // tomar solo la parte Base64
        const uint8 = Uint8Array.from(atob(base64String), c => c.charCodeAt(0));

        return new Response(uint8, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=cotizacion.pdf",
            },
        });

    } catch (error) {
        console.error("Error en POST /api/descargar-pdf:", error);
        return new Response("Error al generar PDF", { status: 500 });
    }

    return new Response("suma folio", { status: 400 });

}