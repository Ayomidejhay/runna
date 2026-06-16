"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  // Eye blinking animation
  const eyeBlink = {
    scaleY: [1, 1, 0.1, 1, 1, 1, 0.1, 1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatDelay: 2.5,
      ease: "easeInOut" as const,
    },
  };

  // Tail wagging animation
  const tailWag = {
    rotate: [-12, 18, -12],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  // Head tilting animation
  const headTilt = {
    rotate: [-4, 6, -4],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  // Ear twitching animation
  const earTwitchLeft = {
    rotate: [0, -6, 0, 0, -6, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "easeInOut" as const,
    },
  };

  const earTwitchRight = {
    rotate: [0, 6, 0, 0, 6, 0],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      repeatDelay: 2.8,
      ease: "easeInOut" as const,
    },
  };

  // Floating question marks/paws
  const floatIcon = (delay: number) => ({
    y: [0, -35, -50],
    x: [0, 5, -5, 0],
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      delay: delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 text-center bg-white font-satoshi">
      {/* 404 Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        <span className="text-8xl md:text-9xl font-black text-[#1570EF] tracking-wider block">
          404
        </span>
      </motion.div>

      {/* Main Illustration */}
      <div className="w-full max-w-[360px] h-[260px] mx-auto mb-8 relative select-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* Background Glow */}
          <circle cx="200" cy="180" r="100" fill="#F0F6FF" />

          {/* Path/Ground */}
          <path
            d="M 50,245 Q 200,225 350,245"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Signpost */}
          <g>
            {/* Pole */}
            <rect x="290" y="90" width="10" height="155" fill="#8E98A8" rx="5" />
            <rect x="293" y="90" width="4" height="155" fill="#A3AED0" rx="2" />
            
            {/* Sign Plank 1 (Home) - Points Left */}
            <g className="cursor-pointer">
              <path
                d="M 230,105 L 290,105 L 290,135 L 230,135 L 215,120 Z"
                fill="#1570EF"
                className="transition-colors duration-200 hover:fill-[#0f5fd0]"
              />
              <text
                x="256"
                y="124"
                fill="#FFFFFF"
                fontSize="11"
                fontWeight="bold"
                className="pointer-events-none font-sans"
              >
                HOME
              </text>
            </g>

            {/* Sign Plank 2 (Lost) - Points Right */}
            <g>
              <path
                d="M 290,145 L 350,145 L 365,160 L 350,175 L 290,175 Z"
                fill="#070E1A"
              />
              <text
                x="324"
                y="164"
                fill="#FFFFFF"
                fontSize="11"
                fontWeight="bold"
                className="pointer-events-none font-sans"
              >
                LOST
              </text>
            </g>

            {/* Screws/Nails */}
            <circle cx="295" cy="120" r="2.5" fill="#E5E7EB" />
            <circle cx="295" cy="160" r="2.5" fill="#E5E7EB" />
          </g>

          {/* Animated Puppy */}
          <g transform="translate(40, 0)">
            {/* Puppy Tail */}
            <motion.path
              d="M 115,225 C 95,225 75,200 85,185 C 90,178 100,195 115,215"
              fill="#F59E0B"
              stroke="#D97706"
              strokeWidth="2"
              style={{ transformOrigin: "115px 225px" }}
              animate={tailWag}
            />

            {/* Puppy Body */}
            <path
              d="M 110,235 C 110,185 170,185 170,235 Z"
              fill="#F59E0B"
            />
            {/* Chest Highlight */}
            <path
              d="M 125,235 C 125,200 155,200 155,235 Z"
              fill="#FEF3C7"
            />

            {/* Front Paws */}
            <ellipse cx="128" cy="238" rx="11" ry="7" fill="#D97706" />
            <ellipse cx="152" cy="238" rx="11" ry="7" fill="#D97706" />

            {/* Collar */}
            <path
              d="M 118,188 Q 140,200 162,188"
              fill="none"
              stroke="#1570EF"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Collar Tag */}
            <circle cx="140" cy="199" r="6" fill="#FBBF24" />
            <circle cx="140" cy="199" r="2" fill="#D97706" />

            {/* Puppy Head & Face (Tilting Group) */}
            <motion.g
              style={{ transformOrigin: "140px 185px" }}
              animate={headTilt}
            >
              {/* Ears */}
              <motion.path
                d="M 108,145 C 92,145 85,180 102,185 C 112,185 115,155 108,145 Z"
                fill="#D97706"
                style={{ transformOrigin: "108px 145px" }}
                animate={earTwitchLeft}
              />
              <motion.path
                d="M 172,145 C 188,145 195,180 178,185 C 168,185 165,155 172,145 Z"
                fill="#D97706"
                style={{ transformOrigin: "172px 145px" }}
                animate={earTwitchRight}
              />

              {/* Head shape */}
              <ellipse cx="140" cy="155" rx="34" ry="30" fill="#F59E0B" />
              {/* Face mask/highlight */}
              <path
                d="M 114,162 C 114,142 126,135 140,135 C 154,135 166,142 166,162 C 166,178 154,182 140,182 C 126,182 114,178 114,162 Z"
                fill="#FEF3C7"
                opacity="0.3"
              />

              {/* Snout */}
              <ellipse cx="140" cy="166" rx="16" ry="12" fill="#FEF3C7" />
              
              {/* Nose */}
              <path
                d="M 133,161 C 133,158 147,158 147,161 C 147,165 133,165 133,161 Z"
                fill="#1E293B"
              />

              {/* Cute Tongue */}
              <path
                d="M 136,172 C 136,182 144,182 144,172 Z"
                fill="#F43F5E"
              />

              {/* Eyes */}
              <motion.circle
                cx="126"
                cy="150"
                r="4.5"
                fill="#1E293B"
                style={{ transformOrigin: "126px 150px" }}
                animate={eyeBlink}
              />
              <motion.circle
                cx="154"
                cy="150"
                r="4.5"
                fill="#1E293B"
                style={{ transformOrigin: "154px 150px" }}
                animate={eyeBlink}
              />

              {/* Eyebrows */}
              <path
                d="M 120,143 Q 126,141 130,144"
                fill="none"
                stroke="#D97706"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 160,143 Q 154,141 150,144"
                fill="none"
                stroke="#D97706"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.g>
          </g>

          {/* Floating question marks & paw prints */}
          <motion.g
            x="180"
            y="120"
            style={{ transformOrigin: "180px 120px" }}
            animate={floatIcon(0)}
          >
            <text x="175" y="115" fill="#8E98A8" fontSize="16" fontWeight="bold">?</text>
          </motion.g>
          <motion.g
            x="140"
            y="90"
            style={{ transformOrigin: "140px 90px" }}
            animate={floatIcon(1.2)}
          >
            <text x="135" y="85" fill="#1570EF" fontSize="20" fontWeight="bold">?</text>
          </motion.g>
          <motion.g
            x="210"
            y="100"
            style={{ transformOrigin: "210px 100px" }}
            animate={floatIcon(0.6)}
          >
            {/* Small Paw Print SVG representation inside text/group */}
            <path
              d="M 205,92 C 203.5,92 202.5,93 202.5,94 C 202.5,95 203.5,96 205,96 C 206.5,96 207.5,95 207.5,94 C 207.5,93 206.5,92 205,92 Z 
                 M 213,92 C 211.5,92 210.5,93 210.5,94 C 210.5,95 211.5,96 213,96 C 214.5,96 215.5,95 215.5,94 C 215.5,93 214.5,92 213,92 Z
                 M 209,98 C 207,98 205.5,99.5 205.5,101.5 C 205.5,103 207,104.5 209,104.5 C 211,104.5 212.5,103 212.5,101.5 C 212.5,99.5 211,98 209,98 Z"
              fill="#F0F6FF"
              stroke="#8E98A8"
              strokeWidth="1"
            />
          </motion.g>
        </svg>
      </div>

      {/* Copy Content */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-xl mx-auto mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#070E1A] mb-4">
          Paws and Reflect... This Page Has Run Away!
        </h1>
        <p className="text-2xl text-[#5F6A7E] leading-relaxed">
          It looks like you&apos;ve wandered off the trail. Let&apos;s get you and your pet back on
          track.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto"
      >
        <Link href="/" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 h-12 bg-[#1570EF] text-white rounded-[32px] font-semibold text-base transition-all duration-300 hover:bg-[#0f5fd0] hover:shadow-lg hover:-translate-y-1 cursor-pointer flex items-center justify-center">
            Return Home
          </button>
        </Link>
        
        {/* <Link href="/about" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 h-12 border border-[#1570EF] text-[#1570EF] bg-white rounded-[32px] font-semibold text-base transition-all duration-300 hover:bg-[#F0F6FF] hover:shadow-md hover:-translate-y-1 cursor-pointer flex items-center justify-center">
            About Us
          </button>
        </Link> */}

        <a href="mailto:support@runnarsapp.com" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 h-12 border border-[#8E98A8] text-[#5F6A7E] bg-white rounded-[32px] font-semibold text-base transition-all duration-300 hover:border-[#070E1A] hover:text-[#070E1A] hover:-translate-y-1 cursor-pointer flex items-center justify-center">
            Contact Support
          </button>
        </a>
      </motion.div>
    </div>
  );
}
