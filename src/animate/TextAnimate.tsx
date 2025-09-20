import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import type { ReactNode } from "react";

interface AnimatedTextProps{
  lines?: ReactNode[];
  delay?: number;
}

export default function AnimatedText({ lines = [], delay = 0 }: AnimatedTextProps) {
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

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: delay,
      },
    },
  };

  const lineVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "tween" as const, duration: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
         // cambiar para hacer animacion una vez o cada vez que se hace scroll en la pagina
      viewport={{ once: false, amount: 0.3 }}
    >
      {lines.map((line, index) => (
        <motion.span
          key={index}
          variants={lineVariant}
          className="block"
        >
          {line}
        </motion.span>
      ))}
    </motion.div>
  );
}
