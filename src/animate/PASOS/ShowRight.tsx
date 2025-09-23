import { easeOut, motion, useAnimation, useInView, Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import { easeIn } from "framer-motion";

interface ShowRightProps{
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
}

const ShowRight = ({ children, delay = 0, duration = 0.5}: ShowRightProps) => {
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
      width: "60%",
      transition: {
        duration: duration,
        delay,
        ease: easeOut,
      },
    },
    hidden: {
      opacity: 0,
      width: 0,
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

export default ShowRight;