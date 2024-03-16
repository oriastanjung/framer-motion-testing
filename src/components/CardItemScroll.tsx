"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { FC, useRef } from "react";

interface CardItemScrollProps {
  num?: number;
}

const CardItemScroll: FC<CardItemScrollProps> = ({ num }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress,[0,1], [0.5, 1])
  return (
    <motion.div
        style={{
            
            scale : scaleProgress,
            opacity : scrollYProgress
        }}
    ref={ref} className="w-full bg-slate-400 h-40">
      {" "}
      CardItemScroll {num}
    </motion.div>
  );
};

export default CardItemScroll;
