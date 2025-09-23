import {motion} from "framer-motion"
import React from "react"

interface UpProps {
    children?: React.ReactNode;
    move?: number;
    
}


const UpAnimate: React.FC<UpProps> = ({ children, move}) => {
    return(
   <motion.div
      whileHover={{ y: move}}
      transition={{ type: 'spring', stiffness: 200, damping: 20}}
     
    >
      {children}
    </motion.div>
    );
};


export default UpAnimate;