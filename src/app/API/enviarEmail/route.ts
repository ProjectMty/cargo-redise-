import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from '../../../components/Cotizador/plantillaEmail'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {


        const body = await req.json();
        const { nombre, compañia, pdfBase64 } = body;
        const destinatarios = [
            "info@cargomty.com",
            "Nancy@cargomty.com",
            "Montserrat@cargomty.com",
            "issac@cargomty.com"
        ];

        const email = await resend.emails.send({

            from: 'CargoMty <no-reply@cargomty.com>',
            to: destinatarios,
            subject: nombre + " cotizacion",
            react: EmailTemplate({ username: nombre, company: compañia }),
            text: "Adjunto encontrarás el PDF solicitado.",
            attachments: [
                {
                    filename: "Cotizacion.pdf",
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

