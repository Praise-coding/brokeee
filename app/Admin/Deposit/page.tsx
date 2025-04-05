import React from 'react'
import WalletAddressesAndEdit from "@/app/Admin/Deposit/WalletAddressesAndEdit";
import {fetchAddresses} from "@/app/Admin/Deposit/fetchAddresses";
import {allWalletAddress} from "@/app/Types";
import AddDepositMethod from "./AddDepositMethod";

async function Page() {
    const response = await fetchAddresses()
    const depositAddresses = ((response as Array<unknown>)[0] as allWalletAddress[])

    return (
        <div className="grid gap-[24px] sm:mt-[14px] mt-[15px] grid-cols-1">
            <div className=" grid h-fit gap-[12px] sm:gap-[22px]">
                {depositAddresses.map((data: allWalletAddress, key) => {
                    return (
                        <div key={key}>
                            <WalletAddressesAndEdit key={key} data={data}/>

                        </div>
                    )
                })}
            </div>
            <AddDepositMethod/>
        </div>
    )
}

export default Page
