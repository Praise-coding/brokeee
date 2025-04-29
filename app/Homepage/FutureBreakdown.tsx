"use client"
import React, {useRef} from 'react'
import AnimateCon from "@/app/Homepage/AnimateCon";
import {motion, useInView} from "framer-motion";

export default function FutureBreakdown() {
    const ref = useRef(null)
    const inView = useInView(ref, {amount: "some"})
    const data = [{
        title: "Advanced Charting Tools",
        info: "Use customizable charts powered by TradingView for deep market analysis"
    }, {
        title: " Multi-Asset Support",
        info: "Access Bitcoin, Ethereum and more — all from a single wallet."
    }, {
        title: "Military-Grade Security",
        info: "End-to-end encryption and 2FA keep your assets and data safe at all times."
    }]
    return (
        <div id={"Features"} className='mx-[20px] flex justify-center relative py-[40px] sm:py-[80px]'>
            <motion.div
                initial={{opacity: 0}}
                animate={inView ? {opacity: 1, transition: {duration: 0.8, delay: 0.9}} : {
                    opacity: 0,
                    transition: {duration: 0.8}
                }}
                className='w-[606px] left-[-101px] sm:left-auto h-[425px] bg-[rgba(74,90,236,0.06)] blur-[139.9px]
                absolute top-[76px] sm:top-[116px]'>
            </motion.div>
            <div className='max-w-[1200px] w-full'>
                <div>
                    <div className='flex justify-center'>
                        <div
                            className="w-[100px] border-[1px] font-alexandria text-[#3A9DFF] text-[14px] leading-[17px] border-[grey] h-[41px] backdrop-blur-[20px] rounded-[24px] flex items-center justify-center ">
                            Features
                        </div>
                    </div>
                    <div className='text-center'>
                        <AnimateCon variants={{
                            hidden: {opacity: 0, y: 50},
                            visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
                        }}
                        >
                            <div
                                className='font-alexandria text-[28px] sm:text-[48px] text-[#E5E5E5] mt-[16px] sm:mt-[20px] leading-[100%]'>
                                Features Breakdown
                            </div>
                        </AnimateCon>
                        <div>
                            <AnimateCon
                                variants={{
                                    hidden: {opacity: 0, y: 50},
                                    visible: {opacity: 1, y: 0, transition: {duration: 0.6, delay: 0.3}}
                                }}>
                                < div
                                    className='text-[16px] sm:text-[18px] justify-self-center leading-[20px] sm:leading-[140%] mt-[16px] sm:mt-[20px] text-[#999999] font-alexandria sm:font-inter max-w-[644px]'>
                                    Our platform is built for both beginners and pros, combining powerful tools, real-time data, and secure infrastructure — so you can focus on growing your portfolio, not worrying about the tech.

                                </div>
                            </AnimateCon>

                        </div>

                    </div>
                </div>
                <div
                    ref={ref}
                    className='grid mt-[32px]  justify-center sm:mt-[80px] grid-cols-1 sm:grid-cols-3 gap-[16px] sm:gap-[24px]'>
                    {data.map((data, key) => {
                        return (
                            <AnimateCon variants={{
                                hidden: {width: "0%", opacity: 0},
                                visible: {width: "100%", opacity: 1, transition: {duration: 0.7}}
                            }} key={key} style={{boxSizing: "border-box"}}
                                        className='sm:py-[48px] h-[256.33px] overflow-hidden z-[20] justify-self-center cursor-pointer overflow-hidden relative z-[20] py-[30px] border border-[grey] px-[24px] sm:px-[36px] bg-[#ffffff0a]  rounded-[12px] '>
                                <AnimateCon variants={{
                                    hidden: {opacity: 0},
                                    visible: {opacity: 1, transition: {duration: 0.7, delay: 0.6}}
                                }} className={""}>
                                    <svg className='justify-self-center' width="48" height="48" viewBox="0 0 48 48"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18 12C18 14.83 18 16.244 17.12 17.12C16.242 18 14.83 18 12 18C9.17 18 7.756 18 6.88 17.12C6 16.242 6 14.83 6 12C6 9.17 6 7.756 6.88 6.88C7.758 6 9.17 6 12 6C14.83 6 16.244 6 17.12 6.88C18 7.758 18 9.17 18 12ZM18 12H24M36 18C33.17 18 31.756 18 30.88 17.12C30 16.242 30 14.83 30 12C30 9.17 30 7.756 30.88 6.88C31.758 6 33.17 6 36 6C38.83 6 40.244 6 41.12 6.88C42 7.758 42 9.17 42 12C42 14.83 42 16.244 41.12 17.12C40.242 18 38.83 18 36 18ZM36 18V24M30 36C30 33.17 30 31.756 30.88 30.88C31.758 30 33.17 30 36 30C38.83 30 40.244 30 41.12 30.88C42 31.758 42 33.172 42 36C42 38.828 42 40.242 41.12 41.12C40.242 42 38.828 42 36 42C33.172 42 31.758 42 30.88 41.12C30 40.242 30 38.83 30 36ZM30 36H24M12 30C14.83 30 16.244 30 17.12 30.88C18 31.758 18 33.17 18 36C18 38.83 18 40.244 17.12 41.12C16.242 42 14.83 42 12 42C9.17 42 7.756 42 6.88 41.12C6 40.242 6 38.83 6 36C6 33.17 6 31.756 6.88 30.88C7.758 30 9.17 30 12 30ZM12 30V24"
                                            stroke="#3A9DFF" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <div
                                        className='text-[20px]  leading-[140%] font-[300] mt-[36px] text-[#E5E5E5] text-center font-inter'>
                                        {data.title}
                                    </div>
                                    <div
                                        className='mt-[16px] font-alexandria leading-[20px] text-[#999999] text-center'>
                                        {data.info}</div>
                                </AnimateCon>

                            </AnimateCon>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
