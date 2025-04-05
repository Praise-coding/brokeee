"use client"
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import MenuIconToShow from "@/app/Admin/Sidebar/icons/menuIconToShow";

type Path = {
    path: string;
}

export const SidebarNavMenus = ({path}: Path) => {
    const currentPath = usePathname()

    function checkPath() {
        return currentPath.includes(path)
    }

    const pathBooleanChecker = checkPath()
    return (
        <li>
            <Link href={"/Admin/" + path}
                  className={`group  transition-all cursor-pointer hover:bg-[rgba(58,111,248,0.7)]   rounded-[10px] pl-[12px] w-[197px] flex items-center h-[50px] ${checkPath() && "bg-[#3A6FF8]"}`}>
                <div>
                    <MenuIconToShow path={path} isPath={pathBooleanChecker}/>
                </div>
                <div
                    className={`ml-[20px] group-hover:text-white text-[14px] sm:text-[15px] ${pathBooleanChecker ? "text-[#FFFFFF]" : "text-[#9E9E9E]"} font-poppins`}>
                    {path == "Buy-Crypto" ? "Buy Crypto" : path}
                </div>
            </Link>
        </li>
    )
}