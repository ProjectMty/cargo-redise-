import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import { circOut, easeIn } from "framer-motion";

interface ShowUpProps{
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
}

const ShowUp = ({ children, delay = 0, duration = 0.5}: ShowUpProps) => {
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
      y: 0,
      transition: {
        duration: duration,
        ease: circOut,
        delay,
      },
    },
    hidden: {
      opacity: 0.1,
      y: 40,
      transition: {
        duration: duration,
        ease: easeIn,
      },
    },
    

  };

  return (
    <motion.div
    ref={ref}
    animate={controls}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ShowUp;