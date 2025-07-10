import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Install() {
  return (
    <div className="flex mt-10   flex-col gap-5 items-center ">
        <Link
          className="bg-[#1570EF] py-3 px-7 w-fit md:w-[300px]  rounded-[24px] text-center"
          href="/signup"
        >
          Get Started For <span className="font-bold">FREE</span>
        </Link>
        <div className="flex  items-center justify-center space-x-6">
          <Link
            href=""
            className="px-4 py-2 bg-[#000000] text-[#ffffff] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:translate-y-1 "
          >
            <div className="flex gap-2 h-7">
              <Image
                src="/Apple-logo.png"
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
            className="px-4 py-2 bg-[#000000] text-[#ffffff] font-medium rounded-[8px] transition-colors shadow-lg hover:shadow-xl transform hover:translate-y-1 "
          >
            <div className="flex gap-2 h-7">
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
  )
}
