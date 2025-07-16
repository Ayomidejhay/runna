"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Install from "./Install";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function EarnRewards() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const cards = [
    {
      badge: "Earn Rewards",
      title: "earn badges, celebrate milestones",
      text: "Motivate consistency with fun, visual rewards for you and your pet.",
      image: "/firstframe.png",
    },
    {
      badge: "Find your people, fuel your progress",
      title: "Your Pack Awaits",
      text: "Whether you're looking to join a walking challenge or share tips on pet health, our community gives you the space to bond, grow, and thrive.",
      image: "/secondframe.png",
    },
  ];

  return (
    <div className="bg-graywhite py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="flex flex-col md:flex-row gap-10 items-stretch"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              transition={{
                delay: i * 0.3,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for easeOut
              }}
              className="flex-1 bg-white rounded-t-[16px] max-w-[628px] flex flex-col"
            >
              <div className="flex flex-col gap-3 px-5 py-8 h-full">
                <div className="px-2 py-1 rounded-[100px] bg-lightblue text-brightblue text-[14px] font-bold w-fit">
                  <p>{card.badge}</p>
                </div>
                <p className="capitalize font-bold text-[24px] text-deepblue">
                  {card.title}
                </p>
                <p className="text-lighttext">{card.text}</p>
              </div>
              <div className="mt-auto">zz
                <Image
                  src={card.image}
                  alt={card.title}
                  width={628}
                  height={481}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5">
          <Install />
        </div>
      </div>
    </div>
  );
}
