// import { NextRequest, NextResponse } from "next/server";
// SIN USO
import { Resend } from "resend";
import EmailTemplate from '../../../components/Cotizador/plantillaEmail'
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {

    try {
        if (!process.env.RESEND_API_KEY) {
            console.error(" Falta RESEND_API_KEY");
            return new Response(JSON.stringify({ error: "Missing API key" }), { status: 500 });
        }

        const { data, error } = await resend.emails.send({
            from: 'RapidMex <no-reply@rapidmex.com>',
            to: ['it03@cargomty.com'],
            subject: 'Cotización Prueba 2',
            react: EmailTemplate({username: "Ailin", company: "CargoMty"})
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);

    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }

}

export async function POST(request: Request) {
  const body = await request.json();
  const { nombre, compañia } = body;

  const { data, error } = await resend.emails.send({
    from: 'RapidMex <no-reply@rapidmex.com>',
    to: ['it03@cargomty.com'],
    subject: `Cotización de ${compañia} prueba 7`,
    react: EmailTemplate({  username:nombre, company:compañia }),
  });

  if (error) return Response.json({ error }, { status: 500 });
  return Response.json({ success: true, data });
}