"use client";
import Image from "next/image";
import UpAnimate from "@/animate/UpAnimate";
import AnimatedText from "@/animate/TextAnimate";
import FadeInFromRight from "@/animate/FadeInFromRight";
import "@/app/mexico-a-usa/style/industriasMexUsa.css"

const industrias = [
  {
    id: 1,
    title: "Vendedores que buscan expandir o vender su marca en Amazon USA",
    image: "/img/mexausa/industrias/Div1.png",
  },
  {
    id: 2,
    title: "Fabricantes que necesitan enviar productos vendidos a sus clientes en USA",
    image: "/img/mexausa/industrias/Div2.png",
  },
  {
    id: 3,
    title: "Fabricantes que necesitan enviar muestras",
    image: "/img/mexausa/industrias/Div3.png",
  },
  {
    id: 4,
    title: "Personas físicas que buscan enviar paquetería a cualquier parte de USA",
    image: "/img/mexausa/industrias/Div4.png",
  },
];

export default function Industrias() {
  return (
    <section className="section-industria-mu" id="industriaUSA">
      {/* --------- Banda superior --------- */}
      <div className="contenedor-fondo-industria-mu">
        <Image
          src="/img/mexausa/industrias/FinalBg.png"
          alt="Fondo industrias"
          fill
          className="object-cover opacity-80"
        />
        <div className="contenedor-titulo-industria-mu">
          <AnimatedText delay={0.2} lines={[
            <h2 key={1} className="titulo-industria-mu">
              Tipos de Industrias
            </h2>
          ]}>

          </AnimatedText>

        </div>
      </div>

      {/* --------- Tarjetas --------- */}
      <div className="contenedor-tarjetas-industria-mu">

        {industrias.map((item) => (
          <UpAnimate key={item.id} move={-10}>
            <div
              key={item.id}
              className="contenedor-tarjeta-industria-mu"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={260}
                className="img-tarjeta-industria-mu"
              />
              <p className="texto-tarjeta-industria-mu">
                {item.title}
              </p>
            </div>
          </UpAnimate>

        ))}

      </div>

      {/* --------- Texto inferior --------- */}
      <div className="contenedor-inferior-mu">

        <div className="contenedor-inferior-industria-mu">
          {/* Div parte abajo */}
          <div>
            <AnimatedText delay={0.2} lines={[
              <h3 key={1} className="titulo-inferior-industria-mu">
                ¡No limites tus clientes a tu área geográfica!
              </h3>
            ]}>

            </AnimatedText>

            <p className="texto-inferior-industria-mu">
              Tu mercancía viaja con un seguro que protege tu mercancía al 100%
              contra robo, daño y extravío. Entendemos tu utilidad está en la
              velocidad en la cual tu producto llega a tu cliente.
            </p>
            <p className=" texto-inferior-industria-mu ">
              Cuenta con Cargo Monterrey para entregar tu mercancía a tu cliente
              en Estados Unidos en menos de 10 días hábiles.
            </p>
          </div>
          {/* Imagen */}
          <FadeInFromRight delay={0.6}>
            <div className="flex justify-center">
              <Image
                src="/img/mexausa/industrias/Imagen 1.png"
                alt="Mapa industrias"
                width={400}
                height={300}
                className="rounded-[20px] shadow-lg object-cover"
              />
            </div>
          </FadeInFromRight>


        </div>

      </div>
    </section>
  );
}
