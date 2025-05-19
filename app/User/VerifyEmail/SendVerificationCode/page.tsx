"use client"
import React, {useEffect, useRef, useState} from 'react';
import Loading from "@/app/User/loading";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import {useRouter, useSearchParams} from 'next/navigation';

const Page = () => {
    const [loading, setLoading] = React.useState(false)
    const [emailSent, setEmailSent] = useState(false)
    const searchParams = useSearchParams()

    const emailParam = searchParams.get("Email")
    const verificationCodeParam = searchParams.get("verificationCode")
    const router = useRouter()

    async function resendCode() {
        try {
            setLoading(true)
            const response = await fetch("/api/verifyEmail/sendVerificationCode", {
                method: "POST",
                headers: {"x-cron-secret": String(process.env.CRON_SECRET)},
                body: JSON.stringify({"createdAt": new Date().toISOString()})
            })
            if (response.ok) {
                setEmailSent(true)
                Toaster("success", "Email Sent")

                return;
            }
            Toaster("error", "An error occurred")
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    const hasVerified = useRef(false);
    useEffect(() => {
        if (hasVerified.current) return; // already ran
        hasVerified.current = true;

        async function verify() {
            if (emailParam && verificationCodeParam) {
                setLoading(true)
                const response = await fetch("/api/verifyEmail/validateVerificationCode", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "x-cron-secret": String(process.env.CRON_SECRET)
                    },
                    body: JSON.stringify({
                        data: verificationCodeParam,
                        "createdAt": new Date()
                    }),
                })
                if (!response.ok) {
                    const responseMessage = await response.text()
                    Toaster("error", JSON.parse(responseMessage).message)
                    setLoading(false)
                } else if (response.ok) {
                    Toaster("success", "Email verified")
                    router.push("/User/Dashboard")
                }
            }
        }

        verify().then()

    }, [emailParam, router, verificationCodeParam]);

    return (
        <>
            {!emailSent ?
                <div
                    className={"px-[20px] flex items-center justify-center z-[50] top-0  bg-[#31353F] w-full  left-0 fixed h-screen"}>
                    {loading ? <Loading/> : ""}
                    <div className={"w-[367px]"}>
                        <div className={"font-inter font-[700] text-[22px] leading-[27px] text-white"}>
                            Verify Email
                        </div>
                        <div
                            className={"font-poppins w-full max-w-[400px] mt-[15px] text-[18px] leading-[27px] font-[500] text-[#B6B6B6]"}>
                            We&#39;ll send a verification code to your email to confirm you&#39;re human.
                        </div>

                        <div onClick={() => resendCode()}
                             className={"hover:text-[grey] w-fit text-[14px] cursor-pointer mt-[20px] text-white text-white font-poppins"}>
                            Request a code ?
                        </div>

                    </div>

                </div>
                :
                <div
                    className={"px-[20px] flex items-center justify-center bg-[#31353F] z-[50000] top-0   w-full  left-0 fixed h-screen"}>
                    {loading ? <Loading/> : ""}
                    <div className={"w-full sm:w-[367px]"}>
                        <div className={"font-inter font-[700] text-[22px] leading-[27px] text-white"}>
                            Verify Email
                        </div>
                        <div
                            className={"font-poppins w-full max-w-[400px] mt-[15px] text-[18px] leading-[27px] font-[500] text-[#B6B6B6]"}>
                            We sent a verification url to your email. Click on it to verify your email.
                        </div>

                        <div onClick={() => resendCode()}
                             className={"hover:text-[grey] text-[14px] cursor-pointer mt-[20px] text-white  font-poppins"}>
                            Request another url ?
                        </div>

                    </div>
                </div>
            }
        </>)
}

export default Page;