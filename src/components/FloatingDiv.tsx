"use client"
// components/FloatingDiv.js
import { motion } from "framer-motion";

const FloatingDiv = () => {
  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        background: "blue",
        position: "relative",
      }}
      animate={{
        y: [0, 30, -1], // keyframes animation for y-axis
      }}
      transition={{
        duration: 4, // total duration for one loop
        ease: "easeInOut", // smoother easing function
        repeat: Infinity, // repeat infinitely
      }}
    />
  );
};

export default FloatingDiv;
