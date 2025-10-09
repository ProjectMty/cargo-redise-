// import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {


    try {

        const { data, error } = await resend.emails.send({
            from: 'Acme <it03@cargomty.com>',
            to: ['it03@cargomty.com'],
            subject: 'Hello from Next.js',
            html: '<h1>Hello from GET function</h1>'
        });

        if(error){
            return Response.json({ error }, {status: 500});
        }

        return Response.json(data);
        
    } catch (error) {
         return Response.json({error}, {status: 500});
    }

}

// export async function POST(req: NextRequest) {
//     try {
//         const body = await req.json();

//         // validacion de datos
//         if (!body.nombre) {
//             return NextResponse.json(
//                 { error: "El campo 'nombre' es obligatorio" },
//                 { status: 400 }
//             );
//         }

//         // respuesta ok
//         return NextResponse.json({
//             recibido: body,
//             mensaje: "Datos Recibidos",
//         });

//     } catch (error) {
//         console.error("FATAL ERROR: /hooks/route.ts", error);
//         return NextResponse.json(
//             { error: "FATAL SERVER ERROR" },
//             { status: 500 }
//         );
//     }
// }