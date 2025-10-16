"use client"
import React from "react";

import {
    Document,
    Text,
    Page,
    View,
    StyleSheet,
    Image
} from '@react-pdf/renderer'

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
    asunto: string;
    costoIVA: number | "";
    unidades: string;
    costoSinIva: number | "";
    constoConIva: number | "";
    precioPorPeso: number | "";
    precioPorExcesoPeso: number | "";
    precioBase: number | "";
    precioCantidad: number | "";

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
    asunto,
    costoIVA,
    unidades,
    costoSinIva,
    constoConIva,
    precioPorPeso,
    precioPorExcesoPeso,
    precioBase,
    precioCantidad,

}: PdfProps) {



    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.header}>Cotizador</Text>

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

                <View style={styles.section}>
                    <Text style={styles.label}>Asunto: </Text>
                    <Text style={styles.value}> {asunto}</Text>
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
                            <Text style={styles.label}>Medidas (Lrago x Alto x Ancho): </Text>
                            <Text style={styles.value}>
                                {largo} x {alto} x {ancho} {unidades === "MXS" ? "cm" : "in"}
                            </Text>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.label}>La mercancia es repetitiva: </Text>
                            <Text style={styles.value}>{repetitivo || "No"}</Text>

                        </View>
                        <View style={styles.section}>
                            <Text style={styles.label}>Cantidad: </Text>
                            <Text style={styles.value}>{cantidad} {tipoSeleccionado} </Text>
                        </View>

                    </View>

                    <View style={styles.second}>
                        <Text style={styles.title}>Manejo de precios</Text>

                        <View style={styles.section}>
                            {/* TEXT DENTRO DE TEXT */}
                            <Text style={styles.label}>Honoriarios sin IVA (en base al valor ingresado):
                            </Text>
                            <Text style={styles.value}>{costoSinIva} USD </Text>
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
                            <Text style={styles.label}>Costo Cotizado en calculadora: </Text>
                            <Text style={styles.value}> {costoIVA} USD </Text>

                        </View>

                    </View>
                </View>






            </Page>
        </Document>
    )
}