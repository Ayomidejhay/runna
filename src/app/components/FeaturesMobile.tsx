"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Install from "./Install";

const steps = [
  {
    id: 1,
    title: "GPS Walk Tracking",
    description:
      "Real-time GPS tracking of your walks with detailed metrics including distance, time, route mapping, and calories burned.",
    image: "/featureOne.png",
  },
  {
    id: 2,
    title: "PetFit Score",
    description:
      "Comprehensive wellness scoring system that tracks your pet's activity levels, consistency, and overall health trends over time.",
    image: "/petfit.png",
  },
  {
    id: 3,
    title: "Gamified Progress",
    description:
      "Earn badges, maintain streaks, climb leaderboards, and unlock achievements as you build consistent walking habits.",
    image: "/gamified.png",
  },
  {
    id: 4,
    title: "Local Communities",
    description:
      "Find and join local pet walking groups, discover walking buddies nearby, and participate in community events.",
    image: "/local.png",
  },
  {
    id: 5,
    title: "Social Sharing",
    description:
      "Share your walk adventures, post photos and videos, engage with other pet owners, and celebrate milestones together.",
    image: "/social.png",
  },
  {
    id: 6,
    title: "Discussion Forums",
    description:
      "Join open discussions about pet wellness, training tips, local walking spots, and connect with fellow pet lovers.",
    image: "/discussion.png",
  },
];

// Corrected variants with proper type
const variants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier easeInOut equivalent
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function FeaturesMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleDragEnd = (_: any, info: any) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      setDirection(-1);
      setCurrentIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
    } else if (info.offset.x < -threshold) {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }
  };

  return (
    <div className="lg:hidden">
      {/* Carousel container with fixed height */}
      <div className="relative max-w-6xl mx-auto text-black min-h-[500px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: "grabbing" }}
            className="flex flex-col-reverse items-center cursor-grab"
          >
            <div className=" text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                className="text-2xl md:text-3xl lg:text-4xl mt-[24px] font-bold text-gray-900"
              >
                {steps[currentIndex].title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                className="text-[18px] mt-[16px]"
              >
                {steps[currentIndex].description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{  duration: 0.1 }}
              className="w-full max-w-[100%] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={steps[currentIndex].image}
                alt={steps[currentIndex].title}
                width={350}
                height={500}
                className="object-cover w-full h-[500px] rounded-xl"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {steps.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 ${
                index === currentIndex
                  ? "w-2 bg-brightblue"
                  : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              initial={false}
              animate={{ scale: index === currentIndex ? 1 : 1 }}
              transition={{ duration: 0.1 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA below carousel */}
      <div className="mt-10">
        <Install />
      </div>
    </div>
  );
}
