import {Head, Body, Container, Heading, Html, Img, Preview, Section, Tailwind, Text } from '@react-email/components';

interface WelcomeEmailProps {
    username?: string;
    company?: string;
}

const EmailTemplate = ({
    username = 'User',
    company = 'Cargo',
}: WelcomeEmailProps) => {
    const previewText = `Nueva cotizacion de ${company}, para ${username}!`;


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
                            Cotizacion para <span className='text-blue-800'>{username}</span>.
                        </Heading>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Te compartimos la cotización solicitada, elaborada mediante{" "}
                            <span className="font-bold text-blue-900">cargomty.com</span>.
                            Encontrarás los detalles adjuntos en el documento PDF.

                        </Text>

                  

                        {/* Footer */}
                        <Text className="text-sm text-gray-500 text-center">
                            Saludos cordiales,
                            <br />
                            <span className="font-semibold text-blue-800">El equipo de {company} Web</span>
                        </Text>

                        <Text className="text-xs text-gray-400 text-center mt-4">
                            © {new Date().getFullYear()} {company}. Todos los derechos reservados.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default EmailTemplate;

