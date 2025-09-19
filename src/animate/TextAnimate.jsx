import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function AnimatedText({ lines = [], delay = 0 }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
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
      transition: { type: "tween", duration: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
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
