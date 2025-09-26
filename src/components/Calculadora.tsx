
// sE ESTA CALCULANDO EN DOLARES


"use client";
import AnimatedText from "@/animate/TextAnimate";
import "@/style/Calculadora.css";
import { useState, useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

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
    const [moneda, setMoneda] = useState("pesos"); // valor inicial


    //booleanos
    const [pallets, setPallets] = useState(false);
    const [caja, setCaja] = useState(false);
    // Estructruas de datos
    const tiposCajas = [
        { name: "Pallets" },
        { name: "Sobres" },
        { name: "Cajas" }
    ];

    const mensajes = [
        { name: "excesoArticulos", alert: "Tu carga excede de 20 articulos, para mejor cotización contacta con un asesor" },
        { name: "excesoAltoPallets", alert: "Tu carga excede de 180 cm para pallets, para mejor cotización contacta con un asesor" }
    ]

    //cada que cambie laro, ancho o alto se calcula el vol
    useEffect(() => {
        if (largo === "" || ancho === "" || alto === "") {
            return;
        }
        let volumenCM3 = 0;
        let volumenM3 = 0;
        let pesoMaxKg = 0;
        let precio = 0;

        volumenCM3 = largo * ancho * alto;
        volumenM3 = volumenCM3 / 1000000;
        pesoMaxKg = volumenM3 * 140;
        precio = (volumenCM3 / 6000) * 3

        setVolumen(pesoMaxKg);
    }, [largo, ancho, alto]);


    // CHECAR REPETITIVO Y CANTIDAD DE ARTICULOS
    useEffect(() => {
        if (cantidad === "" || cantidad < 20 || !repetitivo) {
            setCostoIVA(costoBase);
            return;
        }

        // si la cantida de ariculos es mas de 20 y es repetitiva agregar IVA
        let costoFinal = costoBase;
        if (pallets) {
            costoFinal = costoFinal + (costoFinal * 0.16)
        } else if (caja) {
            costoFinal = costoFinal + (costoFinal * 0.16) + 3
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
            setCaja(false);
            setLargo(120);
            setAncho(80);
            setAlto(180);
        } else if (select === "Sobres" || select === "Cajas") {
            setCaja(true);
            setPallets(false);
            setLargo("");
            setAncho("");
            setAlto("");
        } else {
            setPallets(false);
            setCaja(false);
            setLargo("");
            setAncho("");
            setAlto("");

        }
        // resetear inputs y cálculos
        SetValor("");
        setPeso("");
        setVolumen(0);
        setPrecioValor(0);
        setPrecioPeso(0);
        setCostoBase(0);
        setCostoIVA(0)
        setCantidad("");
        setRepetitivo(false);


    };


    function cotizacion(){
         if (cantidad === "" || cantidad < 20 || !repetitivo) {
            alert()
            return;
        }

        if (pallets || repetitivo || cantidad > 20){

        }
    }
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
                    </h2>,
                    < h2 key={2} className="subtitulo">
                        Esta calculadora es un aproximado, para una cotizacion completa contacte con un asesor
                    </h2>
                ]}>
            </AnimatedText>

            <div className="fondo-contenedor">

                <form action="/action_page.php" className="p-10 col-span-2">
                    {/* Seleccion tipo de contenedor */}
                    <div className="contenedor-2">
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
                    <div className="contenedor-2">
                        <div className="contenedor-filas-4">
                            {/* Ingreso de valor */}
                            <div className="tarjeta-notas">
                                <div className="tarjeta-salida">

                                    <label htmlFor="valor" className="label">Valor producto: </label>
                                    <input type="number" className="input" value={valor} onChange={handleChangeValor}
                                        placeholder="USD" />
                                </div>
                                <label className="notas">Se utilizan valores en USD</label>
                            </div>

                            {/* Ingreso de peso */}
                            <div className="tarjeta-notas">
                                <div className="tarjeta-salida">
                                    <label htmlFor="Peso" className="label">Peso: </label>
                                    <input type="number" className="input" value={peso} onChange={(e) =>
                                        setPeso(e.target.value === "" ? "" : Number(e.target.value))
                                    }
                                        onBlur={handleBlurPeso} placeholder={opcion === "USA" ? "lb" : "kg"} />
                                </div>
                                <label className="notas">Se cobra una comision en caso de sobrepasar el peso maximo permitido</label>
                            </div>

                            {/* producto repetitivo */}
                            <div className="tarjeta-notas">
                                <div className="tarjeta-salida">
                                    <label htmlFor="repetitivo" className="label">¿Tu producto es repetitivo? </label>
                                    <div className=" justify-end flex">
                                        <button type="button"
                                            onClick={() => setRepetitivo(true)}
                                            className={`px-4 py-2 rounded-lg font-semibold  w-20
                                    ${repetitivo ? "bg-blue-400 text-white" : "bg-gray-200 text-black"}`}
                                        >
                                            Si
                                        </button>

                                        <button type="button"
                                            onClick={() => setRepetitivo(false)}
                                            className={`px-4 py-2 rounded-lg font-semibold  w-20
                                    ${!repetitivo ? "bg-blue-400 text-white" : "bg-gray-200 text-black"}`}
                                        >
                                            No
                                        </button>
                                    </div>
                                </div>
                                <label className="notas">Se cobra 2 USD por kg soprepasado del peso maximo</label>
                           
                            </div>
                            {/* cantidad de articulos */}
                            <div className="tarjeta-notas">
                                <div className="tarjeta-salida">
                                    <label htmlFor="cantidad" className="label"> Cantidad de articulos:</label>
                                    <input type="number" className="input" value={cantidad} onChange={(e) =>
                                        setCantidad(e.target.value === "" ? "" : Number(e.target.value))} placeholder="0 piezas" />
                                </div>
                                <label className="notas">Mas de 20 cajas, contactar a un asesor</label>
                            </div>

                        </div>

                        <div className="contenedor-filas-4">
                            {/* largo */}
                            <div className="tarjeta-notas">
                                <div className="tarjeta-salida">
                                <label htmlFor="largo" className="label"> Largo:</label>
                                <input type="number" className="input" value={largo} disabled={pallets} onChange={handleChangeLargo} placeholder={opcion === "USA" ? "0 in" : "0 cm"} />
                            </div>
                             <label className="notas">Si pasa 60 cm se cobra exceso de dimensiones</label>
                           
                            </div>
                            {/* ancho */}
                            <div className="tarjeta-notas" >
                                <div className="tarjeta-salida">
                                <label htmlFor="ancho" className="label"> Ancho:</label>
                                <input type="number" className="input" value={ancho} disabled={pallets} onChange={handleChangeAncho} placeholder={opcion === "USA" ? "0 in" : "0 cm"} />
                            </div>
                              <label className="notas">Si pasa 60 cm se cobra exceso de dimensiones</label>
                            </div>
                            {/*alto  */}
                            <div className="tarjeta-notas">
                                <div className="tarjeta-salida">
                                <label htmlFor="alto" className="label"> Alto:</label>
                                <input type="number" className="input" value={alto} disabled={pallets} onChange={handleChangeAlto} placeholder={opcion === "USA" ? "0 in" : "0 cm"} />
                            </div>
                                 <label className="notas">Si pasa 60 cm se cobra exceso de dimensiones</label>
                           
                            </div>
                            {/* volumen */}
                            <div className="tarjeta-notas">
                                <div className="tarjeta-salida">

                                    <label className=""> Peso maximo: </label>

                                    <div className="contenedor-2">
                                        <h2 className="volumen">{volumen}</h2>
                                        <p className="label"> {opcion === "USA" ? " in3" : " cm3"}</p>
                                    </div>
                                </div>
                                <label className="notas"> En base al volumen proporcionado</label>

                            </div>

                        </div>
                    </div>

                    <div className="envio">
                        <input type="button" value="Enviar" className="button" />
                    </div>
                </form>

                <div className="">

                    {/* Precio final */}
                    <div className="mt-5">
                        {/* seleccion de unidades */}
                        <div className="mb-10">
                            <button type="button"
                                onClick={() => setOpcion("MXS")}
                                className={`px-4 py-2 rounded-lg font-semibold mt-10 w-28
                                    ${opcion === "MXS" ? "bg-blue-400 text-white" : "bg-gray-200 text-black"}`}
                            >
                                cm/kg
                            </button>

                            <button type="button"
                                onClick={() => setOpcion("USA")}
                                className={`px-4 py-2 rounded-lg font-semibold mt-10 w-28
                                    ${opcion === "USA" ? "bg-blue-400 text-white" : "bg-gray-200 text-black"}`}
                            >
                                in/lb
                            </button>
                        </div>
                        <div className="tarjeta-valor">
                            < h2 className="precio">
                                Precio:
                            </h2>
                            <h2 className="tipo">
                                {costoIVA}
                            </h2>
                            <p className="p">
                                {moneda === "pesos" ? " MXN" : " USD"}
                            </p>

                        </div>


                        <div className="envio">
                            <label htmlFor="valor" className="label">Alerta por exceso </label>
                            <input type="submit" value="Contactar" className="button" />
                        </div>

                    </div>
                </div>


            </div>


        </section>
    );
}










