import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#F2F2F2]">
       
        {children}
      </body>
    </html>
  );
}
