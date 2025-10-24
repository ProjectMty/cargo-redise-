
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import "@/style/Calculadora.css";

interface FadeInOutProps {
    message?: string;
    error?: boolean;
}

export default function FadeInOutError({ message = "", error = false }: FadeInOutProps) {
    // const [displayedText, setDisplayedText] = useState("");
    const show = message.trim() !== "";

    // useEffect(() => {
    //     if (!show) {
    //         setDisplayedText("");
    //         return;
    //     }
    //     let i = 0;
    //     const interval = setInterval(() => {
    //         setDisplayedText(message.slice(0, i + 1));
    //         i++;
    //         if (i >= message.length) clearInterval(interval);
    //     }, 10); // velocidad

    //     return () => clearInterval(interval);
    // }, [message, show]);


    return (
        <AnimatePresence mode='wait'>
            {show && (
                <motion.div
                    key="alerta"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className={error ? 'mensaje-error' : 'mensaje-def'}
                >
                    {message}
                </motion.div>
            )}

        </AnimatePresence>
    )
}
