import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from '../../../components/Cotizador/emailDatosContacto'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {


        const body = await req.json();
        const { nombre, telefono, correo, asunto } = body;

        const email = await resend.emails.send({

            from: 'RapidMex <no-reply@rapidmex.com>',
            to: ['it03@cargomty.com'],
            subject: nombre + " Datos para contacto",
            react: EmailTemplate({ nombre: nombre, telefono: telefono, correo: correo, asunto: asunto }),
           
        });
        return NextResponse.json({ message: "Correo enviado correctamente", email });
    } catch (error) {
        console.error("Error enviando correo", error);
        return NextResponse.json({ message: "FATAL ERROR ENVIANDO CORREO" }, { status: 500 })
    }
}

