"use client"
import React, {useRef} from 'react'
import AnimateCon from './AnimateCon'

function Revolutionary() {
    const ref = useRef(null)
    return (
        <div className='py-[40px]  relative sm:py-[80px] px-[20px] bg-[#0F0F0F] flex justify-center '>

            <AnimateCon refProp={ref} variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1, transition: {duration: 0.6}}
            }}
            >
                <div className='flex justify-center absolute top-0 left-0 w-full'>
                    <div className='bg-[rgba(74,90,236,0.06)] blur-[139.9px] w-[606px] h-[425px] absolute top-[116px]'>

                    </div>

                </div>

            </AnimateCon>

            <div className='max-w-[878px] w-full'>
                <div>
                    <div className='flex justify-center'>
                        <div
                            className="w-[100px] border-[1px] font-alexandria text-[#3A9DFF] text-[14px] leading-[17px] border-[grey] h-[41px] backdrop-blur-[20px] rounded-[24px] flex items-center justify-center ">
                            Statistics
                        </div>
                    </div>
                    <div ref={ref} className='text-center'>
                        <AnimateCon variants={{
                            hidden: {opacity: 0, y: 50},
                            visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
                        }}
                        >
                            <div
                                className='font-alexandria capitalize text-[28px] sm:text-[48px] text-[#E5E5E5] mt-[16px] sm:mt-[20px] leading-[100%]'>
                                Ready to Take Control of Your Crypto Future?
                            </div>
                        </AnimateCon>
                        <AnimateCon variants={{
                            hidden: {opacity: 0, y: 50},
                            visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
                        }}
                        >
                            <div
                                className='text-[14px] sm:text-[18px] justify-self-center leading-[17px] sm:leading-[140%] mt-[16px] sm:mt-[20px] text-[#999999] font-alexandria sm:font-inter max-w-[644px]'>
                                Join thousands of traders building wealth with confidence.
                                Whether you’re looking to trade daily or invest long-term, our platform gives you the
                                tools, insights, and security you need to succeed.
                            </div>
                        </AnimateCon>


                    </div>
                    <AnimateCon variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
                    }}
                    >
                        <button
                            className='bg-[#3A9DFF] flex items-center justify-center w-[151px] h-[50px] font-alexandria text-[18px] leading-[22px] justify-self-center mt-[20px]'>
                            Get Started
                        </button>
                    </AnimateCon>

                </div>
            </div>

        </div>
    )
}

export default Revolutionary