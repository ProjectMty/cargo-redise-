"use client";


import AnimatedText from "@/animate/TextAnimate";
import DivZoom from "@/animate/DivZoom";
import "@/style/Tarifas.css"
import Image from "next/image";

export default function Tarifas() {
  return (
    <section className="section" id="tarifas">
      <div className="">

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
            <h3 className="titulo-tarifas mt-2">COMPRAS PERSONALES</h3>
            <p className="subtitulo-tarifas -mb-10">(Menor a $119 USD)</p>
            <Image
              src="/img/tarifas/tarifa-1.svg"
              alt="Tarifa 1" className="imagen"
              width={200}
              height={200}
            />
            <p className="subtitulo-tarifas">Costo del servicio</p>
            <p className="precio-tarifa">$300 MXN</p>
            <p className="texto-tarifa">Si la compra es menor a $100 USD, pero es mercancía repetitiva o para vender, adicional al servicio de honorario, se cobra el 16% IVA.</p>
            <p className="texto-tarifa">*Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto de sobrepeso.</p>


          </div>

          {/* Tarjeta 2 */}
          <div className="tarjeta-tarifas">
            <h3 className="titulo-tarifas mt-2">COMPRAS PERSONALES</h3>
            <p className="subtitulo-tarifas -mb-10">($120 A $475 USD)</p>
            <Image src="/img/tarifas/tarifa-2.svg" alt="Tarifa 2" className="imagen"
              width={200}
              height={200} />
            <p className="subtitulo-tarifas">Costo del servicio</p>
            <p className="precio-tarifa">14% </p>
            <p className="subtitulo-resaltado-tarifas">sobre el valor de tu compra</p>
            <p className="texto-tarifa">Si la compra es menor a $475 USD, pero es mercancía repetitiva o para vender, adicional al servicio de honorario, se cobra el 16% IVA.</p>
            <p className="texto-tarifa">*Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto de sobrepeso.</p>

          </div>

          {/* Tarjeta 3 */}
          <div className="tarjeta-tarifas">
            <h3 className="titulo-tarifas mt-2">COMPRAS PERSONALES</h3>
            <p className="subtitulo-tarifas -mb-10">($476 a $3000 USD)</p>
            <Image src="/img/tarifas/tarifa-3.svg" alt="Tarifa 3" className="imagen"
              width={200}
              height={200} />
            <p className="subtitulo-tarifas">Costo del servicio</p>
            <p className="precio-tarifa">13%</p>
            <p className="subtitulo-resaltado-tarifas">sobre el valor de tu compra</p>
            <p className="texto-tarifa">Si la compra es menor a $3,000 USD, pero es mercancía repetitiva o para vender, adicional al servicio de honorario, se cobra el 16% IVA.</p>
            <p className="texto-tarifa">*Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto de sobrepeso.</p>

          </div>

          {/* Tarjeta 4 */}
          <div className="tarjeta-tarifas">
            <h3 className="titulo-tarifas mt-1">COMPRAS EMPRESARIALES</h3>
            <p className="subtitulo-tarifas -mb-10">(Mayor a $3000 USD)</p>
            <Image src="/img/tarifas/tarifa-4.svg" alt="Tarifa 4" className="imagen"
              width={200}
              height={200} />
            <p className="subtitulo-tarifas">Costo del servicio</p>
            <p className="precio-tarifa">12%</p>
            <p className="subtitulo-resaltado-tarifas">sobre el valor de tu compra</p>

            <p className="texto-tarifa">Las compras empresariales se cotizan de acuerdo con la naturaleza del producto, para calcular los aranceles y los fletes, los cuales dependen del peso y volumen de la mercancía.</p>

            <p className="texto-tarifa">*Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto de sobrepeso.</p>

          </div>
        </div>
      </div>
      {/* Cobros Adicionales */}


      <div className="mt-10 flex justify-center" >
        <DivZoom scale={1.05}>
        <div className="contenedor-adicionales bg-white">
          <h3 className="titulo-adicionales">
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
