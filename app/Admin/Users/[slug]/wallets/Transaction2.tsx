"use client"
// noinspection JSFileReferences

import TransactionRows from "./TransactionRows2";
import React from 'react'
import {Wallets} from "@/app/Types";
import Link from "next/link";
import RefreshButton from "@/app/User/Dashboard/refreshButton";

export const dynamic = "force-dynamic"


function Transaction2({arrayOfData, showButton, timezone}: {
    sectionName: string,
    showButton?: boolean,
    arrayOfData: Wallets[] | undefined,
    timezone?: string
}) {
    return (
        <div>
            <div
                className={"bg-[#1B2028] w-full  sm:py-[20px] py-[30px] px-[15px] sm:px-[30px] mt-[18px] rounded-[8px]"}>
                <div className={"flex justify-between items-center"}>
                    <div
                        className="font-[600] font-poppins text-[#E4E4E4] text-[16px] sm:text-[21px] leading-[32px] tracking-[0.03em]">
                        Connected Wallets
                    </div>
                    {showButton ? <Link href={"Transactions"}>
                            <button

                                className={"w-[80px] hover:bg-white hover:text-black transition-all font-poppins font-[600] text-[10px]  text-[#E4E4E4] h-[32px] border-[1px] rounded-[5px] border-[#31353F]"}>

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
                        <div className={" md:max-w-full  max-w-[900px]"}>
                            <div
                                className={"grid grid-cols-3 gap-[30px] sm:gap-[40px] mt-[30px]  justify-between w-full item-center"}>
                                <div
                                    className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                                    Platform
                                </div>
                                <div
                                    className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                                    Email
                                </div>
                                <div
                                    className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                                    Status
                                </div>
                            </div>

                            <TransactionRows timezone={timezone} arrayOfData={arrayOfData}/>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Transaction2
