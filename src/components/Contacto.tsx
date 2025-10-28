"use client";
import { FaWhatsapp, FaPhoneAlt, FaMapMarked } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import "@/style/contacto.css";
import AnimatedText from "@/animate/TextAnimate";
import { useState } from "react";
import Swal from 'sweetalert2'

export default function Contacto() {
    const [nombre, SetNombre] = useState("");
    const [telefono, SetTelefono] = useState("");
    const [correo, SetCorreo] = useState("");
   
    const [largo, setLargo] = useState<number | "">("");
    const [ancho, setAncho] = useState<number | "">("");
    const [alto, setAlto] = useState<number | "">("");
    const [valor, SetValor] = useState<number | "">("");
    const [tipoSeleccionado, setTipoSeleccionado] = useState("");

    const tiposCajas = [
        { name: "Pallets" },
        { name: "Sobres" },
        { name: "Cajas" }
    ];

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

    };

    const handleEnvioDatos = async () => {

        const body = {
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            valor: valor,
            tipo: tipoSeleccionado,
            largo: largo,
            ancho: ancho,
            alto: alto
        };
        // Enviar al backend
        const response = await fetch("/API/enviarDatos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        console.log("correo enviado")
        const data = await response.json();

        Swal.fire({
            title: "Correo enviado",
            text: data.message,
            icon: "success",
            timer: 3000
        });
        SetNombre("");
        SetTelefono("");
        SetCorreo("");
        SetValor("");
        setTipoSeleccionado("");
        setLargo("");
        setAncho("");
        setAlto("");

    };

    return (
        <section id="contacto" className="w-full  h-full ">
            <div className="section-contactanos">
                <div className="  z-10 ">
                    <AnimatedText delay={0.2} lines={[
                        <h1 key={1} className="titulo-contatanos">
                            Contáctanos
                        </h1>
                    ]}></AnimatedText>

                    {/* inicio de formulario */}
                    <div className="contenedor-formulario">
                        {/* contenedor izquierdo */}
                        <div className="contenedor-izq">
                            <h2 className="titulo-izq">¡Empieza a importar ya!</h2>

                            {/* inicio de lista  */}
                            {/* Ubicacion  */}
                            <div className="conteneodr-inf">
                                <div className="contenedor-icon">
                                    <FaMapMarked className="icon"></FaMapMarked>
                                </div>
                                <a href="https://goo.gl/maps/efSbnm7sufjc6sjG9" className="informacion">
                                    Av Lázaro Cárdenas 999 Local 2, Col. Las Brisas, 64780 Monterrey, Nuevo León
                                </a>
                            </div>
                            {/* telefono  */}
                            <div className="conteneodr-inf">
                                <div className="contenedor-icon">
                                    <FaPhoneAlt className="icon"></FaPhoneAlt>

                                </div>
                                <a href="https://cargomty.com/tel:+528120903977" className="informacion">+52 81 2090 3977</a>
                            </div>

                            {/* Whatsapp  */}
                            <div className="conteneodr-inf">
                                <div className="contenedor-icon">
                                    <FaWhatsapp className="icon"></FaWhatsapp>
                                </div>
                                <div className="col-span-3">
                                    <div className="contenedor-numeros">
                                        <a href="https://wa.me/528116691037" className="hover:underline">+52 81 1669 1037</a>
                                        <a href="https://wa.me/528181766691" className="hover:underline">+52 81 8176 6691</a>
                                        <a href="https://wa.me/528114123816" className="hover:underline">+52 81 1412 3816</a>
                                    </div>
                                </div>

                            </div>

                            {/* gmail  */}
                            <div className="conteneodr-inf">
                                <div className="contenedor-icon">
                                    <GoMail className="icon"></GoMail>
                                </div>
                                <a href="mailto:info@cargomty.com" className="informacion">info@cargomty.com</a>
                            </div>


                        </div>

                        {/* contenedor derecho */}
                        <div className="contenedor-der">
                            <div className="contenedor-forms">

                                <div className="contenedor-filas-2">
                                    <label htmlFor="ContactName" className="label">Nombre: </label>
                                    <input type="text" name="name" id="ContactName" className="input"
                                        value={nombre}
                                        placeholder="Nombre"
                                        onChange={(e) => SetNombre(e.target.value)} />
                                </div>

                                <div className="contenedor-filas-2">
                                    <label htmlFor="ContactPhone" className="label">Teléfono: </label>
                                    <input type="text" name="phone" id="ContactPhone" className="input"
                                        value={telefono}
                                        placeholder="(123) 456-7890"
                                        onChange={handleChangeTelefono} />
                                </div>

                                <div className="contenedor-filas-2">

                                    <label htmlFor="ContactEmail" className="label">Correo: </label>
                                    <input type="text" name="email" id="ContactEmail" className="input"
                                        value={correo}
                                        placeholder="Ejemplo@correo.com"
                                        onChange={(e) => SetCorreo(e.target.value)} />
                                </div>

                                <div className="contenedor-forms-2">
                                    {/* VALOR */}
                                    <div className="contenedor-filas-2">
                                        <label htmlFor="valorProd" className="label">Valor producto </label>
                                        <div className=" flex">
                                            <input type="number" min="0" className=" input-units" value={valor} onChange={(e) =>
                                                SetValor(e.target.value === "" ? "" : Number(e.target.value))}
                                                id="valorProd" />
                                            <div className="units">USD</div>
                                        </div>



                                    </div>

                                    {/* TIPO DE ENVIO */}
                                    <div className="contenedor-filas-2">
                                        <label className="label">Tipo de Envío</label>
                                        <select name="TipoContenedor" id="TipoContenedor" className="select"
                                            value={tipoSeleccionado} onChange={(e) =>
                                                setTipoSeleccionado(e.target.value === "" ? "" : (e.target.value))}
                                        >
                                            <option value="">--Selecciona--</option>
                                            {tiposCajas.map((tipo) => (
                                                <option key={tipo.name} value={tipo.name}>
                                                    {tipo.name}
                                                </option>
                                            ))}
                                        </select>

                                    </div>
                                </div>

                                {/* LARGO X ANCHO X ALTO */}
                                <div className="contenedor-filas-2">

                                    <label htmlFor="largo" className="label"> Largo:</label>
                                    <div className="flex">
                                        <input type="number" min="0" className="input-units" value={largo}
                                            onChange={(e) => setLargo(e.target.value === "" ? "" : Number(e.target.value))}

                                            placeholder="0" />
                                        <div className="units">CM</div>
                                    </div>


                                </div>

                                <div className="contenedor-filas-2" >

                                    <label htmlFor="ancho" className="label"> Ancho:</label>
                                    <div className="flex">
                                        <input type="number" min="0" className="input-units" value={ancho}
                                            onChange={(e) => setAncho(e.target.value === "" ? "" : Number(e.target.value))}

                                            placeholder="0" />
                                        <div className="units">CM</div>
                                    </div>


                                </div>
                                <div className="contenedor-filas-2">

                                    <label htmlFor="alto" className="label"> Alto:</label>
                                    <div className="flex">
                                        <input type="number" min="0" className="input-units" value={alto}
                                            onChange={(e) => setAlto(e.target.value === "" ? "" : Number(e.target.value))}
                                            placeholder="0" />
                                        <div className="units">CM</div>
                                    </div>
                                    <div>

                                    </div>


                                </div>


                                <button className="boton-formulario-der" onClick={handleEnvioDatos}>
                                    Enviar Datos
                                </button>



                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}