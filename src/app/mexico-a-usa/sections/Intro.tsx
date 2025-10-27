"use client";
import Image from "next/image";
import TextDownAnimate from "@/animate/TextDownAnimate";
import DivZoom from "@/animate/DivZoom";
import "@/app/mexico-a-usa/style/introMexUsa.css"

export default function Intro() {
  return (
    <section className="section-intro-mu" id="intro">
      {/* Título en dos renglones */}
      <div className="contenedor-titulo-intro-mu">
     <TextDownAnimate delay={0.6} lines={[
        <h2 key={1} className="titulo-intro-mu">
          ¡Vende en <span className="text-[#1D4ED8]">Amazon USA</span>
          <br />
          <span className="font-bold text-[var(--primary-blue)]">
            o directamente <span className="font-extrabold text-[#1D4ED8]">a clientes</span>!
          </span>
        </h2>
]

}>
      </TextDownAnimate>
         </div>

      {/* Contenido */}
      <div className="contenedor-inf-intro-mu">
       
          {/* IMAGEN (sin recuadro blanco) */}
          <DivZoom scale={1.08}>
          <div className="contenedor-izq-intro-mu ">
            <Image
              src="/img/mexausa/intro.png" 
              alt="Bultos listos para envío"
              width={608}
              height={476}
              priority
              className="img-izq-intro-mu"
            />
          </div>
            </DivZoom>
          {/* TARJETA: debajo de la imagen y verticalmente centrada */}
          <div className="contenedor-inf-der-intro-mu ">
          
              <p className="texto-der-intro-mu">
                <span className="font-semibold md:text-[20px]">Tú vendes,</span> nosotros nos encargamos de
                toda la logística.
              </p>

              <p className="texto-der-intro-mu">
                <span className="font-semibold">Cargo Monterrey</span> es un freight forwarder
                internacional que ayuda a vendedores y proveedores Mexicanos a enviar sus
                productos a Estados Unidos.
              </p>

              <p className="texto-der-intro-mu">
                Más que una paquetería de México a Estados Unidos, somos tu{" "}
                <span className="font-semibold md:text-[20px]">aliado comercial</span> para que puedas
                expandir tu negocio en USA.
              </p>
            
          </div>
        
      </div>
    </section>
  );
}
