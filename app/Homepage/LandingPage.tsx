"use client";
import Image from "next/image";
import pic from "./images/Right (1).png";
import {motion} from "framer-motion";
import AnimateCon from "@/app/Homepage/AnimateCon";
import {useRef} from "react";
import Link from "next/link";

export default function LandingPage() {
    const ref = useRef(null)
    return (
        <>
            <div className="relative py-[40px] sm:py-[88px]">

                <div ref={ref} className="px-[20px] relative z-[20] flex justify-center w-full">
                    <div
                        className=" max-w-[1200px] relative text-center md:text-left md:flex gap-[50px] items-center justify-between w-full">

                        <AnimateCon refProp={ref}
                                    variants={{
                                        hidden: {opacity: 0},
                                        visible: {opacity: 1, transition: {delay: 1.6, duration: 0.8}}
                                    }}
                                    className="absolute  z-[0] bg-[rgba(74,90,236,0.16)] blur-[139.4px] w-[600px] h-[600px] left-[-302px] top-0"
                        >
                            {""}
                        </AnimateCon>
                        <div className="md:w-[661px]">
                            <div>
                                <AnimateCon className="flex md:justify-start justify-center">
                                    <div
                                        className="w-[137px] border-[1px] border-[grey] gap-[8px] h-[37px] backdrop-blur-[20px] rounded-[24px] flex items-center justify-center "
                                    >
                                        <div className="w-[9px] h-[9px] rounded-full bg-[#3A9DFF]  "></div>
                                        <div className="font-alexandria text-[#3A9DFF] text-[14px] leading-[17px]">
                                            Decentralized
                                        </div>
                                    </div>
                                </AnimateCon>
                            </div>
                            <div
                                className="mt-[16px] overflow-hidden sm:mt-[24px] text-[#E5E5E5] font-alexandria text-[40px] font-[500] sm:text-[64px] sm:font-[700] leading-[110%]">
                                <AnimateCon
                                    variants={{
                                        hidden: {x: 30, opacity: 0},
                                        visible: {x: 0, opacity: 1, transition: {duration: 0.8}},
                                    }}

                                    className={"relative "}
                                >
                                    Crypto Investing Starts Here
                                </AnimateCon>
                            </div>
                            <div className={"overflow-hidden "}>
                                <AnimateCon refProp={ref}
                                            variants={{
                                                hidden: {x: 30, opacity: 0},
                                                visible: {
                                                    x: 0,
                                                    opacity: 1,
                                                    transition: {duration: 0.8, delay: 0.4}
                                                },
                                            }}
                                            className="mt-[16px] z-[20] relative sm:mt-[24px] text-[#999999] sm:text-[20px] max-w-[583px] leading-[20px] sm:leading-[140%] font-alexandria sm:font-inter font-[400]"
                                >
                                    Invest in digital assets with confidence. Real-time tools, expert insights, and a
                                    secure platform — all in one place.
                                </AnimateCon>
                            </div>

                            <AnimateCon
                                variants={{
                                    hidden: {opacity: 0},
                                    visible: {opacity: 100, transition: {duration: 0.5}},
                                }}

                                className="mt-[30px] sm:mt-[40px] md:justify-start justify-center grid sm:flex gap-[20px]"
                            >
                                <div className="flex justify-center">
                                    <Link href={"/SignUp"} className={"flex items-center justify-center w-full h-full"}>
                                        <motion.button
                                            className="w-[140px]  z-[20] relative  sm:w-[151px] sm:text-[18px] leading-[22px] font-alexandria h-[50px] bg-[#3A9DFF] rounded-[40px] flex items-center justify-center"
                                        >
                                            Get Started
                                        </motion.button>
                                    </Link>

                                </div>
                                <div>
                                    <motion.button
                                        className="sm:w-[190px] z-[20] relative w-[178px]  text-[#E5E5E5] sm:text-[18px] leading-[22px] font-alexandria h-[50px] border-[1px] border-[grey] rounded-[40px] "
                                    >
                                        <Link href={"https://youtu.be/kVVCbG0yNxQ?si=NGSKNc9uH84wR_2m"} className={"flex items-center justify-center w-full h-full"}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 5.64001V19.64L19 12.64L8 5.64001Z" fill="#E5E5E5"/>
                                            </svg>
                                            <span className="ml-[6px]">Watch Video</span>
                                        </Link>

                                    </motion.button>
                                </div>
                            </AnimateCon>
                        </div>
                        <AnimateCon
                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 100, transition: {delay: 0.9, duration: 0.8}}
                            }}
                            className="relative px-[30px] sm:px-[0px] md:mt-0 mt-[32px]">
                            <Image src={pic} alt="" className="relative w-full"/>
                        </AnimateCon>
                    </div>
                </div>
            </div>
        </>
    );
}