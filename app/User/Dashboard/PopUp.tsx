"use client"
import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import {User} from "@/app/Types";

export default function PopUp({children}: { children: React.ReactNode }) {
    const {data: session} = useSession()
    const [notification, setNotification] = useState<string | undefined>("")
    const data = session as User
    useEffect(() => {
        const showNoti = data?.user?.UserNotification?.showNotifications
        if (!(showNoti == 0)) {
            setNotification(data?.user?.UserNotification?.notification)
            if (data?.user?.UserNotification?.popUpMessage?.length > 0) {
                Toaster("info", data?.user?.UserNotification?.popUpMessage)
            }
        }
    }, [data?.user?.UserNotification?.notification, data?.user?.UserNotification?.popUpMessage, data?.user?.UserNotification?.showNotifications]);

    return (
        <>
            {data?.["user"]?.["UserInfo"]?.["AccountStatus"] == "unverified" &&
                <div style={{backgroundColor: "red"}} className="w-full  text-white overflow-hidden relative py-[20px]">
                    <div

                        className="whitespace-nowrap text-center font-poppins animate-scroll text-lg font-medium"
                    >
                        Submit your ID to verify your account
                    </div>
                </div>
            }
            {notification &&
                <div className="w-full bg-blue-600 text-white overflow-hidden relative py-[20px]">
                    <div

                        className="whitespace-nowrap text-center font-poppins animate-scroll text-lg font-medium"
                    >
                        {notification}
                    </div>
                </div>
            }
            {children}
        </>
    )
}