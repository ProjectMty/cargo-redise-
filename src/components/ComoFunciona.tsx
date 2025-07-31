"use client";

export default function ComoFunciona() {
  return (
    <section className="w-full bg-white py-20 font-sans text-[#061349]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          ¿Cómo funciona?
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-2 bg-[#0057A1] rounded-full" style={{ top: "3.5rem" }}></div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-y-20">
            {/* Step 1 */}
            <div className="md:col-span-2 flex flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#0057A1] text-white font-bold flex items-center justify-center z-10">
                1
              </div>
              <p className="mt-4 max-w-xs">
                Realiza tus compras en USA y China online con tu proveedor o en páginas reconocidas
              </p>
            </div>

            {/* Step 2 */}
            <div className="md:col-span-2 flex flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#0057A1] text-white font-bold flex items-center justify-center z-10">
                2
              </div>
              <p className="mt-4 max-w-xs">
                Asigna la dirección de nuestro almacén en Laredo, TX.
              </p>
            </div>

            {/* Step 3 */}
            <div className="md:col-span-2 flex flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#0057A1] text-white font-bold flex items-center justify-center z-10">
                3
              </div>
              <p className="mt-4 max-w-xs">
                Trabaja con tu asesor personal enviando tu comprobante de pago y número de rastreo.
              </p>
            </div>

            {/* Step 4 */}
            <div className="md:col-span-2 flex flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#0057A1] text-white font-bold flex items-center justify-center z-10">
                4
              </div>
              <p className="mt-4 max-w-xs">
                Una vez recibida la mercancía en nuestro almacén, nosotros haremos los trámites aduanales para cruzar a México.
              </p>
            </div>

            {/* Step 5 */}
            <div className="md:col-span-2 flex flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#0057A1] text-white font-bold flex items-center justify-center z-10">
                5
              </div>
              <p className="mt-4 max-w-xs">
                Ya que tu mercancía está en México, pagas tus honorarios e impuestos, y realizamos el envío directo a tu domicilio.
              </p>
            </div>

            {/* Step 6 */}
            <div className="md:col-span-2 flex flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#0057A1] text-white font-bold flex items-center justify-center z-10">
                6
              </div>
              <p className="mt-4 max-w-xs">
                Realizamos tu factura por servicios o por productos comercializados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
