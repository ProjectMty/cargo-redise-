// ranngo 1 < 119USD es cobro minimo direecto de $300MXN  *

// rango 2 $120 - $475 se multiplica el precio por el 14% *

// rango 3 $476-$3000 se multiplica por el 13% *

// rango 4 > $3000 se multiplica por el 12% *

// *************************************************************************************************************************
// poner una seleccion de pallets , sobres y cajas *

// si selecciona una pallet se le suma el valor ya establecido mas $10USD descargada + $375USD permitido hasta 500lb

// si supera las 500lb es el porcentaje ya calculado + los diez USD y el precio cambia de $375 a $515 USD 

// si es mercancia repetitiva mas de 20 articulos se cobra el 16% de IVA / Si selecciona pallet agregar text box tienes mercancía repetitiva if yes que aparezca cantidad mayo a 20 aumentar el 16%.

// si selecciono una caja o sobre se le suma el porcentaje con la compra mas $3UUSD y si son mas de 20 productos de la misma naturaleza 
//se le suma el 16% de IVA
//  ///para cajas y sobres
// 
// const volumenM3 = volumenCm3 / 1 000 000;
// const pesoMaximoKg = volumenM3 * 140;
// el precio (largoxanchoxalto/6000)*3  //constante de precio (3)


//determinar si el peso volumétrico es menor o mayor y tomar como base.

//pallets tiene largo y ancho /// altura max de 1.80 m (nota de maximo 1.80)

"use client";
import AnimatedText from "@/animate/TextAnimate";
import "@/style/Calculadora.css";
import { useState, useEffect } from "react";


