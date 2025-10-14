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
}

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
    costoIVA
}: PdfProps) {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4',
        },
        section: {
            display: "flex",
            flexDirection: "column",
            margin: 10,
            padding: 10,
            flexGrow: 1,
            alignItems: "flex-start",
        },
        text: {
            fontSize: 20,
            marginBottom: 5,
        }
    });

    return (
        <Document>
            <Page style={styles.page}>

                <View style={styles.section}>
                    <Text style={styles.text}>Cotizador</Text>

                    <Text style={styles.text}>Tipo de envio: {tipoSeleccionado}</Text>

                    <Text style={styles.text}>Valor: {valor}</Text>

                    <Text style={styles.text}>Peso: {peso} </Text>

                    <Text style={styles.text}>Cantidad: {cantidad} </Text>

                    <Text style={styles.text}>Alto: {alto} </Text>

                    <Text style={styles.text}>Ancho: {ancho} </Text>

                    <Text style={styles.text}>Largo: {largo} </Text>

                    <Text style={styles.text}>Repetitivo: {repetitivo} </Text>

                    <Text style={styles.text}>Nombre: {nombre} </Text>

                    <Text style={styles.text}>telefono: {telefono} </Text>

                    <Text style={styles.text}>Correo: {correo} </Text>

                    <Text style={styles.text}>Asunto: {asunto} </Text>

                    <Text style={styles.text}>Costo total {costoIVA} </Text>

                </View>
            </Page>
        </Document>
    )
}