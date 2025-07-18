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
import FeaturesMobile from "./FeaturesMobile";
import FeaturesMobileView from "./FeaturesMobileView";

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

  

  return (
    <section id="features" className="mt-24 md:mt-0 mb-[2rem] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            className="bg-[#1570EF] py-3 px-5 w-full md:w-82.5 text-[#ffffff] rounded-[24px] text-center"
            href="/signup"
          >
            Get Started For <span className="font-bold">FREE</span>
          </Link>
          <div className="flex items-center justify-center gap-4">
            <Link
              href=""
              className="w-40 h-11 flex items-center justify-center bg-[#000000] text-[#ffffff] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:translate-y-1"
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
              className="w-40 flex items-center justify-center h-11 bg-[#000000] text-[#ffffff] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:translate-y-1"
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
        <div className="sticky top-0 h-screen flex items-center justify-center  py-4">
          <div className="flex flex-row gap-10 w-full max-w-7xl h-[90%]">
            {/* Progress Sidebar */}
            <div className="relative flex flex-col justify-between w-[55%]">
              <div className="absolute left-1 top-0 bottom-0 w-2 bg-[#E8F1FD] rounded-[10px]" />
              <motion.div
                className="absolute left-1 top-0 w-2 bg-blue-500 rounded-[10px]"
                style={{ height: `${progressPercentage}%` }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-blue-500 rounded-full left-0"
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
                      className="text-gray-500 mt-2 max-w-[430px]"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Image Preview */}
            <div className="flex items-center justify-center w-[50%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={steps[activeStep].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1, ease: "easeInOut" }}
                  className="relative w-full h-[600px]"
                >
                  <Image
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    fill
                    className="object-cover w-full h-full"
                    priority={true}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/*mobile caurosel*/}
      <FeaturesMobileView />
    </section>
  );
}
