"use client";


import AnimatedText from "@/animate/TextAnimate";
import DivZoom from "@/animate/DivZoom";

export default function Tarifas() {
  return (
    <section className="w-full bg-white py-16 scroll-mt-15 font-[Montserrat]" id="tarifas">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <AnimatedText
          delay={0.2}
          lines={[
            < h2 key={1} className="text-center text-blue-800 text-4xl md:text-5xl font-bold mb-12">
              Tarifas
            </h2>
          ]}>
        </AnimatedText>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tarjeta 1 */}
          <div className="bg-[#0072BC] text-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-center font-bold text-lg">COMPRAS PERSONALES</h3>
            <p className="text-center font-semibold mb-4">(Menor a $119 USD)</p>
            <hr className="border-white/50 mb-4" />
            <p className="text-center font-bold text-xl mb-4">Tarifa de $300 MXN</p>
            <p className="text-xs mb-4">Si la compra es menor a $100 USD, pero es mercancía repetitiva o para vender, adicional al servicio de honorario, se cobra el 16% IVA.</p>
            <p className="text-xs">*Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto de sobrepeso.</p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-[#0072BC] text-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-center font-bold text-lg">COMPRAS PERSONALES</h3>
            <p className="text-center font-semibold mb-4">($120 A $475 USD)</p>
            <hr className="border-white/50 mb-4" />
            <p className="text-center font-bold text-xl mb-4">14% sobre el valor de tu compra</p>
            <p className="text-xs mb-4">Si la compra es menor a $475 USD, pero es mercancía repetitiva o para vender, adicional al servicio de honorario, se cobra el 16% IVA.</p>
            <p className="text-xs">*Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto de sobrepeso.</p>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-[#0072BC] text-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-center font-bold text-lg">COMPRAS PERSONALES</h3>
            <p className="text-center font-semibold mb-4">($476 a $3000 USD)</p>
            <hr className="border-white/50 mb-4" />
            <p className="text-center font-bold text-xl mb-4">13% sobre el valor de tu compra</p>
            <p className="text-xs mb-4">Si la compra es menor a $3,000 USD, pero es mercancía repetitiva o para vender, adicional al servicio de honorario, se cobra el 16% IVA.</p>
            <p className="text-xs">*Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto de sobrepeso.</p>
          </div>

          {/* Tarjeta 4 */}
          <div className="bg-[#0072BC] text-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-center font-bold text-lg">EMPRESARIALES</h3>
            <p className="text-center font-semibold mb-4">A partir de $3000 USD</p>
            <hr className="border-white/50 mb-4" />
            <p className="text-center font-sm mb-4">Las compras empresariales se cotizan de acuerdo con la naturaleza del producto, para calcular los aranceles y los fletes, los cuales dependen del peso y volumen de la mercancía.</p>
            <p className="text-center font-bold text-lg mb-4">12% sobre el valor de tu compra</p>
            <p className="text-xs">*Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto de sobrepeso.</p>
          </div>
        </div>
      </div>
      {/* Cobros Adicionales */}

       
      <div className="mt-16 flex justify-center " >
        <DivZoom scale={1.05}>
        <div className="bg-[#ffffff] rounded-xl shadow-md p-6 md:p-8 max-w-4xl w-full">
          <h3 className="text-xl md:text-2xl font-bold text-color text-blue-800 mb-4 text-center">
            Cobros adicionales
          </h3>
          <ul className="space-y-3 text-sm md:text-base text-[#333333]">
            <li>
              • El envío al destino final en México no está incluido y será
              determinado por separado, según el destino y las características
              del paquete.
            </li>
            <li>
              <span className="font-bold">$3.00 USD</span> por cada bolsa, caja o
              sobre recibido.
            </li>
            <li>
              <span className="font-bold">$10.00 USD</span> por cada tarima descargada.
            </li>
            <li>
              <span className="font-bold">$375.00 USD</span> por cada tarima recibida
              de hasta 500 libras.
            </li>
            <li>
              <span className="font-bold">$515.00 USD</span> por cada tarima recibida
              que supere las 500 libras.
            </li>
          </ul>
        </div>
        </DivZoom>
      </div>

    </section>
  );
}
