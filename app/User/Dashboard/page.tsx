import React from 'react'
import Balance from "@/app/User/Dashboard/Balance";
import Portfolio_Chart from "@/app/User/Dashboard/Portfolio_Chart";
import Transaction from "@/app/User/Transactions/Transaction";
import {User} from "@/app/Types";
import {sessionData} from "@/app/sessionData";

async function Page() {
    const user: unknown = await sessionData()

    const userdata = user as User
    const transactionArray = userdata?.user?.UserTransactions?.slice(0, 3)

    return (
        <>
            <Balance/>
            <Portfolio_Chart/>
            <Transaction showButton={true} arrayOfData={transactionArray} sectionName={"Last Transaction"}/>
        </>
    )
}

export default Page
