// "use client";
import Image from "next/image";
// import { motion } from "framer-motion";
import Box from "@/components/Box";
import FloatingDiv from "@/components/FloatingDiv";
import SectionTransition from "@/components/SectionTransitions";
import CircleAnimation from "@/components/CircleAnimation";
import ScrollAnimation from "@/components/ScrollTrigger";
import ScrollTrigger from "@/components/ScrollTrigger";
export default function Home() {
  return (
    <main className="container mx-auto  flex gap-5 justify-center items-center flex-col text-white">
      {/* <motion.div
        className="h-20 w-20 bg-blue-400 text-center flex justify-center items-center"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 5 }}
      >
        test
      </motion.div> */}
      <Box/>
      <SectionTransition />
      <FloatingDiv/>
      <CircleAnimation/>
      <ScrollTrigger/>
    </main>
  );
}
