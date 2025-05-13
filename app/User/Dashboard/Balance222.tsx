"use client"
import React from 'react'
import BalanceCards from "@/app/User/Deposit/DepositWalletAddressAndBalanceCards";
import {useSession} from "next-auth/react";
import {User} from "@/app/Types";


function Balance() {
    const {data: session, status}: { data: unknown, status: string } = useSession();
    const userData = session as User
    const cardName = Object.entries(userData?.user?.UserBalance || {}).slice(1)
    cardName.unshift(["Balance", userData?.user?.UserBalance?.Deposited + userData?.user?.UserBalance?.["DailyProfit"]]);


    return (<>
            {status != "loading" ?
                <>
                    <div className={"grid md:grid-cols-3 grid-cols-2  mt-[20px] sm:mt-[14px] gap-[10px] sm:gap-[15px]"}>
                        {cardName.map((data, key) => {
                            return (
                                <React.Fragment key={key}>
                                    <BalanceCards cardName={data[0]} balanceOrWalletAddress={data[1].toString()}/>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </> : ""
            }
        </>
    )
}

export default Balance
