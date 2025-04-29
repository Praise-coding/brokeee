"use client"
import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'
import AnimateCon from "@/app/Homepage/AnimateCon";
import {animate, motion, useAnimation, useInView, useMotionValue} from "framer-motion";

export default function InnovatorsTrust() {
    const controls = useAnimation()
    const controls2 = useAnimation()
    const [again, setAgain] = useState(true)
    const [again2, setAgain2] = useState(true)
    const ref = useRef(null)
    const x = useMotionValue(0)
    const containerRef = useRef(null)
    const inview = useInView(ref)

    function handleDragEnd() {
        if (typeof window != "undefined") {
            const offset = x.get()
            const cardWidth = window?.innerWidth;
            const index = Math.round(-offset / cardWidth)
            const clamped = Math.max(0, Math.min(index, 10 - 1))
            const final = -clamped * cardWidth
            animate(x, final, {type: 'spring', stiffness: 300})
        }

    }

    useEffect(() => {

        async function anime() {
            if (inview) {
                await controls.start({right: "0%", left: "", transition: {duration: 13, ease: "linear"}})
                await controls.start({left: "0px", right: "", transition: {duration: 13, ease: "linear"}})
                setAgain((prev) => !prev)
            }

        }

        anime()
    }, [controls, again, inview])

    useEffect(() => {

        async function anime() {
            if (inview) {
                await controls2.start({left: "0%", right: "", transition: {duration: 13, ease: "linear"}})
                await controls2.start({right: "0px", left: "", transition: {duration: 13, ease: "linear"}})
                setAgain2((prev) => !prev)
            }

        }


        anime()
    }, [controls2, again2, inview])

    const testimonials = [
        {
            name: "Eliza Hartwell",
            comment: "Smart alerts help me rebalance my portfolio before major shifts hit the broader crypto market.",
            image: "https://randomuser.me/api/portraits/women/45.jpg"
        },
        {
            name: "Jamal Ortega",
            comment: "Automated tools track coin performance and send insights when specific risk thresholds are triggered.",
            image: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
            name: "Nicolette Dray",
            comment: "Live charts and strategy presets help me optimize entries without watching the screen all day.",
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
            name: "Marcellus Vane",
            comment: "The platform analyzes trends and suggests swaps based on real-time volatility and market heatmaps.",
            image: "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
            name: "Tanya Wexler",
            comment: "Portfolio tracking updates in real time, helping me stay aligned with my long-term goals.",
            image: "https://randomuser.me/api/portraits/women/33.jpg"
        },
        {
            name: "DeShawn Rivas",
            comment: "Transaction history is neatly organized, making it easy to track trades and export reports.",
            image: "https://randomuser.me/api/portraits/men/53.jpg"
        },
        {
            name: "Karina Lowther",
            comment: "Built-in tools let me compare assets quickly before locking in any trades or rebalances.",
            image: "https://randomuser.me/api/portraits/women/76.jpg"
        },
        {
            name: "Brynley Hodge",
            comment: "Security features like cold storage and 2FA keep my account safe without slowing me down.",
            image: "https://randomuser.me/api/portraits/men/24.jpg"
        },
        {
            name: "Seraphina Pike",
            comment: "I get notified instantly when assets hit price targets or volume thresholds I’ve pre-set.",
            image: "https://randomuser.me/api/portraits/women/27.jpg"
        },
        {
            name: "Emory Griggs",
            comment: "The dashboard gives me clarity across all wallets without needing to switch between tabs.",
            image: "https://randomuser.me/api/portraits/men/38.jpg"
        }
    ];

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
                            hidden: {opacity: 0, y: 50},
                            visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
                        }}>
                            <div
                                className='font-alexandria capitalize text-[28px] sm:text-[48px] text-[#E5E5E5] mt-[16px] sm:mt-[20px] leading-[100%]'>
                                Trusted by Innovators
                            </div>

                        </AnimateCon>

                        <AnimateCon
                            variants={{
                                hidden: {opacity: 0, y: 50},
                                visible: {opacity: 1, y: 0, transition: {duration: 0.6, delay: 0.3}}
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
                        <div className='sm:hidden flex  justify-between w-[1000%]  relative   sm:-left-[135.5px]'>
                            {testimonials.map((data, key) => {
                                const ee = () => {
                                    if (typeof window != "undefined") {
                                        return {left: -((10 - 1) * window?.innerWidth), right: 0}
                                    }
                                }
                                return (
                                    <motion.div ref={containerRef} drag={"x"} dragElastic={0.1} dragSnapToOrigin={true}
                                                dragConstraints={ee()}
                                                dragDirectionLock={true} style={{x}} onDragEnd={handleDragEnd}
                                                className='w-full flex justify-center' key={key}>
                                        <div style={{boxSizing: "border-box"}}
                                             className='bg-black  rounded-[16px] border border-[grey] w-[90%] p-[32px] backdrop-blur-[4.59122px] sm:min-w-[373px]  sm:w-full h-[204px]'>
                                            <div className='font-alexandria text-[#EDEDF2] leading-[20px]'>
                                                “{data.comment}”
                                            </div>
                                            <div className='mt-[24px] items-center flex gap-[16px]'>
                                                <div>
                                                    <Image src={data.image} width={50} height={50} className='w-[48px] h-[48px] rounded-full' alt=''/>
                                                </div>
                                                <div>
                                                    <div
                                                        className='font-alexandria text-white text-[14px] leading-[17px] '>
                                                        {data.name}
                                                    </div>
                                                    <div
                                                        className='font-alexandria mt-[6px] text-[12px] leading-[15px] text-[#4D4D4D]'>
                                                        Trader
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
                    <div style={{backgroundImage: "linear-gradient(to right, #0F0F0F, transparent)"}}
                         className={"z-[30] w-[200px]   h-full absolute left-0 top-0"}>

                    </div>
                    <div style={{backgroundImage: "linear-gradient(to left, #0F0F0F, transparent)"}}
                         className={"z-[30] w-[200px]   h-full absolute right-0 top-0"}>

                    </div>
                    <motion.div
                        initial={{left: "0px"}}
                        animate={controls}
                        className='hidden absolute  sm:flex gap-[20px] z-[20]  top-0  '>
                        {testimonials.slice(0, 5).map((data, key) => {
                            return (
                                <div
                                    style={{boxSizing: "border-box"}} key={key}
                                    className='bg-black z-[30]  rounded-[16px] border border-[grey] p-[32px] backdrop-blur-[4.59122px] min-w-[373px] w-full h-[204px]'>
                                    <div className='font-alexandria text-[#EDEDF2] leading-[20px]'>
                                        “{data.comment}”
                                    </div>
                                    <div className='mt-[32px] items-center flex gap-[16px]'>
                                        <div>
                                            <Image width={50} height={50} src={data.image} className='w-[48px] h-[48px] rounded-full' alt=''/>
                                        </div>
                                        <div>
                                            <div className='font-alexandria text-white text-[14px] leading-[17px] '>
                                                {data.name}
                                            </div>
                                            <div className='font-alexandria text-[12px] leading-[15px] text-[#4D4D4D]'>
                                                Trader
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </motion.div>

                    <motion.div initial={{right: "0px"}} animate={controls2}
                                className='hidden absolute sm:flex gap-[20px]  bottom-0 mt-[20px] '>

                        {testimonials.slice(6, 10).map((data, key) => {
                            return (
                                <div style={{boxSizing: "border-box"}} key={key}
                                     className='bg-black  rounded-[16px] border border-[grey] p-[32px] backdrop-blur-[4.59122px] min-w-[373px] w-full h-[204px]'>
                                    <div className='font-alexandria text-[#EDEDF2] leading-[20px]'>
                                        “{data.comment}”
                                    </div>
                                    <div className='mt-[32px] items-center flex gap-[16px]'>
                                        <div>
                                            <Image width={50} height={50} src={data.image} className='w-[48px] h-[48px] rounded-full' alt=''/>
                                        </div>
                                        <div>
                                            <div className='font-alexandria text-white text-[14px] leading-[17px] '>
                                                {data.name}
                                            </div>
                                            <div className='font-alexandria text-[12px] leading-[15px] text-[#4D4D4D]'>
                                                Trader
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
