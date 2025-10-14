import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from '../../../components/Cotizador/plantillaEmail'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {


        const body = await req.json();
        const { nombre, compañia, pdfBase64 } = body;

        const email = await resend.emails.send({

            from: 'RapidMex <no-reply@rapidmex.com>',
            to: ['it03@cargomty.com'],
            subject: "Aquí tienes tu PDF Prueba 4 ",
            react: EmailTemplate({ username: nombre, company: compañia }),
            text: "Adjunto encontrarás el PDF solicitado.",
            attachments: [
                {
                    filename: "archivo.pdf",
                    content: pdfBase64,
                },
            ],
        });
        return NextResponse.json({ message: "Correo enviado correctamente", email });
    } catch (error) {
        console.error("Error enviando correo", error);
        return NextResponse.json({ message: "FATAL ERROR ENVIANDO CORREO" }, { status: 500 })
    }
}

