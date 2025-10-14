import { Body, Container, Head, Heading, Html, Img, Preview, Section, Tailwind, Text } from '@react-email/components';


interface WelcomeEmailProps {
    username?: string;
    company?: string;
}

const EmailTemplate = ({
    username = 'Nicole',
    company = 'Helix',
}: WelcomeEmailProps) => {
    const previewText = `Nueva cotizacion de ${company}, para ${username}!`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-blue-800 m-auto font-sans">
                    <Container className="mb-10 mx-auto p-5 max-w-[465px]">
                        <Section className="mt-10">
                            <Img
                                src="https://cargomty.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-cargomty.ad406cb4.webp&w=3840&q=75"
                                width="60"
                                height="60"
                                alt="Fondo"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-2xl text-white font-normal text-center p-0 my-8 mx-0">
                            Cotizacion para <strong>{username}</strong>.
                        </Heading>
                        <Text className="text-start text-sm text-white">
                            Hola, pdf de cotizacion adjunto
                        </Text>

                    
                        <Text className="text-start text-sm text-white">
                            Saludos,
                            <br />
                            The {company} Team web
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default EmailTemplate;

