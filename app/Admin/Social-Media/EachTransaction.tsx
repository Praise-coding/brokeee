import React from "react";
import {Transaction} from "@/app/Types";

export default function EachTransaction({data, timezone}: { data: Transaction, timezone: string | undefined }) {
    const utcDate = new Date(data.TransactionDate); // Convert MySQL DATETIME to UTC
    const localDate = utcDate.toLocaleString("en-US", {timeZone: timezone});
    const accurateUserDate = new Date(localDate)

    return (
        <>
            <div
                className={`grid grid-cols-6 transition-all relative duration-[800ms] items-center mt-[27.5px] gap-[30px] sm:gap-[40px] justify-between w-full item-center`}>
                <div className={"flex items-center "}>
                    <div
                        className={"font-poppins font-[500] text-[14px] leading-[21px] tracking-[0.02em] opacity-[0.8] text-white"}>

                    </div>
                </div>
                <div className={"  "}>
                    <div
                        className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>

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

                    </div>
                </div>


            </div>

        </>
    )
}