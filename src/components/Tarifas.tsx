"use client";


import AnimatedText from "@/animate/TextAnimate";
import DivZoom from "@/animate/DivZoom";
import "@/style/Tarifas.css"

export default function Tarifas() {
  return (
    <section className="section" id="tarifas">
      <div className="contenedor">

        <div className="contenedor-titulo ">


          <AnimatedText
            delay={0.2}
            lines={[
              < h2 key={1}>
                Tarifas
              </h2>
            ]}>
          </AnimatedText>

        </div>

        <div className="contenedor-tarifas">
          {/* Tarjeta 1 */}
          <div className="tarjeta-tarifas">
            <h3 className="titulo-tarifas">COMPRAS PERSONALES</h3>
            <p className="subtitulo-tarifas">(Menor a $119 USD)</p>

          </div>

          {/* Tarjeta 2 */}
          <div className="tarjeta-tarifas">
            <h3 className="titulo-tarifas">COMPRAS PERSONALES</h3>
            <p className="subtitulo-tarifas">($120 A $475 USD)</p>
          </div>

          {/* Tarjeta 3 */}
          <div className="tarjeta-tarifas">
            <h3 className="titulo-tarifas">COMPRAS PERSONALES</h3>
            <p className="subtitulo-tarifas">($476 a $3000 USD)</p>
          </div>

          {/* Tarjeta 4 */}
          <div className="tarjeta-tarifas">
            <h3 className="titulo-tarifas">COMPRAS EMPRESARIALES</h3>
            <p className="subtitulo-tarifas">(A partir de $3000 USD)</p>
          </div>
        </div>

        <div className="contenedor-tarifas-informacion">
          {/* Tarjeta 1 */}
          <div className="tarjeta-tarifas">
            <h3 className="titulo-tarifas">COMPRAS PERSONALES</h3>
            <p className="subtitulo-tarifas">(Menor a $119 USD)</p>
            <p className="subtitulo-tarifas">Costo del servicio</p>
           <p className="precio-tarifa">$300 MXN</p>

            <p className="texto-tarifa">Si la compra es menor a $100 USD, pero es mercancía repetitiva o para vender, adicional al servicio de honorario, se cobra el 16% IVA.</p>
           <p className="texto-tarifa">*Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto de sobrepeso.</p>


          </div>

          {/* Tarjeta 2 */}
          <div className="tarjeta-tarifas">
            <h3 className="titulo-tarifas">COMPRAS PERSONALES</h3>
            <p className="subtitulo-tarifas">($120 A $475 USD)</p>
          </div>

          {/* Tarjeta 3 */}
          <div className="tarjeta-tarifas">
            <h3 className="titulo-tarifas">COMPRAS PERSONALES</h3>
            <p className="subtitulo-tarifas">($476 a $3000 USD)</p>
          </div>

          {/* Tarjeta 4 */}
          <div className="tarjeta-tarifas">
            <h3 className="titulo-tarifas">COMPRAS EMPRESARIALES</h3>
            <p className="subtitulo-tarifas">(A partir de $3000 USD)</p>
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
