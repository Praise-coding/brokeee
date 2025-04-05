"use client"
import React from "react";

type setState = React.Dispatch<React.SetStateAction<{
    AllowWithdrawal: boolean
    AllowDeposit: boolean
    isBanned: boolean
    ActivateWithdrawalNotice: boolean
}
>>

export default function Options({data, modify, modifying}: {

    data: string,
    modify: [string, unknown],
    modifying: setState
}) {

    function toggle() {
        modifying((prevState) => {
            return {
                ...prevState,
                [modify[0]]: !(modify[1])
            }
        })
    }

    return (
        <>

            <div className={"flex  items-center gap-[20px] justify-between"}>
                <label htmlFor={"idoo"} onClick={() => toggle()}
                       className="cursor-pointer font-poppins leading-[25px] text-[#E4E4E4] text-[16px] sm:text-[18px] sm:leading-[32px] tracking-[0.03em]">
                    {data}
                </label>
                <div id={"idoo"} onClick={() => toggle()}
                     style={{boxShadow: "inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)", scale: -1}}
                     className={`flex ${modify[1] ? "bg-[#4182F9]" : "bg-black"} transition-all cursor-pointer items-center ${modify[1] ? "justify-start" : "justify-end"} rounded-[50px] transition-all w-[50px] h-[23px] p-[3px]`}>
                    <div style={{background: "linear-gradient(180deg, #FFFFFF 0%, #E8EAEA 100%)"}}
                         className={"w-[18px] h-[18px] z-[20]  rounded-full"}>

                    </div>
                </div>
            </div>


        </>

    )
}