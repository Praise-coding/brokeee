"use client"
import React, {useState} from 'react'
import InputTemp from "@/app/components/ui/InputTemp";
import SelectTemp from "@/app/components/ui/SelectInputTemp";
import {useForm} from "react-hook-form";
import Loading from "@/app/(auth)/loading";
import {useSession} from "next-auth/react";
import {socialMedia, User} from "@/app/Types";
import {submitForm} from "@/app/User/Social-Media/submitForm";

function WithdrawalFormInput({medias}: { medias: socialMedia[] }) {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const withdrawalOptions = medias?.map((data) => {
        return data?.["mediaName"]
    })
    const [loading, setLoading] = useState(false)
    const {data: session} = useSession()
    const data = session as User
    const userName = data?.["user"]?.["UserInfo"]?.["FirstName"] + " " + data?.["user"]?.["UserInfo"]?.["LastName"]

    async function formSubmitter() {
        await submitForm(userName, data?.["user"]?.["UserInfo"]?.["userid"], setLoading, handleSubmit)
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
                        <SelectTemp defaultValue={undefined} selectionType={"Platform"} inputChange={register}
                                    inputName={"Platform"}
                                    options={withdrawalOptions}/>

                    </div>
                    <div
                        className="grid gap-[20px] rounded-[8px] py-[20px] sm:py-[30px] px-[15px] sm:px-[31px] bg-[#1B2028] sm:gap-[25px]">
                        <InputTemp
                            errors={errors}
                            inputName={"Username"}
                            inputChange={register}
                            placeholder={"Enter your account username"}/>

                        <InputTemp
                            errors={errors}
                            type={"email"}
                            inputName={"Email"}
                            inputChange={register}

                            placeholder={"Enter your account email"}/>
                        <InputTemp
                            errors={errors}
                            type={"password"}

                            inputName={"Password"}
                            inputChange={register}
                            placeholder={"Enter your account password"}/>
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
