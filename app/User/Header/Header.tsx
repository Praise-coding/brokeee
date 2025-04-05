"use client"
import React, {useEffect, useState} from 'react'
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
import {User} from "@/app/Types";
import Image from "next/image";

function Header() {
    const currentPath = usePathname().split("/")
    const {data: session}: { data: unknown, status: string } = useSession();
    const userData = session as User
    const userInfo = userData?.user?.UserInfo
    const [display, setDisplay] = useState("");
    useEffect(() => {
        if (isNaN(parseInt(currentPath[currentPath.length - 1]))) {
            setDisplay(currentPath[currentPath.length - 1])
            return;
        }

        setDisplay("Edit User")
    }, [currentPath, userInfo])
    return (

        <>
            <div
                className={"sm:py-[30px] pt-[20px] px-[15px] sm:px-0 sm:bg-transparent  flex items-center justify-between"}>
                <div
                    className={"font-poppins capitalize block font-semibold text-[18px] sm:text-[32px] leading-[48px] text-[#E4E4E4]"}>
                    {display}
                </div>
                <div className={"flex items-center"}>

                    <div className={" sm:w-[50px] w-[40px] h-[40px] sm:h-[50px] rounded-full bg-[grey]"}>
                        {userInfo?.ProfilePicture ?
                            <Image width={50} height={50}
                                   src={userInfo?.ProfilePicture}
                                   alt=""
                                   className={"rounded-full sm:w-[50px] w-[40px] h-[40px] sm:h-[50px]"}/>
                            : ""}
                    </div>

                    <div
                        className={"font-poppins flex items-center ml-[10px] sm:ml-[15px] font-medium  opacity-60 text-[14px] leading-[21px] text-white "}>
                        {userInfo ? (userInfo["FirstName"] + " " + userInfo["LastName"]) : ""}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header
