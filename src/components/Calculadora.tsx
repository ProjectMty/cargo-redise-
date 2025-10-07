
// sE ESTA CALCULANDO EN DOLARES

"use client";
import AnimatedText from "@/animate/TextAnimate";
import "@/style/Calculadora.css";
import { useState, useEffect, useCallback } from "react";
import { useCalculadoraVisible } from "../context/CalculadoraVisibleContext";

import FadeInOutError from "@/animate/FadeInOut";
import AlertDialog from "@/extras/AlertDialog";

export default function Calculadora() {
    // context
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
    const [volumenLb, setVoluenLb] = useState<number>(0);
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

        // variables
        let volumenInput = 0;
        let volumenM3 = 0;
        let pesoMaxKg = 0;
        let pesoMaxLb = 0;

        if (opcion === "USA") {
            // en in
            volumenInput = largo * ancho * alto;
            pesoMaxLb = volumenInput / 139
            pesoMaxLb = Math.round((pesoMaxLb + Number.EPSILON) * 100) / 100;
            setVoluenLb(pesoMaxLb);
        } else {
            // en cm
            volumenInput = largo * ancho * alto;
            volumenM3 = volumenInput / 1000000;
            pesoMaxKg = volumenM3 * 140;
            pesoMaxKg = Math.round((pesoMaxKg + Number.EPSILON) * 100) / 100;
            setVolumen(pesoMaxKg);
        }


    }, [largo, ancho, alto, opcion, convertirInToCm]);



    // **************************************************************************************SELECCION
    //  al elegir el tipo de envio (select)
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const select = e.target.value;
        setTipoSeleccionado(select); // Actualiza el estado

        // resetear inputs y cálculos
        SetValor("");
        setPeso("");
        setVolumen(0);
        setCostoIVA(0)
        setCantidad("");
        setRepetitivo(false);
    };

    useEffect(() => {
        if (tipoSeleccionado === "Pallets") {
            setPallets(true);
            if (opcion === "USA") {
                setLargo(47.24);
                setAncho(31.49);
                setAlto(70.86);
            } else {
                setLargo(120);
                setAncho(80);
                setAlto(180);
            }
        } else if (tipoSeleccionado === "Sobres" || tipoSeleccionado === "Cajas") {
            setPallets(false);
            setLargo("");
            setAncho("");
            setAlto("");
            setVolumen(0);
            setVoluenLb(0);
            SetValor("");
            setPeso("");
            setCostoIVA(0)
            setCantidad("");
            setRepetitivo(false);
        } else {
            setPallets(false);
            setLargo("");
            setAncho("");
            setAlto("");
            setVolumen(0);
            setVoluenLb(0);
            SetValor("");
            setPeso("");
            setCostoIVA(0)
            setCantidad("");
            setRepetitivo(false);

        }
    }, [opcion, tipoSeleccionado]);

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
        let pesoKg = 0;
        let pesoLb = 0;

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

        // valor volumetrico dependiendo del tipo de envio
        switch (tipoSeleccionado) {
            case "Pallets":

                // convertir peso ingresado a libras

                if (opcion === "USA") {
                    pesoLb = Number(peso);
                } else {
                    pesoLb = Number(peso) * 2.2046;
                }

                if (pesoLb <= 500) {
                    precioPeso = 375 + (cantidad * 10);
                } else if (pesoLb > 500) {
                    precioPeso = 515 + (cantidad * 10);
                }
                break;

            case "Sobres":

                // precio en lb
                calcularPrecio = ((largo * ancho * alto) / 6000) * 3
                precioBase = calcularPrecio + (cantidad * 3)

                if (opcion === "USA") {
                    // pesoKg = Number(peso) * 0.45359237;
                    pesoLb = Number(peso);
                    if (pesoLb > volumenLb) {
                        const precioExcesoLb = (pesoLb - volumenLb) * 2
                        precioBase = precioBase + precioExcesoLb
                    }

                } else {
                    pesoKg = Number(peso);
                    if (pesoKg > volumen) {
                        const PrecioExcesoKg = (pesoKg - volumen) * 2
                        precioBase = precioBase + PrecioExcesoKg;
                    }
                }


                break;
            case "Cajas":

                // precio en lb
                calcularPrecio = ((largo * ancho * alto) / 6000) * 3
                precioBase = calcularPrecio + (cantidad * 3)

                if (opcion === "USA") {
                    // pesoKg = Number(peso) * 0.45359237;
                    pesoLb = Number(peso);
                    if (pesoLb > volumenLb) {
                        const precioExcesoLb = (pesoLb - volumenLb) * 2
                        precioBase = precioBase + precioExcesoLb
                    }

                } else {
                    pesoKg = Number(peso);
                    if (pesoKg > volumen) {
                        const PrecioExcesoKg = (pesoKg - volumen) * 2
                        precioBase = precioBase + PrecioExcesoKg;
                    }
                }
                break;
            default:

                break;
        }



        // asignar precio final
        precioBase = precioBase + precioConIva + precioPeso;
        precioBase = Math.round((precioBase + Number.EPSILON) * 100) / 100;
        setCostoIVA(precioBase);
    }


    const sendDatosContacto = () => {

        <AlertDialog/>
    }

    if (!visible) return null;

    return (
        <section id="calculadora" className="fondo-seccion">
            <div className="contenedor-calculadora">
                {/* texto de titulo animado */}
                <AnimatedText
                    delay={0.2}
                    lines={[
                        < h2 key={1} className="encabezado">
                            Calculadora
                        </h2>,
                        < h2 key={2} className="subtitulo">
                            Esta calculadora es un aproximado, para una cotizacion completa contacte con un asesor
                        </h2>

                    ]}>
                </AnimatedText>

                {/* contenedor de calculadora */}
                <div className="fondo-contenedor">

                    <form action="/action_page.php" className="lg:px-10 pb-5 col-span-4">
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

                            <div className="md:mt-28 xl:mt-10 mt-3 text-center col-span-2">
                                < h2 className="tipo">
                                    {tipoSeleccionado}
                                </h2>
                            </div>

                            <div className="grid-cols-2 text-center ">
                                <button type="button"
                                    onClick={() => setOpcion("MXS")}
                                    className={`px-4 py-2 rounded-lg font-semibold md:mt-10 w-28 mr-1
                                    ${opcion === "MXS" ? "bg-blue-400 text-white" : "bg-gray-200 text-black"}`}
                                >
                                    cm/kg
                                </button>
                                <button type="button"
                                    onClick={() => setOpcion("USA")}
                                    className={`px-4 py-2 rounded-lg font-semibold md:mt-10 w-28
                                    ${opcion === "USA" ? "bg-blue-400 text-white" : "bg-gray-200 text-black"}`}
                                >
                                    in/lb
                                </button>
                            </div>



                        </div>

                        {/* contenedor de inputs */}
                        <div className="contenedor-filas-2">


                            {/* contenedor primera columna */}
                            <div className="contenedor-4">

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
                                                className={`button-repetitivo
                                                ${repetitivo ? "bg-blue-400 text-white" : "bg-gray-200 text-black"}`}
                                            >
                                                Si
                                            </button>

                                            <button type="button"
                                                onClick={() => setRepetitivo(false)}
                                                className={`button-repetitivo
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
                            <div className="contenedor-4">

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
                                        <h2 className="volumen">
                                            {opcion === "USA" ? volumenLb : volumen}
                                        </h2>
                                    </div>
                                    <label className="notas"> En base al volumen proporcionado</label>
                                </div>

                            </div>
                        </div>

                        {/* envio de formulario */}



                    </form>

                    {/* boton cotizar y contactar asesor */}
                    <div className="lg:contenedor-filas-2 lg:mx-10 items-center ">
                        <div className="envio ">
                            <input type="button" value="Cotizar" onClick={sendForms} className=" button" />
                            <input type="submit" value="Contactar asesor" className={asesor ? "button-disabled" : " button"} onClick={() => setAsesor(true)} />
                        </div>

                    </div>

                    {/* precio calculado */}
                    <div className="col-span-4 lg:col-span-3 lg:mr-10 lg:ml-7 mt-10 md:mt-0">
                        <div className="contenedor-filas-2">
                            <div className="tarjeta-costo">
                                <h2 className="precio-texto">
                                    Costo:
                                </h2>
                                <h2 className="precio-resultado">
                                    {costoIVA}
                                </h2>

                                {/* moneda  */}
                                <p className="p">
                                    USD
                                </p>

                            </div>


                        </div>


                    </div>

                    {asesor ? (
                        <div className="col-span-4 md:-mt-16 mt-5">
                            <AnimatedText
                                delay={0.2}
                                lines={[
                                    < h2 key={2} className="subtitulo">
                                        Ingrese sus datos para una cotizacion
                                    </h2>
                                ]}>
                            </AnimatedText>
                        </div>
                    ) : (
                        <div></div>
                    )}


                    {/* boton de enviar forms con datos de contacto */}
                    <div className="contenedor-filas-2 md:mx-10 items-center">
                        <div className="envio">
                            <input type="button" value="Enviar Datos" onClick={sendDatosContacto} className={asesor ? "button mb-2" : "hidden"} />
                            <input type="submit" value="Cerrar formulario" className={asesor ? "button" : "hidden"} onClick={() => setAsesor(false)} />
                        </div>
                    </div>


                    {asesor ? (
                        <div className="col-span-4 md:col-span-3 md:mr-10 md:ml-7">

                            <div className="lg:contenedor-3 mb-5">
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

                                <div className="tarjeta-asunto">
                                    <label htmlFor="ContactAsunto">Asunto: </label>

                                    <textarea name="email" id="ContactAsunto" rows={4} cols={50} className="input-asunto " >

                                    </textarea>
                                </div>

                            </div>

                        </div>


                    ) : (
                        <div></div>
                    )}



                </div>
            </div>



        </section>
    );
}










