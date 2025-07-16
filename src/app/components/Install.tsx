import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Install() {
  return (
    <div className="mx-auto mt-10    gap-5 items-center ">
     <div className="flex flex-col items-center justify-center   mx-auto gap-6 py-10">
  {/* Section 1: Get Started Button */}
  <div className="bg-[#1570EF] text-white flex items-center justify-center h-11 rounded-[24px] w-full  md:w-82.5">
    <Link href="/signup" className="px-6 text-center w-full ">
      Get Started For <span className="font-bold">FREE</span>
    </Link>
  </div>

  {/* Section 2: App Store Buttons (Side by side) */}
  <div className="flex flex-row justify-center items-center gap-4 w-full">
    <Link
      href=""
      className="w-full md:w-40 flex items-center justify-center h-11 bg-black text-white font-medium rounded-[8px] transition shadow-lg hover:shadow-xl transform hover:translate-y-1"
    >
      <div className="flex gap-2 h-7">
        <Image src="/Apple-logo.png" alt="apple logo" width={20} height={20} />
        <span className="flex flex-col leading-3 mt-0.5 items-start">
          <p className="text-[8px]">Download on the</p>
          <p className="text-[15px] font-bold">App Store</p>
        </span>
      </div>
    </Link>

    <Link
      href=""
      className="w-full md:w-40 flex items-center justify-center h-11 bg-black text-white font-medium rounded-[8px] transition shadow-lg hover:shadow-xl transform hover:translate-y-1"
    >
      <div className="flex gap-2 h-7">
        <Image src="/Google Play logo.png" alt="google logo" width={20} height={20} />
        <span className="flex flex-col leading-3 mt-0.5 items-start">
          <p className="text-[8px]">GET IT ON</p>
          <p className="text-[15px] font-bold">Google Play</p>
        </span>
      </div>
    </Link>
  </div>
</div>

    </div>
  );
}
