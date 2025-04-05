"use client"
import React, {useState} from 'react';
import DepositForm from "@/app/Admin/Deposit/DepositForm";
import DepositWalletAddressAndBalanceCards from "@/app/Admin/Deposit/DepositWalletAddressAndBalanceCards";
import {allWalletAddress} from "@/app/Types";

const WalletAddressesAndEdit = ({data}: { data: allWalletAddress }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div onClick={() => setOpen((prevState) => !prevState)}>
                <DepositWalletAddressAndBalanceCards amOrAdd={true} copy={true} cardName={data?.name}
                                                     balanceOrWalletAddress={data?.address}/>
            </div>
            <div
                className={`bg-[#1B2028]  transition-all  overflow-hidden ${open ? "h-fit sm:h-fit  sm:mt-[22px] mt-[12px] py-[20px] sm:py-[50px] px-[15px] sm:px-[31px]" : "h-[0px]"}  rounded-[15px] `}>
                <div>
                    <DepositForm data={data}/>
                </div>
            </div>
        </div>
    );
};

export default WalletAddressesAndEdit;