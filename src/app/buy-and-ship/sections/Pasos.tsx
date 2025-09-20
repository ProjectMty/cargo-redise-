"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { motion, easeOut, delay, easeIn } from "framer-motion";
import { Container } from "lucide-react";

export default function Pasos() {
  const ContainerSteps = {
    hidden: {},
    show: {

      transition: {
        staggerChildren: 0.5
      },
    },
  };

  const StepsAnimationUp = {
    hidden: { opacity: 0.1, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: easeOut,
      },
    },
  };

  const StepsAnimationRight = {
    hidden: { opacity: 0, width: 0 },
  show: {
    opacity: [0,0, 0.8, 1, 1],
    width: ["0%","0","30%", "60%", "60%"],
    
  
    transition: {
      duration: 3,
      ease: easeIn,
      times: [0, 0.1, 0.4, 0.7, 1]
    },
    },
  };

  return (
    <motion.section
      id="comofunciona"
      className="relative bg-white py-16 px-4 md:px-8"
      variants={ContainerSteps}
      initial="hidden"
      whileInView="show"
      // cambiar para hacer animacion una vez o cada vez que se hace scroll en la pagina
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-center text-blue-400 font-[Montserrat]   font-bold text-[32px] md:text-[40px] mb-12">
          ¡Sigue estos pasos para comprar hoy!
        </h2>

        {/* Contenedor principal con fondo blanco */}
        
        {/* pasos 1- 3 */}
        <div className="relative rounded-3xl  md:px-20 md:py-3">
          {/* Línea horizontal */}
          <motion.div 
          variants={StepsAnimationRight}
          className="hidden lg:block absolute top-1/3 left-50 w-3xl h-[6px] bg-sky-600 transform  z-0"></motion.div>

          {/* Grid de pasos */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 z-10">

            {/* Paso 1 */}

            <motion.div
              variants={StepsAnimationUp}
              className="flex flex-col items-center text-center mt-10 -mx-2 ">

              {/* numero de paso */}
              <div className="w-25 h-25 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold -mt-5 mb-2 text-5xl">
                1
              </div>

              {/* Texto */}
              <p className=" text-sm md:text-base text-[#333] font-[Montserrat] mb-1">
                <span >Contáctanos por whatsApp al </span>
                <span className="font-bold"> 81-1588-4871</span>
                <span >, llama al</span>
                <span className="font-bold"> 81-1669-1037</span>
                <span > o escribe a</span>
                <span className="font-bold"> info@cargomty.com</span>
                <span > para solicitar tu cotización</span>
              </p>
            </motion.div>

            {/* Paso 2 */}
            <motion.div
              variants={StepsAnimationUp}
              className="flex flex-col items-center text-center mt-10 -mx-2 ">

              {/* numero de paso */}
              <div className="w-25 h-25 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold -mt-5 mb-2 text-5xl">
                2
              </div>

              {/* Texto */}
              <p className=" text-sm md:text-base text-[#333] font-[Montserrat] mb-1">
                
                <span className="font-bold"> Cotizamos tus necesidades,</span>
                <span > desde la</span>
                <span className="font-bold"> negociación</span>
                <span > con tu</span>
                <span className="font-bold"> proveedor</span>
                <span > hasta la entrega en tu negocio en México.</span>
              </p>
            </motion.div>

            {/* Paso 3 */}
            <motion.div
              variants={StepsAnimationUp}
              className="flex flex-col items-center text-center mt-10 -mx-2 ">

              {/* numero de paso */}
              <div className="w-25 h-25 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold -mt-5 mb-2 text-5xl">
                3
              </div>

              {/* Texto */}
              <p className=" text-sm md:text-base text-[#333] font-[Montserrat] mb-1">
                
                <span className="font-bold"> Negociamos con tu proveedor </span>
                <span > y te enviamos la cotización completa, incluyendo el tipo de cambio.</span>
               
              </p>
            </motion.div>
          </div>


        </div>

        {/* pasos 4 - 6 */}
        <div className="relative rounded-3xl   md:px-20 md:py-3">
          {/* Línea horizontal */}
          <motion.div 
          variants={StepsAnimationRight}
          className=" hidden lg:block absolute top-1/3 left-50 w-3xl h-[6px] bg-sky-600 transform  z-0"></motion.div>

          {/* Grid de pasos */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 z-10">

            {/* Paso 4 */}
            <motion.div
              variants={StepsAnimationUp}
              className="flex flex-col items-center text-center mt-10 -mx-2 ">

              {/* numero de paso */}
              <div className="w-25 h-25 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold -mt-5 mb-2 text-5xl">
                4
              </div>

              {/* Texto */}
              <p className=" text-sm md:text-base text-[#333] font-[Montserrat] mb-1">
              
                <span className="font-bold"> Realiza el pago</span>
                <span > a nuestras cuentas en México.</span>
                
              </p>
            </motion.div>

            {/* Paso 5 */}
            <motion.div
              variants={StepsAnimationUp}
              className="flex flex-col items-center text-center mt-10 -mx-2 ">

              {/* numero de paso */}
              <div className="w-25 h-25 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold -mt-5 mb-2 text-5xl">
                5
              </div>

              {/* Texto */}
              <p className=" text-sm md:text-base text-[#333] font-[Montserrat] mb-1">
               
                <span className="font-bold"> Nosotros pagamos a tu proveedor</span>
                <span > en el extranjero.</span>
               
              </p>
            </motion.div>

            {/* Paso 6 */}
            <motion.div
              variants={StepsAnimationUp}
              className="flex flex-col items-center text-center mt-10 -mx-2 ">

              {/* numero de paso */}
              <div className="w-25 h-25 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold -mt-5 mb-2 text-5xl">
                6
              </div>

              {/* Texto */}
              <p className=" text-sm md:text-base text-[#333] font-[Montserrat] mb-1">
            
                <span className="font-bold"> Gestionamos toda la logística,</span>
                <span > desde el país de origen hasta México.</span>
             
              </p>
            </motion.div>
          </div>


        </div>

          {/* pasos 7 - 9 */}
        <div className="relative rounded-3xl   md:px-20 md:py-3">
          {/* Línea horizontal */}
          <motion.div 
          variants={StepsAnimationRight}
          className="hidden lg:block absolute top-1/3 left-50 w-3xl h-[6px] bg-sky-600 transform  z-0"></motion.div>

          {/* Grid de pasos */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 z-10">

            {/* Paso 7 */}
            <motion.div
              variants={StepsAnimationUp}
              className="flex flex-col items-center text-center mt-10 -mx-2 ">

              {/* numero de paso */}
              <div className="w-25 h-25 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold -mt-5 mb-2 text-5xl">
                7
              </div>

              {/* Texto */}
              <p className=" text-sm md:text-base text-[#333] font-[Montserrat] mb-1">
                
                <span className="font-bold"> Te mantenemos informado</span>
                <span > del estatus de tu compra, incluyendo importación y envío.</span>
            
              </p>
            </motion.div>

            {/* Paso 8 */}
            <motion.div
              variants={StepsAnimationUp}
              className="flex flex-col items-center text-center mt-10 -mx-2 ">

              {/* numero de paso */}
              <div className="w-25 h-25 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold -mt-5 mb-2 text-5xl">
                8
              </div>

              {/* Texto */}
              <p className=" text-sm md:text-base text-[#333] font-[Montserrat] mb-1">
                
                <span className="font-bold"> Facturamos tu compra</span>
                <span > en México.</span>
            
              </p>
            </motion.div>

            {/* Paso 9 */}
            <motion.div
              variants={StepsAnimationUp}
              className="flex flex-col items-center text-center mt-10 -mx-2 ">

              {/* numero de paso */}
              <div className="w-25 h-25 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold -mt-5 mb-2 text-5xl">
                9
              </div>

              {/* Texto */}
              <p className=" text-sm md:text-base text-[#333] font-[Montserrat] mb-1">
                
                <span className="font-bold"> Entregamos tu mercancía</span>
                <span > directamente en la puerta de tu negocio.</span>
           
              </p>
            </motion.div>


          </div>


        </div>
        
      </div>
    </motion.section>


  );
}
