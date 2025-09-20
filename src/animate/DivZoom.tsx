import {motion} from "framer-motion"
import React from "react"

interface DivScaleProps {
    children?: React.ReactNode;
    className?: string;
    scale?: number;
}


const DivZoom: React.FC<DivScaleProps> = ({ children, className, scale}) => {
    return(
        <motion.div
            whileHover = {{ scale }}
            whileTap = {{ scale: 0.95}}
            transition = {{ type: "spring", stiffness: 100, damping: 15 }}
            className= {`cursor-pointer ${className}`}>
                {children}
        </motion.div>
    );
};


export default DivZoom;