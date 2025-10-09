"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import "@/style/ComoFunciona.css";

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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeOut,
    },
  },
};

const StepsAnimationDown = {
  hidden: { opacity: 0, y: -40 },
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
          Solo tienes que seguir estos sencillos pasos
        </h2>

        {/* Contenedor principal con fondo blanco */}
        <div className="contenedor-principal">

          {/* Línea horizontal */}
          <div className="contenedor-central">
            <div className="cuadrado"></div>
            <div className="linea-Vertical"></div>
            <div className="cuadrado"></div>
            <div className="cuadrado"></div>
            <div className="linea-Vertical"></div>
            <div className="cuadrado"></div>
            <div className="linea-Vertical"></div>
            <div className="cuadrado"></div>
            <div className="linea-Vertical"></div>
            <div className="cuadrado"></div>
            <div className="linea-Vertical"></div>
            <div className="cuadrado"></div>
            <div className="linea-Vertical"></div>
            <div className="cuadrado"></div>

          </div>


          {/* Grid de pasos */}
          <div className="grid-pasos">

            {/* Paso 1 izquierda*/}
            <motion.div
              variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
              className="contenedor-paso">
              <div className="imagen-paso-1">
                <Image
                  src="/img/funciona/Paso-1.png"
                  alt="paso 1"
                  width={250}
                  height={250} />
              </div>
              <div className="contenedor-paso-titulo">
                <h2>Realiza tus compras</h2>
              </div>
              <p className="contenedor-paso-texto">
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
                  width={250}
                  height={250} />
              </div>
              <div className="contenedor-paso-titulo-derecho">
                <h2>Dirección en Laredo, TX</h2>
              </div>
              <p className="contenedor-paso-texto-derecho">
                Asigna la dirección de nuestro almacén en Estados Unidos
              </p>

            </motion.div>

            {/* Paso 3 izquierda*/}
            <motion.div
              variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
              className="contenedor-paso">
              <div className="imagen-paso-3">
                <Image
                  src="/img/funciona/Paso-3.png"
                  alt="paso 3"
                  width={250}
                  height={250} />
              </div>
              <div className="contenedor-paso-titulo">
                <h2>Comparte tus comprobantes</h2>
              </div>
              <p className="contenedor-paso-texto">
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
                  width={250}
                  height={250} />
              </div>
              <div className="contenedor-paso-titulo-derecho">
                <h2 className="px-5">Trámite aduanal</h2>
              </div>
              <p className="contenedor-paso-texto-derecho">
                Nosotros nos encargamos de cruzar tu mercancía a México
              </p>

            </motion.div>

            {/* Paso 5 izquierda*/}
            <motion.div
              variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
              className="contenedor-paso">
              <div className="imagen-paso-5">
                <Image
                  src="/img/funciona/Paso-5.png"
                  alt="paso 3"
                  width={250}
                  height={250} />
              </div>
              <div className="contenedor-paso-titulo">
                <h2>Pago y entrega</h2>
              </div>
              <p className="contenedor-paso-texto">
                Pagas honorarios e impuestos, y recibes en tu domicilio
              </p>
            </motion.div>


          </div>

          <div className="contenedor-central">

            <motion.div
              variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
              className="contenedor-paso mt-36">
              <div className="imagen-paso-6">
                <Image
                  src="/img/funciona/Paso-6.png"
                  alt="paso 6"
                  width={250}
                  height={250} />
              </div>
              <div className="contenedor-paso-titulo">
                <h2>Facturación</h2>
              </div>
              <p className="contenedor-paso-texto-central">
                Te generamos factura por servicios o productos
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </motion.section>
  );
}
