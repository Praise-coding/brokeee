"use client"
import React from 'react';
import Loading from "@/app/User/loading";
import {useRouter} from "next/navigation";

const Page = () => {
    const [loading, setLoading] = React.useState(false)
    const router = useRouter()

    async function resendCode() {
        try {
            setLoading(true)
            await fetch("/api/verifyEmail/sendVerificationCode", {
                method: "POST",
                body: JSON.stringify({"createdAt": new Date().toISOString()})
            }).then(() => {
                router.push("EnterVerificationCode")
            })
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
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
                        className={"font-poppins w-full max-w-[400px] mt-[15px] text-[18px] leading-[27px] font-[500] text-[#B6B6B6]"}>
                        We&#39;ll send a verification code to your email to confirm you&#39;re human.
                    </div>

                    <div onClick={() => resendCode()}
                         className={"hover:text-[grey] w-fit text-[14px] cursor-pointer mt-[20px] text-white text-white font-poppins"}>
                        Request a code ?
                    </div>

                </div>
            </div>
        </>)

}

export default Page;