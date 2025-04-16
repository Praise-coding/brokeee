"use client"
import React, {useRef} from 'react'
import {useCounter} from "@/hooks/useCounter";
import AnimateCon from "@/app/Homepage/AnimateCon";

export default function LeverageProducts() {
    const counter1 = useCounter(2000, 3000)
    const ref = useRef(null)
    return (
        <AnimateCon variants={{
            hidden: {backgroundColor: "#000000"},
            visible: {
                backgroundColor: "#0F0F0F", transition: {duration: 1, delay: 0.5}
            }
        }
        } className='flex bg-[#0F0F0F] relative justify-center px-[20px] py-[40px] sm:py-[120px] '>
            <AnimateCon
                refProp={ref}
                variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1, transition: {duration: 0.5, delay: 1}}
                }}

                className='w-[606px] left-[-101px] sm:left-auto h-[425px] bg-[rgba(74,90,236,0.06)] blur-[139.9px]
                absolute top-[76px] sm:top-[116px]'>{""}
            </AnimateCon>
            <div className='max-w-[1200px] w-full'>
                <div>
                    <div className='flex justify-center'>
                        <div
                            className="w-[100px] border-[1px] font-alexandria text-[#3A9DFF] text-[14px] leading-[17px] border-[grey] h-[41px] backdrop-blur-[20px] rounded-[24px] flex items-center justify-center ">
                            Statistics
                        </div>
                    </div>
                    <div className='text-center'>
                        <AnimateCon variants={{
                            hidden: {opacity: 0, y: 50},
                            visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
                        }}>
                            <div
                                className='font-alexandria text-[28px] sm:text-[48px] text-[#E5E5E5] mt-[16px] sm:mt-[20px] leading-[100%]'>
                                Completely Leverage product
                            </div>
                        </AnimateCon>

                        <AnimateCon
                            variants={{
                                hidden: {opacity: 0, y: 50},
                                visible: {opacity: 1, y: 0, transition: {duration: 0.6, delay: 0.3}}
                            }}>
                            <div
                                className='text-[14px] sm:text-[18px] justify-self-center leading-[17px] sm:leading-[140%] mt-[16px] sm:mt-[20px] text-[#999999] font-alexandria sm:font-inter max-w-[644px]'>
                                Leading the way in blockchain innovation, we are redefining how the world connects,
                                secures,
                                and transacts, bringing a new era of decentralized technology.
                            </div>
                        </AnimateCon>

                    </div>
                </div>
                <div ref={ref}
                     className='mt-[32px] sm:mt-[72px] gap-[24px] sm:gap-[72px]  max-w-[484px] w-full justify-self-center grid grid-cols-1 sm:grid-cols-3'>
                    <div className='sm:w-fit  text-center'>
                        <AnimateCon
                            variants={{
                                hidden: {opacity: 0, y: 50},
                                visible: {opacity: 1, y: 0, transition: {duration: 0.6, delay: 0.6}}
                            }}>
                            <div className='font-alexandria text-[48px] leading-[100%] text-[#3A9DFF]'>
                                {counter1}+
                            </div>
                            <div
                                className='text-center text-[#999999] sm:mt-[20px] mt-[12px] text-[20px] leading-[140%] font-inter'>
                                users
                            </div>
                        </AnimateCon>

                    </div>
                    <div className='sm:w-fit  text-center'>
                        <AnimateCon
                            variants={{
                                hidden: {opacity: 0, y: 50},
                                visible: {opacity: 1, y: 0, transition: {duration: 0.6, delay: 0.9}}
                            }}>
                            <div className='font-alexandria text-[48px] leading-[100%] text-[#3A9DFF]'>
                                {counter1}+
                            </div>
                            <div
                                className='text-center text-[#999999] sm:mt-[20px] mt-[12px] text-[20px] leading-[140%] font-inter'>
                                users
                            </div>
                        </AnimateCon>
                    </div>
                    <div className='sm:w-fit  text-center'>
                        <AnimateCon
                            variants={{
                                hidden: {opacity: 0, y: 50},
                                visible: {opacity: 1, y: 0, transition: {duration: 0.6, delay: 1.2}}
                            }}>
                            <div className='font-alexandria text-[48px] leading-[100%] text-[#3A9DFF]'>
                                {counter1}+
                            </div>
                            <div
                                className='text-center text-[#999999] sm:mt-[20px] mt-[12px] text-[20px] leading-[140%] font-inter'>
                                users
                            </div>
                        </AnimateCon>
                    </div>
                </div>
            </div>
        </AnimateCon>
    )
}