export default function Calculadora() {
    // inputs
    const [tipoSeleccionado, setTipoSeleccionado] = useState("");
    const [valor, SetValor] = useState<number | "">("");
    const [peso, setPeso] = useState<number | "">("");
    const [largo, setLargo] = useState<number | "">("");
    const [ancho, setAncho] = useState<number | "">("");
    const [alto, setAlto] = useState<number | "">("");
    const [cantidad, setCantidad] = useState<number | "">("");
    const [repetitivo, setRepetitivo] = useState(false);
    // Guardado de datos
    const [precioValor, setPrecioValor] = useState(0);
    const [precioPeso, setPrecioPeso] = useState(0);
    // const [pesoMaximo, setPesoMaximo] = useState(0);

    // salidas
    const [costoBase, setCostoBase] = useState<number>(0);
    const [costoIVA, setCostoIVA] = useState<number>(0);
    const [volumen, setVolumen] = useState<number>(0);
    const [opcion, setOpcion] = useState("MXS"); // valor inicial


    //booleanos
    const [pallets, setPallets] = useState(false);

    // Estructruas de datos
    const tiposCajas = [
        { name: "Pallets" },
        { name: "Sobres" },
        { name: "Cajas" }
    ];

    //cada que cambie laro, ancho o alto se calcula el vol
    useEffect(() => {
        if (largo === "" || ancho === "" || alto === "") {
            return;
        }
        setVolumen(largo * ancho * alto);
    }, [largo, ancho, alto]);

    useEffect(() => {
        if (cantidad === "") {
            return;
        }

        // si la cantida de ariculos es mas de 20 y es repetitiva agregar IVA
        let costoFinal = costoBase;
        if (cantidad >= 20 && repetitivo) {
            costoFinal = costoFinal + (costoFinal * 0.16)
        }

        setCostoIVA(costoFinal);

    }, [cantidad, repetitivo, costoBase])

    // OnChange de inputs
    //  select
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const select = e.target.value;
        setTipoSeleccionado(select); // Actualiza el estado

        if (select === "Pallets") {
            setPallets(true);
            setLargo(120)
            setAncho(80)
        } else {
            setPallets(false);
            setLargo("");
            setAncho("");
        }
        // resetear inputs y cálculos
        SetValor("");
        setPeso("");
        setAlto("");
        setVolumen(0);
        setPrecioValor(0);
        setPrecioPeso(0);
        setCostoBase(0);
        setCostoIVA(0)
        setCantidad("");
        setRepetitivo(false);


    };

    // valor
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
        } else if (numeroIngresado >= 3000) {
            precio = numeroIngresado + (numeroIngresado * 0.12);

        }

        setPrecioValor(precio);
        console.log("precio  " + precio)
        console.log("$ peso  " + precioPeso)
        setCostoBase(precio + precioPeso);
    };

    // peso
    const handleBlurPeso = () => {
        if (peso === "") {
            setPrecioPeso(0);
            setCostoBase(precioValor);
            return;
        }
        if (pallets) {
            let usdPorPeso = 0;
            if (peso < 500) {
                usdPorPeso = 385;
            } else if (peso >= 500) {
                usdPorPeso = 525;
            }

            setPrecioPeso(usdPorPeso);
            if (pallets) {
                setCostoBase(precioValor + usdPorPeso);
            } else {
                setCostoBase(precioValor);
            }
        }
    };

    // volumen
    const handleChangeLargo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valorIngresado = e.target.value;
        const largoIngresado = valorIngresado === "" ? "" : Number(valorIngresado);
        setLargo(largoIngresado);

    }

    const handleChangeAncho = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valorIngresado = e.target.value;
        const anchoIngresado = valorIngresado === "" ? "" : Number(valorIngresado);
        setAncho(anchoIngresado);

    }

    const handleChangeAlto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valorIngresado = e.target.value;
        const altoIngresado = valorIngresado === "" ? "" : Number(valorIngresado);
        setAlto(altoIngresado);

    }



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
                <div className="flex gap-2 justify-end mr-16 -mb-16"> 
                    <button
                            onClick={() => setOpcion("MXS")}
                            className={`px-4 py-2 rounded-lg font-semibold mt-10 w-28
                                    ${opcion === "MXS" ? "bg-blue-400 text-white" : "bg-gray-200 text-black"}`}
                        >
                            cm/kg
                        </button>

                        <button
                            onClick={() => setOpcion("USA")}
                            className={`px-4 py-2 rounded-lg font-semibold mt-10 w-28
                                    ${opcion === "USA" ? "bg-blue-400 text-white" : "bg-gray-200 text-black"}`}
                        >
                            in/lb
                        </button>
                        </div>

                <form action="/action_page.php" className="p-10">
                    {/* Seleccion tipo de contenedor */}
                    <div className="contenedor-4">
                        <div className="contenedor-filas-2">
                            <label className="label">Tipo de Envío</label>
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

                        </div>

                        <div className="mt-10 text-center">
                            < h2 className="tipo">
                                {tipoSeleccionado}
                            </h2>

                        </div>


                       
                    </div>



                    <div className="contenedor-4">
                        {/* Ingreso de valor */}
                        <div className="tarjeta-input">
                            <label htmlFor="valor" className="label">Valor producto: </label>
                            <input type="number" className="input" value={valor} onChange={handleChangeValor} placeholder="USD" />
                        </div>

                        {/* Ingreso de peso */}
                        <div className="tarjeta-input">
                            <label htmlFor="Peso" className="label">Peso: </label>
                            <input type="number" className="input" value={peso} onChange={(e) =>
                                setPeso(e.target.value === "" ? "" : Number(e.target.value))
                            }
                                onBlur={handleBlurPeso} placeholder="lb" />
                        </div>

                        <div className="tarjeta-input">

                            <label htmlFor="repetitivo" className="label">¿Tu producto es repetitivo? </label>
                            <input type="checkbox" className="input" onChange={(e) => setRepetitivo(e.target.checked)} />

                        </div>
                        <div className="tarjeta-input">
                            <label htmlFor="cantidad" className="label"> Cantidad de articulos:</label>
                            <input type="number" className="input" value={cantidad} onChange={(e) =>
                                setCantidad(e.target.value === "" ? "" : Number(e.target.value))} placeholder="0 piezas" />
                        </div>

                    </div>

                    <div className="contenedor-4">

                        {/* largo */}
                        <div className="tarjeta-input">
                            <label htmlFor="largo" className="label"> Largo:</label>
                            <input type="number" className="input" value={largo} disabled={pallets} onChange={handleChangeLargo} placeholder="0 cm" />
                        </div>
                        {/* ancho */}
                        <div className="tarjeta-input" >
                            <label htmlFor="ancho" className="label"> Ancho:</label>
                            <input type="number" className="input" value={ancho} disabled={pallets} onChange={handleChangeAncho} placeholder="0 cm" />
                        </div>
                        {/*alto  */}
                        <div className="tarjeta-input">
                            <label htmlFor="alto" className="label"> Alto:</label>
                            <input type="number" className="input" value={alto} onChange={handleChangeAlto} placeholder="0 cm" />
                        </div>
                        {/* volumen */}
                        <div className="tarjeta-volumen">
                            <label className="label"> Volumen:</label>
                            <h2 className="volumen">{volumen}</h2>
                            <p className="label"> cm3</p>
                        </div>
                    </div>

                    {/* Precio final */}
                    <div className="mt-5">

                        <div className="tarjeta-valor">
                            < h2 className="precio">
                                Precio:
                            </h2>
                            <h2 className="tipo">
                                {costoIVA}
                            </h2>
                            <p className="p">
                                USD
                            </p>

                        </div>
                        {/* <div className="tarjeta-envio">
                            <label htmlFor="valor" className="label">¿Listo para cotizar? </label>
                            <input type="submit" value="Enviar" className="button" />
                        </div> */}
                    </div>

                </form>
            </div>

        </section>
    );
}










