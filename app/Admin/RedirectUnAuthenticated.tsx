"use server"
import {redirect} from "next/navigation";
import {auth} from "@/app/api/auth/lib/authOption";
import React from "react";

export default async function RedirectUnAuthenticated({children}: { children: React.ReactNode }) {
    const authenticated = await auth()
    if (!authenticated) redirect("/Login");
    else if (authenticated?.user?.UserInfo?.role != "admin") redirect("/User/Dashboard");

    return <>{children}</>;
}
