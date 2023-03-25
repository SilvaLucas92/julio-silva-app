import { motion } from "framer-motion";
import React from "react";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const TransitionAnimate = ({ children }: { children: JSX.Element }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={variants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionAnimate;
