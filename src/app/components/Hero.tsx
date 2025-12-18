"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
      <div className="relative flex" style={{ height: "calc(100vh - 80px)" }}>
        {/* Background image */}
        <Image
          src="/hero.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority={true}
          className="z-0"
          
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/60 z-10" />

        {/* Hero content */}
        <div className="relative z-20 max-w-[570px] mx-auto px-4 sm:px-6 flex items-center justify-center text-center">
          <motion.div
            className="flex flex-col "
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Title */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-white text-[40px] md:text-5xl mb-[16px]"
            >
              <p className="font-bold leading-tight">
                Wellness for You. <br /> Wellness for Your Pet.
              </p>
            </motion.span>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-[14px] md:text-[16px] text-white mx-auto mb-[32px]"
            >
              With Runnars, every step, sip, or stretch becomes a chance to grow
              closer to your pet, improve your health, and earn real-life
              rewards — in challenges built just for pet lovers.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="bg-[#1570EF] w-full  md:w-82.5 flex items-center justify-center h-11 mx-auto rounded-[24px] text-white font-medium text-[15px] mb-[32px]"
            >
              {/* <Link href="/signup">
                Get Started For <span className="font-bold">FREE</span>
              </Link> */}
              <Link href="#">
                Coming <span className="font-bold">SOON...</span>
              </Link>
            </motion.div>

            {/* App Store Info */}
            {/* <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="text-white text-[12px] mb-[16px]"
            >
              Available on iOS and Android
            </motion.div> */}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="text-white text-[12px] mb-[16px]"
            >
              Follow us on social media
            </motion.div>

            {/* App Store Buttons */}
            <motion.div
              className="flex items-center justify-center space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {/* Apple Store */}
              {/*<Link
                href=""
                className="bg-white text-[#1B1E21] w-full md:w-40 flex items-center justify-center h-11 font-medium rounded-[8px] transition-shadow shadow-lg hover:shadow-xl transform hover:translate-y-1"
              >
                <div className="flex gap-1 h-7">
                  <Image
                    src="/Apple logo.png"
                    alt="apple logo"
                    width={20}
                    height={20}
                  />
                  <span className="flex flex-col gap-0 leading-3 mt-0.5 items-start">
                    <p className="text-[8px]">Download on the</p>
                    <p className="text-[15px] font-bold">App Store</p>
                  </span>
                </div>
              </Link>*/}

              {/* Google Play */}
              {/* <Link
                href=""
                className="bg-white w-full md:w-40 flex items-center justify-center h-11 text-[#1B1E21] font-medium rounded-[8px] transition-shadow shadow-lg hover:shadow-xl transform hover:translate-y-1"
              >
                <div className="flex gap-1 h-7">
                  <Image
                    src="/Google Play logo.png"
                    alt="google play logo"
                    width={20}
                    height={20}
                  />
                  <span className="flex flex-col gap-0 leading-3 mt-0.5 items-start">
                    <p className="text-[8px]">GET IT ON</p>
                    <p className="text-[15px] font-bold">Google Play</p>
                  </span>
                </div>
              </Link> */}

              <Link
                href="https://www.instagram.com/runnarspet?igsh=MWt6bDRhNXBiMG9uYw=="
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer"
              >
                <Image
                  src="/instagram.png"
                  alt="instagram"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=100078407485911"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer"
              >
                <Image
                  src="/facebook.png"
                  alt="facebook"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
              </Link>

              {/* <Link
                href="https://x.com/runnarsapp?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white h-8 w-8 flex items-center justify-center rounded-[4px] transition-transform transform hover:scale-110 hover:shadow-md cursor-pointer"
              >
                <Image src="/x.png" alt="x" width={17} height={17} />
              </Link> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
