import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center flex "
        style={{
          height: "calc(100vh - 80px)",
          backgroundImage:
            "linear-gradient(rgba(4, 8, 13, 0.6), rgba(4, 8, 13, 0.6)), url(/hero.png)",

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[570px]  mx-auto px-4 sm:px-6  flex items-center justify-center text-center text-[15px]">
          <div className="flex flex-col gap-4 md:gap-8">
            <span className="text-[#ffffff] text-[40px] md:text-5xl  ">
              <p className="  font-bold">
                Wellness for You. <br /> Wellness for Your Pet.
              </p>
            </span>
            <p className="text-[14px] md:text-[16px] text-[#ffffff]  mx-auto ">
              With Runnars, every step, sip, or stretch becomes a chance to grow
              closer to your pet, improve your health, and earn real-life
              rewards — in challenges built just for pet lovers.
            </p>
            <div className="">
              <Link
                className="bg-[#1570EF] py-3 px-5 w-full md:max-w-[200px] rounded-[24px] "
                href="/signup"
              >
                Get Started For <span className="font-bold">FREE</span>
              </Link>
            </div>
            <div>
              <p className="text-[12px] mb-2">Available in iOS and Android</p>
              <div className="flex  items-center justify-center space-x-6">
                <Link
                  href=""
                  className="px-4 py-2 bg-[#ffffff] text-[#1B1E21] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:translate-y-1 "
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
                  href=""
                  className="px-4 py-2 bg-[#ffffff] text-[#1B1E21] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:translate-y-1 "
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
          </div>
        </div>
      </div>
      <div className="my-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#070E1A]">
        <div className="text-center mb-24">
          <p className="text-3xl capitalize font-bold">
            Empowering pet wellness <br /> through everyday routines
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="w-72 rounded-[16px] p-10 bg-[#FBFBFD] text-center flex flex-col gap-10">
              <div className="mx-auto">
                <Image
                  src="/task-square.png"
                  alt="task-square"
                  width={56}
                  height={56}
                />
              </div>
              <p className="capitalize text-[20px] font-bold leading-7">
                daily challenge that support pet wellness
              </p>
              <p className="text-[16px] leading-6 -mt-3 text-[#5F6A7E]">
                Your pet’s health needs more than just vet visits — we turn
                small actions into lasting habits.
              </p>
            </div>
            <div className="w-72 rounded-[16px] p-10 bg-[#FBFBFD] text-center flex flex-col gap-10">
              <div className="mx-auto">
                <Image
                  src="/chart.png"
                  alt="task-square"
                  width={56}
                  height={56}
                />
              </div>
              <p className="capitalize text-[20px] font-bold leading-7">
                more then walks: complete pet wellbeing
              </p>
              <p className="text-[16px] leading-6 -mt-3 text-[#5F6A7E]">
                Health isn’t one-size-fits-all. From walks to play to rest —
                customize wellness your way.
              </p>
            </div>
            <div className="w-72 rounded-[16px] p-10 bg-[#FBFBFD] text-center flex flex-col gap-10">
              <div className="mx-auto">
                <Image
                  src="/stickynote.png"
                  alt="task-square"
                  width={56}
                  height={56}
                />
              </div>
              <p className="capitalize text-[20px] font-bold leading-7">
                structured routine that fit real life
              </p>
              <p className="text-[16px] leading-6 -mt-3 text-[#5F6A7E]">
                It's easy to lose track of wellness goals — we help you stay
                consistent through flexible challenges.
              </p>
            </div>
            <div className="w-72 rounded-[16px] p-10 bg-[#FBFBFD] text-center flex flex-col gap-10">
              <div className="mx-auto">
                <Image
                  src="/calendar-tick.png"
                  alt="task-square"
                  width={56}
                  height={56}
                />
              </div>
              <p className="capitalize text-[20px] font-bold leading-7">
                everyday activities with long-term impact
              </p>
              <p className="text-[16px] leading-6 -mt-3 text-[#5F6A7E]">
                Small daily actions add up. Our platform helps you track and
                build toward your pet’s full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
