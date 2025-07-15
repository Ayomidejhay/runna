"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

     const navLinks = [
    
    { href: '/features', label: 'Features' },
    { href: '/about', label: 'About Us' },
    { href: '/download', label: 'Download' },
   
  ];
    const pathname = usePathname()
    const isActive = pathname
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[#1570EF] md:rounded-t-[25px]  ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex justify-between items-center h-20">
          {/* logo */}
          <div>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image src="/logo.png" width={50} height={50} alt="logo" />
          </Link>
          </div>

          {/* Dessktop links */}
          <div className="hidden md:flex items-center space-x-8 text-[#ffffff]  ">
           
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href) &&
                               (link.href !== '/' || pathname === '/')
                return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                       text-[16px] leading-5
                      ${isActive ? 'font-bold ' : ''}
                    `}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* action buttons */}
          <div className="items-center gap-[10px] flex">
            <button className="w-[106px] h-[44px] py-[12px] px-[32px] text-[1rem] border border-[#ffffff] text-bold bg-transparent   rounded-[32px]   sm:flex hidden">
              Login
            </button>
            <button className="w-[106px] h-[44px] py-[12px] px-[32px] text-[1rem] border border-[#ffffff] text-bold text-[#1570EF] bg-[#ffffff]   rounded-[32px]   sm:flex hidden">
              Sign up
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cursor-pointer md:hidden"
            >
              <Image src="/menu.png" width={40} height={40} alt="menu-bar" />
            </button>
          </div>
        </div>

        {/* mobile sidebar */}
        {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
                {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href) &&
                               (link.href !== '/' || pathname === '/')
                return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                       text-[16px] leading-5
                      ${isActive ? 'font-bold ' : ''}
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
            </div>
        )}
      </nav>
    </header>
  );
}
