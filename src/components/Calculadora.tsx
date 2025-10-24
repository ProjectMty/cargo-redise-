
// sE ESTA CALCULANDO EN DOLARES
"use client";
import AnimatedText from "@/animate/TextAnimate";
import "@/style/Calculadora.css";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useCalculadoraVisible } from "../context/CalculadoraVisibleContext";
import Swal from 'sweetalert2'
import FadeInOutError from "@/animate/FadeInOut";
import ReCAPTCHA from "react-google-recaptcha"

// cotizacion pdf

import { pdf } from "@react-pdf/renderer";
import PDF from "././Cotizador/estiloPdf";

export default function Calculadora() {

    // #region Declaraciones

    // Estructruas de datos
    const tiposCajas = [
        { name: "Pallets" },
        { name: "Sobres" },
        { name: "Cajas" }
    ];

    const tiposDestino = [
        { id: "Recoge", name: "Recoger en monterrey" },
        { id: "Envia", name: "Enviar a casa o negocio" }
    ];
    interface Direccion {
        additional_info?: {
            street?: string | null;
        };
        coordinates?: {
            latitude?: string;
            longitude?: string;
        };
        country?: {
            name?: string;
            code?: string;
        };
        info?: {
            stat?: string;
            stat_8digit?: string;
            time_zone?: string;
            utc?: string;
        };
        locality?: string;
        regions?: {
            region_1?: string;
            region_2?: string;
            region_3?: string;
            region_4?: string;
        };
        state?: {
            name?: string;
            iso_code?: string;
        };
        suburbs?: string[];
        zip_code?: string;
    }

    // context
    const { visible } = useCalculadoraVisible();
    const captcha = useRef<ReCAPTCHA | null>(null);

    // inputs
    const [tipoSeleccionado, setTipoSeleccionado] = useState("");
    const [valor, SetValor] = useState<number | "">("");
    const [peso, setPeso] = useState<number | "">("");
    const [largo, setLargo] = useState<number | "">("");
    const [ancho, setAncho] = useState<number | "">("");
    const [alto, setAlto] = useState<number | "">("");
    const [cantidad, setCantidad] = useState<number | "">("");
    const [repetitivo, setRepetitivo] = useState(false);
    const [nombre, SetNombre] = useState("");
    const [telefono, SetTelefono] = useState("");
    const [correo, SetCorreo] = useState("");
    const [asunto, SetAsunto] = useState("");
    const [cantidadSeleccion, setCantidadSeleccion] = useState<number | "">("");
    const [cpDestino, setCpDestino] = useState<number | "">("");
    // PDF
    const [precioSinIVA, setPrecioSinIVA] = useState<number>(0);
    const [precioConIVA, setPrecioConIVA] = useState<number>(0);
    const [precioPorPeso, setPrecioPorPeso] = useState<number | "">("");
    const [precioPorExcesoPeso, setPrecioPorExcesoPeso] = useState<number | "">("");
    const [precioBase, setPrecioBase] = useState<number | "">("");
    const [precioPorCantidad, setPrecioPorCantidad] = useState<number | "">("");

    // salidas
    const [costoIVA, setCostoIVA] = useState<number>(0);
    const [volumen, setVolumen] = useState<number>(0);
    const [volumenLb, setVoluenLb] = useState<number>(0);
    const [opcion, setOpcion] = useState("MXS"); // valor inicial
    const [entrega, setEntrega] = useState("Recoge"); // valor inicial
    const [direccionRecibida, setDireccionRecibida] = useState<Direccion[] | null>(null);
    //errores 
    const [errorValor, setErrorValor] = useState<{ error: boolean, message: string | null }>({ error: false, message: "Se utilizan valores en USD" });
    const [errorPeso, setErrorPeso] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Se cobra una comision en caso de sobrepasar el peso maximo permitido" });
    const [errorCantidad, setErrorCantidad] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Mas de 20 articulos se cobra 16% IVA" });
    const [errorLargo, setErrorLargo] = useState<{ error: boolean, message: string } | null>({ error: false, message:  "Si pasa 60 cm se cobra exceso de dimensiones" });
    const [errorAncho, setErrorAncho] = useState<{ error: boolean, message: string } | null>({ error: false, message:  "Si pasa 60 cm se cobra exceso de dimensiones" });
    const [errorAlto, setErrorAlto] = useState<{ error: boolean, message: string } | null>({ error: false, message:  "Si pasa 60 cm se cobra exceso de dimensiones" });
    const [errorCosto, setErrorCosto] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Costo aproximado" });
    const [errorTelefono, setErrorTelefono] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Telefono con formato internacional" });
    const [errorCorreo] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Correo valido" });
    const [errorDestinatario, setErrorDestinatario] = useState<{ error: boolean, message: string } | null>({ error: false, message: "Por favor, proporciona el código postal del destino del paquete." });

    //booleanos
    const [pallets, setPallets] = useState(false);
    const [asesor, setAsesor] = useState(false);
    const [captchaValido, setCaptchaValido] = useState(false);
    const [exceso, setExceso] = useState(false);




    // #endregion

    // #region VOLUMEN
    // convertir pulgadas a centimetros y devolver el volumen
    const convertirInToCm = useCallback(() => {
        const largoCm = Number(largo) * 2.54;
        const anchoCm = Number(ancho) * 2.54;
        const altoCm = Number(alto) * 2.54;

        const volumenCm = largoCm * anchoCm * altoCm;

        return volumenCm;
    }, [largo, ancho, alto])


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
            volumenInput = convertirInToCm();
        } else {
            // en cm
            volumenInput = largo * ancho * alto;
        }

        volumenM3 = volumenInput / 1000000;
        pesoMaxKg = volumenM3 * 140;
        pesoMaxKg = Math.round((pesoMaxKg + Number.EPSILON) * 100) / 100;
        setVolumen(pesoMaxKg);

        pesoMaxLb = pesoMaxKg * 2.20462
        pesoMaxLb = Math.round((pesoMaxLb + Number.EPSILON) * 100) / 100;
        setVoluenLb(pesoMaxLb);
        console.log(volumenLb);
    }, [largo, ancho, alto, opcion, convertirInToCm, volumenLb]);

    // #endregion

    // #region SELECCION
    //al elegir el tipo de envio (select)
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


    const LimpiarCamposFormulario = useCallback(() => {
        SetNombre("");
        SetTelefono("");
        SetCorreo("");
        SetAsunto("");
    }, []);
    const LimpiarErrores = useCallback(() => {
        setErrorValor({ error: false, message: "Se utilizan valores en USD" });
        setErrorPeso({ error: false, message: "Se cobra una comision en caso de sobrepasar el peso maximo permitido" });
        setErrorCantidad({ error: false, message: "Mas de 20 articulos se cobra 16% IVA" });

        setErrorCosto({ error: false, message: "Costo aproximado" });
        setErrorTelefono({ error: false, message: "Telefono con formato internacional" });
        setErrorDestinatario({ error: false, message: "Por favor, proporciona el código postal del destino del paquete." });

    }, []);

    useEffect(() => {
        if (opcion === "USA") {
            setErrorLargo({
                error: false,
                message: "Si pasa 23 in se cobra exceso de dimensiones"
            });
            setErrorAlto({
                error: false,
                message: "Si pasa 23 in se cobra exceso de dimensiones"
            });
            setErrorAncho({
                error: false,
                message: "Si pasa 23 in se cobra exceso de dimensiones"
            });
        } else {
            setErrorLargo({
                error: false,
                message: "Si pasa 60 cm se cobra exceso de dimensiones"
            });
            setErrorAlto({
                error: false,
                message: "Si pasa 60 cm se cobra exceso de dimensiones"
            });
            setErrorAncho({
                error: false,
                message: "Si pasa 60 cm se cobra exceso de dimensiones"
            });
        }

    }, [opcion, LimpiarErrores]);

    const LimpiarCampos = useCallback(() => {
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
        setDireccionRecibida(null);
        setEntrega("Recoge");
        setExceso(false);
        setCantidadSeleccion("");
        setCpDestino("");
        LimpiarCamposFormulario();
        LimpiarErrores();
    }, [LimpiarCamposFormulario, LimpiarErrores]);



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
            LimpiarCampos();
        } else {
            LimpiarCampos();

        }


    }, [opcion, tipoSeleccionado, LimpiarCampos]);
    // #endregion

    // #region VALOR 

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
    // #endregion

    // #region PESO
    // manejar el precio por peso
    const handleBlurPeso = () => {
        if (peso === "" || peso === 0) {
            setErrorPeso({
                error: true,
                message: "El campo peso no puede estar vacío"
            });

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

    // #endregion

    // #region CANTIDAD

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

    // #endregion

    // #region LARGO

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
            if (opcion === "USA") {
                setErrorLargo({
                    error: false,
                    message: "Si pasa 23 in se cobra exceso de dimensiones"
                })
            } else {
                setErrorLargo({
                    error: false,
                    message: "Si pasa 60 cm se cobra exceso de dimensiones"
                });
            }

        }


    };

    useEffect(() => {
        if (opcion === "USA") {
            setErrorLargo({
                error: false,
                message: "Si pasa 23 in se cobra exceso de dimensiones"
            })
        } else {
            setErrorLargo({
                error: false,
                message: "Si pasa 60 cm se cobra exceso de dimensiones"
            });
        }

    }, [largo, opcion])

    // #endregion

    // #region ANCHO
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
            if (opcion === "USA") {
                setErrorAncho({
                    error: false,
                    message: "Si pasa 23 in se cobra exceso de dimensiones"
                })
            } else {
                setErrorAncho({
                    error: false,
                    message: "Si pasa 60 cm se cobra exceso de dimensiones"
                });
            }
        }
    };

    useEffect(() => {
        if (opcion === "USA") {
            setErrorAncho({
                error: false,
                message: "Si pasa 23 in se cobra exceso de dimensiones"
            })
        } else {
            setErrorAncho({
                error: false,
                message: "Si pasa 60 cm se cobra exceso de dimensiones"
            });
        }
    }, [opcion, ancho])

    // #endregion

    // #region ALTO

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
            if (opcion === "USA") {
                setErrorAlto({
                    error: false,
                    message: "Si pasa 23 in se cobra exceso de dimensiones"
                })
            } else {
                setErrorAlto({
                    error: false,
                    message: "Si pasa 60 cm se cobra exceso de dimensiones"
                });
            }
        }
    };

    useEffect(() => {
        if (opcion === "USA") {
            setErrorAlto({
                error: false,
                message: "Si pasa 23 in se cobra exceso de dimensiones"
            })
        } else {
            setErrorAlto({
                error: false,
                message: "Si pasa 60 cm se cobra exceso de dimensiones"
            });
        }
    }, [opcion, alto])

    // #endregion

    // #region Cotizacion
    // manejo de errores al enviar formulario
    const validarCP = async () => {
        try {
            const url = `https://geocodes.envia.com/zipcode/MX/${encodeURIComponent(cpDestino)}`;

            const response = await fetch(url, {
                method: "GET",

            });
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            const data = await response.json();
            setDireccionRecibida(data);
        

            if (Array.isArray(data) && data.length > 0) {
                setErrorDestinatario({ error: false, message: "Si tu envío se encuentra dentro del área metropolitana, se aplicará una tarifa de 9.50 USD" });
            } else {
                setErrorDestinatario({ error: true, message: "Por favor, proporciona el código postal del destino del paquete." });
            }


        } catch (error) {
            console.error("Error validando el cp:", error);
            setErrorDestinatario({ error: true, message: "Por favor, proporciona un código postal valido del destino del paquete." });
        }
    };

    const sendForms = () => {
        // validar que no sea vacio
        if (valor === "" || peso === "" || cantidad === "" || largo === "" || ancho === "" || alto === "" || tipoSeleccionado === "" || cantidadSeleccion === "") {
            //alerta de campos vacios 
            setErrorCosto({
                error: true,
                message: "Debes ingresar todos los campos"
            })
            Swal.fire({
                title: "ERROR",
                text: "Necesitas llenar todos los campos",
                icon: "error"
            });
            return;
        }
        if (entrega === "Enviar") {

            if (!direccionRecibida || direccionRecibida.length === 0) {

                Swal.fire({
                    title: "ERROR",
                    text: "Necesitas llenar direccion de envio",
                    icon: "error"
                });
                return;
            }

        }

        // variables
        let precioSinIva = 0;
        let precioConIva = 0;
        let precioBase = 0;
        let calcularPrecio = 0;
        let precioPeso = 0;
        let pesoKg = 0;
        let pesoLb = 0;
        let volumenCm = 0;


        // honrararios
        if (valor <= 119) {
            precioSinIva = (valor + 17);
        } else if (valor >= 120 && valor <= 475) {
            precioSinIva = (valor / (1 - 0.14));
        } else if (valor >= 476 && valor < 3000) {
            precioSinIva = (valor / (1 - 0.13));
        } else if (valor >= 3000) {
            precioSinIva = (valor / (1 - 0.12));
        }

        precioSinIva = Math.round((precioSinIva + Number.EPSILON) * 100) / 100;
        setPrecioSinIVA(precioSinIva)

        // agregar iva si son mas de 20 articulos
        if (cantidad < 20) {
            precioConIva = precioSinIva
            setPrecioConIVA(0)
        } else {
            precioConIva = precioSinIva + (valor * 0.16)
            precioConIva = Math.round((precioConIva + Number.EPSILON) * 100) / 100;
            setPrecioConIVA(precioConIva)
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
                    precioPeso = 375 + (cantidadSeleccion * 10);
                    setErrorCosto({
                        error: false,
                        message: "El peso ingresado entra en el rango"
                    })
                } else if (pesoLb > 500) {
                    precioPeso = 515 + (cantidadSeleccion * 10);
                    setErrorCosto({
                        error: true,
                        message: "El peso ingresado excede el peso maximo. Se cobrara costo de sobrepeso"
                    })
                    setExceso(true);
                }

                setPrecioPorPeso(precioPeso);
                setPrecioPorExcesoPeso(0);
                setPrecioBase(0);
                setPrecioPorCantidad(cantidadSeleccion * 10);
                break;

            case "Sobres":

                if (opcion === "USA") {
                    volumenCm = convertirInToCm()
                    calcularPrecio = ((volumenCm) / 6000) * 3
                    precioBase = calcularPrecio + (cantidadSeleccion * 3)
                    pesoKg = Number(peso) * 0.45359237;
                } else {
                    calcularPrecio = ((largo * ancho * alto) / 6000) * 3
                    precioBase = calcularPrecio + (cantidadSeleccion * 3)
                    pesoKg = Number(peso);
                }
                setPrecioPorCantidad(cantidadSeleccion * 3);
                calcularPrecio = Math.round((calcularPrecio + Number.EPSILON) * 100) / 100;
                setPrecioBase(calcularPrecio);

                if (pesoKg > volumen) {
                    let PrecioExcesoKg = (pesoKg - volumen) * 2
                    precioBase = precioBase + PrecioExcesoKg;
                    PrecioExcesoKg = Math.round((PrecioExcesoKg + Number.EPSILON) * 100) / 100;
                    setPrecioPorExcesoPeso(PrecioExcesoKg);
                    setErrorCosto({
                        error: true,
                        message: `El peso ingresado excede el peso maximo. Se cobrara ${PrecioExcesoKg} USD por sobrepeso`
                    })
                    setExceso(true);
                } else {
                    setErrorCosto({
                        error: false,
                        message: "Costo de cotizacion aproximado"
                    })
                    setExceso(false);
                }

                setPrecioPorPeso(0);
                break;

            case "Cajas":

                if (opcion === "USA") {
                    volumenCm = convertirInToCm()
                    calcularPrecio = ((volumenCm) / 6000) * 3
                    precioBase = calcularPrecio + (cantidadSeleccion * 3)
                    pesoKg = Number(peso) * 0.45359237;
                } else {
                    calcularPrecio = ((largo * ancho * alto) / 6000) * 3
                    precioBase = calcularPrecio + (cantidadSeleccion * 3)
                    pesoKg = Number(peso);
                }
                setPrecioPorCantidad(cantidadSeleccion * 3);
                calcularPrecio = Math.round((calcularPrecio + Number.EPSILON) * 100) / 100;
                setPrecioBase(calcularPrecio);

                if (pesoKg > volumen) {
                    let PrecioExcesoKg = (pesoKg - volumen) * 2
                    precioBase = precioBase + PrecioExcesoKg;
                    PrecioExcesoKg = Math.round((PrecioExcesoKg + Number.EPSILON) * 100) / 100;
                    setPrecioPorExcesoPeso(PrecioExcesoKg);
                    setErrorCosto({
                        error: true,
                        message: `El peso ingresado excede el peso maximo. Se cobrara ${PrecioExcesoKg} USD por sobrepeso`
                    })
                    setExceso(true);
                }
                setErrorCosto({
                    error: false,
                    message: "Costo de cotizacion aproximado"
                })
                setExceso(false);
                setPrecioPorPeso(0);
                break;

            default:

                break;
        }

        // asignar precio final

        precioBase = precioBase + precioConIva + precioPeso;
        if (entrega === "Envio") {
            precioBase = precioBase + 9.5;
        }
        precioBase = Math.round((precioBase + Number.EPSILON) * 100) / 100;
        setCostoIVA(precioBase);
    }
    // #endregion

    // #region Formulario

    const handleChangeTelefono = (e: React.ChangeEvent<HTMLInputElement>) => {
        // eliminar todo lo que no sea número
        let numeros = e.target.value.replace(/\D/g, "").slice(0, 10);


        if (numeros.length > 6) {
            numeros = `(${numeros.slice(0, 3)}) ${numeros.slice(3, 6)}-${numeros.slice(6)}`;
        } else if (numeros.length > 3) {
            numeros = `(${numeros.slice(0, 3)}) ${numeros.slice(3)}`;
        } else if (numeros.length > 0) {
            numeros = `(${numeros}`;
        }

        SetTelefono(numeros);

        const digitos = numeros.replace(/\D/g, "");
        if (digitos.length < 10) {
            setErrorTelefono({ error: true, message: "Ingresa un numero valido de 10 digitos" });
        } else {
            setErrorTelefono({ error: false, message: "Telefono con formato internacional" });
        }
    };

    const hanleReCaptcha = () => {

        if (!captcha.current) return;


        const value = captcha.current.getValue();
        if (value) {
            setCaptchaValido(true);
        } else {
            setCaptchaValido(false);
        }
    }

    const handleEnviarPDF = async () => {


        let pdfBase64 = localStorage.getItem("pdfBase64");

        if (!pdfBase64) {
            Swal.fire({
                title: "ERROR",
                text: "no hay pdf disponible",
                icon: "error"
            });
            return;
        }
        pdfBase64 = pdfBase64.includes(",") ? pdfBase64.split(",")[1] : pdfBase64;

        const body = {
            nombre: nombre,
            compañia: "CargoMty",
            pdfBase64: pdfBase64
        };
        // Enviar al backend
        const response = await fetch("/API/enviarEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        Swal.fire({
            title: "Correo enviado",
            text: data.message,
            icon: "success",
            timer: 3000
        });
        LimpiarCampos();
        setAsesor(false);
        setTipoSeleccionado("");

    };

    const sendContact = async () => {
        // validar que no sea vacio
        if (valor === "" || peso === "" || cantidad === "" || largo === "" || ancho === "" || alto === "" || tipoSeleccionado === "" || cantidadSeleccion === "") {

            Swal.fire({
                title: "Cotización",
                text: "Necesitas llenar todos los campos de cotización",
                icon: "error"
            });
            return;
        }
        if (nombre === "" || telefono === "" || correo === "" || asunto === "") {
            Swal.fire({
                title: "Contacto",
                text: "Necesitas llenar todos los campos de contacto",
                icon: "error"
            });

            return;
        }
        if (captchaValido) {
            console.log("usuario no robot")
        } else {
            Swal.fire({
                title: "ALERTA",
                text: "Debes contestar el reCAPTCHA",
                icon: "error"
            });

        }

        try {
            const blob = await pdf(
                <PDF
                    tipoSeleccionado={tipoSeleccionado}
                    valor={valor}
                    peso={peso}
                    largo={largo}
                    ancho={ancho}
                    alto={alto}
                    cantidad={cantidad}
                    repetitivo={repetitivo}
                    nombre={nombre}
                    telefono={telefono}
                    correo={correo}
                    asunto={asunto}
                    costoIVA={costoIVA}
                    unidades={opcion}
                    costoSinIva={precioSinIVA}
                    constoConIva={precioConIVA}
                    precioPorPeso={precioPorPeso}
                    precioPorExcesoPeso={precioPorExcesoPeso}
                    precioBase={precioBase}
                    precioCantidad={precioPorCantidad}
                    cantidadSeleccion={cantidadSeleccion}
                    direccionRecibida={direccionRecibida}
                    entrega={entrega}
                />
            ).toBlob();

            // Convertir a base64
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result as string;
                localStorage.setItem("pdfBase64", base64data);
            };

            Swal.fire({
                title: "Cargando Datos",

                timer: 1000,
                timerProgressBar: true,
            });

            handleEnviarPDF();


        } catch (error) {
            console.error("☠️ Error generando PDF ☠️: ", error);
        }

    }
    // #endregion

    if (!visible) return null;

    return (
        <section id="calculadora" className="fondo-seccion">
            {/* texto de titulo animado */}

            <div className="block">
                <div className="contenedor-titulo">
                    <AnimatedText
                        delay={0.2}
                        lines={[
                            < h2 key={1} className="encabezado ">
                                Calculadora
                            </h2>,
                            < h2 key={2} className="subtitulo ">
                                Esta calculadora es un aproximado, para una cotizacion completa contacte con un asesor
                            </h2>

                        ]}>
                    </AnimatedText>
                </div>


                <div className="contenedor-calculadora">

                    {/* contenedor de calculadora */}
                    <div className="fondo-contenedor">

{/* ESPACIADO */}
                        <div className="col-span-4">
                        </div>

{/* UNIDADES */}
                        <div className="contenedor-filas-2">
                            <div className="flex input p-1">
                                <button type="button"
                                    onClick={() => setOpcion("MXS")}
                                    className={`switch-opciones
                                    ${opcion === "MXS" ? "bg-blue-400 text-white" : " text-[#000000]/35"}`}
                                >
                                    KG/CM
                                </button>
                                <button type="button"
                                    onClick={() => setOpcion("USA")}
                                    className={`switch-opciones
                                    ${opcion === "USA" ? "bg-blue-400 text-white" : " text-[#000000]/35"}`}
                                >
                                    LB/IN
                                </button>
                            </div>

                        </div>

{/* TIPO DE ENVIO */}
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
                            <FadeInOutError
                                message="Selecciona tipo de envio"
                                error={false}
                            />
                        </div>

{/* CANTIDAD */}
                        <div className="contenedor-filas-2 group">
                            {/* Ingreso de cantidad */}

                            <label htmlFor="valorProd" className="label">Cantidad de {tipoSeleccionado} </label>

                            <input type="number" min="0" className="input" value={cantidadSeleccion} onChange={(e) =>
                                setCantidadSeleccion(e.target.value === "" ? "" : Number(e.target.value))}
                                placeholder="0 piezas"
                            />


                            <FadeInOutError
                                message="Número total"
                                error={false}
                            />

                        </div>

{/* VALOR */}
                        <div className="contenedor-filas-2">
                            <label htmlFor="valorProd" className="label">Valor producto </label>
                            <div className=" flex">

                                <input type="number" min="0" className=" input-units" value={valor} onChange={(e) =>
                                    SetValor(e.target.value === "" ? "" : Number(e.target.value))}
                                    onBlur={handleValor}

                                    id="valorProd" />
                                <div className="units">USD</div>
                            </div>


                            <FadeInOutError
                                message={errorValor?.message ?? ""}
                                error={errorValor?.error}
                            />
                        </div>

{/* PRODUCTO REPETITIVO */}
                        <div className="contenedor-filas-2">

                            <label htmlFor="repetitivo" className="label">¿Tu producto es repetitivo?</label>
                            <div className="flex input p-1">
                                <button type="button"
                                    onClick={() => setRepetitivo(true)}
                                    className={`switch-opciones
                                                ${repetitivo ? "bg-blue-400 text-white" : " text-[#000000]/35"}`}
                                >
                                    SI
                                </button>

                                <button type="button"
                                    onClick={() => setRepetitivo(false)}
                                    className={`switch-opciones
                                                ${!repetitivo ? "bg-blue-400 text-white" : " text-[#000000]/35"}`}
                                >
                                    NO
                                </button>
                            </div>
    <FadeInOutError
                                message="Son de la misma naturaleza"
                                error={false}
                            />


                        </div>

{/* CANTIDAD UNIDADES */}
                        <div className="contenedor-filas-2">

                            <label htmlFor="cantidad" className="label"> Cantidad de unidades</label>
                            <input type="number" min="0" className="input" value={cantidad} onChange={(e) =>
                                setCantidad(e.target.value === "" ? "" : Number(e.target.value))}
                                onBlur={handleCantidad}
                                placeholder="0 piezas" />


                            <FadeInOutError
                                message={errorCantidad?.message ?? ""}
                                error={errorCantidad?.error}
                            />
                        </div>

{/* LARGO X ANCHO X ALTO */}
                        <div className="contenedor-3-col">
                            <div className="contenedor-filas-2">

                                <label htmlFor="largo" className="label"> Largo:</label>
                                <div className="flex">
                                    <input type="number" min="0" className="input-units" value={largo} disabled={pallets}
                                        onChange={(e) => setLargo(e.target.value === "" ? "" : Number(e.target.value))}
                                        onBlur={handleLargo}
                                        placeholder="0" />
                                    <div className="units">{opcion === "USA" ? "in" : "cm"}</div>
                                </div>

                                <FadeInOutError
                                    message={errorLargo?.message ?? ""}
                                    error={errorLargo?.error}
                                />
                            </div>

                            {/* ancho */}
                            <div className="contenedor-filas-2" >

                                <label htmlFor="ancho" className="label"> Ancho:</label>
                                <div className="flex">
                                    <input type="number" min="0" className="input-units" value={ancho} disabled={pallets}
                                        onChange={(e) => setAncho(e.target.value === "" ? "" : Number(e.target.value))}
                                        onBlur={handleAncho}
                                        placeholder="0" />
                                    <div className="units">{opcion === "USA" ? "in" : "cm"}</div>
                                </div>

                                <FadeInOutError
                                    message={errorAncho?.message ?? ""}
                                    error={errorAncho?.error}
                                />
                            </div>

                            {/*alto  */}
                            <div className="contenedor-filas-2">

                                <label htmlFor="alto" className="label"> Alto:</label>
                                <div className="flex">


                                    <input type="number" min="0" className="input-units" value={alto} disabled={pallets}
                                        onChange={(e) => setAlto(e.target.value === "" ? "" : Number(e.target.value))}
                                        onBlur={handleAlto}
                                        placeholder="0" />
                                    <div className="units">{opcion === "USA" ? "in" : "cm"}</div>
                                </div>
                                <div>
                                    <FadeInOutError
                                        message={errorAlto?.message ?? ""}
                                        error={errorAlto?.error}
                                    />
                                </div>


                            </div>
                        </div>

{/* PESO */}
                        <div className="contenedor-filas-2">
                            <label htmlFor="Peso" className="label">Peso: </label>
                            <div className="flex">
                                <input type="number" min="0" className="input-units" value={peso} onChange={(e) =>
                                    setPeso(e.target.value === "" ? "" : Number(e.target.value))}
                                    onBlur={handleBlurPeso} placeholder="0" />

                                <div className="units">{opcion === "USA" ? "lb" : "kg"}</div>
                            </div>
                            <FadeInOutError
                                            message={errorPeso?.message ?? ""}
                                            error={errorPeso?.error}
                                        />
                        </div>

{/* DESTINO */}
                        <div className="contenedor-filas-2">
                            <label htmlFor="Peso" className="label">Destino </label>
                            <select name="TipoDestino" id="TipoDestino" className="select"
                                value={entrega} onChange={(e) => setEntrega(e.target.value)}
                            >
                                <option value="">Selecciona un destino</option>
                                {tiposDestino.map((tipo) => (
                                    <option key={tipo.id} value={tipo.id}>
                                        {tipo.name}
                                    </option>
                                ))}
                            </select>
                            <FadeInOutError
                                message="Cuéntanos, ¿a qué destino deseas enviar tu paquete?"
                                error={false}
                            />
                        </div>

{/* CODIGO POSDTAL */}
                        {entrega === "Envia" ? (
                            <div className="contenedor-filas-2">
                                <label htmlFor="valorProd" className="label">Codigo Postal: </label>
                                <div className="flex">
                                    <input type="number" min="0" className="input-units" value={cpDestino}
                                        onChange={(e) =>
                                            setCpDestino(e.target.value === "" ? "" : Number(e.target.value))}

                                        onBlur={validarCP}
                                    />
                                    <div className="units">CP</div>
                                </div>


                                <FadeInOutError
                                    message={errorDestinatario?.message ?? ""}
                                    error={errorDestinatario?.error}
                                />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center">
                                <label htmlFor="valorProd" className="label">No hay costo de envio </label>
                            </div>
                        )}

{/* BOTON COTIZAR */}
                        <div className="contenedor-filas-2">
                            <div></div>
                            <input type="button" value="Cotizar" onClick={sendForms} className=" button" />
                        </div>

{/* BOTON CONTACTAR */}
                        <div className="contenedor-filas-2">
                            <div></div>
                            <input type="submit" value="Contactar asesor" className={asesor ? "button-disabled" : " button"} onClick={() => setAsesor(true)} />

                        </div>

{/* PRECIO */}
                        <div className="contenedor-precio">
                            <label htmlFor="costo" className="label">Costo </label>
                            <div className="flex">
                                <h2 className="output-precio">
                                    {costoIVA}
                                </h2>
                                <div className="units-precio">USD</div>
                            </div>

                        </div>
                        <div className={`rounded-[4px]
                            ${exceso ? "error" : "bg-blue-400 text-white"}`}>
                           {errorCosto?.message ?? ""}
                        </div>


                        {asesor ? (
                            <div className="col-span-5 ">
                                <AnimatedText
                                    delay={0.2}
                                    lines={[
                                        < h2 key={2} className="subtitulo-asesor">
                                            Ingrese sus datos para una cotizacion
                                        </h2>
                                    ]}>
                                </AnimatedText>
                            </div>
                        ) : (
                            <div></div>
                        )}

                        <div className={asesor ? "contenedor-filas-2" : "hidden"}>
                            <label htmlFor="ContactName" className="label">Nombre: </label>
                            <input type="text" name="name" id="ContactName" className="input"
                                value={nombre}
                                onChange={(e) => SetNombre(e.target.value)} />
  <FadeInOutError
                                            message="¿Cómo te llamas?"
                                            error={false}
                                        />
                        </div>

                        <div className={asesor ? "contenedor-filas-2" : "hidden"}>
                            <label htmlFor="ContactPhone" className="label">Teléfono: </label>
                            <input type="tel" name="phone" id="ContactPhone" className="input"
                                value={telefono}
                                placeholder="(123) 456-7890"
                                onChange={handleChangeTelefono} />
                            <FadeInOutError
                                            message={errorTelefono?.message ?? ""}
                                            error={errorTelefono?.error}
                                        />
                        </div>

                        <div className={asesor ? "contenedor-filas-2" : "hidden"}>

                            <label htmlFor="ContactEmail" className="label">Correo: </label>
                            <input type="text" name="email" id="ContactEmail" className="input"
                                value={correo}
                                placeholder="ejemplo@correo.com"
                                onChange={(e) => SetCorreo(e.target.value)} />
                            <FadeInOutError
                                            message={errorCorreo?.message ?? ""}
                                            error={errorCorreo?.error}
                                        />
                        </div>

                        <div className={asesor ? " col-span-2" : "hidden"}>
                            <label htmlFor="ContactAsunto" className="label">Asunto: </label>

                            <textarea name="email" id="ContactAsunto" rows={4} cols={50} className="input-asunto"
                                placeholder="Datos adicionales"
                                value={asunto}
                                onChange={(e) => SetAsunto(e.target.value)} >

                            </textarea>
                        </div>
                        {/* boton de enviar forms con datos de contacto */}

                        <div></div>

                        <div className={asesor ? "flex" : "hidden"}>
                            <input type="submit" value="Cerrar formulario" className="button " onClick={() => setAsesor(false)} />
                        </div>

                        <div className={asesor ? "flex" : "hidden"}>
                            <input type="button" value="Enviar Datos" onClick={sendContact} className="button" />
                        </div>

                        <ReCAPTCHA
                            ref={captcha}
                            sitekey="6LdDRfMrAAAAACKCL_jQ4WKKUvbIpS1ny78v-bNE"
                            // size="invisible"
                            onChange={hanleReCaptcha}
                            className={asesor ? "" : "hidden"}
                        />

                    </div>
                </div>
            </div>


        </section>
    );
}










