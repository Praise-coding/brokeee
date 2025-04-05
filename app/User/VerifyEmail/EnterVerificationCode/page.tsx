"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import {useFocusNext} from "@/hooks/useFocusNext";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import Loading from "@/app/User/loading";
import {useRouter} from "next/navigation";

const Page = () => {
    const {register, watch, handleSubmit, resetField, setFocus} = useForm()

    const inputNames = ["1", "2", "3", "4"]
    const [onFocused, setOnFocused] = React.useState(false)
    const router = useRouter()
    useFocusNext({array: inputNames, setFocus, onFocused, watch})
    const [loading, setLoading] = React.useState(false)

    async function resendCode() {
        try {
            for (const i of ["1", "2", "3", "4"]) {
                resetField(i)
            }
            setLoading(true)
            await fetch("/api/verifyEmail/sendVerificationCode", {
                method: "POST",
                body: JSON.stringify({"createdAt": new Date().toISOString()})
            })
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }

    }

    async function validateCode() {
        await handleSubmit(async (data) => {
            setLoading(true)
            try {
                const response = await fetch("/api/verifyEmail/validateVerificationCode", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        data: (Object.values(data).join("")).toString(),
                        "createdAt": new Date()
                    }),
                })
                if (!response.ok) {
                    const responseMessage = await response.text()
                    Toaster("error", JSON.parse(responseMessage).message)
                } else if (response.ok) {
                    router.push("/User/Dashboard")
                }
            } catch (e) {
                const error = e as Error
                console.error(error)
            } finally {
                setLoading(false)
            }
        })()
    }


    return (
        <>

            <div

                className={"px-[20px] flex items-center justify-center z-[50000] top-0  bg-[#31353F] w-full  left-0 fixed h-screen"}>
                {loading ? <Loading/> : ""}
                <div className={"w-[367px]"}>
                    <div className={"font-inter font-[700] text-[22px] leading-[27px] text-white"}>
                        Verify Email
                    </div>
                    <div
                        className={"font-poppins w-full max-w-[300px] mt-[15px] text-[18px] leading-[27px] font-[500] text-[#B6B6B6]"}>
                        We have sent the verification code to your email address
                    </div>
                    <form onSubmit={async (e) => {
                        e.preventDefault()
                        await validateCode()

                    }}>
                        <div className={"mt-[48px] gap-[28px] grid grid-cols-4"}>
                            {inputNames.map((data, key) => {
                                return (
                                    <div key={key}>
                                        <input
                                            {...register(data, {
                                                required: true,
                                                validate: (value) => isNaN(value) ? "" : undefined
                                            })}
                                            onFocus={() => setOnFocused(true)}
                                            onBlur={() => setOnFocused(false)}
                                            maxLength={1}
                                            className={"border-[1.4px] font-inter font-[700] text-[24px] text-center focus:border-[#3A6FF8] leading-[29px] text-white border-[#DDDDDD] rounded-[20px] w-[71px] h-[71px]"}/>
                                    </div>
                                )
                            })
                            }
                        </div>
                        <button
                            className={"w-full sm:w-[367px] cursor-pointer font-poppins font-[700] text-[18px] leading-[27px] mt-[56px] text-white h-[72px] sm:h-[72px] flex items-center justify-center rounded-[50px] "}
                            style={{
                                background: "linear-gradient(180deg, #3A6FF8 0%, #3A6FF8 100%)",
                                boxShadow: "0px 9px 14px rgba(58, 111, 248, 0.2)"
                            }}>
                            Confirm
                        </button>
                        <div className={"flex justify-center"}>
                            <div onClick={() => resendCode()}
                                 className={"hover:text-[grey] w-fit text-[14px] cursor-pointer mt-[10px] text-white  font-poppins"}>
                                Request a new code ?
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>)

}

export default Page;