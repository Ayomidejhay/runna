'use client';

import React, {useEffect, useRef} from "react";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis"
import HowItWorksCard from "./HowItWorksCard";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
  bgcolor: string;
  color: string;
  contentcolor: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Sign Up",
    description:
      "Create your account and set up your pet’s profile in seconds.",
    image: "/workone.png",
    bgcolor: "#070E1A",
    color: "white",
    contentcolor: "#E7E9EC"
  },
  {
    id: 2,
    title: "Join Challenges",
    description:
      "Choose fun, wellness-based challenges tailored to your goals.",
    image: "/work2.png",
    bgcolor: "#F5F3EF",
    color: 'deepblue',
    contentcolor: 'lighttext',
  },
  {
    id: 3,
    title: "Track Progress",
    description: "Stay on top of your activities with real-time updates.",
    image: "/work3.png",
    bgcolor: "#EBEAE9",
    color: 'deepblue',
    contentcolor: 'lighttext',
  },
  {
    id: 4,
    title: "Earn Rewards",
    description:
      "Complete challenges, unlock badges, and earn exciting rewards.",
    image: "/work4.png",
    bgcolor: "#F6F4F2",
    color: 'deepblue',
    contentcolor: 'lighttext',
  },
];

export default function HowItWorks() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()
    function raf(time: number): void {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (
    <div className="mt-24 max-w-7xl mx-auto !px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-[40px]">
        <p className="text-3xl capitalize font-bold text-deepblue mb-[16px]">
          How it works
        </p>
        <p className="text-[16px] leading-6 text-lighttext">
          Getting Started is Easy
        </p>
      </div>
      <div ref={container} className="">
        {steps.map((step, id) => {
          const targetScale = 1 - ( (steps.length - id) * 0.05);
            return <HowItWorksCard key={`p_${id}`}  {...step} progress={scrollYProgress} range={[id * .25, 1]} targetScale={targetScale}/>
        })}
      </div>
    </div>
  );
}
