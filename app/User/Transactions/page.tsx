import {sessionData} from "@/app/sessionData";
import React from 'react'
import Transaction from "@/app/User/Transactions/Transaction";
import {User} from "@/app/Types";

export const dynamic = "force-dynamic"

async function Page() {
    const user: unknown = await sessionData()

    const userdata = user as User
    const transactionArray = userdata?.user?.UserTransactions

    return (
        <div className={"h-screen"}>
            <Transaction timezone={userdata?.user?.UserInfo?.Timezone} arrayOfData={transactionArray}
                         sectionName={"All Transaction"}/>
        </div>
    )
}

export default Page
