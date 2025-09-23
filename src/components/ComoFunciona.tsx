"use client";

import { motion, easeOut } from "framer-motion";

import { useIsMobile } from "@/hooks/useIsMobile";

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
      className="relative bg-gradient-to-r from-[#1B59E1] to-[#05C2F2] py-16 px-4 md:px-8 scroll-mt-10"
      variants={ContainerSteps}
      initial="hidden"
      whileInView="show"
      // cambiar para hacer animacion una vez o cada vez que se hace scroll en la pagina
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-center text-white font-[Montserrat] font-bold text-[32px] md:text-[40px] mb-12">
          ¿Cómo funciona?
        </h2>

        {/* Contenedor principal con fondo blanco */}
        <div className="relative rounded-3xl bg-white shadow-xl  md:px-20 md:py-3">
          {/* Línea horizontal */}
          <div className="hidden absolute lg:block top-1/2 left-0 w-full h-[6px] bg-sky-600 transform -translate-y-1/2 z-0"></div>
          {/* <div className=" absolute lg:hiden  left-1/2 w-[6px] h-full bg-sky-600 transform z-0"></div>
           */}
          {/* Grid de pasos */}
          <div className="relative z-10 grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-3 ">
            {/* Paso 1 */}

            <motion.div
              variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
              className="flex flex-col items-center text-center mt-10 ">

              {/* numero de paso mobil*/}
              <div className="flex md:hidden w-15 h-15 rounded-full bg-sky-600 text-white  items-center justify-center font-bold mt-4 mb-10 text-3xl">
                1
              </div>
              {/* Imagen */}
              <div className="  w-55 h-35 rounded-xl flex items-center justify-center mb-10 lg:mb-7">
                <img src="/img/funciona/Forma1.svg" alt="paso 1" />
              </div>
              {/* Texto */}
              <p className=" text-sm  text-[#333] font-[Montserrat] mb-1">
                <span>Realiza tus compras en</span>
                <span className="font-bold"> USA y China</span>
                <span>  online con tu </span>
                <span className="font-bold">proveedor</span>
                <span> o en </span>
                <span className="font-bold">páginas reconocidas.</span>.

              </p>

              {/* numero de paso desktop*/}
              <div className=" hidden md:flex w-15 h-15 rounded-full bg-sky-600 text-white items-center justify-center font-bold mt-5 mb-2 text-3xl">
                1
              </div>

            </motion.div>
            {/* Paso 2 (ABAJO) */}

            <motion.div
              variants={StepsAnimationDown}
              className="flex flex-col items-center text-center mt-10 lg:mt-50">
              {/* numero de paso */}
              <div className="w-15 h-15 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold lg:mt-28 mb-5 text-3xl">
                2
              </div>
              {/* imagen */}
              <div className="w-55 h-35  rounded-xl flex items-center justify-center  mb-10 lg:mb-7">
                <img src="/img/funciona/Forma2.svg" alt="paso 2" />
              </div>
              {/* texto */}
              <p className="text-sm  text-[#333] font-[Montserrat] mb-1">

                <span className="font-bold"> Asigna la dirección</span>
                <span>  de nuesto </span>
                <span className="font-bold">almacén en Laredo, TX</span>

              </p>
            </motion.div>
            {/* Paso 3 */}

            <motion.div
              variants={isMobile ? StepsAnimationDown : StepsAnimationUp}
              className="flex flex-col items-center text-center mt-10 ">
                  {/* numero de paso mobil*/}
              <div className="flex md:hidden w-15 h-15 rounded-full bg-sky-600 text-white  items-center justify-center font-bold mt-4 mb-10 text-3xl">
                3
              </div>

              {/* Imagen */}
              <div className="w-55 h-35  rounded-xl  flex items-center justify-center mb-10 lg:mb-7">
                <img src="/img/funciona/Forma3.svg" alt="paso 1" />
              </div>
              {/* Texto */}
              <p className=" text-sm text-[#333] font-[Montserrat] mb-1">
                <span>Trabaja con tu</span>
                <span className="font-bold"> asesor personal enviando</span>
                <span>  tu comprobante de</span>
                <span className="font-bold"> pago y número de rastreo</span>

              </p>

              {/* numero de paso desktop*/}
              <div className="hidden md:flex w-15 h-15 rounded-full bg-sky-600 text-white  items-center justify-center font-bold mt-5 mb-2 text-3xl">
                3
              </div>

            </motion.div>

            {/* Paso 4 (ABAJO) */}

            <motion.div
              variants={StepsAnimationDown}
              className="flex flex-col items-center text-center mt-8 lg:mt-54">
              {/* numero de paso */}
              <div className="w-15 h-15 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold lg:mt-25 mb-1 text-3xl">
                4
              </div>
              {/* imagen */}
              <div className="w-45 h-35  rounded-xl flex items-center justify-center  mb-6 lg:mb-1">
                <img src="/img/funciona/Forma4.svg" alt="paso 2" />
              </div>
              {/* texto */}
              <p className="text-sm md:text-sm text-[#333] font-[Montserrat] ">
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
              className="flex flex-col items-center text-center mt-8">

                    {/* numero de paso mobil*/}
              <div className="flex md:hidden w-15 h-15 rounded-full bg-sky-600 text-white  items-center justify-center font-bold mt-4 mb-10 text-3xl">
                5
              </div>
              {/* Imagen */}
              <div className="w-45 h-35  rounded-xl  flex items-center justify-center mb-5">
                <img src="/img/funciona/Forma5.svg" alt="paso 1" />
              </div>
              {/* Texto */}
              <p className=" text-sm  text-[#333] font-[Montserrat] mb-1">
                <span>Ya que</span>
                <span className="font-bold"> tu mercancía está en México</span>
                <span>  ,pagas tus honorarios e impuestos, y realizamos el envio a tu domicilio.</span>

              </p>

              {/* numero de paso desktop*/}
              <div className="hidden md:flex w-15 h-15 rounded-full bg-sky-600 text-white  items-center justify-center font-bold mt-5 mb-2 text-3xl">
                5
              </div>

            </motion.div>

          </div>

          {/* Nota final */}
          <p className="text-center text-sm font-bold text-black font-[Montserrat] mt-8 italic">
            *Realizamos tu factura por servicios o por productos comercializados.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
