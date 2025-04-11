"use client"
import React, {useEffect, useState} from 'react'
import InputTemp from "@/app/components/ui/InputTemp";
import SelectTemp from "@/app/components/ui/SelectInputTemp";
import {useForm} from "react-hook-form";
import Loading from "@/app/(auth)/loading";
import {submitForm} from "@/app/User/Withdraw/submitForm";
import Inputs from "@/app/User/Withdraw/Inputs";
import {useSession} from "next-auth/react";
import {User} from "@/app/Types";
import {Toaster} from "@/app/(auth)/formUi/Toast";


function WithdrawalFormInput() {
    const {register, handleSubmit, watch, getValues, resetField, formState: {errors}} = useForm()
    const withdrawalOptions = ["Bitcoin", "Ethereum", "Tether", "Bank Transfer"]
    const [loading, setLoading] = useState(false)
    const {data: session} = useSession()
    const data = session as User
    const userBalance = (data?.user?.UserBalance?.Deposited + data?.user?.UserBalance?.Profit)

    async function formSubmitter() {
        if (data?.["user"]?.["UserBalance"]?.["AllowWithdrawal"] == 0 || data?.["user"]?.["UserBalance"]?.["AllowDeposit"] == 0) {
            Toaster("error", "You cannot make this transaction")
            return;
        }
        await submitForm(userBalance, getValues, setLoading, handleSubmit)
    }

    const value = getValues("withdrawalMethod")
    useEffect(() => {
        ["walletAddress", "FullName", "Amount", "Address", "BankName", "AccountNumber", "IBANSWIFTCode"].map((ee) => {
            resetField(ee)
        })

    }, [resetField, value]);

    return (
        <>
            {loading && <Loading/>}
            <div
                className=" sm:mt-[14px] mt-[15px] ">
                <form onSubmit={async (e) => {
                    e.preventDefault()
                    await formSubmitter()
                }} className="grid  sm:grid-cols-2 gap-[20px] sm:gap-[30px]">
                    <div className={"rounded-[8px] h-fit py-[20px] sm:py-[30px] px-[15px] sm:px-[31px] bg-[#1B2028] sm:gap-[30px]"}>
                        <SelectTemp defaultValue={undefined} selectionType={"withdrawal"} inputChange={register}
                                    inputName={"withdrawalMethod"}
                                    options={withdrawalOptions}/>

                    </div>
                    <div className="grid gap-[20px] rounded-[8px] py-[20px] sm:py-[30px] px-[15px] sm:px-[31px] bg-[#1B2028] sm:gap-[25px]">
                        <Inputs
                            optionSelected={watch("withdrawalMethod") ? watch("withdrawalMethod") : "Bitcoin"}
                            errors={errors} register={register}/>
                        <InputTemp
                            errors={errors}
                            type={"number"}
                            inputName={"Amount"}
                            inputChange={register}
                            placeholder={"Amount in dollars ($)"}/>
                        <div>
                            <button
                                className="bg-[#5570F1] cursor-pointer font-poppins text-[14px] text-white w-full rounded-[8px] h-[47px]">
                                Submit
                            </button>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}

export default WithdrawalFormInput
