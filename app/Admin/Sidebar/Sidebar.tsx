import React from 'react'
import SvgIcon from "@/app/components/ui/svgIcon";
import {SidebarNavMenus} from "./sidebarNavMenus";
import Logout from "@/app/User/Sidebar/logout";

interface SidebarProps {
    sidebarOpen?: boolean
}

function Sidebar({sidebarOpen}: SidebarProps) {
    const allPaths = ["Users", "Deposit", "Subscription", "Social-Media","Wallets", "Buy-Crypto"]
    return (
        <div
            className={`md:w-[256px] md:px-[] px-[20px] transition-all duration-500 ${sidebarOpen ? "left-0" : "left-[-400px]"} z-50 fixed lg:sticky top-0 bg-[#1B2028] h-screen`}>
            <div className={"pt-[32px] "}>
                <div className="flex w-full justify-center">
                    <SvgIcon/>
                </div>
                <ul className={"grid gap-[10px] justify-center mt-[27px] sm:mt-[50px]"}>
                    {allPaths.map((path: string) => (
                        <SidebarNavMenus key={path} path={path}/>
                    ))}
                    <Logout/>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
