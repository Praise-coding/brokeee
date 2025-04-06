"use client"
import React, {useEffect, useState} from 'react'
import Sidebar from "@/app/User/Sidebar/Sidebar";
import Header from "@/app/User/Header/Header";
import SvgIcon from "@/app/components/ui/svgIcon";
import {usePathname} from "next/navigation";
import {SessionProvider} from "next-auth/react";
import LoadingScreenWrapper from "@/app/User/LoadingScreenWrapper";
import PopUp from "@/app/User/Dashboard/PopUp";

function SecondLayout({children}: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname()
    useEffect(() => {
        setSidebarOpen(false)
    }, [pathname])
    return (
        <>
            <>
                <>
                    <SessionProvider>

                        <LoadingScreenWrapper>
                            <div className={"sm:flex"}>
                                <div className={""}>
                                    <Sidebar sidebarOpen={sidebarOpen}/>
                                </div>
                                <div
                                    className={"bg-[#31353F] relative h-screen overflow-scroll  flex-1"}>
                                    <PopUp>

                                        <div
                                            className={"bg-[#1B2028]  z-[50] sticky top-0  lg:hidden flex items-center justify-between py-[25px] px-[15px] w-full"}>
                                            <div>
                                                <SvgIcon/>
                                            </div>
                                            <div onClick={() => setSidebarOpen((prevState) => !prevState)}
                                                 className={"border-white border rounded-[5px] p-[8px]"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1}
                                                     stroke="white" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                                </svg>
                                            </div>

                                        </div>
                                        <div className={" sm:px-[30px]"}>
                                            <Header/>
                                        </div>
                                        <div className={" px-[15px] sm:px-[30px]"}>
                                            {children}
                                        </div>
                                    </PopUp>
                                </div>

                            </div>


                        </LoadingScreenWrapper>

                    </SessionProvider>
                </>

            </>
        </>
    )
}

export default SecondLayout
