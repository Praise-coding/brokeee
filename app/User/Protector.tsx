"use client"
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import Loading from "@/app/User/loading";
import {UserInfo} from "@/app/Types";
import {SignOut} from "@/app/api/auth/lib/signOut";

const Protector = ({children}: { children: React.ReactNode }) => {
    const pathName = usePathname()
    const router = useRouter();
    const [loading, setLoading] = useState(true)
    const [load, setLoad] = useState(true)

    useEffect(() => {
        try {
            setLoading(true);

            async function fetchData() {
                const request = await fetch("/api/getAuthInfo")
                const response = await request.json()
                const user: UserInfo = response?.user?.UserInfo
                if (user?.role == "admin") {
                    router.push("/Admin/Users")
                } else if (user?.isBlocked == 1) {
                    await SignOut()
                } else if (user?.emailVerified == "unverified" && !pathName.endsWith("EnterVerificationCode") && !pathName.endsWith("SendVerificationCode") && !pathName.startsWith("/User/VerifyEmail") && pathName.startsWith("/User/")) {
                    router.push("/User/VerifyEmail/SendVerificationCode")
                } else if (user?.emailVerified == "verified" && pathName.startsWith("/User/VerifyEmail")) {
                    router.push("/User/Dashboard")
                }
                setLoad(false)
            }

            fetchData()

        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }, [pathName, router]);
    return <>{(loading || load) ? <Loading/> : children}</>;
};

export default Protector;
