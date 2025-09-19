import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#F2F2F2]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
