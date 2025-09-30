import "./globals.css";
import { Inter } from "next/font/google";
import { CalculadoraVisibleProvider } from "@/context/CalculadoraVisibleContext";

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
        <body className={inter.className + " bg-white text-gray-900"}>
          <CalculadoraVisibleProvider>
            <main className="pt-0">{children}</main>
          </CalculadoraVisibleProvider>
        </body>
      </html>
    );
}
