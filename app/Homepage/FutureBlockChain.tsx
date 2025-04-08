import Image from 'next/image'
import React from 'react'
import pic from "./images/Shape-1.1 (1).png"
export default function FutureBlockChain() {
    return (
        <div className='py-[60px] px-[20px] flex justify-center relative'>
            <div className='bg-[rgba(74,90,236,0.06)] blur-[139.9px] w-[606px] h-[425px] absolute top-[96px]'>

            </div>
            <div className='max-w-[1200px] w-full '>
                <div>
                    <div className='flex justify-center'>
                        <div className="w-[100px] border-[1px] font-alexandria text-[#3A9DFF] text-[14px] leading-[17px] border-[grey] h-[41px] backdrop-blur-[20px] rounded-[24px] flex items-center justify-center ">
                            Statistics
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className='font-alexandria capitalize text-[28px] sm:text-[48px] text-[#E5E5E5] mt-[16px] sm:mt-[20px] leading-[100%]'>
                            the future of blockchain technology
                        </div>

                        <div className='text-[14px] sm:text-[18px] justify-self-center leading-[17px] sm:leading-[140%] mt-[16px] sm:mt-[20px] text-[#999999] font-alexandria sm:font-inter max-w-[644px]'>
                            Leading the way in blockchain innovation, we are redefining how the world connects, secures, and transacts, bringing a new era of decentralized technology.
                        </div>
                    </div>
                </div>

                <div className='sm:mt-[80px] mt-[32px] md:flex gap-[32px] sm:gap-[72px] justify-center items-center'>
                    <div className='sm:px-0 max-w-[506px] px-[31px]'>
                        <Image src={pic} alt='' className='max-w-[506px]w-full' />
                    </div>
                    <div className='max-w-[622px] grid grid-cols-1 gap-[16px] sm:gap-[40px] w-full'>
                        {Array.from({ length: 3 }).map((_, key) => {
                            return (
                                <div key={key} className='bg-[#0F0F0F] flex gap-[20px] sm:gap-[24px] py-[24px] sm:py-[30px] px-[20px] border-[grey] border rounded-[20px] w-full '>
                                    <div>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 11.25C9.5625 11.25 10.5938 11.25 11.2338 10.6088C11.875 9.96875 11.875 8.9375 11.875 6.875C11.875 4.8125 11.875 3.78125 11.2338 3.14125C10.5938 2.5 9.5625 2.5 7.5 2.5C5.4375 2.5 4.40625 2.5 3.76625 3.14125C3.125 3.78125 3.125 4.8125 3.125 6.875C3.125 8.9375 3.125 9.96875 3.76625 10.6088C4.40625 11.25 5.4375 11.25 7.5 11.25ZM7.5 11.25V17.5M7.5 17.5C6.6425 17.5 5.95 18.19 4.57125 19.5713C3.19 20.9513 2.5 21.6425 2.5 22.5C2.5 23.3575 3.19 24.05 4.57125 25.4288C5.95125 26.81 6.6425 27.5 7.5 27.5C8.3575 27.5 9.05 26.81 10.4288 25.4288C11.81 24.0488 12.5 23.3575 12.5 22.5M7.5 17.5C8.3575 17.5 9.04875 18.19 10.4288 19.5713C11.81 20.95 12.5 21.6425 12.5 22.5M12.5 22.5H18.75M18.75 22.5C18.75 20.4375 18.75 19.4063 19.3913 18.7663C20.0313 18.125 21.0625 18.125 23.125 18.125C25.1875 18.125 26.2188 18.125 26.8588 18.7663C27.5 19.4063 27.5 20.4375 27.5 22.5C27.5 24.5625 27.5 25.5938 26.8588 26.2338C26.2188 26.875 25.1875 26.875 23.125 26.875C21.0625 26.875 20.0313 26.875 19.3913 26.2338C18.75 25.5938 18.75 24.5625 18.75 22.5Z" stroke="#3A9DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className=''>
                                        <div className='font-inter text-[20px] leading-[140%] text-[#E5E5E5]'>
                                            Connectivity and ubiquity
                                        </div>
                                        <div className='font-alexandria leading-[20px] text-[14px] sm:text-[16px] text-[#999999] mt-[8px]'>
                                            Connectivity and Ubiquity. The focal points of Web 3.0 emphasize connectivity and ubiquity, ensuring seamless interactions between users and devices within
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
