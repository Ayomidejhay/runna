"use client";

import { MotionValue } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
  bgcolor: string;
  progress?: MotionValue<number>;
  range?: number[];
  targetScale?: number;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Sign Up",
    description:
      "Create your account and set up your pet’s profile in seconds.",
    image: "/workone.png",
    bgcolor: "#070E1A",
  },
  {
    id: 2,
    title: "Join Challenges",
    description:
      "Choose fun, wellness-based challenges tailored to your goals.",
    image: "/work2.png",
    bgcolor: "#F5F3EF",
  },
  {
    id: 3,
    title: "Track Progress",
    description: "Stay on top of your activities with real-time updates.",
    image: "/work3.png",
    bgcolor: "#5F6A7E",
  },
  {
    id: 1,
    title: "Earn Rewards",
    description:
      "Complete challenges, unlock badges, and earn exciting rewards.",
    image: "/work4.png",
    bgcolor: "#5F6A7E",
  },
];

export default function Works({
  progress,
  range,
  targetScale,
  id,
  title,
  description,
  image,
  bgcolor,
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
    <div ref={container} className="sticky">
      <motion.div
        
      >
        
        <motion.div style={{
          backgroundColor: bgcolor,
          scale,
          top: `calc(-5vh + ${id * 25}px)`,
        }} className={`rounded-[40px] p-4 py-10 md:p-10 lg:p-14 flex justify-between items-center flex-col md:flex-row gap-10 bg-${bgcolor}` }>
          <div className="text-white flex flex-col gap-8 flex-1">
            <div className="h-[59px] w-[59px] rounded-[100px] flex items-center justify-center font-bold bg-white ">
              <p className="text-deepblue text-[18px]">{id}</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-3xl capitalize">{title}</p>
              <p className="text-[16px] leading-6">
                {description}
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Image
              src={image}
              alt={image}
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
