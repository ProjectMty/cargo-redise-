import { Head, Body, Container, Heading, Html, Img, Preview, Section, Tailwind, Text } from '@react-email/components';

interface EmailProps {
    nombre?: string;
    telefono?: string;
    correo?: string;

    valor?: number;
    tipo?: string;
    largo?: number;
    ancho?: number;
    alto?: number;
}

const EmailTemplate = ({
    nombre = 'usuario',
    telefono = '123 456 7890',
    correo = 'asunto@gmail.com',
    valor = 0,
    tipo = 'envio',
    largo = 0,
    ancho = 0,
    alto = 0

}: EmailProps) => {
    const previewText = `Datos de contacto para cotizacion, de ${nombre}!`;


    return (
        <Html>
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Head></Head>
                <Body className="bg-[#f5f7fa] text-[#1a1a1a] font-sans py-10">
                    <Container className="bg-white shadow-lg rounded-2xl mx-auto mt-10 mb-10 p-8 max-w-[520px] border border-gray-200">
                        {/* logo */}
                        <Section className=" text-center mb-6">
                            <Img
                                src="https://cargomonterrey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-cargomty.126063b2.webp&w=3840&q=75"
                                width="200"
                                height="60"
                                alt="Cargo logo"
                                className="my-0 mx-auto"
                            />
                        </Section>

                        <Heading className="text-xl font-bold text-center text-[#0f172a] my-8">
                            Datos de contacto para <span className='text-blue-800'>{nombre}</span>.
                        </Heading>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Te compartimos los datos de contacto para una cotización personalizada, mediante{" "}
                            <span className="font-bold text-blue-900">cargomty.com</span>.

                        </Text>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Nombre:{" "}
                            <span className="font-bold text-blue-900">{nombre}</span>.
                        </Text>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Teléfono:{" "}
                            <span className="font-bold text-blue-900">{telefono}</span>.

                        </Text>

                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Correo:{" "}
                            <span className="font-bold text-blue-900">{correo}</span>.

                        </Text>

                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Valor:{" "}
                            <span className="font-bold text-blue-900">{valor} usd</span>.

                        </Text>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Tipo de envío:{" "}
                            <span className="font-bold text-blue-900">{tipo}</span>.

                        </Text>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Largo X Ancho X Alto:{" "}
                            <span className="font-bold text-blue-900">
                                {largo}cm X {ancho}cm X {alto}cm
                                </span>.

                        </Text>
                       
                        {/* Footer */}
                        <Text className="text-sm text-gray-500 text-center">
                            Saludos cordiales,
                            <br />
                            <span className="font-semibold text-blue-800">El equipo de CargoMty Web</span>
                        </Text>

                        <Text className="text-xs text-gray-400 text-center mt-4">
                            © {new Date().getFullYear()} CargoMty. Todos los derechos reservados.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default EmailTemplate;

