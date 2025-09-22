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
            
            transition = {{ type: "spring", stiffness: 100, damping: 15 }}
            >
                {children}
        </motion.div>
    );
};


export default DivZoom;