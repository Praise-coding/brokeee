"use client"
import React, {useEffect, useState} from 'react';
import Loading from "@/app/User/loading";
import {useRouter, useSearchParams} from "next/navigation";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import {useForm} from "react-hook-form";
import {sendCode, updatePassword} from "@/app/(auth)/ResetPassword/SendAndValidateCode";

const Page = () => {
    const [loading, setLoading] = React.useState(false)
    const {register: passwordRegister, handleSubmit: passwordHandleSubmit, formState: {errors}} = useForm()
    const {register: emailRegister, handleSubmit: emailHandleSubmit} = useForm()
    const [showForm, setShowForm] = React.useState(false);
    const searchParams = useSearchParams()

    const emailParam = searchParams.get("Email")
    const verificationCodeParam = searchParams.get("verificationCode")
    const [submitted, setSubmitted] = useState(false)
    const router = useRouter()

    async function verificationURLSender() {
        await sendCode(setSubmitted, setLoading, emailHandleSubmit)
    }

    async function passwordUpdater() {
        await updatePassword(setSubmitted, router, emailParam || "", setLoading, passwordHandleSubmit)
    }

    useEffect(() => {
            if (emailParam && verificationCodeParam) {
                (async function validateCode() {
                        try {
                            setLoading(true)
                            const response = await fetch("/api/ResetPassword/validateCode", {
                                method: "POST",
                                body: JSON.stringify({
                                    "createdAt": new Date().toISOString(),
                                    email: emailParam,
                                    verificationCode: verificationCodeParam
                                })
                            })
                            if (!response.ok) {
                                Toaster("error", JSON.parse(await response.text())?.message)
                            } else {
                                setShowForm(true)
                            }
                        } catch (e) {
                            console.error(e)
                        } finally {
                            setLoading(false)
                        }
                    }
                )()
            }
        },
        [emailParam, verificationCodeParam]
    )


    return (
        <>
            <div className={"px-[20px]"}>
                {showForm ?
                    <div
                        className={"px-[20px] flex items-center justify-center z-[50000] top-0   w-full  left-0 fixed h-screen"}>
                        {loading ? <Loading/> : ""}
                        <div className={"w-full sm:w-[367px]"}>
                            <div className={"font-inter font-[700] text-[22px] leading-[27px] text-white"}>
                                Reset Password
                            </div>
                            <div
                                className={"font-poppins w-full max-w-[400px] mt-[15px] text-[18px] leading-[27px] font-[500] text-[#B6B6B6]"}>
                                Enter a new password you would remember.
                            </div>
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                await passwordUpdater()
                            }}>
                                <input {...passwordRegister("password", {
                                    required: "Enter a new password",
                                    minLength: {value: 8, message: "minimum length is 8 characters"}
                                })} type={"password"}
                                       placeholder={"Enter new password"}
                                       className={"w-full my-[48px] text-[#ABAFB1]  bg-[rgba(0,0,0,0.1)] font-poppins h-[71px] rounded-[13px] px-[16px]  border-[rgba(255,255,255,0.7)] border text-[14px] sm:text-[16px] md:border-[1.3px] "}/>
                                <div>
                                    {errors["password"] ? JSON.stringify(errors["password"].message).replaceAll('"', "") : ""}
                                </div>
                                <button
                                    className={"w-full sm:w-[367px]  cursor-pointer font-poppins font-[700] text-[18px] leading-[27px] text-white h-[70px] sm:h-[72px] flex items-center justify-center rounded-[50px] "}
                                    style={{
                                        background: "linear-gradient(180deg, #3A6FF8 0%, #3A6FF8 100%)",
                                        boxShadow: "0px 9px 14px rgba(58, 111, 248, 0.2)"
                                    }}>
                                    Create password
                                </button>
                            </form>
                        </div>
                    </div>

                    :
                    submitted ?
                        <div
                            className={"px-[20px] flex items-center justify-center z-[50000] top-0   w-full  left-0 fixed h-screen"}>
                            {loading ? <Loading/> : ""}
                            <div className={"w-full sm:w-[367px]"}>
                                <div className={"font-inter font-[700] text-[22px] leading-[27px] text-white"}>
                                    Reset Password
                                </div>
                                <div
                                    className={"font-poppins w-full max-w-[400px] mt-[15px] text-[18px] leading-[27px] font-[500] text-[#B6B6B6]"}>
                                    We sent a verification url to your email. Click on it to reset your password.
                                </div>

                                <div onClick={() => verificationURLSender()}
                                     className={"hover:text-[grey] text-[14px] cursor-pointer mt-[20px] text-white  font-poppins"}>
                                    Request another url ?
                                </div>

                            </div>
                        </div>
                        : <div
                            className={"px-[20px] flex items-center justify-center z-[50000] top-0   w-full  left-0 fixed h-screen"}>
                            {loading ? <Loading/> : ""}
                            <div className={"w-full sm:w-[367px]"}>
                                <div className={"font-inter font-[700] text-[22px] leading-[27px] text-white"}>
                                    Reset Password
                                </div>
                                <div
                                    className={"font-poppins w-full max-w-[400px] mt-[15px] text-[18px] leading-[27px] font-[500] text-[#B6B6B6]"}>
                                    We&#39;ll send a verification url to your email. Click on it to reset your password.
                                </div>
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    await verificationURLSender()
                                }}>
                                    <input {...emailRegister("email", {required: true})}

                                           type={"email"}
                                           placeholder={"Enter your email"}
                                           className={"w-full my-[48px] text-[#ABAFB1]  bg-[rgba(0,0,0,0.1)] font-poppins h-[71px] rounded-[13px] px-[16px]  border-[rgba(255,255,255,0.7)] border text-[14px] sm:text-[16px] md:border-[1.3px] "}/>
                                    <button
                                        className={"w-full sm:w-[367px]  cursor-pointer font-poppins font-[700] text-[18px] leading-[27px] text-white h-[70px] sm:h-[72px] flex items-center justify-center rounded-[50px] "}
                                        style={{
                                            background: "linear-gradient(180deg, #3A6FF8 0%, #3A6FF8 100%)",
                                            boxShadow: "0px 9px 14px rgba(58, 111, 248, 0.2)"
                                        }}>
                                        Send Email
                                    </button>
                                </form>
                            </div>
                        </div>

                }

            </div>

        </>)

}

export default Page;