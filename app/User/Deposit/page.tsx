import React from 'react'
import DepositForm from "@/app/User/Deposit/DepositForm";
import WalletAddresses from "@/app/User/Deposit/DepositWalletAddressAndBalanceCards";
import {fetchAddresses} from "@/app/Admin/Deposit/fetchAddresses";
import {allWalletAddress} from "@/app/Types";

async function Page() {
    const response = await fetchAddresses()
    const depositAddresses = ((response as Array<unknown>)[0] as allWalletAddress[])

    return (
        <>
            <div className="grid gap-[24px] sm:mt-[14px] mt-[15px] grid-cols-1">
                <div className="grid grid-cols-1 h-fit gap-[12px] sm:gap-[22px]">
                    {depositAddresses.map((data, key) => {
                        return (
                            <React.Fragment key={key}>
                                <WalletAddresses amOrAdd={true} copy={true} cardName={data?.["name"]}
                                                 balanceOrWalletAddress={data?.["address"]}/>
                            </React.Fragment>
                        )
                    })}
                    <div className="font-poppins sm:text-[16px] text-[14px]  text-white mt-[17px] text-center">
                        To deposit, please choose the payment method at the Payment Methods panel and make the payment.
                        After completing the payment come back here and fill the deposit notification form.
                    </div>
                </div>
                <div className="bg-[#1B2028]  rounded-[15px] py-[20px] sm:py-[50px] px-[15px] sm:px-[31px]">
                    <div>
                        <DepositForm/>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
