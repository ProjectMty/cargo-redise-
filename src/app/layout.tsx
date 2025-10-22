import "./globals.css";
import { Inter } from "next/font/google";
import { CalculadoraVisibleProvider } from "@/context/CalculadoraVisibleContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cargo Monterrey | Importa fácil",
  description:
    "Tu aliado logístico en importación y envío de mercancía desde USA y China a México",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-969438638"
        />
        <Script id="google-ads-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-969438638');
          `}
        </Script>
      </head>
      <body className={inter.className + "  text-gray-900"}>
        <script>
          {`  gtag('event', 'conversion', {'send_to': 'AW-969438638/7EDlCIb1xYACEK7roc4D'}); `}
        </script>
        <CalculadoraVisibleProvider>
          <main className="pt-0">{children}</main>
        </CalculadoraVisibleProvider>
      </body>
    </html>
  );
}
