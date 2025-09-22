import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import type { ReactNode } from "react";

interface TextShowProps {
  lines?: ReactNode[];
  delay?: number;
}

export default function TextShow({ lines = [], delay = 0 }: TextShowProps) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: "tween" as const, duration: 1.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
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
