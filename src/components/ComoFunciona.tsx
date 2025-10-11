"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import "@/style/ComoFunciona.css";
import AnimatedText from "@/animate/TextAnimate";

// #region animation
const ContainerSteps = {
  hidden: {},
  show: {

    transition: {
      staggerChildren: 0.5
    },
  },
};

const StepsAnimationUp = {
  hidden: { y: 40 },
  show: {

    y: 0,
    transition: {
      duration: 1,
      ease: easeOut,
    },
  },
};

const StepsAnimationDown = {
  hidden: { opacity: 1, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeOut,
    },
  },
};
// #endregion

export default function ComoFunciona() {
  const isMobile = useIsMobile();



  return (
    <motion.section
      id="comofunciona"
      className="section"
      variants={ContainerSteps}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >

      <div className="div-titulo">
        {/* Título */}
        <h2 className="title">
          <AnimatedText
            delay={0.2}
            lines={["Solo tienes que seguir estos sencillos pasos"]}
          >
          </AnimatedText>

        </h2>
      </div>
      {/* Contenedor principal con fondo blanco */}
      <div className="contenedor-principal">
        <div className="cuadrado-arriba"></div>
        <div className="linea-Vertical mt-16"></div>
        {/* Grid de pasos */}
        <div className="grid-pasos mt-36">


          {/* Paso 1 izquierda*/}
          <motion.div
            variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
            className="contenedor-paso-izquierdo">

            <div className="imagen-paso-1">
              <Image
                src="/img/funciona/Paso-1.png"
                alt="paso 1"
                width={250}
                height={250} />
            </div>
            <div className="contenedor-paso-titulo-izquierdo">
              <h2>Realiza tus compras</h2>
              <div className="cuadrado-izquierda"></div>
              <div className="linea-horizontal-izquierda mt-2"></div>
            </div>
            <p className="contenedor-paso-texto-izquierdo -ml-6">
              Compra en línea con tu proveedor o en
              páginas reconocidas
            </p>

          </motion.div>

          {/* separacion de grid para pasos */}
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>

          {/* Paso 2 derecha */}
          <motion.div
            variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
            className="contenedor-paso-derecho">
            <div className="imagen-paso-2">
              <Image
                  src="/img/funciona/Paso-2.png"
                  alt="paso 2"
                  width={350}
                  height={350} />
            </div>
            <div className="contenedor-paso-titulo-derecho">
              <h2>Dirección en Laredo, TX</h2>
              <div className="cuadrado-derecha"></div>
              <div className="linea-horizontal-derecha"></div>
            </div>
            <p className="contenedor-paso-texto-derecho">
              Asigna la dirección de nuestro almacén en Estados Unidos
            </p>

          </motion.div>

          {/* Paso 3 izquierda*/}
          <motion.div
            variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
            className="contenedor-paso-izquierdo">
            <div className="imagen-paso-3">
              <Image
                src="/img/funciona/Paso-3.png"
                alt="paso 3"
                width={350}
                height={350} />
            </div>
            <div className="contenedor-paso-titulo-izquierdo">
              <h2>Comparte tus comprobantes</h2>
              <div className="cuadrado-izquierda"></div>
              <div className="linea-horizontal-izquierda mt-3.5"></div>
            </div>
            <p className="contenedor-paso-texto-izquierdo">
              Envía a tu asesor tu pago y número de rastreo
            </p>
          </motion.div>


          {/* separacion de grid para pasos */}
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>

          {/* Paso 4 derecha */}
          <motion.div
            variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
            className="contenedor-paso-derecho">
            <div className="imagen-paso-4">
              <Image
                  src="/img/funciona/Paso-4.png"
                  alt="paso 4"
                  width={400}
                  height={400} />
            </div>
            <div className="contenedor-paso-titulo-derecho">
              <h2 className="px-5">Trámite aduanal</h2>
              <div className="cuadrado-derecha"></div>
              <div className="linea-horizontal-derecha"></div>
            </div>
            <p className="contenedor-paso-texto-derecho">
              Nosotros nos encargamos de cruzar tu mercancía a México
            </p>

          </motion.div>

          {/* Paso 5 izquierda*/}
          <motion.div
            variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
            className="contenedor-paso-izquierdo">
            <div className="imagen-paso-5">
              <Image
                src="/img/funciona/Paso-5.png"
                alt="paso 3"
                width={300}
                height={300} />
            </div>
            <div className="contenedor-paso-titulo-izquierdo">
              <h2>Pago y entrega</h2>
              <div className="cuadrado-izquierda"></div>
              <div className="linea-horizontal-izquierda"></div>
            </div>
            <p className="contenedor-paso-texto-izquierdo">
              Pagas honorarios e impuestos, y recibes en tu domicilio
            </p>
          </motion.div>

          {/* Paso 6 abajo-central */}
          <motion.div
            variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
            className="contenedor-paso-central col-span-2">
            <div>


              <div className="imagen-paso-6">
                <Image
                  src="/img/funciona/Paso-6.png"
                  alt="paso 6"
                  width={250}
                  height={250} />
              </div>
              <div className="contenedor-paso-titulo-central">
                <h2>Facturación</h2>
                <div className="cuadrado-abajo"></div>
              </div>
              <p className="contenedor-paso-texto-central">
                Te generamos factura por servicios o productos

              </p>
            </div>
          </motion.div>

        </div>






      </div>


    </motion.section>
  );
}
