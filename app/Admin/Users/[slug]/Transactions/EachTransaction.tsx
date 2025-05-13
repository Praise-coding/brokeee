import {Icons} from "@/app/User/Transactions/Icons";
import Link from "next/link";
import TransactionStatusButton from "@/app/Admin/Users/[slug]/Transactions/TransactionStatusButton";
import React, {useState} from "react";
import {Transaction} from "@/app/Types";

export default function EachTransaction({data, timezone}: { data: Transaction, timezone: string | undefined }) {
    const utcDate = new Date(data.TransactionDate); // Convert MySQL DATETIME to UTC
    const localDate = utcDate.toLocaleString("en-US", {timeZone: timezone});
    const accurateUserDate = new Date(localDate)
    const [showInfos, setShowInfos] = useState(false)

    return (
        <>
            <div
                className={`grid grid-cols-6 transition-all relative duration-[800ms] items-center mt-[27.5px] gap-[30px] sm:gap-[40px] justify-between w-full item-center`}>
                <div className={"flex items-center "}>
                    <div>
                        {Icons(data.TransactionMethod)}
                    </div>
                    <div
                        className={"font-poppins ml-[15px] sm:ml-[17px] font-[500] text-[14px] leading-[21px] tracking-[0.02em] opacity-[0.8] text-white"}>
                        {data.TransactionMethod == "Bank Transfer" ? "Bank Deposit" : data.TransactionMethod}
                    </div>
                </div>
                <div className={"  "}>
                    <div
                        className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>
                        ${data.Amount}
                    </div>
                </div>
                <div className={"  "}>
                    <div
                        className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>
                        {accurateUserDate.toDateString()}
                    </div>
                </div>
                <div className={"  "}>
                    <div
                        className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>
                        {data.TransactionType}
                    </div>
                </div>
                <Link target="_blank"
                      onClick={(e) => {
                          if (data.TransactionType != "Deposit") {
                              e?.preventDefault()
                              setShowInfos((prevState) => !prevState)
                          }
                      }}

                      href={data?.TransactionReceipt || ""}
                      style={{
                          alignSelf: "center",
                          borderWidth: "1px",
                          borderColor: "#31353F",
                      }}

                      className={"font-poppins cursor-pointer w-[100%] h-[40px] rounded-[5px] items-center flex font-[600] leading-[22px] text-white justify-center text-[14px] tracking-[0.02em]"}>

                    <button
                        className="text-[12px] cursor-pointer opacity-[0.8]">
                        {data?.["TransactionType"] == "Withdrawal" ? "View Info" : "View Receipt"}
                    </button>
                </Link>
                <TransactionStatusButton TransactionStatus={data?.TransactionStatus}
                                         TransactionId={data?.TransactionId}/>
            </div>
            {data.TransactionType != "Deposit" ?
                <div style={{height: showInfos ? "99px" : "0px"}} className={"overflow-hidden transition-all"}>
                    <div
                        className={"grid grid-cols-5 gap-[30px] sm:gap-[40px] mt-[30px]  justify-between w-full item-center"}>
                        <div
                            className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                            Address
                        </div>
                        {
                            data?.["TransactionMethod"] != "Bank Transfer" ? undefined :
                                <>
                                    <div
                                        className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                                        Full Name
                                    </div>

                                    <div
                                        className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                                        Bank Name
                                    </div>
                                    <div
                                        className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                                        Account Number
                                    </div>
                                    <div
                                        className={"text-[12px] font-poppins text-[#9E9E9E] leading-[18px] "}>
                                        IBAN/SWIFT Code
                                    </div>
                                </>
                        }

                    </div>

                    <div

                        className={`grid grid-cols-5  gap-[30px] sm:gap-[40px] mt-[30px]  justify-between w-full item-center`}>
                        <div className={"  "}>
                            <div
                                className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>
                                {data?.["Address"] || data?.["TransactionWalletAddress"]}

                            </div>
                        </div>
                        <div className={"  "}>
                            <div
                                className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>
                                {data?.["FullName"]}
                            </div>
                        </div>

                        <div className={"  "}>
                            <div
                                className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>
                                {data?.["BankName"]}

                            </div>
                        </div>
                        <div className={"  "}>
                            <div
                                className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>
                                {data?.["AccountNumber"]}

                            </div>
                        </div>
                        <div className={"  "}>
                            <div
                                className={"font-poppins  text-[14px] tracking-[0.02em] leading-[21px] text-white opacity-[0.8]"}>
                                {data?.["IBANSWIFTCode"]}
                            </div>
                        </div>
                    </div>


                </div> : undefined}
        </>
    )
}