"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import SmartNavLink from "./SmartNavLink";

export default function Navbar() {
  const navLinks = [
    { href: "#features", label: "Features", smart: true },
    { href: "/about", label: "About Us", smart: false },
    { href: "#download", label: "Download", smart: true },
  ];

  const pathname = usePathname();
  const isActive = pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleSidebar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };
  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };
  return (
    <header className="bg-[#1570EF]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <div>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image src="/logohome.png" width={64} height={40} alt="logo" />
            </Link>
          </div>

          {/* Desktop Nav Links Centered */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="hidden md:flex items-center space-x-8 text-[#ffffff]">
              {navLinks.map((link) => {
                const isActive =
                  pathname.startsWith(link.href) &&
                  (link.href !== "/" || pathname === "/");
                return (
                  <div key={link.href}>
                    {link.smart ? (
                      <SmartNavLink
                        href={link.href}
                        label={link.label}
                        setMobileMenuOpen={setMobileMenuOpen}
                        className={`text-[16px] leading-5 ${
                          isActive ? "font-bold" : ""
                        }`}
                      />
                    ) : (
                      <Link
                        href={link.href}
                        className={`text-[16px] leading-5 ${
                          isActive ? "font-bold" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action buttons */}
          <div className="items-center gap-[10px] flex">
            <div className="hidden md:flex gap-4">
              <button className="w-[106px] h-[44px] text-[1rem] border border-[#ffffff] text-bold bg-transparent text-white rounded-[32px] items-center justify-center">
                <Link href="/">Login</Link>
              </button>
              <button className="w-[106px] h-[44px] text-[1rem] border border-[#ffffff] text-bold text-[#1570EF] bg-[#ffffff] rounded-[32px] items-center justify-center">
                <Link href="/">Sign Up</Link>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="cursor-pointer md:hidden text-white"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* mobile sidebar */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50  z-40"
                initial="closed"
                animate="open"
                exit="closed"
                variants={overlayVariants}
                onClick={toggleSidebar}
              />

              {/* Sidebar */}
              <motion.div
                className="fixed top-0 right-0 px-5 h-full w-full pb-[108px] bg-white shadow-lg z-50 flex flex-col rounded-l-lg"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sidebarVariants}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="py-4  flex justify-between items-center  ">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="md:hidden"
                  >
                    <Image
                      src="/logomobile.png"
                      width={64}
                      height={40}
                      alt="logo"
                    />
                  </Link>
                  <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md text-deepblue  focus:outline-none focus:ring-2 "
                    aria-label="Close sidebar"
                  >
                    {/* Close icon (X) */}
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>

                {/* Sidebar navigation links */}
                <div className="flex flex-col justify-between h-[80vh]">
                  <div className="py-4 space-y-6">
                    {navLinks.map((link, index) => {
                      const isActive =
                        pathname.startsWith(link.href) &&
                        (link.href !== "/" || pathname === "/");
                      const isLast = index === navLinks.length - 1;

                      return (
                        <div
                          key={link.href}
                          className={
                            !isLast ? "border-b border-gray-200 pb-4" : ""
                          }
                        >
                          {link.smart ? (
                            <SmartNavLink
                              href={link.href}
                              label={link.label}
                              setMobileMenuOpen={setMobileMenuOpen}
                              className={`text-[16px] leading-5 text-deepblue ${
                                isActive ? "font-bold text-brightblue" : ""
                              }`}
                            />
                          ) : (
                            <Link
                              href={link.href}
                              className={`text-[16px] leading-5 text-deepblue ${
                                isActive ? "font-bold text-brightblue" : ""
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-5">
                    <button className=" h-[44px]  text-[1rem] border border-brightblue text-bold bg-brightblue text-white   rounded-[32px]  flex items-center justify-center  ">
                      Login
                    </button>
                    <button className=" h-[44px]  text-[1rem] border border-brightblue text-bold text-brightblue bg-white   rounded-[32px]   flex items-center justify-center ">
                      Sign up
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
