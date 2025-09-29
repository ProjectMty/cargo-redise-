
// sE ESTA CALCULANDO EN DOLARES

"use client";
import AnimatedText from "@/animate/TextAnimate";
import "@/style/Calculadora.css";
import { useState, useEffect } from "react";

import FadeInOutError from "@/animate/FadeInOut";

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
    // const [precioValor, setPrecioValor] = useState(0);
    const [precioPeso, setPrecioPeso] = useState(0);
    // const [pesoMaximo, setPesoMaximo] = useState(0);

    // salidas
    // const [costoBase, setCostoBase] = useState<number>(0);
    const [costoIVA, setCostoIVA] = useState<number>(0);
    const [volumen, setVolumen] = useState<number>(0);
    const [opcion, setOpcion] = useState("MXS"); // valor inicial
    const [moneda, setMoneda] = useState("pesos"); // valor inicial

    //errores 
    const [errorValor, setErrorValor] = useState<{ error: boolean, message: string | null }>({ error: false, message: "Se utilizan valores en USD" });
    const [errorPeso, setErrorPeso] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Se cobra una comision en caso de sobrepasar el peso maximo permitido" });
    const [errorCantidad, setErrorCantidad] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Mas de 20 articulos se cobra 16% IVA" });
    const [errorLargo, setErrorLargo] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Si pasa 60 cm se cobra exceso de dimensiones" });
    const [errorAncho, setErrorAncho] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Si pasa 60 cm se cobra exceso de dimensiones" });
    const [errorAlto, setErrorAlto] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Si pasa 60 cm se cobra exceso de dimensiones" });



    //booleanos
    const [pallets, setPallets] = useState(false);
    const [caja, setCaja] = useState(false);


    // Estructruas de datos
    const tiposCajas = [
        { name: "Pallets" },
        { name: "Sobres" },
        { name: "Cajas" }
    ];

    //mensajes de alerta
    const mensajesSalida = [
        { name: "excesoArticulos", alert: "Tu carga excede de 20 articulos, para mejor cotización contacta con un asesor" },
        { name: "excesoAltoPallets", alert: "Tu carga excede de 180 cm para pallets, para mejor cotización contacta con un asesor" }
    ]

    //cada que cambie largo, ancho o alto se calcula el vol
    useEffect(() => {
        if (largo === "" || ancho === "" || alto === "") {
            return;
        }
        let volumenCM3 = 0;
        let volumenM3 = 0;
        let pesoMaxKg = 0;
        
        volumenCM3 = largo * ancho * alto;
        volumenM3 = volumenCM3 / 1000000;
        pesoMaxKg = volumenM3 * 140;
    
        setVolumen(pesoMaxKg);
    }, [largo, ancho, alto]);


    // CHECAR REPETITIVO Y CANTIDAD DE ARTICULOS
    // useEffect(() => {
    //     if (cantidad === "" || cantidad < 20 || !repetitivo) {
    //         setCostoIVA(costoBase);
    //         return;
    //     }

    //     // si la cantida de ariculos es mas de 20 y es repetitiva agregar IVA
    //     let costoFinal = costoBase;
    //     if (pallets) {
    //         costoFinal = costoFinal + (costoFinal * 0.16)
    //     } else if (caja) {
    //         costoFinal = costoFinal + (costoFinal * 0.16) + 3
    //     }

    //     setCostoIVA(costoFinal);

    // }, [cantidad, repetitivo])


    // al cambiar el input de cantidad de articulos
    useEffect(() => {
        console.log("cantidad:" + cantidad)
    }, [cantidad])

    // **************************************************************************************SELECCION
    //  al elegir el tipo de envio (select)
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
        
        setPrecioPeso(0);
        
        setCostoIVA(0)
        setCantidad("");
        setRepetitivo(false);


    };


    // **************************************************************************************VALOR 

    const handleValor = () => {
        if (valor === "" || valor === 0) {
            setErrorValor({
                error: true,
                message: "El campo valor no puede estar vacío"
            });
        } else {
            setErrorValor({
                error: false,
                message: "Se utilizan valores en USD"
            });

        }
    };

    // al cambiar el input de valor
    useEffect(() => {
        if (valor != "") {
            setErrorValor({
                error: false,
                message: "Se utilizan valores en USD"
            })
        }
        console.log("valor:" + valor)
    }, [valor])

    // **************************************************************************************PESO
    // manejar el precio por peso
    const handleBlurPeso = () => {
        if (peso === "" || peso === 0) {
            setErrorPeso({
                error: true,
                message: "El campo peso no puede estar vacío"
            });
            // setPrecioPeso(0);
            // setCostoBase(precioValor);
            return;
        } else {
            setErrorPeso({
                error: false,
                message: "Se cobra una comision en caso de sobrepasar el peso maximo permitido"
            });
        }

      
    };

    // al cambiar el input de peso
    useEffect(() => {
        if (peso != "") {
            setErrorPeso({
                error: false,
                message: "Se cobra una comision en caso de sobrepasar el peso maximo permitido"
            });
        }
        console.log("peso:" + peso)
    }, [peso])


    // **************************************************************************************CANTIDAD

    const handleCantidad = () => {

        if (cantidad === "" || cantidad === 0) {
            setErrorCantidad({
                error: true,
                message: "El campo cantidad no puede estar vacío"
            });
        } else {
            setErrorCantidad({
                error: false,
                message: "Mas de 20 articulos se cobra 16% IVA"
            });
        }
    };

    // al cambiar el input de cantidad
    useEffect(() => {
        if (cantidad != "") {
            setErrorCantidad({
                error: false,
                message: "Mas de 20 articulos se cobra 16% IVA"
            })
        }
        console.log("cantidad:" + cantidad)
    }, [cantidad])


    // OnChange de inputs
    function cotizacion() {
        if (cantidad === "" || cantidad < 20 || !repetitivo) {
            alert()
            return;
        }

        if (pallets || repetitivo || cantidad > 20) {

        }
    }

    // **************************************************************************************LARGO

    const handleLargo = () => {

        if (largo === "" || largo === 0) {
            setErrorLargo({
                error: true,
                message: "El campo largo no puede estar vacío"
            });
        } else if (largo > 300) {
            setErrorLargo({
                error: true,
                message: "El largo no puede ser mayor a 300 cm"
            });
        }
        else {
            setErrorLargo({
                error: false,
                message: "Si pasa 60 cm se cobra exceso de dimensiones"
            });
        }
    };

    useEffect(() => {
        if (largo != "") {
            setErrorLargo({
                error: false,
                message: "Si pasa 60 cm se cobra exceso de dimensiones"
            })
        }
        console.log("largo:" + largo)
    }, [largo])

    // **************************************************************************************ANCHO
    const handleAncho = () => {

        if (ancho === "" || ancho === 0) {
            setErrorAncho({
                error: true,
                message: "El campo ancho no puede estar vacío"
            });
        } else if (ancho > 300) {
            setErrorAncho({
                error: true,
                message: "El ancho no puede ser mayor a 300 cm"
            });
        } else {
            setErrorAncho({
                error: false,
                message: "Si pasa 60 cm se cobra exceso de dimensiones"
            });
        }
    };

    useEffect(() => {
        if (ancho != "") {
            setErrorAncho({
                error: false,
                message: "Si pasa 60 cm se cobra exceso de dimensiones"
            })
        }
        console.log("ancho:" + ancho)
    }, [ancho])


    // **************************************************************************************ALTO

    const handleAlto = () => {

        if (alto === "" || alto === 0) {
            setErrorAlto({
                error: true,
                message: "El campo alto no puede estar vacío"
            });
        } else if (alto > 300) {
            setErrorAlto({
                error: true,
                message: "El alto no puede ser mayor a 300 cm"
            });
        } else {
            setErrorAlto({
                error: false,
                message: "Si pasa 60 cm se cobra exceso de dimensiones"
            });
        }
    };

    useEffect(() => {
        if (alto != "") {
            setErrorAlto({
                error: false,
                message: "Si pasa 60 cm se cobra exceso de dimensiones"
            })
        }
        console.log("alto:" + alto)
    }, [alto])

    // **************************************************************************************FORMS
    // manejo de errores al enviar formulario
    const sendForms = () => {
        // validar que no sea vacio
        if (valor === "" || peso === "" || cantidad === ""  || largo === "" || ancho === "" || alto === "") {
            return;
        }

        // variables
        let precioSinIva = 0;
        let precioConIva = 0;
        let precioBase = 0;

        if (valor <= 119) {
            precioSinIva = 17;
        } else if (valor >= 120 && valor <= 475) {
            precioSinIva = valor * 0.14;
        } else if (valor >= 476 && valor < 3000) {
            precioSinIva = valor * 0.13;
        } else if (valor >= 3000) {
            precioSinIva = valor * 0.12;
        } 

        if (cantidad < 20) {
            precioConIva = precioSinIva
        } else {
            precioConIva = precioSinIva + (precioSinIva * 0.16)
        }



        switch (tipoSeleccionado) {
            case "Pallets":
                if (peso <= 500){
                    precioBase = precioConIva + 375 + (cantidad * 10);
                } else if (peso > 500){
                    precioBase = precioConIva + 515 + (cantidad * 10);
                }
                break;

            default:
                if( largo <= 60 && ancho <= 60 && alto <= 60 && peso < volumen){
                    precioBase = ((largo * ancho * alto)/6000) * 3
                } else {
                    precioBase = (peso - volumen) * 2
                }

                break;
        }

        setCostoIVA(precioBase);


    }


    return (
        <section id="calculadora" className="fondo-seccion">
            {/* texto de titulo animado */}
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

            {/* contenedor de calculadora */}
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

                    {/* contenedor de inputs */}
                    <div className="contenedor-2">

                        {/* contenedor primera columna */}
                        <div className="contenedor-filas-4">

                            {/* Ingreso de valor */}
                            <div className="tarjeta-notas">
                                <div className="tarjeta-salida">
                                    <label htmlFor="valor" className="label">Valor producto: </label>
                                    <input type="number" min="0" className="input" value={valor} onChange={(e) =>
                                        SetValor(e.target.value === "" ? "" : Number(e.target.value))}
                                        onBlur={handleValor}
                                        placeholder="USD" />
                                </div>

                                <FadeInOutError
                                    message={errorValor?.message ?? ""}
                                    error={errorValor?.error}
                                />
                            </div>

                            {/* Ingreso de peso */}
                            <div className="tarjeta-notas">
                                <div className="tarjeta-salida">
                                    <label htmlFor="Peso" className="label">Peso: </label>
                                    <input type="number" min="0" className="input" value={peso} onChange={(e) =>
                                        setPeso(e.target.value === "" ? "" : Number(e.target.value))}
                                        onBlur={handleBlurPeso} placeholder={opcion === "USA" ? "lb" : "kg"} />
                                </div>

                                <FadeInOutError
                                    message={errorPeso?.message ?? ""}
                                    error={errorPeso?.error}
                                />
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
                                <label className="notas">Es de la misma naturaleza</label>

                            </div>

                            {/* cantidad de articulos */}
                            <div className="tarjeta-notas">
                                <div className="tarjeta-salida">
                                    <label htmlFor="cantidad" className="label"> Cantidad de articulos:</label>
                                    <input type="number" min="0" className="input" value={cantidad} onChange={(e) =>
                                        setCantidad(e.target.value === "" ? "" : Number(e.target.value))}
                                        onBlur={handleCantidad}
                                        placeholder="0 piezas" />
                                </div>

                                <FadeInOutError
                                    message={errorCantidad?.message ?? ""}
                                    error={errorCantidad?.error}
                                />
                            </div>

                        </div>

                        {/* contenedor segunda columna */}
                        <div className="contenedor-filas-4">

                            {/* largo */}
                            <div className="tarjeta-notas">
                                <div className="tarjeta-salida">
                                    <label htmlFor="largo" className="label"> Largo:</label>
                                    <input type="number" min="0" className="input" value={largo} disabled={pallets}
                                        onChange={(e) => setLargo(e.target.value === "" ? "" : Number(e.target.value))}
                                        onBlur={handleLargo}
                                        placeholder={opcion === "USA" ? "0 in" : "0 cm"} />
                                </div>

                                <FadeInOutError
                                    message={errorLargo?.message ?? ""}
                                    error={errorLargo?.error}
                                />
                            </div>

                            {/* ancho */}
                            <div className="tarjeta-notas" >
                                <div className="tarjeta-salida">
                                    <label htmlFor="ancho" className="label"> Ancho:</label>
                                    <input type="number" min="0" className="input" value={ancho} disabled={pallets}
                                        onChange={(e) => setAncho(e.target.value === "" ? "" : Number(e.target.value))}
                                        onBlur={handleAncho}
                                        placeholder={opcion === "USA" ? "0 in" : "0 cm"} />
                                </div>

                                <FadeInOutError
                                    message={errorAncho?.message ?? ""}
                                    error={errorAncho?.error}
                                />
                            </div>

                            {/*alto  */}
                            <div className="tarjeta-notas">
                                <div className="tarjeta-salida">
                                    <label htmlFor="alto" className="label"> Alto:</label>
                                    <input type="number" min="0" className="input" value={alto} disabled={pallets}
                                        onChange={(e) => setAlto(e.target.value === "" ? "" : Number(e.target.value))}
                                        onBlur={handleAlto}
                                        placeholder={opcion === "USA" ? "0 in" : "0 cm"} />
                                </div>

                                <FadeInOutError
                                    message={errorAlto?.message ?? ""}
                                    error={errorAlto?.error}
                                />

                            </div>

                            {/* peso maximo por volumen */}
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

                    {/* envio de formulario */}
                    <div className="envio">
                        <input type="button" value="Enviar" onClick={sendForms} className="button" />
                    </div>


                </form>

                <div className="">

                    {/* Contenedor precio y alerta */}
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

                        {/* tarjeta de precio cambiante depues de presionar el boton */}
                        <div className="tarjeta-valor">
                            < h2 className="precio">
                                Precio:
                            </h2>
                            <h2 className="tipo">
                                {costoIVA}
                            </h2>

                            {/* moneda  */}
                            <p className="p">
                                {moneda === "pesos" ? " MXN" : " USD"}
                            </p>

                        </div>

                        {/* boton con alerta */}
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










