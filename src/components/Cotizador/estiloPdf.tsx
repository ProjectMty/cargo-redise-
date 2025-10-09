"use client"

import {
    Document,
    Text,
    Page,
    View,
    StyleSheet
} from '@react-pdf/renderer'

export default function PDF(){
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

    return(
           <Document>
            <Page style={styles.page}>

                <View style={styles.section}>
                    <Text style={styles.text}>Cotizador</Text>

                    <Text style={styles.text}>Valor:</Text>

                    <Text style={styles.text}>Peso:</Text>

                    <Text style={styles.text}>Cantidad:</Text>

                    <Text style={styles.text}>Alto:</Text>

                    <Text style={styles.text}>Ancho:</Text>

                    <Text style={styles.text}>Largooo:</Text>

                    <Text style={styles.text}>Costo total</Text>
                </View>
            </Page>
        </Document>
    )
}