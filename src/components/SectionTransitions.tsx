"use client";
import { motion } from "framer-motion";

const SectionTransition = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Mulai dengan opacity 0 dan diposisikan di luar layar sebelah kiri
        animate={{
          opacity: 1,
          x: [null, -20, 20, -10, 10, 0],
          transition: { duration: 1.5 },
        }} // Animate opacity ke 1 dan geser ke kiri dan kanan dengan efek bouncing
      >
        <section>
          <h1>Section 1</h1>
          <p>This is the first section.</p>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }} // Mulai dengan opacity 0 dan diposisikan di luar layar sebelah kiri
        animate={{
          opacity: 1,
          x: [null, 20, -20, 10, -10, 0],
          transition: { duration: 1.5, delay: 1 },
        }} // Animate opacity ke 1 dan geser ke kiri dan kanan dengan efek bouncing
      >
        <section>
          <h1>Section 2</h1>
          <p>This is the second section.</p>
        </section>
      </motion.div>
    </>
  );
};

export default SectionTransition;
