"use client"
import React, {useEffect} from 'react';
import {Icons} from "@/app/User/Transactions/Icons";
import {Transaction as userTransaction} from "@/app/Types";
import {motion, useAnimation} from "framer-motion";

function TransactionRows({arrayOfData, timezone}: { arrayOfData?: userTransaction[], timezone?: string }) {
    const controls = useAnimation()
    const controls2 = useAnimation()
    
    useEffect(() => {
        async function aniControl() {
            await new Promise(resolve => setTimeout(resolve, 700))

            await controls.start({height: "fit-content", transition:{duration: 1}})
            await controls2.start({y: 0, opacity:100})
        }

        aniControl()
    }, [controls, controls2]);
    return (
        <motion.div initial={{height: "0px"}} animate={controls} className={" overflow-hidden"}>
            {arrayOfData && arrayOfData?.map((data, key) => {
                const utcDate = new Date(data.TransactionDate); // Convert MySQL DATETIME to UTC
                const localDate = utcDate.toLocaleString("en-US", {timeZone: timezone});
                const accurateUserDate = new Date(localDate)
                const status = data.TransactionStatus
                return (
                    <motion.div  initial={{y: 10, opacity: 0}} animate={controls2} key={key} transition={{ delay: 0.6 + key * 0.1 }}
                                className={`grid grid-cols-5 transition-all relative duration-[800ms] items-center mt-[27.5px] gap-[30px] sm:gap-[40px] justify-between w-full item-center`}>
                        <div className={"flex items-center "}>
                            <div>
                                {Icons(data.TransactionMethod)}
                            </div>
                            <div
                                className={"font-poppins ml-[15px] sm:ml-[17px] font-[500] text-[14px] leading-[21px] tracking-[0.02em] opacity-[0.8] text-white"}>
                                {data.TransactionMethod == "Bank Transfer" ? "Bank Deposit" : data.TransactionMethod}
                            </div>
                        </div>
                        <div className={"  "}>
                            <div
                                className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>
                                ${data.Amount}
                            </div>
                        </div>
                        <div className={"  "}>
                            <div
                                className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>
                                {accurateUserDate.toDateString()}
                            </div>
                        </div>
                        <div className={"  "}>
                            <div
                                className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>
                                {data.TransactionType}
                            </div>
                        </div>
                        <div
                            style={{
                                alignSelf: "center",
                                borderWidth: status == "Pending" ? "1px" : "",
                                borderColor: status == "Pending" ? "#31353F" : "",
                                backgroundColor: status == "Declined" ? "#FF4646" : status == "Confirmed" ? "#04A404" : status == "Pending" ? "" : ""
                            }}

                            className={"font-poppins w-[100%] h-[40px] rounded-[5px] items-center flex font-[600] leading-[22px] text-white justify-center text-[14px] tracking-[0.02em]"}>

                            <button className="text-[12px] opacity-[0.8]">
                                {data.TransactionStatus}
                            </button>
                        </div>
                    </motion.div>

                )
            })}

        </motion.div>
    );
}

export default TransactionRows;