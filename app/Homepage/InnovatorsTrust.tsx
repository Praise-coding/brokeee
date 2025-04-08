import Image from 'next/image'
import React from 'react'
import pic from "./images/cyberpunk-2077-ps4-4k-wallpaper-5.jpg"
export default function InnovatorsTrust() {
    return (
        <div className='bg-[#0F0F0F] sm:pb-[80px] relative'>
            <div className='flex justify-center absolute top-0 left-0 w-full'>
                <div className='bg-[rgba(74,90,236,0.06)] blur-[139.9px] w-[606px] h-[425px] absolute top-[116px]'>

                </div>
            </div>

            <div className='max-w-[1200px]  justify-self-center pb-[32px] sm:pb-[72px] pt-[40px] sm:pt-[80px] w-full'>
                <div className='flex px-[20px] sm:px-0 justify-center'>
                    <div className="w-[100px] border-[1px] font-alexandria text-[#3A9DFF] text-[14px] leading-[17px] border-[grey] h-[41px] backdrop-blur-[20px] rounded-[24px] flex items-center justify-center ">
                        Statistics
                    </div>
                </div>
                <div className='text-center px-[20px] sm:px-0'>
                    <div className='font-alexandria capitalize text-[28px] sm:text-[48px] text-[#E5E5E5] mt-[16px] sm:mt-[20px] leading-[100%]'>
                        Trusted by Innovators
                    </div>

                    <div className='text-[14px] sm:text-[18px] justify-self-center leading-[17px] sm:leading-[140%] mt-[16px] sm:mt-[20px] text-[#999999] font-alexandria sm:font-inter max-w-[644px]'>
                        Secure your digital assets with the peace of mind that comes from knowing you are protected by the best technology in the blockchain space.
                    </div>
                </div>
                <div className='w-full overflow-scroll mt-[32px]'>
                    <div className='sm:hidden flex  justify-between w-[500%]  relative   sm:-left-[135.5px]'>
                        {Array.from({ length: 5 }).map((_, key) => {
                            return (
                                <div className='w-full flex justify-center' key={key}>
                                    <div style={{ boxSizing: "border-box" }}  className='bg-black  rounded-[16px] border border-[grey] w-[90%] p-[32px] backdrop-blur-[4.59122px] sm:min-w-[373px]  sm:w-full h-[204px]'>
                                        <div className='font-alexandria text-[#EDEDF2] leading-[20px]'>
                                            “AI streamlines international client coordination by scheduling emails for optimal inbox timing.”
                                        </div>
                                        <div className='mt-[24px] items-center flex gap-[16px]'>
                                            <div>
                                                <Image src={pic} className='w-[48px] h-[48px] rounded-full' alt='' />
                                            </div>
                                            <div>
                                                <div className='font-alexandria text-white text-[14px] leading-[17px] '>
                                                    Kathryn Murphy
                                                </div>
                                                <div className='font-alexandria mt-[6px] text-[12px] leading-[15px] text-[#4D4D4D]'>
                                                    Co-founder
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>




            <div className='hidden sm:flex gap-[20px] relative sm:-left-[135.5px]'>
                {Array.from({ length: 5 }).map((_, key) => {
                    return (
                        <div style={{ boxSizing: "border-box" }} key={key} className='bg-black mx-[20px] rounded-[16px] border border-[grey] p-[32px] backdrop-blur-[4.59122px] sm:min-w-[373px] w-full h-[204px]'>
                            <div className='font-alexandria text-[#EDEDF2] leading-[20px]'>
                                “AI streamlines international client coordination by scheduling emails for optimal inbox timing.”
                            </div>
                            <div className='mt-[32px] items-center flex gap-[16px]'>
                                <div>
                                    <Image src={pic} className='w-[48px] h-[48px] rounded-full' alt='' />
                                </div>
                                <div>
                                    <div className='font-alexandria text-white text-[14px] leading-[17px] '>
                                        Kathryn Murphy
                                    </div>
                                    <div className='font-alexandria text-[12px] leading-[15px] text-[#4D4D4D]'>
                                        Co-founder
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='hidden sm:flex gap-[20px]  mt-[20px] relative left-[-332px]'>
                {Array.from({ length: 5 }).map((_, key) => {
                    return (
                        <div style={{ boxSizing: "border-box" }} key={key} className='bg-black  rounded-[16px] border border-[grey] p-[32px] backdrop-blur-[4.59122px] min-w-[373px] w-full h-[204px]'>
                            <div className='font-alexandria text-[#EDEDF2] leading-[20px]'>
                                “AI streamlines international client coordination by scheduling emails for optimal inbox timing.”
                            </div>
                            <div className='mt-[32px] items-center flex gap-[16px]'>
                                <div>
                                    <Image src={pic} className='w-[48px] h-[48px] rounded-full' alt='' />
                                </div>
                                <div>
                                    <div className='font-alexandria text-white text-[14px] leading-[17px] '>
                                        Kathryn Murphy
                                    </div>
                                    <div className='font-alexandria text-[12px] leading-[15px] text-[#4D4D4D]'>
                                        Co-founder
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
