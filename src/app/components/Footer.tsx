import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-24 mb-[24px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-14 px-6 md:px-10 lg:px-20 bg-brightblue rounded-[24px]">
        <div className="flex justify-between flex-col lg:flex-row gap-10">
          <div className="flex-2/5 flex flex-col gap-5">
            <Link href="/">
              <Image src="/logohome.png" width={64} height={40} alt="logo" />
            </Link>
            <div className="flex gap-3">
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
            </div>
          </div>
          <div className="flex-3/5 flex flex-col lg:flex-row gap-10 justify-between">
            <div className="flex flex-col gap-5">
              {/* <p className="font-bold text-[14px] text-[#B6D3FA]">Get App</p> */}
              <p className="font-bold text-[14px] text-[#B6D3FA]">Coming Soon</p>
              <div className="flex flex-col  space-y-3">
                <Link
                  href=""
                  className="px-4 py-2 w-[150px] bg-[#ffffff] text-[#1B1E21] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:translate-y-1 flex items-center justify-center cursor-not-allowed pointer-events-none"
                >
                  <div className="flex gap-1 h-7">
                    <Image
                      src="/Apple logo.png"
                      alt="apple logo"
                      width={20}
                      height={20}
                    />
                    <span className="flex flex-col gap-0 leading-3 mt-0.5 items-start">
                      <p className="text-[8px] ">Download on the </p>
                      <p className="text-[15px] font-bold">App Store</p>
                    </span>
                  </div>
                </Link>
                <Link
                  href="/"
                  className="w-[150px] px-4 py-2 bg-[#ffffff] text-[#1B1E21] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:translate-y-1 flex items-center justify-center cursor-not-allowed pointer-events-none"
                >
                  <div className="flex gap-1 h-7">
                    <Image
                      src="/Google Play logo.png"
                      alt="apple logo"
                      width={20}
                      height={20}
                    />
                    <span className="flex flex-col gap-0 leading-3 mt-0.5 items-start">
                      <p className="text-[8px] ">GET IT ON </p>
                      <p className="text-[15px] font-bold">Google Play</p>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {/* <p className="font-bold text-[14px] text-[#B6D3FA]">Company</p> */}
              <div className="text-white font-bold text-[12px] flex flex-col gap-4">
                <Link
                  href="/about"
                  className="transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {/* <p className="font-bold text-[14px] text-[#B6D3FA]">Legal</p> */}
              <div className="text-white font-bold text-[12px] flex flex-col gap-4">
                <Link
                  href="/privacy-policy"
                  className="transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer"
                >
                  Privacy Policies
                </Link>
                <Link
                  href="/cookies-policy"
                  className="transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer"
                >
                  Cookies
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {/* <p className="font-bold text-[14px] text-[#B6D3FA]">Contact Us</p> */}
              <div className="text-white font-bold text-[12px] flex flex-col gap-4">
                <Link href="/" className="">
                  support@runnarsapp.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-white w-full bg-white my-10"></div>
        <div className="text-[16px] leading-6 text-[#E8F1FD]">
          <p>&copy; {currentYear} Runnars. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
