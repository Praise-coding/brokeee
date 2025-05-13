"use client"
import React, {useState} from 'react';
import {transactionStatus} from "@/app/Admin/Users/[slug]/wallets/transactionStatus2";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import {useRouter} from "next/navigation";
import Loading from "@/app/User/loading";

const TransactionStatusButton = ({TransactionStatus, TransactionId}: {
    TransactionStatus: string,
    TransactionId: number
}) => {
    const [showTransactOptions, setShowTransactOptions] = useState(false)
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    async function alterTransactionStatus(status: string, TransactionId: number) {
        setLoading(true)
        const response = await transactionStatus(TransactionId, status)
        if (!response.ok) {
            Toaster("error", "An error occurred")
            setLoading(false)
            return;
        }
        setLoading(false)
        Toaster("success", `Wallet ${status} successfully`)
        setShowTransactOptions(false)
        router.refresh()
    }

    return (
        <>
            {loading ? <Loading/> : ""}
            <div className={TransactionStatus == "Pending" || showTransactOptions ? "grid grid-cols-2 gap-[8px]" : ""}>
                {TransactionStatus == "Pending" || showTransactOptions ? <>
                        <div
                            style={{
                                alignSelf: "center",
                                backgroundColor: "#04A404"
                            }}
                            onClick={async () => await alterTransactionStatus("Confirmed", TransactionId)}

                            className={"font-poppins cursor-pointer  w-[100%] h-[40px] rounded-[5px] items-center flex font-[600] leading-[22px] text-white justify-center text-[14px] tracking-[0.02em]"}>

                            <button className="cursor-pointer  opacity-[0.8]">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1L6 12L1 7" stroke="white" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </button>
                        </div>
                        <div
                            style={{
                                alignSelf: "center",
                                backgroundColor: "#FF4646",
                                borderColor: TransactionStatus == "Pending" ? "#FF4646" : "",
                            }}
                            onClick={async () => await alterTransactionStatus("Declined", TransactionId)}

                            className={"font-poppins cursor-pointer  w-[100%] h-[40px] rounded-[5px] items-center flex font-[600] leading-[22px] text-white justify-center text-[14px] tracking-[0.02em]"}>

                            <button className="text-[12px] cursor-pointer  opacity-[0.8]">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 1L1 13M1 1L13 13" stroke="white"
                                          strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </button>
                        </div>
                    </> :
                    <div
                        onClick={() => setShowTransactOptions(true)}
                        style={{
                            alignSelf: "center",
                            borderWidth: TransactionStatus == "Pending" ? "1px" : "",
                            borderColor: TransactionStatus == "Pending" ? "#31353F" : "",
                            backgroundColor: TransactionStatus == "Declined" ? "#FF4646" : TransactionStatus == "Confirmed" ? "#04A404" : TransactionStatus == "Pending" ? "" : ""
                        }}

                        className={"font-poppins cursor-pointer w-[100%] h-[40px] rounded-[5px] items-center flex font-[600] leading-[22px] text-white justify-center text-[14px] tracking-[0.02em]"}>

                        <button className="text-[12px] cursor-pointer opacity-[0.8]">
                            {TransactionStatus}
                        </button>
                    </div>
                }
            </div>

        </>
    );
};

export default TransactionStatusButton;