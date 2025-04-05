"use client"
import React from 'react'
import {Icons} from "@/app/User/Deposit/Icons";
import {usePathname} from "next/navigation";


function DepositWalletAddressAndBalanceCards({cardName, balanceOrWalletAddress, amOrAdd, copy}: {
    cardName: string,
    copy?: boolean,
    balanceOrWalletAddress: string,
    amOrAdd?: boolean
}) {
    const path = usePathname()
    return (
        <div className={"cursor-pointer"}>
            <div
                className={"bg-[#1B2028] group  flex overflow-hidden rounded-[15px] relative py-[12px] sm:py-[20.5px] sm:px-[30px] px-[15px]"}>
                <div className={"flex items-center  w-full"}>
                    <div className="">
                        <div
                            className="sm:p-[9px] p-[6px]  flex items-center justify-center bg-[#31353F] rounded-[10px]">
                            <Icons name={cardName}/>
                        </div>

                    </div>
                    <div className={"ml-[10px] sm:ml-[16px] flex-1 w-full font-poppins text-white"}>
                        <div
                            className={"sm:font-[600] text-[13px] sm:text-[16px] font-[500] text-[#E4E4E4] sm:text-white   sm:leading-[24px]  "}>
                            {cardName}
                        </div>
                        <div className={"w-full"}>
                            <div
                                className={`text-[#E4E4E4] ${copy ? "text-[9px]" : "text-[11px]"}   mt-[3px] sm:mt-[4px] flex justify-between sm:text-[12px] sm:leading-[18px] `}>
                                <div className={"opacity-[0.6]"}>
                                    {amOrAdd ? "Address" : "Amount"}:
                                </div>
                                <div className={`sm:font-[400]  opacity-[0.6] font-[400]  text-[#E4E4E4]`}>
                                    {(["Deposited", "Profit", "Balance"].includes(cardName) ? "$" : "")}{path.endsWith("/Deposit") ? balanceOrWalletAddress?.slice(0, 20) + "..." : balanceOrWalletAddress}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DepositWalletAddressAndBalanceCards
