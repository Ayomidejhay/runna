import Image from "next/image";
import React from "react";

export default function HowItWorks() {
  return (
    <div className="my-24 max-w-7xl mx-auto !px-4 sm:px-6 lg:px-8">
      <div>
        <div className="text-center mb-[16px]">
          <p className="text-3xl capitalize font-bold text-deepblue mb-[16px]">how it works</p>
          <p className="text-[16px] leading-6 text-lighttext">
            Getting Started is Easy
          </p>
        </div>
        <div className="bg-deepblue rounded-[40px] p-4 py-10 md:p-10 lg:p-14 flex justify-between items-center flex-col md:flex-row gap-10">
            <div className="text-white flex flex-col gap-8 flex-1">
                <div className="h-[59px] w-[59px] rounded-[100px] flex items-center justify-center font-bold bg-white ">
                    <p className="text-deepblue text-[18px]">1</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-3xl capitalize">Sign Up</p>
                    <p className="text-[16px] leading-6">Create your account and set up your pet's profile in seconds</p>
                </div>
            </div>
            <div className="flex-1 flex justify-end items-center">
                <Image src='/workone.png' alt="how-it-works" width={400} height={400}/>
            </div>
        </div>
        
      </div>
    </div>
  );
}
