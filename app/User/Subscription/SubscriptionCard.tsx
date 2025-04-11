"use client"
import {motion} from "framer-motion";
import Link from "next/link";

function SubscriptionCard({plan, minimumAmount, infoText}: {
    plan: string,
    minimumAmount: number,
    infoText: string
}) {

    return (

        <div className={
            "bg-[#1B2028] relative rounded-[8px] py-[35px] px-[27px] w-full text-white"}
            // style={{height: plan == "GOLD" ? "300px" : undefined}}
        >
            <div>
                <div className={"font-montserrat hh font-[700]  leading-[24px] tracking-[0.1px] text-white"}>
                    {plan} PLAN
                </div>
                <div className={" items-center font-montserrat mt-[17px] text-white gap-[17px]"}>
                    <div className={"justify-c  text-[40px] font-[700] leading-[57px] tracking-[0.2px] "}>
                        ${minimumAmount}
                    </div>

                    <div className={"mt-[5px]"}>
                        <div className={"font-[700] leading-[24px] tracking-[0.1px]"}>
                            Minimum Amount
                        </div>
                        <div className={"font-[500] text-[12px] leading-[16px] tracking-[0.2px] "}>
                            5 Days Business Period

                        </div>
                    </div>
                </div>
                <div className={"my-[17px]"}>
                    <svg width="47" height="4" viewBox="0 0 47 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="47" height="4" fill="#31A0FE"/>
                    </svg>
                </div>
                <div className={"font-montserrat font-[500] text-[12px] leading-[16px] tracking-[0.2px]"}>
                    {/*Slate helps you see how many more days you need...*/}
                    {infoText}
                </div>
                {/*<div className={"border border-white border-opacity-[23%] px-[20px] mt-[17px] font-montserrat text-[14px] font-[700] leading-[28px] tracking-[0.2px] text-[#2D2D2D] rounded-[6px] w-full py-[8px]"}>*/}
                {/*    <input className={"w-full text-white placeholder:text-white"} placeholder={"Enter Amount"}/>*/}
                {/*</div>*/}
                <Link href={"/User/Social-Media"}
                      className={"bg-white cursor-pointer mt-[17px] font-montserrat text-[14px] font-[700] leading-[28px] tracking-[0.2px] text-[#2D2D2D] rounded-[6px] w-full h-[44px] flex items-center justify-center"}>
                    Contact Admin
                </Link>
            </div>

            <motion.div  initial={{right: "0%", top:"0%"}} className={"absolute opacity-40"}>
                <svg width="108" height="109" viewBox="0 0 108 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="56" y="55" width="54" height="54" rx="27" fill="#FDA14C" fillOpacity="0.5"/>
                    <rect x="1" y="55" width="54" height="54" rx="27" fill="#FDA14C" fillOpacity="0.5"/>
                    <rect x="56" width="54" height="54" rx="27" fill="#FDA14C" fillOpacity="0.5"/>
                    <rect x="1" width="54" height="54" rx="27" fill="#DB0481" fillOpacity="0.5"/>
                </svg>

            </motion.div>
        </div>
    )
}

export default SubscriptionCard