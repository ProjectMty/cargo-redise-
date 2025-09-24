// ranngo 1 < 119USD es cobro minimo direecto de $300MXN  *

// rango 2 $120 - $475 se multiplica el precio por el 14% *

// rango 3 $476-$3000 se multiplica por el 13% *

// rango 4 > $3000 se multiplica por el 12% *

// poner una seleccion de pallets , sobres y cajas *

// si selecciona una pallet se le suma el valor ya establecido mas $10USD descargada + $375USD permitido hasta 500lb

// si supera las 500lb es el porcentaje ya calculado + los diez USD y el precio cambia de $375 a $515 USD 

// si es mercancia repetitiva mas de 20 articulos se cobra el 16% de IVA / Si selecciona pallet agregar text box tienes mercancía repetitiva if yes que aparezca cantidad mayo a 20 aumentar el 16%.

// si selecciono una caja, sobre o bolsa se le suma el porcentaje con la compra mas $3UUSD y si son mas de 20 productos de la misma naturaleza 
//se le suma el 16% de IVA
// el precio largoxanchoxalto/6000*3 

//determinar si el peso volumétrico es menor o mayor y tomar como base.

"use client";
import AnimatedText from "@/animate/TextAnimate";
import "@/style/Calculadora.css";
import { number } from "framer-motion";
import { option } from "framer-motion/client";
import { useState } from "react";


export default function Calculadora() {
    // inputs
    const [tipoSeleccionado, setTipoSeleccionado] = useState("");
    const [valor, SetValor] = useState<number | "">("");
    const [peso, setPeso] = useState<number | "">("");

    const [precioValor, setPrecioValor] = useState(0);
    const [precioPeso, setPrecioPeso] = useState(0);

    // salidas
    const [costo, setCosto] = useState<number>(0);

    //booleanos
    const [Mostrar, setMostrar] = useState(false);


    const tiposCajas = [
        { name: "Pallets" },
        { name: "Sobres" },
        { name: "Cajas" }
    ];

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const select = e.target.value;
        setTipoSeleccionado(select); // Actualiza el estado

        if (select === "Pallets") {
            setMostrar(true);

        } else {
            setMostrar(false);
        }
        // resetear inputs y cálculos
        SetValor("");
        setPeso("");
        setPrecioValor(0);
        setPrecioPeso(0);
        setCosto(0);

    };
    const handleChangeValor = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valorIngresado = e.target.value;
        const numeroIngresado = valorIngresado === "" ? "" : Number(valorIngresado);
        SetValor(numeroIngresado);

        let precio = 0;
        if (numeroIngresado === "") {
            precio = 0;
        } else if (numeroIngresado <= 119) {
            precio = numeroIngresado + 17;
        } else if (numeroIngresado >= 120 && numeroIngresado <= 475) {
            precio = numeroIngresado + (numeroIngresado * 0.14);
        } else if (numeroIngresado >= 476 && numeroIngresado < 3000) {
            precio = numeroIngresado + (numeroIngresado * 0.13);
        } else if (numeroIngresado > 3000) {
            precio = numeroIngresado + (numeroIngresado * 0.12);
        }

        setPrecioValor(precio);
        setCosto(precio + precioPeso);
    };


    const handleBlurPeso = () => {
        if (peso === "") {
            setPrecioPeso(0);
            setCosto(precioValor);
            return;
        }
        if (Mostrar) {
            let usdPorPeso = 0;
            if (peso < 500) {
                usdPorPeso = 385;
            } else if (peso > 500) {
                usdPorPeso = 525;
            }

            setPrecioPeso(usdPorPeso);
            if (Mostrar) {
                setCosto(precioValor + usdPorPeso);
            } else {
                setCosto(precioValor);
            }

        }


    };



    return (
        <section id="calculadora" className="fondo-seccion">
            <AnimatedText
                delay={0.2}
                lines={[
                    < h2 key={1} className="titulo">
                        Calculadora
                    </h2>
                ]}>
            </AnimatedText>

            <div className="fondo-contenedor">


                <form action="/action_page.php" className="p-20">
                    {/* Seleccion tipo de contenedor */}
                    <div className="contenedor-4">
                        <select name="TipoContenedor" id="TipoContenedor" className="select"
                            value={tipoSeleccionado} onChange={handleChangeSelect}
                        >
                            <option value="">--Selecciona--</option>
                            {tiposCajas.map((tipo) => (
                                <option key={tipo.name} value={tipo.name}>
                                    {tipo.name}
                                </option>
                            ))}
                        </select>
                        <div className="col-span-3">
                            < h2 className="tipo">
                                {tipoSeleccionado}
                            </h2>

                        </div>
                    </div>


                    <div className="contenedor-2">
                        {/* Ingreso de valor */}
                        <div className="tarjeta">
                            <label htmlFor="valor" className="label">Valor producto: </label>
                            <input type="number" className="input" value={valor} onChange={handleChangeValor} placeholder="USD" />
                        </div>

                        {/* Ingreso de peso */}
                        <div className="tarjeta">
                            <label htmlFor="Peso" className="label">Peso: </label>
                            <input type="number" className="input" value={peso} onChange={(e) =>
                                setPeso(e.target.value === "" ? "" : Number(e.target.value))
                            }
                                onBlur={handleBlurPeso} placeholder="lb" />
                        </div>


                    </div>

                    {/* Ingreso de dimensiones */}
                    <div className="contenedor-4">

                        <div className="tarjeta">
                            <label htmlFor="largo" className="label"> Largo:</label>
                            <input type="number" id="largo" className="input" placeholder="0 cm" />
                        </div>
                        <div className="tarjeta" >
                            <label htmlFor="ancho" className="label"> Ancho:</label>
                            <input type="number" id="ancho" className="input" placeholder="0 cm" />
                        </div>
                        <div className="tarjeta">
                            <label htmlFor="alto" className="label"> Alto:</label>
                            <input type="number" id="Alto" className="input" placeholder="0 cm" />
                        </div>
                        <div className="tarjeta">
                            <label htmlFor="Resultado" className="label"> Volumen:</label>
                            <label htmlFor="Resultado"> Volumen:</label>
                        </div>
                    </div>

                    {/* Ingreso de  articulos*/}
                    {Mostrar && (
                        <div className="contenedor-2">
                            <div className="tarjeta">

                                <label htmlFor="repetitivo" className="label">¿Tu producto es repetitivo? </label>
                                <input type="checkbox" className=" h-5 w-5 ml-5 rounded-[10px]" />

                            </div>
                            <div className="tarjeta">
                                <label htmlFor="cantidad" className="label"> Cantidad de articulos:</label>
                                <input type="number" id="cantidadArticulos" className="input" placeholder="0 piezas" />
                            </div>

                        </div>
                    )}


                    {/* boton de envio cotizacion */}
                    <div className="contenedor-2">

                        <div className="tarjeta">
                            < h2 className="precio">
                                Precio:
                            </h2>
                            <h2 className="tipo">
                                {costo}
                            </h2>
                            <p className="p">
                                USD
                            </p>

                        </div>
                        <div className="tarjeta-envio">
                            <label htmlFor="valor" className="label">¿Listo para cotizar? </label>
                            <input type="submit" value="Enviar" className="button" />
                        </div>
                    </div>

                </form>
            </div>

        </section>
    );
}










