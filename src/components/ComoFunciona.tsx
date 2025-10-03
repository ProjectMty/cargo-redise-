"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import "@/style/ComoFunciona.css";


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
          ¿Cómo funciona?
        </h2>

        {/* Contenedor principal con fondo blanco */}
        <div className="contenedor-principal">

          {/* Línea horizontal */}
          <div className="linea-horizontal"></div>

          {/* Grid de pasos */}
          <div className="grid-pasos">

            {/* Paso 1 */}
            <motion.div
              variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
              className="div-paso mt-10">


              {/* Imagen */}
              <div className="imagen-paso">
                <Image
                  src="/img/funciona/Forma1.svg"
                  alt="paso 1"
                  width={250}
                  height={250} />
              </div>
              {/* Texto */}
              <p className="texto-paso">
                <span>Realiza tus compras en</span>
                <span className="font-bold"> USA y China</span>
                <span>  online con tu </span>
                <span className="font-bold">proveedor</span>
                <span> o en </span>
                <span className="font-bold">páginas reconocidas.</span>.

              </p>
              {/* numero de paso desktop*/}
              <div className="numero-paso">
                1
              </div>

            </motion.div>

            {/* Paso 2 (ABAJO) */}
            <motion.div
              variants={StepsAnimationDown}
              className="div-paso">
              {/* numero de paso */}
              <div className="numero-paso">
                2
              </div>
              {/* imagen */}
              <div className="imagen-paso">
                <Image
                  src="/img/funciona/Forma2.svg"
                  alt="paso 2"
                  width={250}
                  height={250} />
              </div>
              {/* texto */}
              <p className="texto-paso">

                <span className="font-bold"> Asigna la dirección</span>
                <span>  de nuesto </span>
                <span className="font-bold">almacén en Laredo, TX</span>

              </p>
            </motion.div>

            {/* Paso 3 */}
            <motion.div
              variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
              className="div-paso">
              {/* numero de paso mobil*/}


              {/* Imagen */}
              <div className="imagen-paso">
                <Image
                  src="/img/funciona/Forma3.svg"
                  alt="paso 1"
                  width={250}
                  height={250} />
              </div>
              {/* Texto */}
              <p className="texto-paso">
                <span>Trabaja con tu</span>
                <span className="font-bold"> asesor personal enviando</span>
                <span>  tu comprobante de</span>
                <span className="font-bold"> pago y número de rastreo</span>

              </p>
              <div className="numero-paso">
                3
              </div>

            </motion.div>


            {/* Paso 4 */}
            <motion.div
              variants={StepsAnimationDown}
              className="div-paso">
              {/* numero de paso */}
              <div className="numero-paso">
                4
              </div>
              {/* imagen */}
              <div className="imagen-paso">
                <Image
                  src="/img/funciona/Forma4.svg"
                  alt="paso 2"
                  width={250}
                  height={250} />
              </div>
              {/* texto */}
              <p className="texto-paso">
                <span>Una vez</span>
                <span className="font-bold"> recibida la mercancia en nuestro almacén,</span>
                <span>  nosotros haremos </span>
                <span className="font-bold"> los trámites aduanales</span>
                <span> para</span>
                <span className="font-bold">cruzar a México.</span>.

              </p>
            </motion.div>

            {/* Paso 5 */}
            <motion.div
              variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
              className="div-paso">


              {/* Imagen */}
              <div className="imagen-paso">
                <Image
                  src="/img/funciona/Forma5.svg"
                  alt="paso 1"
                  width={250}
                  height={250} />
              </div>
              {/* Texto */}
              <p className="texto-paso">
                <span>Ya que</span>
                <span className="font-bold"> tu mercancía está en México</span>
                <span>  ,pagas tus honorarios e impuestos, y realizamos el envio a tu domicilio.</span>

              </p>

              {/* numero de paso desktop*/}
              <div className="numero-paso">
                5
              </div>

            </motion.div>
          </div>


          {/* Nota final */}
          <p className="nota">
            *Realizamos tu factura por servicios o por productos comercializados.
          </p>
        </div>

      </div>
    </motion.section>
  );
}
