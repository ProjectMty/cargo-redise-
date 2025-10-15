"use client"
import React from "react";


import {
    Document,
    Text,
    Page,
    View,
    StyleSheet
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
        fontWeight: "semibold"
    },
    section: {
        marginBottom: 10,
        paddingBottom: 8,
        borderBottom: "2px solid #1043b2",
    },
    label: {
        fontWeight: "bold",
        color: "#333",
    },
    value: {
        marginTop: 2,
        color: "#555",
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


                <Text style={styles.title}>Manejo de precios</Text>
             
                <View style={styles.section}>
                    <Text style={styles.label}>Honoriarios sin iva:
                        <span style={styles.value}> {costoSinIva} USD</span>
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Honoriarios con iva:
                        <span style={styles.value}> {constoConIva === 0 ? "No aplica, cantidad menor a 20 articulos" : constoConIva} USD</span>
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Precio por peso:
                        <span style={styles.value}> {precioPorPeso === 0 ? "No aplica" : precioPorPeso} USD</span>
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Precio por exceso de peso:
                        <span style={styles.value}> {precioPorExcesoPeso === 0 ? "No aplica" : precioPorExcesoPeso} USD</span>
                    </Text>
                </View>
                <View style={styles.section}>

                    <Text style={styles.label}>Precio base por medidas ((largo * ancho * alto) / 6000) * 3:
                        <span style={styles.value}> {precioBase === 0 ? "No aplica" : precioBase} USD</span>
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Precio por cantidad de {tipoSeleccionado}:
                        <span style={styles.value}> {precioCantidad === 0 ? "No aplica" : precioCantidad} USD</span>
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Costo Cotizado en calculadora: </Text>
                    <Text style={styles.value}> {costoIVA} USD </Text>
                </View>



            </Page>
        </Document>
    )
}