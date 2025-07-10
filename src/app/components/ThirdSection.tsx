"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef, useCallback } from "react";

import Install from "./Install";
import { motion, AnimatePresence, useSpring } from "framer-motion";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
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

export default function ThirdSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollAccumulator = useRef(0);
  const isScrollingRef = useRef(false);
  const exitBuffer = useRef(0); // Buffer for smooth exit

  //sliding caurosel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  const activeStepData =
    steps.find((step) => step.id === activeStep) || steps[0];

  // Smooth spring animation for progress
  const progressSpring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressPercentage = ((activeStep - 1) / (steps.length - 1)) * 100;

  //const progressTransform = (value: number) => `${(value / 100) * 100}%`;

  useEffect(() => {
    progressSpring.set(progressPercentage);
  }, [progressPercentage, progressSpring]);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current || isScrollingRef.current || isExiting) return;
    

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const sectionCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);

    const shouldBeActive =
      distanceFromCenter < windowHeight * 0.3 &&
      rect.top < windowHeight &&
      rect.bottom > 0;

    if (shouldBeActive && !isActive) {
      setIsActive(true);
      setIsExiting(false);
      if (scrollAccumulator.current === 0) {
        scrollAccumulator.current = 0;
        setActiveStep(1);
      }
      exitBuffer.current = 0;

      isScrollingRef.current = true;
      const targetScroll = window.scrollY + (sectionCenter - viewportCenter);
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    } else if (!shouldBeActive && isActive && !isExiting) {
      if (rect.bottom < -100 || rect.top > windowHeight + 100) {
        setIsActive(false);
        setIsExiting(false);
        exitBuffer.current = 0;
      }
    }
  }, [isActive, isExiting]);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isActive || isScrollingRef.current || isExiting) return;

      e.preventDefault();

      const delta = e.deltaY;
      const stepSize = 150;
      const exitThreshold = 200;

      if (
        (delta > 0 && activeStep === steps.length) ||
        (delta < 0 && activeStep === 1)
      ) {
        exitBuffer.current += Math.abs(delta);

        if (exitBuffer.current >= exitThreshold) {
          setIsExiting(true);
          isScrollingRef.current = true;

          setTimeout(() => {
            setIsActive(false);

            setTimeout(() => {
              if (delta > 0 && activeStep === steps.length) {
                const sectionTop = sectionRef.current?.offsetTop || 0;
                const sectionHeight = sectionRef.current?.offsetHeight || 0;
                const nextSectionStart = sectionTop + sectionHeight;
                window.scrollTo({ top: nextSectionStart, behavior: "smooth" });
              } else if (delta < 0 && activeStep === 1) {
                const sectionTop = sectionRef.current?.offsetTop || 0;
                const targetScroll = Math.max(
                  0,
                  sectionTop - window.innerHeight
                );
                window.scrollTo({ top: targetScroll, behavior: "smooth" });
              }

              setTimeout(() => {
                isScrollingRef.current = false;
                scrollAccumulator.current = (activeStep - 1) * stepSize;
                exitBuffer.current = 0;
                setIsExiting(false);
              }, 800);
            }, 100);
          }, 200);
        }
        return;
      }

      exitBuffer.current = 0;
      scrollAccumulator.current += delta;

      const rawStepIndex = scrollAccumulator.current / stepSize;
      let newActiveStep = Math.round(rawStepIndex) + 1;

      newActiveStep = Math.max(1, Math.min(steps.length, newActiveStep));

      if (newActiveStep !== activeStep) {
        setActiveStep(newActiveStep);
      }

      const minAccumulator = 0;
      const maxAccumulator = (steps.length - 1) * stepSize;
      scrollAccumulator.current = Math.max(
        minAccumulator,
        Math.min(maxAccumulator, scrollAccumulator.current)
      );
    },
    [isActive, activeStep, isExiting]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleScroll, handleWheel]);

  // Sliding Caurosel drag
  const handleDragEnd = (event: any, info: any) => {
    const threshold = 20; // Minimum drag distance to trigger slide change

    if (info.offset.x > threshold) {
      // Dragged right - go to previous slide
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? steps.length - 1 : prevIndex - 1
      );
    } else if (info.offset.x < -threshold) {
      // Dragged left - go to next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <motion.section
      ref={sectionRef}
      className={` my-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:h-screen`}
      initial={{ opacity: 1 }}
      animate={{
        opacity: isExiting ? 0.9 : 1,
        scale: isExiting ? 0.98 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div
        className={`flex flex-col lg:flex-row mb-10 justify-between gap-10 ${
          isActive ? "mx-auto" : ""
        }`}
      >
        <div className="flex-1 text-center lg:text-left">
          <p className="text-3xl capitalize font-bold text-deepblue mb-[16px]">
            everything you need to keep your pet thriving
          </p>
          <p className="text-[16px] leading-6 text-lighttext">
            From custom challenges to health tracking and reminders—our tools
            are built to support every step of your pet’s wellness journey.
          </p>
        </div>
        <div className="flex-1 hidden lg:flex flex-col gap-5 items-center  lg:items-end">
          <Link
            className="bg-[#1570EF] py-3 px-5 w-full md:max-w-[200px] rounded-[24px] text-center"
            href="/signup"
          >
            Get Started For <span className="font-bold">FREE</span>
          </Link>
          <div className="flex  items-center justify-center space-x-6">
            <Link
              href=""
              className="px-4 py-2 bg-[#000000] text-[#ffffff] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:translate-y-1 "
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
              className="px-4 py-2 bg-[#000000] text-[#ffffff] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:translate-y-1 "
            >
              <div className="flex gap-2 h-7">
                <Image
                  src="/Google Play logo.png"
                  alt="apple logo"
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
        // No ref needed here if we rely on sectionRef's BoundingClientRect to check sticky state
        className="relative hidden lg:block"
        // This min-height is crucial: it determines how long the sticky element stays stuck.
        // Each step essentially "consumes" 100vh of scroll.
        style={{ minHeight: `${(steps.length + 1) * 100}vh` }}
      >
        {/* 3. The Core Feature Section (Becomes Sticky) */}
        <motion.section
          ref={sectionRef}
          className={`
            w-full h-screen lg:sticky lg:top-0 flex flex-col justify-center
            max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
            // Visually indicate when it's not active/stuck (e.g., fades out)
            ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
          initial={{ opacity: 0 }} // Start invisible, then `isActive` will control
          animate={{
            opacity: isActive ? 1 : 0, // Animate based on isActive
            scale: isExiting ? 0.98 : 1, // isExiting might need re-evaluation
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full"> {/* Inner div to align content within the sticky section */}
            <div className="grid lg:grid-cols-2 gap-12 items-stretch h-full">
              {/* Left side - Steps */}
              <div className="space-y-8 flex flex-col justify-center">
                {/* Progress Bar */}
                <div className="relative flex-1">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray"></div>
                  <motion.div
                    className="absolute left-6 top-0 w-0.5 bg-brightblue transition-all duration-500 ease-in-out"
                    style={{
                      height: progressPercentage + "%",
                    }}
                  ></motion.div>

                  {/* Round top indicator */}
                  <motion.div
                    className="absolute w-3 h-3 bg-brightblue rounded-full border-2 border-brightblue shadow-md transition-all duration-500 ease-in-out"
                    style={{
                      left: "18px",
                      top: progressPercentage + "%",
                      transform: "translateY(-50%)",
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    key={activeStep}
                  ></motion.div>

                  {/* Step Headers */}
                  <div className="space-y-8 h-full flex flex-col justify-around py-8">
                    {steps.map((step, index) => (
                      <motion.div
                        key={step.id}
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <div className="ml-12 flex-1">
                          <motion.div
                            className="text-left"
                            animate={{
                              color:
                                activeStep === step.id ? "#2563eb" : "#374151",
                              scale: activeStep === step.id ? 1.05 : 1,
                            }}
                            transition={{
                              duration: 0.4,
                              ease: "easeInOut",
                            }}
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {step.title}
                            </h3>
                          </motion.div>
                          <AnimatePresence mode="wait">
                            {activeStep === step.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0, y: -10 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -10 }}
                                transition={{
                                  duration: 0.4,
                                  ease: "easeInOut",
                                }}
                              >
                                <p className="text-muted-foreground leading-relaxed text-lighttext">
                                  {step.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side - Image */}
              <motion.div
                className="flex items-center justify-center h-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg w-full h-auto max-h-[80vh]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                      className="w-full h-full"
                    >
                      <Image
                        src={activeStepData.image || "/placeholder.svg"}
                        alt={activeStepData.title}
                        width={600}
                        height={500}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      {/*mobile caurosel*/}
      <div
        className="lg:hidden relative max-w-6xl mx-auto text-black"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="relative  rounded-2xl  select-none"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              layout
              layoutId="carousel-content"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              dragElastic={0.2}
              onDragStart={() => setIsPaused(true)}
              onDragEnd={handleDragEnd}
              whileDrag={{ cursor: "grabbing" }}
              style={{ position: "relative" }}
              className=" flex flex-col-reverse gap-8  items-center cursor-grab"
            >
              <div className="space-y-6 text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 "
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative "
              >
                <div className="relative  rounded-xl overflow-hidden shadow-lg">
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
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                index === currentIndex
                  ? "w-2 bg-brightblue"
                  : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              initial={false}
              animate={{
                scale: index === currentIndex ? 1 : 1,
              }}
              transition={{ duration: 0.3 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="lg:hidden">
        <Install />
      </div>
    </motion.section>
  );
}
