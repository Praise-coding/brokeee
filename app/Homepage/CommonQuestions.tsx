import React from 'react'

function CommonQuestions() {
    return (
        <div className='px-[20px] relative'>
            <div className='flex justify-center absolute top-0 left-0 w-full'>
                <div className='bg-[rgba(74,90,236,0.06)] blur-[139.9px] w-[606px] h-[425px] absolute top-[116px]'>

                </div>

            </div>
            <div className='py-[40px] sm:py-[80px] max-w-[1200px] w-full'>
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
                <div className='mt-[32px] sm:mt-[72px] max-w-[792px] w-full justify-self-center grid gap-[16px] sm:gap-[30px] grid-cols-1'>

                    {Array(5).fill(null).map((_, key) => {
                        return (
                            <div key={key} className='border cursor-pointer flex items-center justify-between border-[#2E2E2E] py-[16px] px-[20px]'>
                                <div className='font-alexandria text-[#E5E5E5]'>
                                    What is NexoFi, and how does it work?
                                </div>
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3.3335V16.6668" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.3335 10H16.6668" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default CommonQuestions