"use client"
import React from 'react';
import {usePathname} from "next/navigation";

const PathName = () => {
    const currentPath = usePathname().split("/")
    return (
        <div
            className={"font-poppins block font-semibold text-[18px] sm:text-[32px] leading-[48px] text-[#E4E4E4]"}>
            {currentPath[currentPath.length - 1]}
        </div>
    );
};

export default PathName;