"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.div
      id="download"
      className="my-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-deepblue rounded-[24px] py-14 mx-auto">
        <div className="text-center md:w-[400px] px-3 flex flex-col gap-5 mx-auto">
          <p className="text-[34px] font-bold text-white">
            Ready to Start Walking?
          </p>
          <p className="text-[16px] text-[#E8F1FD]">
            Join thousands of pet owners who are already building healthier
            habits with their pets
          </p>

          <div className="flex items-center justify-center space-x-6">
            <Link
              href=""
              className="bg-[#ffffff] text-[#1B1E21] w-40 flex items-center justify-center h-11 font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="flex gap-1 h-7">
                <Image
                  src="/Apple logo.png"
                  alt="apple logo"
                  width={20}
                  height={20}
                />
                <span className="flex flex-col gap-0 leading-3 mt-0.5 items-start">
                  <p className="text-[8px]">Download on the </p>
                  <p className="text-[15px] font-bold">App Store</p>
                </span>
              </div>
            </Link>
            <Link
              href=""
              className="bg-[#ffffff] w-40 flex items-center justify-center h-11 text-[#1B1E21] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="flex gap-1 h-7">
                <Image
                  src="/Google Play logo.png"
                  alt="google play logo"
                  width={20}
                  height={20}
                />
                <span className="flex flex-col gap-0 leading-3 mt-0.5 items-start">
                  <p className="text-[8px]">GET IT ON </p>
                  <p className="text-[15px] font-bold">Google Play</p>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
