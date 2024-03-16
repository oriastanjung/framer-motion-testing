"use client"
import React, { FC } from "react";
import { motion } from "framer-motion";
interface BoxProps {}

const Box: FC<BoxProps> = ({}) => {
  return (
    <motion.div
      className="h-20 w-20 bg-blue-400 text-center flex justify-center items-center"
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.9 }}
      // transition={{duration : 5,delay : 2}}
    >
      test
    </motion.div>
  );
};

export default Box;
