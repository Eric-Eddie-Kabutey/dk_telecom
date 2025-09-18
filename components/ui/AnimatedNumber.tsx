"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface AnimatedNumberProps {
  value: number | string;
  className?: string;
}

const parentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stringValue = String(value);
  const characters = stringValue.split("");

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={parentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-label={stringValue}
    >
      {characters.map((char, index) => {
        // handled non-digit characters to keep them static
        if (isNaN(parseInt(char)) && char !== ".") {
          return <span key={index}>{char}</span>;
        }
        return (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            variants={childVariants}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}