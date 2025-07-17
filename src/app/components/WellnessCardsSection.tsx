"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { div } from "framer-motion/client";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function WellnessCardsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const cards = [
    {
      img: "/task-square.svg",
      title: "daily challenge that support pet wellness",
      text: "Your pet’s health needs more than just vet visits — we turn small actions into lasting habits.",
    },
    {
      img: "/chart.svg",
      title: "more than walks: complete pet wellbeing",
      text: "Health isn’t one-size-fits-all. From walks to play to rest — customize wellness your way.",
    },
    {
      img: "/stickynote.svg",
      title: "structured routine that fit real life",
      text: "It's easy to lose track of wellness goals — we help you stay consistent through flexible challenges.",
    },
    {
      img: "/calendar-tick.svg",
      title: "everyday activities with long-term impact",
      text: "Small daily actions add up. Our platform helps you track and build toward your pet’s full potential.",
    },
  ];

  return (
    <div className="my-24 max-w-7xl mx-auto !px-4 sm:px-6 lg:px-8 relative text-[#070E1A]">
      <div className="">
        <div className="text-center mb-16">
        <p className="text-3xl capitalize font-bold">
          Empowering pet wellness <br /> through everyday routines
        </p>
      </div>
      <div
        ref={ref}
        className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            transition={{
              delay: i * 0.4,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-72 mx-auto rounded-[16px] p-10 bg-[#FBFBFD] text-center flex flex-col gap-10"
          >
            <div className="mx-auto">
              <Image src={card.img} alt="icon" width={56} height={56} />
            </div>
            <p className="capitalize text-[20px] font-bold leading-7">
              {card.title}
            </p>
            <p className="text-[16px] leading-6 -mt-3 text-[#5F6A7E]">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}
