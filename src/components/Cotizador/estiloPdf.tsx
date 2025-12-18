"use client"
import React from "react";

import {
    Document,
    Text,
    Page,
    View,
    StyleSheet
} from '@react-pdf/renderer'

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

interface PdfProps {
    tipoSeleccionado: string;
    valor: number | "";
    peso: number | "";
    largo: number | "";
    ancho: number | "";
    alto: number | "";
    cantidad: number | "";
    repetitivo: boolean;
    nombre: string;
    telefono: string;
    correo: string;
    costoIVA: number | "";
    unidades: string;
    costoSinIva: number | "";
    constoConIva: number | "";
    precioPorPeso: number | "";
    precioPorExcesoPeso: number | "";
    precioBase: number | "";
    precioCantidad: number | "";
    cantidadSeleccion: number | "";
    direccionRecibida: Direccion[] | null;
    entrega: string;
    costoSinValor: number | "";
    precioMostrar: number | "";
}

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        fontFamily: "Helvetica",
        backgroundColor: "#f8f8f8",
    },
    header: {
        fontSize: 40,
        textAlign: "center",
        marginBottom: 20,
        color: "blue",
        fontWeight: "bold",
    },
    title: {
        fontSize: 20,
        color: "blue",
        marginBottom: 20,
        fontWeight: "semibold",
        textAlign: "center"
    },
    columns: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    section: {
        marginBottom: 10,
        paddingBottom: 8,
        marginRight: 15,
        borderBottom: "2px solid #1043b2"
    },
    first: {
        // paddingLeft: 8,
        // paddingRight: 8,
        // marginLeft: 10,
        width: "40%",
        boxSizing: "border-box",
    },
    second: {
        width: "60%",
        boxSizing: "border-box",
    },
    label: {
        fontWeight: "bold",
        color: "#333",
    },
    value: {
        marginTop: 2,
        color: "#555",
        fontWeight: "normal",
    },
    image: {
        width: 20,
        height: 15,
        marginBottom: 10,
    },
});

export default function PDF({
    tipoSeleccionado,
    valor,
    peso,
    largo,
    ancho,
    alto,
    cantidad,
    repetitivo,
    nombre,
    telefono,
    correo,

    costoIVA,
    unidades,
    costoSinIva,
    constoConIva,
    precioPorPeso,
    precioPorExcesoPeso,
    precioBase,
    precioCantidad,
    cantidadSeleccion,
    direccionRecibida,
    entrega,
    costoSinValor,
    precioMostrar
}: PdfProps) {



    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.header}>Cotizador</Text>

                <View style={styles.columns}>
                    <View style={styles.first}>

                        <Text style={styles.title}>Datos de contacto</Text>

                        <View style={styles.section}>
                            <Text style={styles.label}>Nombre: </Text>
                            <Text style={styles.value}>{nombre}</Text>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.label}>Telefono: </Text>
                            <Text style={styles.value}> +52 {telefono}</Text>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.label}>Correo: </Text>
                            <Text style={styles.value}> {correo}</Text>
                        </View>


                    </View>

                    <View style={styles.second}>
                        <Text style={styles.title}>Envio</Text>

                        {entrega === "Recoge" ? (

                            <View style={styles.section}>
                                <Text style={styles.label}>Envio: </Text>
                                <Text style={styles.value}>{entrega}</Text>
                            </View>


                        ) : (

                            <View style={styles.section}>
                                <View style={styles.section}>
                                    <Text style={styles.label}>Envio: </Text>
                                    <Text style={styles.value}>{entrega}</Text>
                                </View>
                                <Text style={styles.label}>Direccion: </Text>
                                <Text style={styles.value}>
                                    {direccionRecibida && direccionRecibida.length > 0
                                        ? direccionRecibida[0].country?.name ?? "No disponible"
                                        : "No disponible"}
                                </Text>
                                <Text style={styles.value}>
                                    {direccionRecibida && direccionRecibida.length > 0
                                        ? direccionRecibida[0].zip_code ?? "No disponible"
                                        : "No disponible"}
                                </Text>
                                <Text style={styles.value}>
                                    {direccionRecibida && direccionRecibida.length > 0
                                        ? direccionRecibida[0].locality ?? "No disponible"
                                        : "No disponible"}
                                </Text>
                                <Text style={styles.value}>
                                    {direccionRecibida && direccionRecibida.length > 0
                                        ? direccionRecibida[0].state?.name ?? "No disponible"
                                        : "No disponible"}
                                </Text>

                            </View>
                        )}



                    </View>
                </View>



                <View style={styles.columns}>
                    <View style={styles.first}>
                        <Text style={styles.title}>Mercancia</Text>
                        <View style={styles.section}>
                            <Text style={styles.label}>Tipo de paquete:</Text>
                            <Text style={styles.value}>{tipoSeleccionado}</Text>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.label}>Valor: </Text>
                            <Text style={styles.value}>{valor} USD</Text>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.label}>Peso: </Text>
                            <Text style={styles.value}>{peso} {unidades === "MXS" ? "kg" : "lb"}</Text>
                        </View>


                        <View style={styles.section}>
                            <Text style={styles.label}>Medidas (Largo x Alto x Ancho): </Text>
                            <Text style={styles.value}>
                                {largo} x {alto} x {ancho} {unidades === "MXS" ? "cm" : "in"}
                            </Text>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.label}>La mercancia es repetitiva: </Text>
                            <Text style={styles.value}>{repetitivo || "No"}</Text>

                        </View>
                        <View style={styles.section}>
                            <Text style={styles.label}>Cantidad de articulos: </Text>
                            <Text style={styles.value}>{cantidad} piezas </Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.label}>Cantidad de {tipoSeleccionado}: </Text>
                            <Text style={styles.value}>{cantidadSeleccion} {tipoSeleccionado} </Text>
                        </View>

                    </View>

                    <View style={styles.second}>
                        <Text style={styles.title}>Manejo de precios</Text>

                        <View style={styles.section}>
                            {/* TEXT DENTRO DE TEXT */}
                            <Text style={styles.label}>Honoriarios sin IVA (en base al valor ingresado):
                            </Text>
                            <Text style={styles.value}>{precioMostrar} USD </Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.label}>Honoriarios con IVA (cantidad mayor a 20):
                            </Text>
                            <Text style={styles.value}> {constoConIva === 0 ? "No aplica, 0" : constoConIva} USD</Text>

                        </View>
                        <View style={styles.section}>
                            <Text style={styles.label}>Precio por peso (solo aplica en pallets):
                            </Text>
                            <Text style={styles.value}> {precioPorPeso === 0 ? "No aplica, 0" : precioPorPeso} USD</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.label}>Precio por exceso de peso: </Text>
                            <Text style={styles.value}> {precioPorExcesoPeso === 0 ? "No aplica, 0" : precioPorExcesoPeso} USD</Text>
                        </View>
                        <View style={styles.section}>

                            <Text style={styles.label}>Precio base por medidas:
                            </Text>

                            <Text style={styles.value}> {precioBase === 0 ? "No aplica, 0" : precioBase} USD</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.label}>Precio por cantidad de {tipoSeleccionado} (cantidad * 3): </Text>
                            <Text style={styles.value}> {precioCantidad === 0 ? "No aplica, 0" : precioCantidad} USD</Text>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.label}>Costo Cotizado con valor del paquete: </Text>
                            <Text style={styles.value}> {costoIVA} USD </Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.label}>Costo Cotizado sin valor del paquete: </Text>
                            <Text style={styles.value}> {costoSinValor} USD </Text>
                        </View>
                    </View>
                </View>





            </Page>
        </Document>
    )
}