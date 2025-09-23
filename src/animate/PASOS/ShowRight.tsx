import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import { easeIn } from "framer-motion";

interface ShowRightProps{
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  position?: string;
}

const ShowRight = ({ children, delay = 0, duration = 0.5, position = "0"}: ShowRightProps) => {
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
      width: "24rem",
      transition: {
        duration,
        ease: easeIn,
        delay,
      },
    },
    hidden: {
      opacity: 0,
      width: "0rem",
    },

  };

  return (
    <motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={variants}
    style={{ overflow: "hidden", display:"inline-block", height: "6px", left: position}}
    className="bg-sky-600 absolute top-1/3 z-0"
  
    >
      {children}
    </motion.div>
  );
};

export default ShowRight;