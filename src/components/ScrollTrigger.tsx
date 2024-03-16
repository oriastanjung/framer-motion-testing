import React, { FC } from "react";
import CardItemScroll from "./CardItemScroll";

interface ScrollTriggerProps {}

const ScrollTrigger: FC<ScrollTriggerProps> = ({}) => {
  return (
    <div className="h-full w-full text-center grid grid-cols-2 gap-5 mt-40 mb-64">
      {Array.from([1, 2, 3, 4,6,7,8,9,10,11]).map((item: any, idx: number) => (
        <CardItemScroll num={idx + 1} key={idx} />
      ))}
    </div>
  );
};

export default ScrollTrigger;
