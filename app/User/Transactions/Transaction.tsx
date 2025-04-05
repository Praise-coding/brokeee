"use client"
// noinspection JSFileReferences

export const dynamic = "force-dynamic"
import React from 'react'
import {Transaction as userTransaction} from "@/app/Types";
import {Icons} from "@/app/User/Transactions/Icons";
import Link from "next/link";
import RefreshButton from "@/app/User/Dashboard/refreshButton";


function Transaction({sectionName, arrayOfData, showButton, timezone}: {
    sectionName: string,
    showButton?: boolean,
    arrayOfData: userTransaction[] | undefined,
    timezone?: string
}) {
    return (
        <div>
            <div
                className={"bg-[#1B2028] w-full  sm:py-[20px] py-[30px] px-[15px] sm:px-[30px] mt-[18px] rounded-[15px]"}>
                <div className={"flex justify-between items-center"}>
                    <div
                        className="font-[600] font-poppins text-[#E4E4E4] text-[16px] sm:text-[21px] leading-[32px] tracking-[0.03em]">
                        {sectionName}
                    </div>
                    {showButton ? <Link href={"Transactions"}>
                            <button
                                className={"w-[105px] cursor-pointer font-poppins font-[600] text-[10px]  text-[#E4E4E4] h-[32px] border-[1px] rounded-[5px] border-[#31353F]"}>
                           <span className={"opacity-[0.6]"}>
                               View More
                           </span>
                            </button>
                        </Link> :
                        <RefreshButton/>
                    }


                </div>
                <div className={"w-full overflow-x-scroll"}>
                    <div className={"md:w-full  w-max"}>
                        <div className={" md:max-w-full  max-w-[800px]"}>
                            <div
                                className={"grid grid-cols-5 gap-[30px] sm:gap-[40px] mt-[30px]  justify-between w-full item-center"}>

                                <div
                                    className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                                    Coin
                                </div>
                                <div
                                    className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                                    Amount
                                </div>
                                <div
                                    className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                                    Date
                                </div>
                                <div
                                    className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                                    Type
                                </div>
                                <div
                                    className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                                    Status
                                </div>
                            </div>

                            {arrayOfData && arrayOfData?.map((data, key) => {
                                const utcDate = new Date(data.TransactionDate); // Convert MySQL DATETIME to UTC
                                const localDate = utcDate.toLocaleString("en-US", {timeZone: timezone});
                                const accurateUserDate = new Date(localDate)
                                const status = data.TransactionStatus
                                return (
                                    <div key={key}
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
                                    </div>

                                )
                            })}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Transaction
