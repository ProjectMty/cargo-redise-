"use client";

export default function ComoFunciona() {
  return (
    <section
      id="comofunciona"
      className="relative bg-gradient-to-r from-[#1B59E1] to-[#05C2F2] py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-center text-white font-[Montserrat] font-bold text-[32px] md:text-[40px] mb-12">
          ¿Cómo funciona?
        </h2>

        {/* Contenedor principal con fondo blanco */}
        <div className="relative rounded-3xl bg-white shadow-xl p-8 md:p-12">
          {/* Línea horizontal */}
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-sky-600 transform -translate-y-1/2 z-0"></div>

          {/* Grid de pasos */}
          <div className="relative grid grid-cols-5 gap-6 z-10">
            {/* Paso 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center mb-4">
                Icono
              </div>
              <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold -mt-6 mb-2">
                1
              </div>
              <p className="text-sm md:text-base text-[#333] font-[Montserrat]">
                Realiza tus compras en USA y China online con tu proveedor o en
                páginas reconocidas.
              </p>
            </div>

            {/* Paso 2 (ABAJO) */}
            <div className="flex flex-col items-center text-center mt-20">
              <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold mb-2">
                2
              </div>
              <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center mt-2 mb-4">
                Icono
              </div>
              <p className="text-sm md:text-base text-[#333] font-[Montserrat]">
                Trabaja con tu asesor personal enviando tu comprobante de pago y
                número de rastreo.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center mb-4">
                Icono
              </div>
              <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold -mt-6 mb-2">
                3
              </div>
              <p className="text-sm md:text-base text-[#333] font-[Montserrat]">
                Asigna la dirección de nuestro almacén en Laredo, TX.
              </p>
            </div>

            {/* Paso 4 (ABAJO) */}
            <div className="flex flex-col items-center text-center mt-20">
              <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold mb-2">
                4
              </div>
              <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center mt-2 mb-4">
                Icono
              </div>
              <p className="text-sm md:text-base text-[#333] font-[Montserrat]">
                Una vez recibida la mercancía en nuestro almacén, hacemos los
                trámites aduanales para cruzar a México.
              </p>
            </div>

            {/* Paso 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center mb-4">
                Icono
              </div>
              <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold -mt-6 mb-2">
                5
              </div>
              <p className="text-sm md:text-base text-[#333] font-[Montserrat]">
                Ya que tu mercancía está en México, pagas honorarios e
                impuestos; realizamos el envío directo a tu domicilio.
              </p>
            </div>
          </div>

          {/* Nota final */}
          <p className="text-center text-sm text-gray-500 font-[Montserrat] mt-8 italic">
            *Realizamos tu factura por servicios o por productos comercializados.
          </p>
        </div>
      </div>
    </section>
  );
}
