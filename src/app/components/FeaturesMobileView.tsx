"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Install from "./Install";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "GPS Walk Tracking",
    description:
      "Real-time GPS tracking of your walks with detailed metrics including distance, time, route mapping, and calories burned.",
    image: "/gpstrack.png",
  },
  {
    id: 2,
    title: "PetFit Score",
    description:
      "Comprehensive wellness scoring system that tracks your pet's activity levels, consistency, and overall health trends over time.",
    image: "/pscore.png",
  },
  {
    id: 3,
    title: "Gamified Progress",
    description:
      "Earn badges, maintain streaks, climb leaderboards, and unlock achievements as you build consistent walking habits.",
    image: "/gprogress.png",
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
    image: "/sharing.png",
  },
  {
    id: 6,
    title: "Discussion Forums",
    description:
      "Join open discussions about pet wellness, training tips, local walking spots, and connect with fellow pet lovers.",
    image: "/dforum.png",
  },
];

export default function FeaturesMobileView() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <div className="lg:hidden">
      <div className="relative max-w-6xl mx-auto text-deepblue min-h-[600px] overflow-hidden">
        {/* Slide container with absolute stacking */}
        <div
          className="relative w-full h-[600px] embla overflow-hidden"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            {steps.map((step) => (
              <div
                key={step.id}
                className="embla__slide flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_45%] lg:flex-[0_0_33.333%]"
              >
                <div className=" w-full h-full flex flex-col-reverse items-center justify-center cursor-grab">
                  <div className="text-center px-4">
                    <h3 className="text-2xl md:text-3xl mt-[24px] font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="text-[18px] mt-[16px] text-[#5F6A7E]">{step.description}</p>
                  </div>

                  <div className="w-full max-w-[100%]  overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={343}
                      height={376}
                      className="object-cover w-full  "
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              className={`rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-3 h-3 bg-brightblue scale-110"
                  : "w-3 h-3 bg-[#F0F0F0] "
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <Install />
      </div>
    </div>
  );
}
