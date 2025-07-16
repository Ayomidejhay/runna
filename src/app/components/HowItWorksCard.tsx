"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
  bgcolor: string;
  color: string;
  contentcolor: string;
  progress?: MotionValue<number>;
  range?: number[];
  targetScale?: number;
}

export default function HowItWorksCard({
  progress,
  range,
  targetScale,
  id,
  title,
  description,
  image,
  bgcolor,
  color,
  contentcolor,
}: Step) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale =
    progress && range
      ? useTransform(progress, range, [1, targetScale])
      : undefined;

  return (
    <div ref={container} className="sticky h-[100vh] top-7">
        <motion.div style={{
          backgroundColor: bgcolor,
          scale,
          top: `calc(-5vh + ${id * 25}px)`,
        }} className={`relative rounded-[40px] p-4 py-10 md:p-10 lg:p-14 flex origin-top justify-between items-center flex-col md:flex-row gap-10 bg-${bgcolor}` }>
          <div className="text-white flex flex-col gap-8 flex-1">
            <div className="h-[59px] w-[59px] rounded-[100px] flex items-center justify-center font-bold bg-white ">
              <p className="text-deepblue text-[18px]">{id}</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className={`text-3xl capitalize font-bold text-${color}`}>{title}</p>
              <p className={`text-[16px] leading-6 text-${contentcolor}`}>
                {description}
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-end items-center">
  <div className="relative w-full h-[300px] md:w-[60%] md:h-full rounded-[25px] overflow-hidden">
    <motion.div
      className="w-full h-full"
      style={{ scale: imageScale }}
    >
      <Image
        src={image}
        alt={image}
        width={400}
        height={400}
        className="object-cover w-full h-full"
      />
    </motion.div>
  </div>
</div>

        </motion.div>
    </div>
  );
}
