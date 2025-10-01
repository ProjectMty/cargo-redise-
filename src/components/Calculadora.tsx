
// sE ESTA CALCULANDO EN DOLARES

"use client";
import AnimatedText from "@/animate/TextAnimate";
import "@/style/Calculadora.css";
import { useState, useEffect, useCallback } from "react";
import { useCalculadoraVisible } from "../context/CalculadoraVisibleContext";
import PlaceholderAnimate from "@/animate/placeholderAnimate";

import FadeInOutError from "@/animate/FadeInOut";

export default function Calculadora() {
    const { visible } = useCalculadoraVisible();

    // inputs
    const [tipoSeleccionado, setTipoSeleccionado] = useState("");
    const [valor, SetValor] = useState<number | "">("");
    const [peso, setPeso] = useState<number | "">("");
    const [largo, setLargo] = useState<number | "">("");
    const [ancho, setAncho] = useState<number | "">("");
    const [alto, setAlto] = useState<number | "">("");
    const [cantidad, setCantidad] = useState<number | "">("");
    const [repetitivo, setRepetitivo] = useState(false);

    // salidas
    const [costoIVA, setCostoIVA] = useState<number>(0);
    const [volumen, setVolumen] = useState<number>(0);
    const [opcion, setOpcion] = useState("MXS"); // valor inicial

    //errores 
    const [errorValor, setErrorValor] = useState<{ error: boolean, message: string | null }>({ error: false, message: "Se utilizan valores en USD" });
    const [errorPeso, setErrorPeso] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Se cobra una comision en caso de sobrepasar el peso maximo permitido" });
    const [errorCantidad, setErrorCantidad] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Mas de 20 articulos se cobra 16% IVA" });
    const [errorLargo, setErrorLargo] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Si pasa 60 cm se cobra exceso de dimensiones" });
    const [errorAncho, setErrorAncho] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Si pasa 60 cm se cobra exceso de dimensiones" });
    const [errorAlto, setErrorAlto] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Si pasa 60 cm se cobra exceso de dimensiones" });

    //booleanos
    const [pallets, setPallets] = useState(false);
    const [asesor, setAsesor] = useState(false);


    // Estructruas de datos
    const tiposCajas = [
        { name: "Pallets" },
        { name: "Sobres" },
        { name: "Cajas" }
    ];

    // convertir peso max kg a peso max lb
    const convertirInToCm = useCallback(() => {

        const largoCm = Number(largo) * 2.54;
        const anchoCm = Number(ancho) * 2.54;
        const altoCm = Number(alto) * 2.54;

        const volumenCm = largoCm * anchoCm * altoCm;

        return volumenCm;
    }, [largo, ancho, alto])

    //cada que cambie largo, ancho o alto se calcula el vol
    useEffect(() => {
        if (largo === "" || ancho === "" || alto === "") {
            return;
        }
        let volumenInput = 0;
        let volumenM3 = 0;
        let pesoMaxKg = 0;

        if (opcion === "USA") {
            // en in
            volumenInput = convertirInToCm();

        } else {
            // en cm
            volumenInput = largo * ancho * alto;
        }
        volumenM3 = volumenInput / 1000000;
        pesoMaxKg = volumenM3 * 140;
        pesoMaxKg = Math.round((pesoMaxKg + Number.EPSILON) * 100) / 100;
        setVolumen(pesoMaxKg);
    }, [largo, ancho, alto, opcion, convertirInToCm]);



    // **************************************************************************************SELECCION
    //  al elegir el tipo de envio (select)
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const select = e.target.value;
        setTipoSeleccionado(select); // Actualiza el estado

        if (select === "Pallets") {
            setPallets(true);
            setLargo(120);
            setAncho(80);
            setAlto(180);
        } else if (select === "Sobres" || select === "Cajas") {
            setPallets(false);
            setLargo("");
            setAncho("");
            setAlto("");
        } else {
            setPallets(false);
            setLargo("");
            setAncho("");
            setAlto("");
        }
        // resetear inputs y cálculos
        SetValor("");
        setPeso("");
        setVolumen(0);
        setCostoIVA(0)
        setCantidad("");
        setRepetitivo(false);


    };

    // useEffect(() => {
    //     SetValor("");
    //     setPeso("");
    //     setVolumen(0);
    //     setCostoIVA(0)
    //     setCantidad("");
    //     setRepetitivo(false);
    //     setLargo("");
    //     setAncho("");
    //     setAlto("");
    // }, [opcion])


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
    }, [cantidad])


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
    }, [alto])

    // **************************************************************************************FORMS
    // manejo de errores al enviar formulario
    const sendForms = () => {
        // validar que no sea vacio
        if (valor === "" || peso === "" || cantidad === "" || largo === "" || ancho === "" || alto === "") {
            alert("Por favor llena todos los campos");
            return;
            //alerta de campos vacios 
        }

        // variables
        let precioSinIva = 0;
        let precioConIva = 0;
        let precioBase = 0;
        let calcularPrecio = 0;
        let precioPeso = 0;

        // honrararios
        if (valor <= 119) {
            precioSinIva = 17;
        } else if (valor >= 120 && valor <= 475) {
            precioSinIva = valor * 0.14;
        } else if (valor >= 476 && valor < 3000) {
            precioSinIva = valor * 0.13;
        } else if (valor >= 3000) {
            precioSinIva = valor * 0.12;
        }

        // agregar iva si son mas de 20 articulos
        if (cantidad < 20) {
            precioConIva = precioSinIva
        } else {
            precioConIva = precioSinIva + (valor * 0.16)
        }


        // convertir peso ingresado a libras
        let pesoLb = 0;
        if (opcion === "USA") {
            pesoLb = Number(peso);
        } else {
            pesoLb = Number(peso) * 2.2046;
        }

        // valor volumetrico dependiendo del tipo de envio
        switch (tipoSeleccionado) {
            case "Pallets":
                if (pesoLb <= 500) {
                    precioPeso = 375 + (cantidad * 10);
                } else if (pesoLb > 500) {
                    precioPeso = 515 + (cantidad * 10);
                }
                break;

            default:
                if (largo <= 60 || ancho <= 60 || alto <= 60 || peso < volumen) {
                    calcularPrecio = ((largo * ancho * alto) / 6000) * 3
                    precioBase = calcularPrecio + (cantidad * 3)
                } else {
                    calcularPrecio = (peso - volumen) * 2
                    precioBase = calcularPrecio + (cantidad * 3)
                }
                break;
        }


        // redondear a 2 decimales
        // precioBase = Math.round((precioBase + Number.EPSILON) * 100) / 100;
        // precioConIva = Math.round((precioConIva + Number.EPSILON) * 100) / 100;

        // asignar precio final
        precioBase = precioBase + precioConIva + precioPeso;
        precioBase = Math.round((precioBase + Number.EPSILON) * 100) / 100;
        setCostoIVA(precioBase);
    }


    if (!visible) return null;

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

                <form action="/action_page.php" className="lg:p-10 col-span-2">
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
                                    <label htmlFor="valorProd" className="label">Valor producto: </label>
                                    <input type="number" min="0" className=" input" value={valor} onChange={(e) =>
                                        SetValor(e.target.value === "" ? "" : Number(e.target.value))}
                                        onBlur={handleValor}
                                        placeholder="USD"
                                        id="valorProd" />
                                      
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
                                    <div className="md:contenedor-filas-2">
                                        <button type="button"
                                            onClick={() => setRepetitivo(true)}
                                            className={`px-4 py-2 rounded-lg font-semibold w-10 xl:w-20
                                    ${repetitivo ? "bg-blue-400 text-white" : "bg-gray-200 text-black"}`}
                                        >
                                            Si
                                        </button>

                                        <button type="button"
                                            onClick={() => setRepetitivo(false)}
                                            className={`px-4 py-2 rounded-lg font-semibold w-10 xl:w-20
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


                                    <h2 className="volumen">{volumen}</h2>


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
                        <div className="mb-10 flex justify-center gap-5">
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

                        {asesor ? (
                            <div className="tarjeta-forms">
                                <div className="tarjeta-ingreso">
                                    <label htmlFor="ContactName">Nombre: </label>
                                    <input type="text" name="name" id="ContactName" className="input-asesor" />

                                </div>

                                <div className="tarjeta-ingreso">
                                    <label htmlFor="ContactPhone">Teléfono: </label>
                                    <input type="text" name="phone" id="ContactPhone" className="input-asesor" />

                                </div>

                                <div className="tarjeta-ingreso">

                                    <label htmlFor="ContactEmail">Correo: </label>
                                    <input type="text" name="email" id="ContactEmail" className="input-asesor" />
                                </div>

                                <div className="tarjeta-ingreso">
                                    <label htmlFor="ContactAsunto">Asunto: </label>

                                    <textarea name="email" id="ContactAsunto" rows={4} cols={50} className="input-asesor" >

                                    </textarea>
                                </div>

                                <div className="button">
                                    <input type="submit" onClick={() => setAsesor(false)} value={"Enviar"} className="" />
                                </div>

                            </div>
                        ) : (
                            <div className="tarjeta-valor">
                                <h2 className="precio">
                                    Precio volumetrico:
                                </h2>
                                <h2 className="tipo">
                                    {costoIVA}
                                </h2>

                                {/* moneda  */}
                                <p className="p px-10">
                                    USD
                                </p>
                            </div>
                        )}

                        {/* boton con alerta */}
                        <div className="envio">

                            <input type="submit" value="Contactar asesor" className={asesor ? "hidden" : " button"} onClick={() => setAsesor(true)} />
                        </div>

                        {/* contenedor derecho */}

                    </div>

                </div>


            </div>


        </section>
    );
}










