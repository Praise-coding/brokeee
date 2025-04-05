"use client"
import React, {useEffect, useState} from 'react'
import BalanceCards from "@/app/User/Deposit/DepositWalletAddressAndBalanceCards";
import {useSession} from "next-auth/react";
import {User} from "@/app/Types";
import {fetchCryptoPrice} from "@/app/User/Dashboard/fetchCryptoPrice";


function Balance() {
    const {data: session, status}: { data: unknown, status: string } = useSession();
    const userData = session as User
    const [cardName, setCardName] = useState<[string, number][]>([])

    useEffect(() => {
        (async function jjj() {
            const arr = await fetchCryptoPrice()
            const balance = (userData?.user?.UserBalance?.Deposited + userData?.user?.UserBalance?.Profit) || 0
            const added = (Object.entries(userData?.user?.UserBalance || {}).slice(1)).filter((data) => {
                if (!(data[0].includes("Allow") || data[0].includes("With"))) {
                    return data
                }
            });
            added.unshift(["Balance", balance])
            added.push(["Bitcoin", Number((balance / arr?.bitcoin?.usd)?.toFixed(2))])
            added.push(["Ethereum", Number((balance / arr?.ethereum?.usd).toFixed(2))])
            added.push(["Tether", Number((balance / arr?.tether?.usd).toFixed(2))])
            setCardName(added)
        })()

    }, [userData?.user?.UserBalance]);

    return (<>
            {status != "loading" ?
                <>
                    <div className={"grid md:grid-cols-3 grid-cols-2  mt-[20px] sm:mt-[14px] gap-[10px] sm:gap-[15px]"}>
                        {cardName?.map((data, key) => {
                            return (
                                <React.Fragment key={key}>
                                    <BalanceCards cardName={data[0]}
                                                  balanceOrWalletAddress={isNaN(data[1]) ? "0" : data[1]?.toString()}/>
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
