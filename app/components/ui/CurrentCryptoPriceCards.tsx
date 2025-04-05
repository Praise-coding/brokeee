"use client"
import React from "react";
import {Icons} from "@/app/User/Deposit/Icons";

function saveAndCheckCryptoPrice(cryptoName: string, cryptoPrice: number) {
    try {
        if (localStorage) {
            if (!localStorage.getItem(cryptoName)) {
                const currentDate = new Date();
                currentDate.setMinutes(currentDate.getMinutes() + 30);
                localStorage.setItem(cryptoName, JSON.stringify({
                    price: cryptoPrice,
                    refreshDate: currentDate.getTime()
                }))
                return 0
            }

            const getCryptoStoredInfo = JSON.parse(localStorage.getItem(cryptoName) || "{}")
            const currentDate = new Date();
            const savedDate = new Date(getCryptoStoredInfo?.refreshDate)
            if (currentDate > savedDate) {
                localStorage.removeItem(cryptoName)
                return 0
            }

            return Number(((((cryptoPrice) - getCryptoStoredInfo.price) / cryptoPrice) * 100).toFixed(2))
        }
        return 0
    } catch {
        return 0
    }
}

export function CurrentCryptoPriceCards({title, price}: { title: string, price: number }) {

    return (
        <div className={"flex items-center"}>
            <div>
                <div className="p-[9px]  flex items-center justify-center bg-[#31353F] rounded-[10px]">
                    <Icons name={title}/>
                </div>

            </div>
            <div className={"sm:ml-[16px] ml-[15px] w-full "}>
                <div className={"w-full"}>
                    <div className={"flex justify-between"}>
                        <div
                            className={"font-[500] capitalize text-[14px] sm:text-[16px] leading-[24px] text-[#E4E4E4] "}>
                            {title}
                        </div>
                        {(() => {
                            const percent = saveAndCheckCryptoPrice(title, price).toString()
                            return (
                                <>
                                    <div style={{color: percent.startsWith("-") ? "#F46D22" : "#1ec800"}}
                                         className={"sm:text-[12px] text-[11px] font-[500] leading-[24px] "}>

                                        {percent.startsWith("-") ? percent : "+" + percent}%
                                    </div>
                                </>
                            )
                        })()}

                    </div>

                    <div
                        className={"flex justify-between text-[12.3px] sm:text-[14px] mt-[3.3px] sm:mt-[5px] items-center"}>
                        <div className={"text-[#E4E4E4]  leading-[21px] opacity-[0.6]"}>
                            ${price}
                        </div>
                        <div className={"font-[600]  leading-[21px] text-[white]"}>
                            1 {title.startsWith("b") ? "BNB" : title.startsWith("d") ? "DOGE" : title.startsWith("r") ? "XRP" : title.startsWith("s") ? "SOL" : title.startsWith("t") ? "TRX" : title.startsWith("l") ? "LTC" : ""}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}