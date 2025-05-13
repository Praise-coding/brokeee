"use client"
import React, {useEffect} from 'react';
import {UserSocialMedias} from "@/app/Types";
import {motion, useAnimation} from "framer-motion";
import TransactionStatusButton from "./TransactionStatusButton";

function TransactionRows({arrayOfData}: { arrayOfData?: UserSocialMedias[], timezone?: string }) {
    const controls = useAnimation()
    const controls2 = useAnimation()

    useEffect(() => {
        async function aniControl() {
            await new Promise(resolve => setTimeout(resolve, 700))

            await controls.start({height: "fit-content", transition: {duration: 1}})
            await controls2.start({y: 0, opacity: 100})
        }

        aniControl()
    }, [controls, controls2, arrayOfData]);
    return (
        <motion.div initial={{height: "0px"}} animate={controls} className={" overflow-hidden"}>
            {arrayOfData && arrayOfData?.map((data, key) => {
                return (
                    <motion.div initial={{y: 10, opacity: 0}} animate={controls2} key={key}
                                transition={{delay: 0.6 + key * 0.1}}
                                className={`grid grid-cols-4 transition-all relative duration-[800ms] items-center mt-[27.5px] gap-[30px] sm:gap-[40px] justify-between w-full item-center`}>
                        <div>
                            <div
                                className={"font-poppins  font-[500] text-[14px] leading-[21px] tracking-[0.02em] opacity-[0.8] text-white"}>

                                {data?.["Platform"]}
                            </div>
                        </div>
                        <div className={"flex items-center "}>
                            <div
                                className={"font-poppins font-[500] text-[14px] leading-[21px] tracking-[0.02em] opacity-[0.8] text-white"}>
                                {data?.["Email"]?.slice(0, 10)} {data?.["Email"].length > 10 && "..."}
                            </div>
                        </div>
                        <div className={"  "}>
                            <div
                                className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>
                                {data?.["UserName"]}
                            </div>
                        </div>
                        <div className={"  "}>
                            <TransactionStatusButton TransactionStatus={data?.["Status"]} TransactionId={data?.["id"]} />
                        </div>


                    </motion.div>

                )
            })}

        </motion.div>
    );
}

export default TransactionRows;