"use client"
import React from 'react';
import MenuIconToShow from "@/app/User/Sidebar/icons/menuIconToShow";
import {SignOut} from "@/app/api/auth/lib/signOut";

function Logout() {
    return (
        <li onClick={async () => await SignOut()}>
            <div
                className={`group transition-all cursor-pointer hover:bg-[#3A6FF8] rounded-[10px] pl-[12px] w-[197px] flex items-center h-[50px] `}>
                <div>
                    <MenuIconToShow path={"Logout"}/>
                </div>
                <div
                    className={`ml-[20px] group-hover:text-white text-[14px] sm:text-[15px] text-[#9E9E9E] font-poppins`}>
                    Logout
                </div>
            </div>
        </li>
    );
}

export default Logout;