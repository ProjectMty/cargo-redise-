
    import React from 'react';

    interface EmailDatosProps{
        firstName: string;
    }

    export function EmailDatos({firstName} : EmailDatosProps) {
        return(
            <div>
                <p>Hola {firstName},</p>
                <p>Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
            </div>
        )
    }

