"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import pic from "./images/cyberpunk-2077-ps4-4k-wallpaper-5.jpg"
import AnimateCon from "@/app/Homepage/AnimateCon";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";

export default function InnovatorsTrust() {
    const controls = useAnimation()
    const controls2 = useAnimation()
    const [again, setAgain] = useState(true)
    const [again2, setAgain2] = useState(true)
    const ref = useRef(null)
    const x = useMotionValue(0)
    const containerRef = useRef(null)

    function handleDragEnd() {
        if (typeof window != "undefined") {
            const offset = x.get()
            const cardWidth = window?.innerWidth;
            const index = Math.round(-offset / cardWidth)
            const clamped = Math.max(0, Math.min(index, 5 - 1))
            const final = -clamped * cardWidth
            animate(x, final, { type: 'spring', stiffness: 300 })
        }

    }

    useEffect(() => {
        async function anime() {
            await controls.start({ right: "0%", left: "", transition: { duration: 13, ease: "linear" } })
            await controls.start({ left: "0px", right: "", transition: { duration: 13, ease: "linear" } })
            setAgain((prev) => !prev)
        }

        anime()
    }, [controls, again])

    useEffect(() => {
        async function anime() {
            await controls2.start({ left: "0%", right: "", transition: { duration: 13, ease: "linear" } })
            await controls2.start({ right: "0px", left: "", transition: { duration: 13, ease: "linear" } })
            setAgain2((prev) => !prev)
        }

        anime()
    }, [controls2, again2])

    return (
        <div id={"Testimonials"} className='bg-[#0F0F0F]  flex flex-col sm:h-[872px] sm:pb-[80px] relative'>
            <div className='flex justify-center absolute top-0 left-0 w-full'>
                <div className='bg-[rgba(74,90,236,0.06)] blur-[139.9px] w-[606px] h-[425px] absolute top-[116px]'>

                </div>
            </div>
            <div className={"flex justify-center"}>
                <div
                    className='max-w-[1200px]  justify-self-center pb-[32px] sm:pb-[72px] pt-[40px] sm:pt-[80px] w-full'>
                    <div className='flex px-[20px] sm:px-0 justify-center'>
                        <div
                            className="w-[100px] border-[1px] font-alexandria text-[#3A9DFF] text-[14px] leading-[17px] border-[grey] h-[41px] backdrop-blur-[20px] rounded-[24px] flex items-center justify-center ">
                            Statistics
                        </div>
                    </div>
                    <div className='text-center px-[20px] sm:px-0'>
                        <AnimateCon variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}>
                            <div
                                className='font-alexandria capitalize text-[28px] sm:text-[48px] text-[#E5E5E5] mt-[16px] sm:mt-[20px] leading-[100%]'>
                                Trusted by Innovators
                            </div>

                        </AnimateCon>

                        <AnimateCon
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
                            }}>
                            <div ref={ref}
                                className='text-[14px] sm:text-[18px] justify-self-center leading-[17px] sm:leading-[140%] mt-[16px] sm:mt-[20px] text-[#999999] font-alexandria sm:font-inter max-w-[644px]'>
                                Secure your digital assets with the peace of mind that comes from knowing you are
                                protected
                                by the best technology in the blockchain space.
                            </div>
                        </AnimateCon>

                    </div>
                    <div className='w-full overflow-x-scroll mt-[32px]'>
                        <div className='sm:hidden flex  justify-between w-[500%]  relative   sm:-left-[135.5px]'>
                            {Array.from({ length: 5 }).map((_, key) => {
                                const ee = () => {
                                    if (typeof window != "undefined") {
                                        return { left: -((5 - 1) * window?.innerWidth), right: 0 }
                                    }
                                }
                                return (
                                    <motion.div ref={containerRef} drag={"x"} dragElastic={0.1} dragSnapToOrigin={true}
                                        dragConstraints={ee()}
                                        dragDirectionLock={true} style={{ x }} onDragEnd={handleDragEnd}
                                        className='w-full flex justify-center' key={key}>
                                        <div style={{ boxSizing: "border-box" }}
                                            className='bg-black  rounded-[16px] border border-[grey] w-[90%] p-[32px] backdrop-blur-[4.59122px] sm:min-w-[373px]  sm:w-full h-[204px]'>
                                            <div className='font-alexandria text-[#EDEDF2] leading-[20px]'>
                                                “AI streamlines international client coordination by scheduling emails
                                                for
                                                optimal inbox timing.”
                                            </div>
                                            <div className='mt-[24px] items-center flex gap-[16px]'>
                                                <div>
                                                    <Image src={pic} className='w-[48px] h-[48px] rounded-full' alt='' />
                                                </div>
                                                <div>
                                                    <div
                                                        className='font-alexandria text-white text-[14px] leading-[17px] '>
                                                        Kathryn Murphy
                                                    </div>
                                                    <div
                                                        className='font-alexandria mt-[6px] text-[12px] leading-[15px] text-[#4D4D4D]'>
                                                        Co-founder
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>

            <div className={"w-full flex justify-center  overflow-hidden flex-1 "}>
                <AnimateCon className={"relative overflow-hidden max-w-[1300px] z-[20]  h-full w-full "}>
                    <div style={{ backgroundImage: "linear-gradient(to right, #0F0F0F, transparent)" }}
                        className={"z-[30] w-[200px]   h-full absolute left-0 top-0"}>

                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to left, #0F0F0F, transparent)" }}
                        className={"z-[30] w-[200px]   h-full absolute right-0 top-0"}>

                    </div>
                    <motion.div
                        initial={{ left: "0px" }}
                        animate={controls}
                        className='hidden absolute  sm:flex gap-[20px] z-[20]  top-0  '>
                        {Array.from({ length: 5 }).map((_, key) => {
                            return (
                                <div
                                    style={{ boxSizing: "border-box" }} key={key}
                                    className='bg-black z-[30]  rounded-[16px] border border-[grey] p-[32px] backdrop-blur-[4.59122px] min-w-[373px] w-full h-[204px]'>
                                    <div className='font-alexandria text-[#EDEDF2] leading-[20px]'>
                                        “AI streamlines international client coordination by scheduling emails for
                                        optimal
                                        inbox
                                        timing.”
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

                    </motion.div>

                    <motion.div initial={{ right: "0px" }} animate={controls2}
                        className='hidden absolute sm:flex gap-[20px]  bottom-0 mt-[20px] '>

                        {Array.from({ length: 5 }).map((_, key) => {
                            return (
                                <div style={{ boxSizing: "border-box" }} key={key}
                                    className='bg-black  rounded-[16px] border border-[grey] p-[32px] backdrop-blur-[4.59122px] min-w-[373px] w-full h-[204px]'>
                                    <div className='font-alexandria text-[#EDEDF2] leading-[20px]'>
                                        “AI streamlines international client coordination by scheduling emails for
                                        optimal
                                        inbox
                                        timing.”
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

                    </motion.div>

                </AnimateCon>

            </div>
        </div>

    )
}
