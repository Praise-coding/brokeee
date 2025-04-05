"use client"
import React, {useState} from 'react';
import Options from "@/app/Admin/Users/[slug]/optionsToggo";
import {setToggleOptions} from "@/app/Admin/Users/[slug]/toggleOption";
import {AllUserInfo} from "@/app/Types";
import Loading from "@/app/User/loading";
import {Toaster} from "@/app/(auth)/formUi/Toast";


const ToggleOptions = ({userData}: { userData: AllUserInfo }) => {

    const arrs = ["Allow user to make withdrawals", "Allow users to deposit money", "Block User", "Activate Withdrawal Notice"]
    const [optionsHolder, setHolderOption] = useState({
        AllowWithdrawal: !(userData?.["UserBalance"]?.["AllowWithdrawal"] == 0),
        AllowDeposit: !(userData["UserBalance"]?.["AllowDeposit"] == 0),
        isBanned: !(userData?.["UserInfo"]?.["isBlocked"] == 0),
        ActivateWithdrawalNotice: !(userData?.["UserBalance"]?.["WithdrawalNotice"] == 0),
    })
    const [loading, setLoading] = useState(false)
    return (
        <>
            {loading ? <Loading/> : ""}
            <div
                className="bg-[#1B2028] sm:mt-[] mt-[15px]  rounded-[15px] px-[15px] sm:px-[24px] py-[30px] sm:py-[46px]">
                <div className={"font-[600]  text-[30px] text-[#E4E4E4] font-poppins"}>
                    Toggle Options
                </div>
                <div className={"grid mt-[30px] grid-cols-1 sm:grid-cols-1 gap-y-[20px] gap-x-[40px]"}>
                    {arrs.map((data, key) => {

                        return (
                            <Options modifying={setHolderOption} modify={Object.entries(optionsHolder)[key]} key={key}
                                     data={data}/>
                        )
                    })}
                </div>
                <button onClick={async () => {
                    setLoading(true)
                    const response = await setToggleOptions(optionsHolder, userData["UserInfo"]["userid"]
                    )
                    setLoading(false)

                    if (response.ok) {
                        Toaster("success", "Updated successfully.")
                        return
                    }
                    Toaster("error", "An error occurred")
                }
                }
                        className={"bg-[#4182F9] block cursor-pointer   items-center justify-center rounded-[8px] w-full sm:mt-[40px] mt-[28px] h-[50px] "}>
                            <span className={"font-poppins text-white leading-[24px]"}>
                                    Save
                            </span>
                </button>

            </div>
        </>
    );
};

export default ToggleOptions;