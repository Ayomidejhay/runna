import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FifthSection() {
  return (
    <div className=" my-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='bg-deepblue rounded-[24px] py-14 mx-auto'>
            <div className='text-center md:w-[400px] px-3 flex flex-col gap-5 mx-auto text'>
                <p className='text-[34px] font-bold text-white'>Ready to Start Walking?</p>
                <p className='text-[16px] text-[#E8F1FD] '>Join thousands of pet owners who are already building healthier habits with their pets</p>

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
  )
}
