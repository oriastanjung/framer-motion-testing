"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CircleAnimation = () => {
  const [boxPositions, setBoxPositions] = useState([
    { x: 0, y: -100 },
    { x: 100, y: 0 },
    { x: 0, y: 100 },
    { x: -100, y: 0 }
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBoxPositions(prevPositions => [
        prevPositions[1],
        prevPositions[2],
        prevPositions[3],
        prevPositions[0]
      ]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center" style={{ position: "relative", width: 300, height: 300, border: "2px solid white", borderRadius: "50%", margin: "50px auto" }}>
      {boxPositions.map((position, index) => (
        <motion.div
            className="flex text-center justify-center items-center"
          key={index}
          style={{ width: 50, height: 50, background: "blue", position: "absolute", borderRadius: "50%" }}
          animate={{ x: position.x, y: position.y }}
          transition={{ duration: 2 }}
        >{index+1}</motion.div>
      ))}
    </div>
  );
};

export default CircleAnimation;
