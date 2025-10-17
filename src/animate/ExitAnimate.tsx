import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import { circOut, easeIn, easeInOut } from "framer-motion";

interface FadeOutProps{
  children?: React.ReactNode;
  delay?: number;
}

const FadeOut = ({ children, delay = 0}: FadeOutProps) => {
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

  const variants: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: circOut,
        delay,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
    exit: {
        opacity: 0,
        x: 100,
        transition:{
            duration: 0.5
        },
    },

  };

  return (
    <motion.div
    ref={ref}
    animate={controls}
      initial="hidden"
      variants={variants}
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default FadeOut;