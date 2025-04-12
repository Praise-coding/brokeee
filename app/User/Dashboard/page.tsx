import React from 'react'
import Balance from "@/app/User/Dashboard/Balance";
import Portfolio_Chart from "@/app/User/Dashboard/Portfolio_Chart";
import Transaction from "@/app/User/Transactions/Transaction";
import {User} from "@/app/Types";
import {sessionData} from "@/app/sessionData";
import {fetchCryptoPrice} from "@/app/User/Dashboard/fetchCryptoPrice";

async function Page() {
    const user: unknown = await sessionData()

    const userdata = user as User
    const transactionArray = userdata?.user?.UserTransactions?.slice(0, 3)
    const userBalance = userdata?.user?.UserBalance
    const arr = (await fetchCryptoPrice()) as Record<string, Record<string, number>>
    const balance = userBalance?.Balance
    const added = (Object.entries(userBalance || {}).slice(1)).filter((data) => {
        if (!(data[0].includes("Allow") || data[0].includes("With") || data[0]  == "Balance")) {
            return data
        }
    });
    added.unshift(["Balance", balance])
    added.push(["Bitcoin", Number((balance / arr?.bitcoin?.usd)?.toFixed(2))])
    added.push(["Ethereum", Number((balance / arr?.ethereum?.usd).toFixed(2))])
    added.push(["Tether", Number((balance / arr?.tether?.usd).toFixed(2))])
    return (
        <>
            <Balance userBalance={added}/>
            <Portfolio_Chart/>
            <Transaction showButton={true} arrayOfData={transactionArray} sectionName={"Last Transaction"}/>
        </>
    )
}

export default Page
