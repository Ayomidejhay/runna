"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { HTMLMotionProps, motion, useInView } from "framer-motion";

interface AboutProps {
  imageSrc: string;
  imageAlt: string;
  header: string;
  text: string;
  flexDirection?:
    | "flex-row"
    | "flex-row-reverse"
    | "flex-col"
    | "flex-col-reverse";
  classNamee?: string;
  imageClassName?: string;
  contentClassName?: string;
  headerClassName?: string;
  caption: string;
}

export default function About({
  imageSrc,
  imageAlt,
  header,
  text,
  flexDirection = "flex-row",
  classNamee,
  imageClassName,
  contentClassName,
  headerClassName,
  caption,
}: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isColumn = flexDirection.includes("col");
  const isReverse = flexDirection.includes("reverse");

  // Create responsive flex classes
  const getResponsiveFlexClasses = () => {
    if (flexDirection === "flex-row") {
      return "flex-col md:flex-row";
    } else if (flexDirection === "flex-row-reverse") {
      return "flex-col md:flex-row-reverse";
    } else if (flexDirection === "flex-col") {
      return "flex-col-reverse md:flex-col";
    } else if (flexDirection === "flex-col-reverse") {
      return "flex-col md:flex-col-reverse";
    }
    return flexDirection;
  };

const containerVariants: HTMLMotionProps<"div">["variants"] = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for content
  const contentVariants: HTMLMotionProps<"div">["variants"] = {
    hidden: {
      opacity: 0,
      x: isReverse && !isColumn ? 50 : -50,
      y: isColumn ? 30 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for image
  const imageVariants: HTMLMotionProps<"div">["variants"] = {
    hidden: {
      opacity: 0,
      x: isReverse && !isColumn ? -50 : 50,
      y: isColumn ? -30 : 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  // Header text animation variants
  const headerVariants: HTMLMotionProps<"h2">["variants"] = { // Type for h2
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.1,
      },
    },
  };

  // Text animation variants
  const textVariants: HTMLMotionProps<"p">["variants"] = { // Type for p
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };


  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`pb-24 md:pb-24 flex md:gap-8 lg:gap-12 gap-6 items-center ${getResponsiveFlexClasses()} ${classNamee} ${
        isColumn ? "text-center" : ""
      }`}
    >
      <motion.div
      variants={contentVariants}
        className={`flex-1 space-y-4 ${
          isColumn ? "order-2" : ""
        } ${contentClassName}`}
      >
        <div className="py-[4px] px-[10px] bg-lightblue rounded-[100px] w-fit">
          <p className="text-brightblue ">{caption}</p>
        </div>
        <motion.h2
        variants={headerVariants}
          className={`font-bold leading-tight text-deepblue ${headerClassName}`}
        >
          {header}
        </motion.h2>
        <motion.p variants={textVariants} className={`leading-relaxed text-[16px] text-lighttext`}>{text}</motion.p>
      </motion.div>
      <motion.div
        variants={imageVariants}
        className={`flex-1 ${
          isColumn ? "order-1  mx-auto" : ""
        } ${imageClassName}`}
      >
        <motion.div  whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}>
          <Image
          src={imageSrc}
          alt={imageAlt}
          height={440}
          width={640}
          className="rounded-[16px]"
        />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
