"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What exactly is Runnars and how does it work?",
    answer:
      "Runnars is a wellness and community app for dog owners. It helps you stay consistent with daily walks, track your pet’s wellness, join challenges, and connect with other pet lovers—all while earning rewards.",
  },
  {
    question: "Do I need a dog to use the app?",
    answer:
      "Runnars is designed for pet’s owners, but if you’re a pet lover or planning to adopt, you can still explore the community and challenges until you’re ready to add a pet profile.",
  },
  {
    question: "How are PetFit Scores calculated?",
    answer:
      "PetFit Scores are updated weekly based on your pet’s’s activity—like walk frequency, distance, and consistency. The more you walk and stay active, the higher the score",
  },
  {
    question: "What types of challenges can I join?",
    answer:
      "You can join daily, weekly, or themed challenges—ranging from sunrise walks to hydration goals or cause-based events. More challenge types will continue to be added.",
  },
  {
    question: "Can I connect with other pet owners near me?",
    answer:
      "Yes! Use the Walk Buddy feature to find fellow pet owners nearby or join local walking communities for meetups, group challenges, and social bonding.",
  },
  {
    question: "How do I earn and redeem rewards?",
    answer:
      "You earn points through activity, streaks, and challenge completions. These points can be redeemed for app perks, discounts, or special badges inside your profile.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className=" px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
        <div className="max-w-[430px] mx-auto">
            <p className="capitalize text-[40px] font-bold text-deepblue text-center">
          frequently asked questions
        </p>
        </div>

        <div className="">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-[#E1E1E1]  py-[32px] "
            >
              <button
                className="w-full text-left py-2 font-bold text-[18px]  flex justify-between items-center"
                onClick={() => toggle(index)}
              >
                <span className="text-deepblue">{faq.question}</span>
                <span className="ml-2 text-deepblue">
                  {openIndex === index ? (
                    <Image
                      src="/minus-cirlce.svg"
                      alt="minus-circle"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src="/add-circle.svg"
                      alt="add-circle"
                      width={24}
                      height={24}
                    />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className=" pb-4 text-lighttext text-[16px] pr-[50px]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
