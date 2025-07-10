import Image from 'next/image'
import React from 'react'
import Install from './Install'

export default function FourthSection() {
  return (
    <div className='bg-graywhite py-15'>
        <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col md:flex-row gap-10 items-stretch'>
                <div className='flex-1 bg-white  rounded-t-[16px] max-w-[628px]'>
                    <div className='flex px-5 py-8 flex-col gap-3'>
                        <div className='px-2 py-1 rounded-[100px] bg-lightblue text-brightblue text-[14px] font-bold w-fit'>
                            <p>Earn Rewards</p>
                        </div>
                        <p className='capitalize text-[24px] text-deepblue'>earn badges, celebrate milestones</p>
                        <p className='text-lighttext'>Motivate consistency with fun, visual rewards for you and your pet.</p>
                    </div>
                    <div>
                        <Image src='/firstframe.png' alt='firstframe' width={628} height={481}/>
                    </div>
                </div>
                <div className='flex-1 bg-white  rounded-t-[16px] max-w-[628px]'>
                    <div className='flex px-5 py-8 flex-col gap-3'>
                        <div className='px-2 py-1 rounded-[100px] bg-lightblue text-brightblue text-[14px] font-bold w-fit'>
                            <p>Earn Rewards</p>
                        </div>
                        <p className='capitalize text-[24px] text-deepblue'>earn badges, celebrate milestones</p>
                        <p className='text-lighttext'>Motivate consistency with fun, visual rewards for you and your pet.</p>
                    </div>
                    <div>
                        <Image src='/firstframe.png' alt='firstframe' width={628} height={481}/>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <Install />
            </div>
            
        </div>
    </div>
  )
}
