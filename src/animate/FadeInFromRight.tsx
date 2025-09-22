import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface FadeProps{
  children?: React.ReactNode;
  delay?: number;

}

const FadeInFromRight = ({ children, delay = 0}: FadeProps) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls]);

  return (
    <motion.div
    ref={ref}
    
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{opacity: 0, x: -50}}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay,
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromRight;