import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import type { ReactNode } from "react";

interface TimeZoomProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function TimeZoom({ children, className = "", delay = 0 }: TimeZoomProps) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.3 });

    useEffect(() => {
    if (isInView) {
      controls.start({
        scale: [0.8, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          delay,
          duration: 0.8,
          times: [0, 0.6, 1],
          ease: "easeInOut",
        },
      });
    } else {
      controls.start({ scale: 0.8, opacity: 0 });
    }
  }, [isInView, controls, delay]);



  return (
    <motion.div
      ref={ref}
      className={className}
       initial={{ scale: 0.8, opacity: 0 }}
      
      animate={controls}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
