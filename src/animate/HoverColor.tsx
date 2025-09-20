import SideBackground from "@/components/SideBackground";
import {easeInOut, motion} from "framer-motion"
import React from "react"

interface HoverColorProps {
    children?: React.ReactNode;
    className?: string;
    color?: string;
    initialColor?:  string;
}


const HoverColor: React.FC<HoverColorProps> = ({ children, className, color, initialColor ="transparent"}) => {
    return(
        <motion.div
            whileHover = {{ backgroundColor: color }}
            whileTap = {{ scale: 0.95}}
            transition = {{ type: "tween", duration: 0.5, ease: easeInOut }}
            style={{backgroundColor: initialColor}}
            className= {`cursor-pointer ${className}`}>
                {children}
        </motion.div>
    );
};


export default HoverColor;