"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Install from "./Install";

const steps = [
  {
    id: 1,
    title: "GPS Walk Tracking",
    description:
      "Real-time GPS tracking of your walks with detailed metrics including distance, time, route mapping, and calories burned.",
    image: "/gps.png?height=400&width=600",
  },
  {
    id: 2,
    title: "PetFit Score",
    description:
      "Comprehensive wellness scoring system that tracks your pet's activity levels, consistency, and overall health trends over time.",
    image: "/petfit.png?height=400&width=600",
  },
  {
    id: 3,
    title: "Gamified Progress",
    description:
      "Earn badges, maintain streaks, climb leaderboards, and unlock achievements as you build consistent walking habits.",
    image: "/gamified.png?height=400&width=600",
  },
  {
    id: 4,
    title: "Local Communities",
    description:
      "Find and join local pet walking groups, discover walking buddies nearby, and participate in community events.",
    image: "/local.png?height=400&width=600",
  },
  {
    id: 5,
    title: "Social Sharing",
    description:
      "Share your walk adventures, post photos and videos, engage with other pet owners, and celebrate milestones together.",
    image: "/social.png?height=400&width=600",
  },
  {
    id: 6,
    title: "Discussion Forums",
    description:
      "Join open discussions about pet wellness, training tips, local walking spots, and connect with fellow pet lovers.",
    image: "/discussion.png?height=400&width=600",
  },
];

export default function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const stepIndex = useTransform(scrollYProgress, (v) =>
    Math.min(steps.length - 1, Math.floor(v * steps.length))
  );

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const unsubscribe = stepIndex.on("change", (latest) => {
      setActiveStep(latest);
    });
    return () => unsubscribe();
  }, [stepIndex]);

  const progressPercentage = (activeStep / (steps.length - 1)) * 100;

  //sliding caurosel
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isPaused, setIsPaused] = useState(false);
  // const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  // const activeStepData =
  //   steps.find((step) => step.id === activeStep) || steps[0];

  // // Function to handle drag gesture
  // const handleDragEnd = (event: any, info: any) => {
  //   const threshold = 20; // Minimum drag distance to trigger a change

  //   if (info.offset.x > threshold) {
  //     // Swiped right → go to previous slide
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === 0 ? steps.length - 1 : prevIndex - 1
  //     );
  //   } else if (info.offset.x < -threshold) {
  //     // Swiped left → go to next slide
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
  //   }
  // };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isPaused, setIsPaused] = useState(false);

  const handleDragEnd = (_: any, info: any) => {
    const threshold = 50;

    if (info.offset.x > threshold) {
      // Swiped right: show previous
      setDirection(-1);
      setCurrentIndex((prev) =>
        prev === 0 ? steps.length - 1 : prev - 1
      );
    } else if (info.offset.x < -threshold) {
      // Swiped left: show next
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="features" className="mt-[-5rem] mb-[2rem] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col lg:flex-row mb-10 justify-between gap-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-3xl capitalize font-bold text-deepblue mb-4">
            everything you need to keep your pet thriving
          </p>
          <p className="text-[16px] leading-6 text-lighttext">
            From custom challenges to health tracking and reminders—our tools
            are built to support every step of your pet’s wellness journey.
          </p>
        </div>
        <div className="flex-1 hidden lg:flex flex-col gap-5 items-center lg:items-end">
          <Link
            className="bg-[#1570EF] py-3 px-5 w-full md:max-w-[200px] rounded-[24px] text-center"
            href="/signup"
          >
            Get Started For <span className="font-bold">FREE</span>
          </Link>
          <div className="flex items-center justify-center space-x-6">
            <Link
              href=""
              className="px-4 py-2 bg-[#000000] text-[#ffffff] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:translate-y-1"
            >
              <div className="flex gap-2 h-7">
                <Image
                  src="/Apple-logo.png"
                  alt="apple logo"
                  width={20}
                  height={20}
                />
                <span className="flex flex-col gap-0 leading-3 mt-0.5 items-start">
                  <p className="text-[8px] ">Download on the </p>
                  <p className="text-[15px] font-bold">App Store</p>
                </span>
              </div>
            </Link>
            <Link
              href=""
              className="px-4 py-2 bg-[#000000] text-[#ffffff] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:translate-y-1"
            >
              <div className="flex gap-2 h-7">
                <Image
                  src="/Google Play logo.png"
                  alt="google logo"
                  width={20}
                  height={20}
                />
                <span className="flex flex-col gap-0 leading-3 mt-0.5 items-start">
                  <p className="text-[8px] ">GET IT ON </p>
                  <p className="text-[15px] font-bold">Google Play</p>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="hidden lg:block"
        ref={containerRef}
        style={{ height: `${steps.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center px-6 py-4">
          <div className="flex flex-row gap-10 w-full max-w-7xl h-[90%]">
            {/* Progress Sidebar */}
            <div className="relative flex flex-col justify-between w-[55%]">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200 rounded-[10px]" />
              <motion.div
                className="absolute left-4 top-0 w-1 bg-blue-500 rounded-[10px]"
                style={{ height: `${progressPercentage}%` }}
              />
              <motion.div
                className="absolute w-3 h-3 bg-blue-500 rounded-full left-[12px]"
                style={{ top: `calc(${progressPercentage}% - 7px)` }}
              />

              {steps.map((step, i) => (
                <motion.div key={step.id} className="ml-10">
                  <motion.h3
                    className={`text-xl font-bold transition-colors duration-300 ${
                      activeStep === i ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    {step.title}
                  </motion.h3>
                  {activeStep === i && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-500 mt-2"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Image Preview */}
            <div className="flex items-center justify-center w-[45%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={steps[activeStep].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative w-full h-[500px]"
                >
                  <Image
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/*mobile caurosel*/}
      <div
      className="lg:hidden relative max-w-6xl mx-auto text-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative rounded-2xl select-none overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: "grabbing" }}
            className="flex flex-col-reverse gap-8 items-center cursor-grab"
          >
            <div className="space-y-6 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900"
              >
                {steps[currentIndex].title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-[18px]"
              >
                {steps[currentIndex].description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={steps[currentIndex].image}
                  alt={steps[currentIndex].title}
                  width={600}
                  height={500}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {steps.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              index === currentIndex
                ? "w-2 bg-brightblue"
                : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            initial={false}
            animate={{ scale: index === currentIndex ? 1 : 1 }}
            transition={{ duration: 0.3 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>

      <div className="lg:hidden">
        <Install />
      </div>
    </section>
  );
}
