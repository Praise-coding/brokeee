"use client"
import React from 'react';
import {socialMedia} from "@/app/Types";
import Link from "next/link";

function DisplaySocialMedia({data}: { data: socialMedia }) {
    return (
        <>
            <Link target={"_blank"} href={data?.["mediaUrl"]}>
                <div
                    style={{color: "rgba(255,255,255,0.76)"}}
                    className={"bg-[#1B2028] cursor-pointer w-full text-white font-poppins text-[18px] sm:text-[20px] py-[20px] text-center rounded-[10px]"}>
                    {data?.["mediaName"]}
                </div>
            </Link>
        </>
    );
}

export default DisplaySocialMedia;